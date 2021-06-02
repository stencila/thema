import { BrowserWindow } from 'electron'
import { CHANNEL } from '../../preload'

export const getFocusedWindow = () => {
  return BrowserWindow.getFocusedWindow()
}

export const saveActiveDoc = () => {
  getFocusedWindow()?.webContents.send(CHANNEL.SAVE_ACTIVE_DOCUMENT)
}