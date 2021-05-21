/* Generated from 'projectsSchema' by '../schemas.ts'. */

/**
 * An implementation, and extension, of schema.org [`Project`](https://schema.org/Project). Uses schema.org properties where possible but adds extension properties where needed (e.g. `theme`).
 */
export interface Project {
  /**
   * A description of the project
   */
  description?: string
  /**
   * The files in the project folder
   */
  files?: {
    [k: string]: File
  }
  /**
   * The path (within the project) of the project's image
   *
   * If not specified, will default to the most recently modified image in the project (if any).
   */
  image?: string
  /**
   * The resolved path of the project's image file
   */
  imagePath?: string
  /**
   * The path (within the project) of the project's main file
   *
   * If not specified, will default to the first file matching the the regular expression in the configuration settings.
   */
  main?: string
  /**
   * The resolved path of the project's main file
   */
  mainPath?: string
  /**
   * The name of the project
   */
  name?: string
  /**
   * The filesystem path of the project folder
   */
  path?: string
  /**
   * The default theme to use when viewing documents in this project
   *
   * If not specified, will default to the default theme in the configuration settings.
   */
  theme?: string
  /**
   * Glob patterns for paths to be excluded from file watching
   *
   * As a performance optimization, paths that match these patterns are excluded from file watching updates. If not specified, will default to the patterns in the configuration settings.
   */
  watchExcludePatterns?: string[]
}
/**
 * A file or directory within a `Project`
 */
export interface File {
  /**
   * If a directory, a list of the canonical paths of the files within it. Otherwise, `None`.
   *
   * A `BTreeSet` rather than a `Vec` so that paths are ordered without having to be resorted after insertions. Another option is `BinaryHeap` but `BinaryHeap::retain` is  only on nightly and so is awkward to use.
   */
  children?: string[]
  /**
   * Format of the file
   *
   * Usually this is the lower cased filename extension (if any) but may also be normalized. May be more convenient, and usually more available, than the `media_type` property.
   */
  format?: string
  /**
   * The media type (aka MIME type) of the file
   */
  mediaType?: string
  /**
   * Time that the file was last modified (Unix Epoch timestamp)
   */
  modified?: number
  /**
   * The name of the file or directory
   */
  name: string
  /**
   * The parent `File`, if any
   */
  parent?: string
  /**
   * The absolute path of the file or directory
   */
  path: string
  /**
   * The SHA1 hash of the contents of the file
   */
  sha1?: string
  /**
   * Size of the file in bytes
   */
  size?: number
}

/* Generated from 'pluginsSchema' by '../schemas.ts'. */

/**
 * As far as possible using existing properties defined in schema.org [`SoftwareApplication`](https://schema.org/SoftwareApplication) but extensions added where necessary.
 */
export interface Plugin {
  /**
   * The current alias for this plugin, if any
   */
  alias?: string
  /**
   * A description of the plugin
   */
  description: string
  /**
   * A list of plugin "features" Each feature is a `JSONSchema` object describing a method (including its parameters).
   */
  featureList: true[]
  /**
   * URL of the image to be used when displaying the plugin
   */
  image?: string
  /**
   * A list of URLS that the plugin can be installed from
   */
  installUrl: string[]
  /**
   * If the plugin is installed, the installation type
   */
  installation?: 'docker' | 'binary' | 'javascript' | 'python' | 'r' | 'link'
  /**
   * The name of the plugin
   */
  name: string
  /**
   * The next version of the plugin, if any.
   *
   * If the plugin is installed and there is a newer version of the plugin then this property should be set at the time of refresh.
   */
  next: Plugin
  /**
   * The last time that the plugin manifest was updated. Used to determine if a refresh is necessary.
   */
  refreshed?: string
  /**
   * The version of the plugin
   */
  softwareVersion: string
}

/* Generated from 'configSchema' by '../schemas.ts'. */

export interface Config {
  /**
   * Configuration settings for logging
   */
  logging?: {
    /**
     * Configuration settings for log entries shown to the user in the desktop
     */
    desktop?: {
      /**
       * The maximum log level to emit
       */
      level?: 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'never'
    }
    /**
     * Configuration settings for logs entries written to file
     */
    file?: {
      /**
       * The maximum log level to emit
       */
      level?: 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'never'
      /**
       * The path of the log file
       */
      path?: string
    }
    /**
     * Configuration settings for log entries printed to stderr when using the CLI
     */
    stderr?: {
      /**
       * The format for the logs entries
       */
      format?: 'simple' | 'detail' | 'json'
      /**
       * The maximum log level to emit
       */
      level?: 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'never'
    }
  }
  /**
   * Configuration settings for plugin installation and management
   */
  plugins?: {
    /**
     * The local plugin aliases that extends and/or override those in the global aliases at https://github.com/stencila/stencila/blob/master/plugins.json
     */
    aliases?: {
      [k: string]: string
    }
    /**
     * The order of preference of plugin installation method.
     */
    installations?: (
      | 'docker'
      | 'binary'
      | 'javascript'
      | 'python'
      | 'r'
      | 'link'
    )[]
  }
  /**
   * Configuration settings for project defaults
   */
  projects?: {
    /**
     * Patterns used to infer the main file of projects
     *
     * For projects that do not specify a main file, each file is tested against these case insensitive patterns in order. The first file (alphabetically) that matches is the project's main file.
     */
    mainPatterns?: string[]
    /**
     * Default project theme
     *
     * Will be applied to all projects that do not specify a theme
     */
    theme?: string
    /**
     * Default glob patterns for paths to be excluded from file watching
     *
     * Used for projects that do not specify their own watch exclude patterns. As a performance optimization, paths that match these patterns are excluded from file watching updates. The default list includes common directories that often have many files that are often updated.
     */
    watchExcludePatterns?: string[]
  }
  /**
   * Configuration settings for running as a server
   */
  serve?: {
    /**
     * Do not require a JSON Web Token
     */
    insecure?: boolean
    /**
     * Secret key to use for signing and verifying JSON Web Tokens
     */
    key?: string
    /**
     * The URL to serve on (defaults to `ws://127.0.0.1:9000`)
     */
    url?: string
  }
  /**
   * Configuration settings used when upgrading the application (and optionally plugins) automatically, in the background. These settings are NOT used as defaults when using the CLI `upgrade` command directly.
   */
  upgrade?: {
    /**
     * The interval between automatic upgrade checks (defaults to "1 day"). Only used when for configuration. Set to "off" for no automatic checks.
     */
    auto?: string
    /**
     * Prompt to confirm an upgrade
     */
    confirm?: boolean
    /**
     * Plugins should also be upgraded to latest version
     */
    plugins?: boolean
    /**
     * Show information on the upgrade process
     */
    verbose?: boolean
  }
}