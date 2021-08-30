import { IpcMainInvokeEvent } from 'electron'
import log, { LogMessage } from 'electron-log'
import { JSONSchema7 } from 'json-schema'
import { Config, dispatch, Plugin, Result } from 'stencila'
import { Channel, CHANNEL, Handler } from './channels'
import { UnprotectedStoreKeys } from './stores'

type EntityId = number | string

export type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONValue[]
  | { [key: string]: JSONValue }

export interface AppConfigStore {
  USER_ID?: string
  REPORT_ERRORS: boolean
  FIRST_LAUNCH?: boolean | undefined
  EDITOR_LINE_WRAPPING: boolean
  EDITOR_LINE_NUMBERS: boolean
  EDITOR_NEW_FILE_SYNTAX: string
}

export interface NormalizedPlugins {
  entities: Record<string, Plugin>
  ids: string[]
}

type AnyFunction = (...args: any) => any

type Resultify<F> = F extends Result<any> ? F : Result<F>

/**
 * Type wrapper for defining the return types of calling a `invoke`/`dispatch` method.
 */
type InvokeResult<T> = Promise<Resultify<T>>

type InvokeType<C extends Channel, F extends AnyFunction> = {
  channel: C
  args: Parameters<F>
  result: InvokeResult<ReturnType<F>>
}

// -----------------------------------------------------------------------------

// Global
export type OpenLink = InvokeType<
  typeof CHANNEL.OPEN_LINK_IN_DEFAULT_BROWSER,
  (url: string) => void
>

export type CaptureError = InvokeType<
  typeof CHANNEL.CAPTURE_ERROR,
  (payload: Error | PromiseRejectionEvent) => void
>

export type GetAppVersion = InvokeType<
  typeof CHANNEL.GET_APP_VERSION,
  () => string
>

// Logs
export type LogsWindowOpen = InvokeType<
  typeof CHANNEL.LOGS_WINDOW_OPEN,
  () => void
>

export type LogsGet = InvokeType<typeof CHANNEL.LOGS_GET, () => LogMessage[]>

// Config
export type ConfigWindowOpen = InvokeType<
  typeof CHANNEL.CONFIG_WINDOW_OPEN,
  () => void
>

export type ReadConfig = InvokeType<
  typeof CHANNEL.CONFIG_READ,
  () => {
    config: Config
    schemas: JSONSchema7[]
  }
>

export type ReadAppConfig = InvokeType<
  typeof CHANNEL.CONFIG_APP_READ,
  () => AppConfigStore
>

export type GetAppConfig = InvokeType<
  typeof CHANNEL.CONFIG_APP_GET,
  <K extends UnprotectedStoreKeys>(key: K) => AppConfigStore[K]
>

export type SetAppConfig = InvokeType<
  typeof CHANNEL.CONFIG_APP_SET,
  <K extends UnprotectedStoreKeys>(payload: {
    key: K
    value: AppConfigStore[K]
  }) => void
>

// Plugins
export type PluginsList = InvokeType<
  typeof CHANNEL.PLUGINS_LIST,
  () => NormalizedPlugins
>

export type PluginsInstall = InvokeType<
  typeof CHANNEL.PLUGINS_INSTALL,
  typeof dispatch.plugins.install
>

export type PluginsUninstall = InvokeType<
  typeof CHANNEL.PLUGINS_UNINSTALL,
  typeof dispatch.plugins.uninstall
>

export type PluginsUpgrade = InvokeType<
  typeof CHANNEL.PLUGIN_UPGRADE,
  typeof dispatch.plugins.upgrade
>

export type PluginsRefresh = InvokeType<
  typeof CHANNEL.PLUGINS_REFRESH,
  typeof dispatch.plugins.refresh
>

// Launcher
export type LauncherWindowOpen = InvokeType<
  typeof CHANNEL.LAUNCHER_WINDOW_OPEN,
  () => void
>
export type LauncherWindowClose = InvokeType<
  typeof CHANNEL.LAUNCHER_WINDOW_CLOSE,
  () => void
>

// Onboarding
export type OnboardingWindowOpen = InvokeType<
  typeof CHANNEL.ONBOARDING_WINDOW_OPEN,
  () => void
>
export type OnboardingWindowClose = InvokeType<
  typeof CHANNEL.ONBOARDING_WINDOW_CLOSE,
  () => void
>

// Projects
export type ProjectsWindowOpen = InvokeType<
  typeof CHANNEL.PROJECTS_WINDOW_OPEN,
  (directoryPath: string) => void
>

export type ProjectsOpenUsingFilePicker = InvokeType<
  typeof CHANNEL.PROJECTS_OPEN_FROM_FILE_PICKER,
  () => {
    canceled: boolean
  }
>

export type ProjectsNew = InvokeType<typeof CHANNEL.PROJECTS_NEW, () => void>

export type ProjectsOpen = InvokeType<
  typeof CHANNEL.PROJECTS_OPEN,
  typeof dispatch.projects.open
>

