const { ipcRenderer, contextBridge } = require("electron")

async function archiveInit () {
    await ipcRenderer.invoke('read').then(result=>{
        contextBridge.exposeInMainWorld('archivePrel', result)
    })
}
archiveInit()

contextBridge.exposeInMainWorld('ipcCall', ipcRenderer.invoke)
