/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { EntityId } from "@reduxjs/toolkit";
import { O } from "fp-ts";
export namespace Components {
    interface AppDocumentEditor {
        "documentId": EntityId;
    }
    interface AppDocumentPane {
    }
    interface AppDocumentPaneEmpty {
    }
    interface AppDocumentPaneTab {
        "isActive": boolean;
        "paneId": EntityId;
        "viewId": EntityId;
    }
    interface AppDocumentPaneTabs {
        "activeDocument": O.Option<EntityId>;
        "paneId": EntityId;
        "viewIds": EntityId[];
    }
    interface AppDocumentPreview {
        "documentId": EntityId;
    }
    interface AppLauncher {
    }
    interface AppProjectRoot {
    }
    interface AppProjectSidebarFile {
        "filePath": string;
    }
    interface AppProjectSidebarFiles {
        "projectDir": string;
    }
    interface AppRoot {
    }
    interface AppSettingsAdvanced {
    }
    interface AppSettingsPluginCard {
        "pluginName": string;
    }
    interface AppSettingsPlugins {
    }
    interface AppSettingsRoot {
    }
    interface AppSettingsSidebar {
    }
    interface AppSidebarEmpty {
    }
}
declare global {
    interface HTMLAppDocumentEditorElement extends Components.AppDocumentEditor, HTMLStencilElement {
    }
    var HTMLAppDocumentEditorElement: {
        prototype: HTMLAppDocumentEditorElement;
        new (): HTMLAppDocumentEditorElement;
    };
    interface HTMLAppDocumentPaneElement extends Components.AppDocumentPane, HTMLStencilElement {
    }
    var HTMLAppDocumentPaneElement: {
        prototype: HTMLAppDocumentPaneElement;
        new (): HTMLAppDocumentPaneElement;
    };
    interface HTMLAppDocumentPaneEmptyElement extends Components.AppDocumentPaneEmpty, HTMLStencilElement {
    }
    var HTMLAppDocumentPaneEmptyElement: {
        prototype: HTMLAppDocumentPaneEmptyElement;
        new (): HTMLAppDocumentPaneEmptyElement;
    };
    interface HTMLAppDocumentPaneTabElement extends Components.AppDocumentPaneTab, HTMLStencilElement {
    }
    var HTMLAppDocumentPaneTabElement: {
        prototype: HTMLAppDocumentPaneTabElement;
        new (): HTMLAppDocumentPaneTabElement;
    };
    interface HTMLAppDocumentPaneTabsElement extends Components.AppDocumentPaneTabs, HTMLStencilElement {
    }
    var HTMLAppDocumentPaneTabsElement: {
        prototype: HTMLAppDocumentPaneTabsElement;
        new (): HTMLAppDocumentPaneTabsElement;
    };
    interface HTMLAppDocumentPreviewElement extends Components.AppDocumentPreview, HTMLStencilElement {
    }
    var HTMLAppDocumentPreviewElement: {
        prototype: HTMLAppDocumentPreviewElement;
        new (): HTMLAppDocumentPreviewElement;
    };
    interface HTMLAppLauncherElement extends Components.AppLauncher, HTMLStencilElement {
    }
    var HTMLAppLauncherElement: {
        prototype: HTMLAppLauncherElement;
        new (): HTMLAppLauncherElement;
    };
    interface HTMLAppProjectRootElement extends Components.AppProjectRoot, HTMLStencilElement {
    }
    var HTMLAppProjectRootElement: {
        prototype: HTMLAppProjectRootElement;
        new (): HTMLAppProjectRootElement;
    };
    interface HTMLAppProjectSidebarFileElement extends Components.AppProjectSidebarFile, HTMLStencilElement {
    }
    var HTMLAppProjectSidebarFileElement: {
        prototype: HTMLAppProjectSidebarFileElement;
        new (): HTMLAppProjectSidebarFileElement;
    };
    interface HTMLAppProjectSidebarFilesElement extends Components.AppProjectSidebarFiles, HTMLStencilElement {
    }
    var HTMLAppProjectSidebarFilesElement: {
        prototype: HTMLAppProjectSidebarFilesElement;
        new (): HTMLAppProjectSidebarFilesElement;
    };
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLAppSettingsAdvancedElement extends Components.AppSettingsAdvanced, HTMLStencilElement {
    }
    var HTMLAppSettingsAdvancedElement: {
        prototype: HTMLAppSettingsAdvancedElement;
        new (): HTMLAppSettingsAdvancedElement;
    };
    interface HTMLAppSettingsPluginCardElement extends Components.AppSettingsPluginCard, HTMLStencilElement {
    }
    var HTMLAppSettingsPluginCardElement: {
        prototype: HTMLAppSettingsPluginCardElement;
        new (): HTMLAppSettingsPluginCardElement;
    };
    interface HTMLAppSettingsPluginsElement extends Components.AppSettingsPlugins, HTMLStencilElement {
    }
    var HTMLAppSettingsPluginsElement: {
        prototype: HTMLAppSettingsPluginsElement;
        new (): HTMLAppSettingsPluginsElement;
    };
    interface HTMLAppSettingsRootElement extends Components.AppSettingsRoot, HTMLStencilElement {
    }
    var HTMLAppSettingsRootElement: {
        prototype: HTMLAppSettingsRootElement;
        new (): HTMLAppSettingsRootElement;
    };
    interface HTMLAppSettingsSidebarElement extends Components.AppSettingsSidebar, HTMLStencilElement {
    }
    var HTMLAppSettingsSidebarElement: {
        prototype: HTMLAppSettingsSidebarElement;
        new (): HTMLAppSettingsSidebarElement;
    };
    interface HTMLAppSidebarEmptyElement extends Components.AppSidebarEmpty, HTMLStencilElement {
    }
    var HTMLAppSidebarEmptyElement: {
        prototype: HTMLAppSidebarEmptyElement;
        new (): HTMLAppSidebarEmptyElement;
    };
    interface HTMLElementTagNameMap {
        "app-document-editor": HTMLAppDocumentEditorElement;
        "app-document-pane": HTMLAppDocumentPaneElement;
        "app-document-pane-empty": HTMLAppDocumentPaneEmptyElement;
        "app-document-pane-tab": HTMLAppDocumentPaneTabElement;
        "app-document-pane-tabs": HTMLAppDocumentPaneTabsElement;
        "app-document-preview": HTMLAppDocumentPreviewElement;
        "app-launcher": HTMLAppLauncherElement;
        "app-project-root": HTMLAppProjectRootElement;
        "app-project-sidebar-file": HTMLAppProjectSidebarFileElement;
        "app-project-sidebar-files": HTMLAppProjectSidebarFilesElement;
        "app-root": HTMLAppRootElement;
        "app-settings-advanced": HTMLAppSettingsAdvancedElement;
        "app-settings-plugin-card": HTMLAppSettingsPluginCardElement;
        "app-settings-plugins": HTMLAppSettingsPluginsElement;
        "app-settings-root": HTMLAppSettingsRootElement;
        "app-settings-sidebar": HTMLAppSettingsSidebarElement;
        "app-sidebar-empty": HTMLAppSidebarEmptyElement;
    }
}
declare namespace LocalJSX {
    interface AppDocumentEditor {
        "documentId"?: EntityId;
    }
    interface AppDocumentPane {
    }
    interface AppDocumentPaneEmpty {
    }
    interface AppDocumentPaneTab {
        "isActive"?: boolean;
        "paneId"?: EntityId;
        "viewId"?: EntityId;
    }
    interface AppDocumentPaneTabs {
        "activeDocument"?: O.Option<EntityId>;
        "paneId"?: EntityId;
        "viewIds"?: EntityId[];
    }
    interface AppDocumentPreview {
        "documentId"?: EntityId;
    }
    interface AppLauncher {
    }
    interface AppProjectRoot {
    }
    interface AppProjectSidebarFile {
        "filePath"?: string;
    }
    interface AppProjectSidebarFiles {
        "projectDir"?: string;
    }
    interface AppRoot {
    }
    interface AppSettingsAdvanced {
    }
    interface AppSettingsPluginCard {
        "pluginName"?: string;
    }
    interface AppSettingsPlugins {
    }
    interface AppSettingsRoot {
    }
    interface AppSettingsSidebar {
    }
    interface AppSidebarEmpty {
    }
    interface IntrinsicElements {
        "app-document-editor": AppDocumentEditor;
        "app-document-pane": AppDocumentPane;
        "app-document-pane-empty": AppDocumentPaneEmpty;
        "app-document-pane-tab": AppDocumentPaneTab;
        "app-document-pane-tabs": AppDocumentPaneTabs;
        "app-document-preview": AppDocumentPreview;
        "app-launcher": AppLauncher;
        "app-project-root": AppProjectRoot;
        "app-project-sidebar-file": AppProjectSidebarFile;
        "app-project-sidebar-files": AppProjectSidebarFiles;
        "app-root": AppRoot;
        "app-settings-advanced": AppSettingsAdvanced;
        "app-settings-plugin-card": AppSettingsPluginCard;
        "app-settings-plugins": AppSettingsPlugins;
        "app-settings-root": AppSettingsRoot;
        "app-settings-sidebar": AppSettingsSidebar;
        "app-sidebar-empty": AppSidebarEmpty;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-document-editor": LocalJSX.AppDocumentEditor & JSXBase.HTMLAttributes<HTMLAppDocumentEditorElement>;
            "app-document-pane": LocalJSX.AppDocumentPane & JSXBase.HTMLAttributes<HTMLAppDocumentPaneElement>;
            "app-document-pane-empty": LocalJSX.AppDocumentPaneEmpty & JSXBase.HTMLAttributes<HTMLAppDocumentPaneEmptyElement>;
            "app-document-pane-tab": LocalJSX.AppDocumentPaneTab & JSXBase.HTMLAttributes<HTMLAppDocumentPaneTabElement>;
            "app-document-pane-tabs": LocalJSX.AppDocumentPaneTabs & JSXBase.HTMLAttributes<HTMLAppDocumentPaneTabsElement>;
            "app-document-preview": LocalJSX.AppDocumentPreview & JSXBase.HTMLAttributes<HTMLAppDocumentPreviewElement>;
            "app-launcher": LocalJSX.AppLauncher & JSXBase.HTMLAttributes<HTMLAppLauncherElement>;
            "app-project-root": LocalJSX.AppProjectRoot & JSXBase.HTMLAttributes<HTMLAppProjectRootElement>;
            "app-project-sidebar-file": LocalJSX.AppProjectSidebarFile & JSXBase.HTMLAttributes<HTMLAppProjectSidebarFileElement>;
            "app-project-sidebar-files": LocalJSX.AppProjectSidebarFiles & JSXBase.HTMLAttributes<HTMLAppProjectSidebarFilesElement>;
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "app-settings-advanced": LocalJSX.AppSettingsAdvanced & JSXBase.HTMLAttributes<HTMLAppSettingsAdvancedElement>;
            "app-settings-plugin-card": LocalJSX.AppSettingsPluginCard & JSXBase.HTMLAttributes<HTMLAppSettingsPluginCardElement>;
            "app-settings-plugins": LocalJSX.AppSettingsPlugins & JSXBase.HTMLAttributes<HTMLAppSettingsPluginsElement>;
            "app-settings-root": LocalJSX.AppSettingsRoot & JSXBase.HTMLAttributes<HTMLAppSettingsRootElement>;
            "app-settings-sidebar": LocalJSX.AppSettingsSidebar & JSXBase.HTMLAttributes<HTMLAppSettingsSidebarElement>;
            "app-sidebar-empty": LocalJSX.AppSidebarEmpty & JSXBase.HTMLAttributes<HTMLAppSidebarEmptyElement>;
        }
    }
}
