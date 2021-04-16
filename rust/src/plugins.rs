use crate::util::dirs;
use anyhow::{anyhow, bail, Result};
use futures::StreamExt;
use jsonschema::JSONSchema;
use rand::Rng;
use serde::{Deserialize, Serialize};
use std::{collections::HashMap, fs, path::PathBuf, process::Command, thread};
use strum::{Display, EnumString, EnumVariantNames};

#[derive(
    Debug, Display, Clone, Copy, EnumString, EnumVariantNames, PartialEq, Deserialize, Serialize,
)]
#[serde(rename_all = "lowercase")]
#[strum(serialize_all = "lowercase")]
pub enum Installation {
    #[cfg(any(feature = "plugins-docker"))]
    Docker,
    #[cfg(any(feature = "plugins-binary"))]
    Binary,
    #[cfg(any(feature = "plugins-package"))]
    Package,
}

/// Description of a plugin
///
/// As far as possible using existing properties defined in schema.org
/// [`SoftwareApplication`](https://schema.org/SoftwareApplication) but extensions
/// added where necessary.
///
/// Properties names use the Rust convention of snake_case but are renamed
/// to schema.org camelCase on serialization.
#[derive(Debug, Default, Clone, Deserialize, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct Plugin {
    /// The name of the plugin
    name: String,

    /// The version of the plugin
    software_version: String,

    /// A description of the plugin
    description: String,

    /// A list of URLS that the plugin can be installed from
    install_url: Vec<String>,

    /// A list of plugin "features"
    /// Each feature is a `JSONSchema` object describing a method
    /// (including its parameters).
    feature_list: Vec<serde_json::Value>,

    /// If the plugin is installed, the installation type
    installation: Option<Installation>,
}

impl Plugin {
    /// The name of the plugin file within the plugin directory
    const FILE_NAME: &'static str = "codemeta.json";