export type ProjectsWrite = InvokeType<
  typeof CHANNEL.PROJECTS_WRITE,
  typeof dispatch.projects.write
>

export type ProjectsGraph = InvokeType<
  typeof CHANNEL.PROJECTS_GRAPH,
  typeof dispatch.projects.graph
>

// Documents
export type DocumentsOpen = InvokeType<
  typeof CHANNEL.DOCUMENTS_OPEN,
  typeof dispatch.documents.open
>

export type DocumentsAlter = InvokeType<
  typeof CHANNEL.DOCUMENTS_ALTER,
  typeof dispatch.documents.alter
>

export type DocumentsCreate = InvokeType<
  typeof CHANNEL.DOCUMENTS_CREATE,
  typeof dispatch.documents.create
>

export type DocumentsCreateFilePath = InvokeType<
  typeof CHANNEL.DOCUMENTS_CREATE_FILE_PATH,
  () =>
    | {
        filePath: string
        canceled: false
      }
    | { canceled: true }
>

export type DocumentsClose = InvokeType<
  typeof CHANNEL.DOCUMENTS_CLOSE,
  typeof dispatch.documents.close
>

export type DocumentsCloseActive = InvokeType<
  typeof CHANNEL.DOCUMENTS_CLOSE_ACTIVE,
  (path: string) => void
>

export type DocumentsPreview = InvokeType<
  typeof CHANNEL.DOCUMENTS_PREVIEW,
  typeof dispatch.documents.dump
>

export type DocumentsDump = InvokeType<
  typeof CHANNEL.DOCUMENTS_DUMP,
  typeof dispatch.documents.dump
>

export type DocumentsLoad = InvokeType<
  typeof CHANNEL.DOCUMENTS_LOAD,
  typeof dispatch.documents.load
>

export type DocumentsGet = InvokeType<
  typeof CHANNEL.DOCUMENTS_GET,
  typeof dispatch.documents.get
>

export type DocumentsWrite = InvokeType<
  typeof CHANNEL.DOCUMENTS_WRITE,
  typeof dispatch.documents.write
>

export type DocumentsWriteAs = InvokeType<
  typeof CHANNEL.DOCUMENTS_WRITE_AS,
  | typeof dispatch.documents.writeAs
  | ((...args: Parameters<typeof dispatch.documents.writeAs>) => null)
>

export type DocumentsUnsubscribe = InvokeType<
  typeof CHANNEL.DOCUMENTS_UNSUBSCRIBE,
  typeof dispatch.documents.unsubscribe
>

type InvokeTypes =
  | OpenLink
  | CaptureError
  | GetAppVersion
  | LogsWindowOpen
  | LogsGet
  | ConfigWindowOpen
  | ReadConfig
  | ReadAppConfig
  | GetAppConfig
  | SetAppConfig
  | PluginsList
  | PluginsInstall
  | PluginsUninstall
  | PluginsUpgrade
  | PluginsRefresh
  | LauncherWindowOpen
  | LauncherWindowClose
  | OnboardingWindowOpen
  | OnboardingWindowClose
  | ProjectsWindowOpen
  | ProjectsOpenUsingFilePicker
  | ProjectsNew
  | ProjectsOpen
  | ProjectsWrite
  | ProjectsGraph
  | DocumentsOpen
  | DocumentsAlter
  | DocumentsCreate
  | DocumentsCreateFilePath
  | DocumentsClose
  | DocumentsCloseActive
  | DocumentsPreview
  | DocumentsDump
  | DocumentsLoad
  | DocumentsGet
  | DocumentsWrite
  | DocumentsWriteAs
  | DocumentsUnsubscribe

// -----------------------------------------------------------------------------

type InvokeListener<F extends InvokeTypes> = (
  ipcEvent: IpcMainInvokeEvent,
  ...args: F['args']
) => F['result']

export type InvokeHandler<F extends InvokeTypes> = (
  channel: F['channel'],
  listener: InvokeListener<F>
) => void

// -----------------------------------------------------------------------------

interface Invoke {
  // Global
  invoke(
    channel: OpenLink['channel'],
    ...args: OpenLink['args']
  ): OpenLink['result']

  invoke(
    channel: CaptureError['channel'],
    ...args: CaptureError['args']
  ): CaptureError['result']

  invoke(
    channel: GetAppVersion['channel'],
    ...args: GetAppVersion['args']
  ): GetAppVersion['result']

  // Logs
  invoke(
    channel: LogsWindowOpen['channel'],
    ...args: LogsWindowOpen['args']
  ): LogsWindowOpen['result']

  invoke(
    channel: LogsGet['channel'],
    ...args: LogsGet['args']
  ): LogsGet['result']

  // Config
  invoke(
    channel: ConfigWindowOpen['channel'],
    ...args: ConfigWindowOpen['args']
  ): ConfigWindowOpen['result']

  invoke(
    channel: ReadConfig['channel'],
    ...args: ReadConfig['args']
  ): ReadConfig['result']

