const { contextBridge,ipcRenderer, dialog } = require('electron')
// import { contextBridge, ipcRenderer, dialog } from 'electron'
const fs = require('fs')

contextBridge.exposeInMainWorld('API', {
  readFileSync: fs.readFileSync,
  mkdirSync: fs.mkdirSync,
  writeFileSync: fs.writeFileSync,
  existsSync: fs.existsSync,
  showOpenDialogSync: async (options) => {
    return await ipcRenderer.invoke('show-open-dialog', options);
    // console.log(ipcRenderer)
    // return dialog.showOpenDialogSync(options)
    // ipcRenderer.on(channel, (event, ...args) => func(...args));
  },
  send: (channel, data) => {
    ipcRenderer.send(channel, data)
  },
  receive: (channel, callback) => {
    ipcRenderer.on(channel, (event, data) => {
      callback(data)
    })
  }
})