    /// Create a Markdown document describing a plugin
    pub fn display(&self, format: &str) -> Result<String> {
        let content = match format {
            #[cfg(any(feature = "template-handlebars"))]
            "md" => {
                let template = r#"
# {{name}} {{softwareVersion}}

{{description}}

## Installation options

{{#each installUrl}}
- {{this}}{{/each}}


## Methods

{{#each featureList}}
### {{title}}

{{description}}

{{#each properties}}
- **{{@key}}**: *{{type}}* : {{description}}{{/each}}
{{/each}}

"#;
                use handlebars::Handlebars;
                let hb = Handlebars::new();
                hb.render_template(template, self)?
            }
            _ => serde_json::to_string_pretty(self)?,
        };
        Ok(content)
    }

    /// Split a plugin spec into `owner`, `name`, and `version`
    pub fn spec_to_parts(spec: &str) -> (&str, &str, &str) {
        let (owner, name) = if spec.contains('/') {
            let parts: Vec<&str> = spec.split('/').collect();
            (parts[0].trim(), parts[1].trim())
        } else {
            ("stencila", spec)
        };

        let (name, version) = if name.contains('@') {
            let parts: Vec<&str> = name.split('@').collect();
            (parts[0].trim(), parts[1].trim())
        } else {
            (name, "latest")
        };

        (owner, name, version)
    }

    /// Resolve a plugin alias to a plugin name
    ///
    /// If the provided string is a registered alias then returns the corresponding
    /// plugin name, otherwise assumes the string is a plugin name
    pub fn alias_to_name(alias: &str, aliases: &HashMap<String, String>) -> String {
        match aliases.get(alias) {
            Some(name) => name,
            None => alias,
        }
        .into()
    }

    /// Resolve a plugin name to a preferred alias
    pub fn name_to_alias(name: &str, aliases: &HashMap<String, String>) -> String {
        for (alias, value) in aliases.iter() {
            if name == value {
                return alias.into();
            }
        }
        return name.into();
    }

    /// Get the path of the plugin's directory
    pub fn dir(name: &str) -> Result<PathBuf> {
        Ok(dirs::plugins(false)?.join(name))
    }

    /// Get the path of the plugin's manifest file
    pub fn file(name: &str) -> Result<PathBuf> {
        Ok(Plugin::dir(name)?.join(Plugin::FILE_NAME))
    }

    /// Test whether a plugin is installed
    ///
    /// Note that if a plugin was not successfully installed
    /// it may have a directory but no plugin file and `is_installed`
    /// will return `false`.
    pub fn is_installed(name: &str) -> Result<bool> {
        Ok(Plugin::file(name)?.exists())
    }

    /// Load a plugin from its JSON
    pub fn load(json: &str) -> Result<Plugin> {
        let plugin: Plugin = serde_json::from_str(json)?;
        Ok(plugin)
    }

    /// Read the plugin from its directory
    pub fn read(name: &str) -> Result<Plugin> {
        let json = match fs::read_to_string(Plugin::file(name)?) {
            Ok(json) => json,
            Err(_) => bail!("Plugin '{}' is not installed", name),
        };

        Plugin::load(&json)
    }

    /// Write the plugin to its directory
    pub fn write(name: &str, plugin: &Plugin) -> Result<()> {
        let json = serde_json::to_string_pretty(plugin)?;

        let dir = Plugin::dir(name)?;
        fs::create_dir_all(dir)?;

        let file = Plugin::file(name)?;
        fs::write(file, json)?;

        Ok(())
    }

    /// Remove the plugin's directory
    pub fn remove(name: &str) -> Result<()> {
        let dir = Plugin::dir(name)?;
        if dir.exists() || fs::symlink_metadata(&dir).is_ok() {
            if dir.is_file() {
                fs::remove_file(dir)?
            } else {
                // Note that if `dir` is a symlink to a directory that
                // only the directory will be removed.
                fs::remove_dir_all(dir)?
            }
        }

        Ok(())
    }

    /// Install the plugin
    pub async fn install(
        spec: &str,
        installs: &[Installation],
        aliases: &HashMap<String, String>,
        plugins: &mut Plugins,
        current_version: Option<String>,
    ) -> Result<()> {
        for install in installs {
            let result = match install {
                Installation::Package => Plugin::install_package(spec, aliases),
                Installation::Binary => {
                    Plugin::install_binary(spec, aliases, current_version.clone())
                }
                Installation::Docker => Plugin::install_docker(spec, aliases).await,
            };
            match result {
                // Success, so add plugin to the store
                Ok(plugin) => {
                    plugins.add(plugin)?;
                    return Ok(());
                }
                // Error, keep trying other install methods, or if there is
                // only one method, return that error.
                Err(error) => {
                    if installs.len() == 1 {
                        return Err(error);
                    }
                }
            }
        }

        bail!(
            "Unable to install plugin '{}', tried install methods {:?}",
            spec,
            installs
        )
    }

    /// Install a list of plugins
    pub async fn install_list(
        specs: Vec<String>,
        installs: &[Installation],
        aliases: &HashMap<String, String>,
        plugins: &mut Plugins,
    ) -> Result<()> {
        for spec in specs {
            match Plugin::install(&spec, installs, aliases, plugins, None).await {
                Ok(_) => tracing::info!("Added plugin {}", spec),
                Err(error) => bail!(error),
            }
        }
        Ok(())
    }

    /// Add a plugin as a programing language package
    #[cfg(any(feature = "plugins-package"))]
    pub fn install_package(spec: &str, _aliases: &HashMap<String, String>) -> Result<Plugin> {
        // TODO
        bail!(
            "Unable to add plugin '{}' as programming language package",
            spec
        )
    }

    /// Add a plugin as a downloaded binary
    #[cfg(any(feature = "plugins-binary"))]
    pub fn install_binary(
        spec: &str,
        aliases: &HashMap<String, String>,
        current_version: Option<String>,
    ) -> Result<Plugin> {
        let (owner, name, version) = Plugin::spec_to_parts(spec);
        let name = Plugin::alias_to_name(name, &aliases);

        // Remove the plugin directory if this is not an upgrade
        // (we don't want it remove if the user aborts download)
        if current_version.is_none() {
            Plugin::remove(&name)?
        }

        // (Re)create the directory where the binary will be downloaded to
        let install_dir = dirs::plugins(false)?.join(&name);
        fs::create_dir_all(&install_dir)?;
        let install_path = install_dir.join(&name);

        let mut builder = self_update::backends::github::Update::configure();
        builder
            .repo_owner(owner)
            .repo_name(&name)
            .bin_name(&name)
            .current_version(&current_version.unwrap_or_else(|| "0.0.0".into()))
            .bin_install_path(&install_path)
            .show_output(true)
            .show_download_progress(true);
        if version != "latest" {
            builder.target_version_tag(format!("v{}", version).as_str());
        }

        // The download has to be done in another thread because it spawns
        // a new tokio runtime
        thread::spawn(move || -> Result<()> {
            if let Err(error) = builder.build()?.update() {
                match error {
                    self_update::errors::Error::Network(message) => {
                        if message.contains("404") {
                            bail!(
                                "Could not find repository or corresponding release in repository"
                            )
                        } else {
                            bail!(message)
                        }
                    }
                    _ => bail!(error.to_string()),
                }
            } else {
                Ok(())
            }
        })
        .join()
        .map_err(|_| anyhow!("Error joining thread"))??;

        // Get plugin json manifest
        let json = Command::new(&install_path).arg("manifest").output()?.stdout;
        let json = std::str::from_utf8(&json)?;

        let mut plugin = Plugin::load(json)?;
        plugin.installation = Some(Installation::Binary);
        Plugin::write(&name, &plugin)?;

        Ok(plugin)
    }

    /// Add a plugin as a pulled Docker image
    ///
    /// For this to succeed must be able to connect to the local
    /// Docker server and be able to pull an image with corresponding
    /// name.
    #[cfg(any(feature = "plugins-docker"))]
    pub async fn install_docker(spec: &str, aliases: &HashMap<String, String>) -> Result<Plugin> {
        let docker = bollard::Docker::connect_with_local_defaults()?;

        let (owner, name, version) = Plugin::spec_to_parts(spec);
        let name = Plugin::alias_to_name(name, &aliases);
        let image = format!("{}/{}:{}", owner, name, version);

        // Pull the image (by creating an image from it)
        let mut stream = docker.create_image(
            Some(bollard::image::CreateImageOptions {
                from_image: image.clone(),
                ..Default::default()
            }),
            None,
            None,
        );
        while let Some(item) = stream.next().await {
            match item {
                Ok(info) => {
                    if let Some(error) = info.error {
                        bail!("{}", error)
                    } else if let Some(status) = info.status {
                        // TODO display of status and progress could be improved and displayed
                        // per id (layer) as in docker CLI
                        // println!("{:?} {:?} {:?}", info.id, info.progress, info.progress_detail);
                        if let Some(progress) = info.progress {
                            tracing::info!("{} {}", status, progress)
                        } else {
                            tracing::info!("{}", status)
                        }
                    }
                }
                Err(error) => match error {
                    bollard::errors::Error::DockerResponseNotFoundError { .. } => {
                        bail!("Unable to find Docker image '{}'", image)
                    }
                    _ => bail!("{}", error),
                },
            }
        }

        // Create a container to obtain manifest from
        let container_name: String = rand::thread_rng()
            .sample_iter(&rand::distributions::Alphanumeric)
            .take(24)
            .map(char::from)
            .collect();
        let response = docker
            .create_container(
                Some(bollard::container::CreateContainerOptions {
                    name: &container_name,
                }),
                bollard::container::Config {
                    image: Some(image.clone()),
                    cmd: Some(vec!["manifest".to_string()]),
                    ..Default::default()
                },
            )
            .await?;
        if !response.warnings.is_empty() {
            for warning in response.warnings {
                tracing::warn!("When creating container: {}", warning);
            }
        }

        // Start the container
        docker
            .start_container(
                &container_name,
                None::<bollard::container::StartContainerOptions<String>>,
            )
            .await?;

        // Capture the container output into `manifest`
        let mut stream = docker.logs::<String>(
            &container_name,
            Some(bollard::container::LogsOptions {
                follow: true,
                stderr: true,
                stdout: true,
                ..Default::default()
            }),
        );
        let mut stdout = vec![];
        let mut stderr = vec![];
        while let Some(output) = stream.next().await {
            if let Ok(output) = output {
                match output {
                    bollard::container::LogOutput::StdOut { message } => {
                        stdout.extend_from_slice(&message)
                    }
                    bollard::container::LogOutput::StdErr { message } => {
                        stderr.extend_from_slice(&message)
                    }
                    _ => {}
                }
            }
        }

        if !stderr.is_empty() {
            tracing::warn!("{}", std::str::from_utf8(&stderr)?);
        }

        let json = if !stdout.is_empty() {
            match std::str::from_utf8(&stdout) {
                Ok(stdout) => stdout,
                Err(error) => bail!("Error converting stream to UTF8: {}", error),
            }
        } else {
            bail!(
                "No output from Docker container manifest command; is {} a Stencila plugin?",
                image
            )
        };

        // Remove the plugin directory
        Plugin::remove(&name)?;

        // Load and write the plugin file
        let mut plugin = Plugin::load(json)?;
        plugin.installation = Some(Installation::Docker);
        Plugin::write(&name, &plugin)?;

        Ok(plugin)
    }

    /// Add a plugin as a soft link to a directory on the current machine
    ///
    /// # Arguments
    ///
    /// - `path`: Local file system path to the directory
    #[cfg(any(feature = "plugins-link"))]
    pub fn install_link(path: &str, plugins: &mut Plugins) -> Result<()> {
        // Make the path absolute (for symlink to work)
        let path = fs::canonicalize(&path)?;

        // Check that the path is a directory
        if !path.is_dir() {
            bail!("Path must be a directory")
        }

        // Check that the directory has a plugin file
        let plugin_file = path.join(Plugin::FILE_NAME);
        if !plugin_file.is_file() {
            bail!("Directory must contain a '{}' file", Plugin::FILE_NAME)
        }

        // Check that the plugin's file can be loaded
        let json = fs::read_to_string(plugin_file)?;
        let plugin = Plugin::load(&json)?;
        let name = plugin.name.as_str();

        // Remove the plugin directory
        Plugin::remove(name)?;

        // Create the soft link
        let link = Plugin::dir(name)?;
        #[cfg(any(target_os = "linux", target_os = "macos"))]
        std::os::unix::fs::symlink(path, link)?;
        #[cfg(target_os = "windows")]
        std::os::windows::fs::symlink_dir(path, link)?;

        // Add to store
        plugins.add(plugin)?;

        Ok(())
    }

    /// Upgrade a plugin
    pub async fn upgrade(
        spec: &str,
        installs: &[Installation],
        aliases: &HashMap<String, String>,
        plugins: &mut Plugins,
    ) -> Result<()> {
        let (_owner, name, _version) = Plugin::spec_to_parts(spec);
        let name = Plugin::alias_to_name(name, &aliases);

        let plugin = match plugins.plugins.get(&name) {
            None => {
                tracing::info!("Plugin {} is not installed yet", spec);
                return Plugin::install(spec, installs, aliases, plugins, None).await;
            }
            Some(plugin) => plugin.clone(),
        };

        let installs = match plugin.installation {
            Some(install) => vec![install],
            None => Vec::from(installs),
        };
        Plugin::install(
            spec,
            &installs,
            aliases,
            plugins,
            Some(plugin.software_version),
        )
        .await
    }

    /// Upgrade a list of plugins
    pub async fn upgrade_list(
        list: Vec<String>,
        installs: &[Installation],
        aliases: &HashMap<String, String>,
        plugins: &mut Plugins,
    ) -> Result<()> {
        let list = if list.is_empty() {
            plugins
                .plugins
                .iter()
                .map(|(key, ..)| key.clone())
                .collect()
        } else {
            list
        };
        for spec in list {
            match Plugin::upgrade(&spec, installs, aliases, plugins).await {
                Ok(_) => tracing::info!("Upgraded plugin {}", spec),
                Err(error) => bail!(error),
            }
        }
        Ok(())
    }

    /// Upgrade all installed plugins
    ///
    /// This is equivalent to calling `upgrade_list` with an empty list but
    /// requires fewer arguments. Intended for auto upgrades primarily.
    pub async fn upgrade_all(plugins: &mut Plugins) -> Result<()> {
        Plugin::upgrade_list(Vec::new(), &Vec::new(), &HashMap::new(), plugins).await
    }

    /// Remove a plugin
    pub fn uninstall(
        alias: &str,
        aliases: &HashMap<String, String>,
        plugins: &mut Plugins,
    ) -> Result<()> {
        let name = Plugin::alias_to_name(&alias, &aliases);
        Plugin::remove(&name)?;
        plugins.remove(&name)?;
        Ok(())
    }

    /// Remove a list of plugins
    pub fn uninstall_list(
        list: Vec<String>,
        aliases: &HashMap<String, String>,
        plugins: &mut Plugins,
    ) -> Result<()> {
        for alias in list {
            match Plugin::uninstall(&alias, aliases, plugins) {
                Ok(_) => tracing::info!("Removed plugin {}", alias),
                Err(error) => bail!(error),
            }
        }
        Ok(())
    }
}

/// An in-memory store for an implementation of a method
#[derive(Debug)]
struct MethodImplem {
    /// The name of the plugin which provides the implementation
    plugin: String,

    /// The plugin's JSON Schema which describes the method
    schema: Box<serde_json::Value>,

    /// The plugin's JSON Schema compiled
    #[allow(dead_code)]
    compiled_schema: JSONSchema<'static>,
}

/// An in-memory store of the installed plugins and methods that they implement
#[derive(Debug)]
pub struct Plugins {
    /// The plugins that are installed
    plugins: HashMap<String, Plugin>,

    /// The methods that are implemented by the plugins
    methods: HashMap<String, Vec<MethodImplem>>,
}

/// In some cases it is necessary to clone the plugins store, e.g. when doing
/// a background update in a separate thread. In these cases just clone the plugins
/// info, not the derived methods.
impl Clone for Plugins {
    fn clone(&self) -> Self {
        Plugins {
            plugins: self.plugins.clone(),
            methods: HashMap::new(),
        }
    }
}

impl Plugins {
    /// Create an empty plugins store (mainly for testing)
    pub fn empty() -> Self {
        Plugins {
            plugins: HashMap::new(),
            methods: HashMap::new(),
        }
    }

    /// Load all the installed plugins
    pub fn load() -> Result<Self> {
        let mut plugins = Plugins::empty();

        let dir = dirs::plugins(true)?;
        for entry in fs::read_dir(dir)? {
            let entry = entry?;
            let path = entry.path();
            if path.is_dir() {
                let name = path.display().to_string();
                // Check this directory actually has a plugin file
                if Plugin::is_installed(&name)? {
                    let plugin = Plugin::read(&name)?;
                    plugins.add(plugin)?
                }
            }
        }

        Ok(plugins)
    }

    /// Load a plugin from JSON into memory
    ///
    /// Deserialize a plugin from JSON and compile the
    /// JSON Schema in each item in its `featureList`.
    /// Should be called when a plugin is installed.
    pub fn add(&mut self, plugin: Plugin) -> Result<()> {
        let name = plugin.name.as_str();

        for feature in &plugin.feature_list {
            let title = match feature.get("title") {
                None => bail!("JSON Schema is missing 'title' property"),
                Some(serde_json::Value::String(value)) => value.clone(),
                Some(value) => value.to_string(),
            };

            // The `JSONSchema::compile` function used below wants a reference to a `serde_json::Value`
            // with a lifetime. This is the only way I could figure out how to do that.
            // The `schema_box_droppable` is stored and dropped as part of `unload_plugin` to avoid
            // memory leaks.
            // See https://doc.rust-lang.org/std/boxed/struct.Box.html#method.leak about `Box::leak` and
            // `Box::from_raw`.
            let schema_box = Box::new(feature.clone());
            let schema_static_ref: &'static serde_json::Value = Box::leak(schema_box.clone());
            #[allow(unsafe_code)]
            let schema_box_droppable = unsafe { Box::from_raw(Box::into_raw(schema_box)) };

            // Compile the JSON Schema for this feature
            match JSONSchema::compile(schema_static_ref) {
                Ok(compiled_schema) => {
                    self.methods
                        .entry(title)
                        .or_insert_with(Vec::new)
                        .push(MethodImplem {
                            plugin: name.into(),
                            schema: schema_box_droppable,
                            compiled_schema,
                        });
                }
                Err(error) => {
                    tracing::warn!(
                        "Error compiling schema for method '{}' of plugin '{}'; will ignore, please let the plugin maintainer know: {}",
                        title, name, error
                    )
                }
            };
        }

        self.plugins.insert(name.into(), plugin);

        Ok(())
    }

    /// Unload a plugin from memory
    ///
    /// De-registers the plugin so it will no longer be delegated to.
    /// Should be called when a plugin is uninstalled.
    pub fn remove(&mut self, name: &str) -> Result<()> {
        self.plugins.remove(name);

        for method in self.methods.values_mut() {
            method.retain(|implem| implem.plugin != name)
        }

        Ok(())
    }

    /// Display an individual plugin
    pub fn display_plugin(&self, alias: &str, format: &str, aliases: &HashMap<String, String>) -> Result<String> {
        let name = Plugin::alias_to_name(alias, aliases);
        match self.plugins.get(&name) {
            None => bail!("Plugin with name or alias '{}' is not loaded", alias),
            Some(plugin) => plugin.display(format),
        }
    }

    /// Create a Markdown table of all the install plugins
    pub fn display_plugins(&self, aliases: &HashMap<String, String>) -> Result<String> {
        if self.plugins.is_empty() {
            return Ok("No plugins installed. See `stencila plugins install --help`.".to_string());
        }

        let head = r#"
| ----- | ------ | ------- | ------------  | ----------- |
| Name  | Plugin | Version | Installation  | Description |
| :---- | :----- | ------: | :-----------  | :---------- |
    "#
        .trim();
        let body = self
            .plugins
            .iter()
            .map(|(_name, plugin)| {
                let Plugin {
                    name,
                    software_version,
                    installation,
                    description,
                    ..
                } = plugin.clone();
                let installation = match installation {
                    None => "None".to_string(),
                    Some(value) => value.to_string(),
                };
                format!(
                    "| **{}** | {} | {} | {} | {} |",
                    Plugin::name_to_alias(&name, aliases),
                    name,
                    software_version,
                    installation,
                    description
                )
            })
            .collect::<Vec<String>>()
            .join("\n");
        let foot = "|-";
        Ok(format!("{}\n{}\n{}\n", head, body, foot))
    }

    /// Create a Markdown document describing a method and the plugins that implement it
    pub fn display_method(&self, name: &str, format: &str) -> Result<String> {
        let plugins = match self.methods.get(name) {
            None => bail!("No implementations for method `{}`", name),
            Some(implems) => implems
                .iter()
                .map(|method_implem| {
                    serde_json::json!({
                        "name": name,
                        "schema": method_implem.schema
                    })
                })
                .collect::<serde_json::Value>(),
        };

        let method = &serde_json::json!({ "name": name, "plugins": plugins });

        let content = match format {
            #[cfg(any(feature = "template-handlebars"))]
            "md" => {
                let template = r#"
# {{name}}

{{#each plugins}}
## {{name}}

{{#with schema }}
{{description}}

{{#each properties}}
- **{{@key}}**: *{{type}}* : {{description}}{{/each}}
{{/with}}
{{/each}}
    "#
                .trim();
                use handlebars::Handlebars;
                let hb = Handlebars::new();
                hb.render_template(template, &method)?
            }
            _ => serde_json::to_string_pretty(&method)?,
        };
        Ok(content)
    }

    /// Create a Markdown table of all the registered methods
    pub fn display_methods(&self) -> Result<String> {
        if self.methods.is_empty() {
            return Ok("No methods registered. See `stencila plugins install --help`.".to_string());
        }

        let head = r#"
| -------- | -------- |
| Method   | Plugins  |
| :------- | :------- |
    "#
        .trim();
        let body = self
            .methods
            .iter()
            .map(|method| {
                let (name, implems) = method;
                let plugins = implems
                    .iter()
                    .map(|plugin| plugin.plugin.clone())
                    .collect::<Vec<String>>()
                    .join(", ");
                format!("| {} | {} |", name, plugins)
            })
            .collect::<Vec<String>>()
            .join("\n");
        let foot = "|-";
        Ok(format!("{}\n{}\n{}\n", head, body, foot))
    }

    /// Delegate a method call to a particular plugin
    ///
    /// Note that this function does not do any validation of parameters against
    /// the plugin schema before sending a JSON-RPC request.
    pub async fn delegate_to(
        &self,
        _plugin: &str,
        _method: &str,
        params: &serde_json::Value,
    ) -> Result<serde_json::Value> {
        // TODO Check if the plugin has an existing client and create one if necessary
        Ok(params.clone())
    }

    /// Delegate a method call to any of the plugins
    pub async fn delegate(
        &self,
        _method: &str,
        params: &serde_json::Value,
    ) -> Result<serde_json::Value> {
        // TODO find a plugin with matching schema
        Ok(params.clone())
    }
}
#[cfg(feature = "config")]
pub mod config {
    use super::*;
    use defaults::Defaults;
    use validator::Validate;

    #[derive(Debug, Defaults, PartialEq, Clone, Deserialize, Serialize, Validate)]
    #[serde(default)]
    pub struct Config {
        #[def = "vec![Installation::Docker, Installation::Binary, Installation::Package]"]
        pub installations: Vec<Installation>,

        #[def = "default_aliases()"]
        pub aliases: HashMap<String, String>,
    }

    /// Get the default value for `aliases`
    pub fn default_aliases() -> HashMap<String, String> {
        let mut aliases = HashMap::new();
        aliases.insert("javascript".to_string(), "jesta".to_string());
        aliases.insert("js".to_string(), "jesta".to_string());
        aliases
    }
}

#[cfg(feature = "cli")]
pub mod cli {
    use super::*;
    use structopt::StructOpt;

    #[derive(Debug, StructOpt)]
    #[structopt(
        about = "Manage plugins",
        setting = structopt::clap::AppSettings::ColoredHelp,
        setting = structopt::clap::AppSettings::VersionlessSubcommands
    )]
    pub struct Args {
        #[structopt(subcommand)]
        pub action: Action,
    }

    #[derive(Debug, StructOpt)]
    #[structopt(
        setting = structopt::clap::AppSettings::DeriveDisplayOrder
    )]
    pub enum Action {
        #[structopt(
            about = "List installed plugins",
            setting = structopt::clap::AppSettings::ColoredHelp
        )]
        List,
        Show(Show),
        Install(Install),
        Link(Link),
        Upgrade(Upgrade),
        Uninstall(Uninstall),
        Unlink(Unlink),
    }

    #[derive(Debug, StructOpt)]
    #[structopt(
        about = "Show the details of an installed plugin",
        setting = structopt::clap::AppSettings::DeriveDisplayOrder,
        setting = structopt::clap::AppSettings::ColoredHelp
    )]
    pub struct Show {
        /// The name of the plugin to show
        #[structopt()]
        pub plugin: String,

        /// The format to show the plugin in
        #[structopt(short, long, default_value = "md")]
        pub format: String,
    }

    #[derive(Debug, StructOpt)]
    #[structopt(
        about = "Install one or more plugins",
        setting = structopt::clap::AppSettings::DeriveDisplayOrder,
        setting = structopt::clap::AppSettings::ColoredHelp
    )]
    pub struct Install {
        /// Attempt to add plugins as Docker image
        #[structopt(short, long)]
        pub docker: bool,

        /// Attempt to add plugins as binary
        #[structopt(short, long)]
        pub binary: bool,

        /// Attempt to add plugins as language package
        #[structopt(short, long)]
        pub package: bool,

        /// The names or aliases of plugins to add
        #[structopt(required = true, multiple = true)]
        pub plugins: Vec<String>,
    }

    #[derive(Debug, StructOpt)]
    #[structopt(
        about = "Link to a local plugins",
        setting = structopt::clap::AppSettings::DeriveDisplayOrder,
        setting = structopt::clap::AppSettings::ColoredHelp
    )]
    pub struct Link {
        /// The path of a plugin directory
        #[structopt()]
        pub path: String,
    }