  invoke(
    channel: ReadAppConfig['channel'],
    ...args: ReadAppConfig['args']
  ): ReadAppConfig['result']

  invoke(
    channel: GetAppConfig['channel'],
    ...args: GetAppConfig['args']
  ): GetAppConfig['result']

  invoke(
    channel: SetAppConfig['channel'],
    ...args: SetAppConfig['args']
  ): SetAppConfig['result']

  // Plugins
  invoke(
    channel: PluginsList['channel'],
    ...args: PluginsList['args']
  ): PluginsList['result']

  invoke(
    channel: PluginsInstall['channel'],
    ...args: PluginsInstall['args']
  ): PluginsInstall['result']

  invoke(
    channel: PluginsUninstall['channel'],
    ...args: PluginsUninstall['args']
  ): PluginsUninstall['result']

  invoke(
    channel: PluginsUpgrade['channel'],
    ...args: PluginsUpgrade['args']
  ): PluginsUpgrade['result']

  invoke(
    channel: PluginsRefresh['channel'],
    ...args: PluginsRefresh['args']
  ): PluginsRefresh['result']
  invoke(channel: PluginsRefresh['channel']): PluginsRefresh['result']

  // Launcher
  invoke(
    channel: LauncherWindowOpen['channel'],
    ...args: LauncherWindowOpen['args']
  ): LauncherWindowOpen['result']

  invoke(
    channel: LauncherWindowClose['channel'],
    ...args: LauncherWindowClose['args']
  ): LauncherWindowClose['result']

  // Onboarding
  invoke(
    channel: OnboardingWindowOpen['channel'],
    ...args: OnboardingWindowOpen['args']
  ): OnboardingWindowOpen['result']

  invoke(
    channel: OnboardingWindowClose['channel'],
    ...args: OnboardingWindowClose['args']
  ): OnboardingWindowClose['result']

  // Projects
  invoke(
    channel: ProjectsWindowOpen['channel'],
    ...args: ProjectsWindowOpen['args']
  ): ProjectsWindowOpen['result']

  invoke(
    channel: ProjectsOpenUsingFilePicker['channel'],
    ...args: ProjectsOpenUsingFilePicker['args']
  ): ProjectsOpenUsingFilePicker['result']

  invoke(
    channel: ProjectsNew['channel'],
    ...args: ProjectsNew['args']
  ): ProjectsNew['result']

  invoke(
    channel: ProjectsOpen['channel'],
    ...args: ProjectsOpen['args']
  ): ProjectsOpen['result']

  invoke(
    channel: ProjectsWrite['channel'],
    ...args: ProjectsWrite['args']
  ): ProjectsWrite['result']

  invoke(
    channel: ProjectsGraph['channel'],
    ...args: ProjectsGraph['args']
  ): ProjectsGraph['result']

  // Documents
  invoke(
    channel: DocumentsOpen['channel'],
    ...args: DocumentsOpen['args']
  ): DocumentsOpen['result']

  invoke(
    channel: DocumentsAlter['channel'],
    ...args: DocumentsAlter['args']
  ): DocumentsAlter['result']

  invoke(
    channel: DocumentsCreate['channel'],
    ...args: DocumentsCreate['args']
  ): DocumentsCreate['result']

  invoke(
    channel: DocumentsCreateFilePath['channel'],
    ...args: DocumentsCreateFilePath['args']
  ): DocumentsCreateFilePath['result']

  invoke(
    channel: DocumentsClose['channel'],
    ...args: DocumentsClose['args']
  ): DocumentsClose['result']

  invoke(
    channel: DocumentsCloseActive['channel'],
    ...args: DocumentsCloseActive['args']
  ): DocumentsCloseActive['result']

  invoke(
    channel: DocumentsPreview['channel'],
    ...args: DocumentsPreview['args']
  ): DocumentsPreview['result']

  invoke(
    channel: DocumentsDump['channel'],
    ...args: DocumentsDump['args']
  ): DocumentsDump['result']

  invoke(
    channel: DocumentsLoad['channel'],
    ...args: DocumentsLoad['args']
  ): DocumentsLoad['result']

  invoke(
    channel: DocumentsGet['channel'],
    ...args: DocumentsGet['args']
  ): DocumentsGet['result']

  invoke(
    channel: DocumentsWrite['channel'],
    ...args: DocumentsWrite['args']
  ): DocumentsWrite['result']

  invoke(
    channel: DocumentsWriteAs['channel'],
    ...args: DocumentsWriteAs['args']
  ): DocumentsWriteAs['result']

  invoke(
    channel: DocumentsUnsubscribe['channel'],
    ...args: DocumentsUnsubscribe['args']
  ): DocumentsUnsubscribe['result']
}

export interface IpcRendererAPI extends Invoke {
  send(channel: Channel, ...args: unknown[]): void
  receive: (channel: Channel, func: Handler) => void
  remove: (channel: Channel, func: Handler) => void
  removeAll: (channel: Channel) => void
  log: typeof log
}

declare global {
  interface Window {
    api: IpcRendererAPI
  }
}