    #[derive(Debug, StructOpt)]
    #[structopt(
        about = "Upgrade one of more plugins",
        setting = structopt::clap::AppSettings::DeriveDisplayOrder,
        setting = structopt::clap::AppSettings::ColoredHelp
    )]
    pub struct Upgrade {
        /// The names or aliases of plugins to upgrade
        /// (omit to upgrade all plugins)
        #[structopt(multiple = true)]
        pub plugins: Vec<String>,
    }

    #[derive(Debug, StructOpt)]
    #[structopt(
        about = "Uninstall one or more plugins",
        setting = structopt::clap::AppSettings::DeriveDisplayOrder,
        setting = structopt::clap::AppSettings::ColoredHelp
    )]
    pub struct Uninstall {
        /// The names or aliases of plugins to uninstall
        #[structopt(required = true, multiple = true)]
        pub plugins: Vec<String>,
    }

    #[derive(Debug, StructOpt)]
    #[structopt(
        about = "Unlink a local plugins",
        setting = structopt::clap::AppSettings::DeriveDisplayOrder,
        setting = structopt::clap::AppSettings::ColoredHelp
    )]
    pub struct Unlink {
        /// The name of the plugin to unlink
        #[structopt()]
        pub plugin: String,
    }

    #[derive(Debug, StructOpt)]
    #[structopt(
        about = "List methods and the plugins that implement them",
        setting = structopt::clap::AppSettings::DeriveDisplayOrder,
        setting = structopt::clap::AppSettings::ColoredHelp
    )]
    pub struct Methods {
        /// The name of the method to display
        #[structopt()]
        pub method: Option<String>,

        /// The format to show the method using
        #[structopt(short, long, default_value = "md")]
        pub format: String,
    }

    impl Methods {
        pub async fn run(&self, plugins: &mut Plugins) -> Result<()> {
            let Methods { method, format } = self;

            let content = match method {
                None => plugins.display_methods()?,
                Some(method) => plugins.display_method(&method, &format)?,
            };
            if format == "json" {
                println!("{}", content)
            } else {
                let skin = termimad::MadSkin::default();
                println!("{}", skin.term_text(content.as_str()))
            }
            Ok(())
        }
    }

    #[derive(Debug, StructOpt)]
    #[structopt(
        about = "Delegate a method call to any, or a particular, plugin",
        setting = structopt::clap::AppSettings::DeriveDisplayOrder,
        setting = structopt::clap::AppSettings::ColoredHelp
    )]
    pub struct Delegate {
        /// The method to call
        #[structopt()]
        pub method: String,

        /// The plugin to delegate to
        #[structopt()]
        pub plugin: Option<String>,

        /// Method parameters (after `--`) as strings (e.g. `format=json`) or JSON (e.g. `node:='{"type":...}'`)
        #[structopt(raw(true))]
        params: Vec<String>,
    }

    impl Delegate {
        pub async fn run(&self, plugins: &mut Plugins) -> Result<()> {
            let Delegate {
                method,
                plugin,
                params,
            } = self;
            let params = crate::util::params::parse(params);
            let result = match plugin {
                Some(plugin) => plugins.delegate_to(&plugin, &method, &params).await?,
                None => plugins.delegate(&method, &params).await?,
            };
            println!("{}", serde_json::to_string_pretty(&result)?);

            Ok(())
        }
    }

    pub async fn run(args: Args, config: &config::Config, plugins: &mut Plugins) -> Result<()> {
        let Args { action } = args;
        let config::Config {
            aliases,
            installations,
        } = config;

        let skin = termimad::MadSkin::default();
        match action {
            Action::List => {
                let md = plugins.display_plugins(aliases)?;
                println!("{}", skin.term_text(md.as_str()));
                Ok(())
            }
            Action::Show(action) => {
                let Show { plugin, format } = action;

                let content = plugins.display_plugin(&plugin, &format, aliases)?;
                if format == "json" {
                    println!("{}", content)
                } else {
                    println!("{}", skin.term_text(content.as_str()))
                }
                Ok(())
            }
            Action::Install(action) => {
                let Install {
                    docker,
                    binary,
                    package,
                    plugins: list,
                } = action;

                let mut installs = vec![];
                if docker {
                    installs.push(Installation::Docker)
                }
                if binary {
                    installs.push(Installation::Binary)
                }
                if package {
                    installs.push(Installation::Package)
                }

                let installs = if installs.is_empty() {
                    &installations
                } else {
                    &installs
                };

                Plugin::install_list(list, installs, aliases, plugins).await
            }
            Action::Link(action) => {
                let Link { path } = action;

                Plugin::install_link(&path, plugins)
            }
            Action::Upgrade(action) => {
                let Upgrade { plugins: list } = action;

                Plugin::upgrade_list(list, &installations, aliases, plugins).await
            }
            Action::Uninstall(action) => {
                let Uninstall { plugins: list } = action;

                Plugin::uninstall_list(list, aliases, plugins)
            }
            Action::Unlink(action) => {
                let Unlink { plugin } = action;

                Plugin::uninstall(&plugin, aliases, plugins)
            }
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[tokio::test]
    async fn test_cli() -> Result<()> {
        // These tests don't do anything other test that
        // actions run with expected `Ok` or `Err`.

        use super::cli::*;

        let config = config::Config {
            ..Default::default()
        };
        let mut plugins = Plugins::empty();

        run(
            Args {
                action: Action::List,
            },
            &config,
            &mut plugins,
        )
        .await?;

        run(
            Args {
                action: Action::Show(Show {
                    plugin: "foo".to_string(),
                    format: "md".to_string(),
                }),
            },
            &config,
            &mut plugins,
        )
        .await
        .expect_err("Expected an error!");

        run(
            Args {
                action: Action::Install(Install {
                    plugins: vec![],
                    docker: false,
                    binary: false,
                    package: false,
                }),
            },
            &config,
            &mut plugins,
        )
        .await?;

        run(
            Args {
                action: Action::Link(Link {
                    path: "../foo".to_string(),
                }),
            },
            &config,
            &mut plugins,
        )
        .await
        .expect_err("Expected an error!");

        run(
            Args {
                action: Action::Upgrade(Upgrade { plugins: vec![] }),
            },
            &config,
            &mut plugins,
        )
        .await?;

        run(
            Args {
                action: Action::Uninstall(Uninstall { plugins: vec![] }),
            },
            &config,
            &mut plugins,
        )
        .await?;

        Ok(())
    }
}