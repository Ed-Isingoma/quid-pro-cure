const { app, BrowserWindow, ipcMain, dialog } = require('electron')
const path = require('node:path')
const {readFileSync, writeFileSync, appendFileSync} = require('fs')

ipcMain.handle('read', ()=>{
    try {
        const archiveMain = readFileSync('archive.json')
        return archiveMain
    } catch {
        const fileStr = JSON.stringify({})
        appendFileSync('archive.json', fileStr)
        return fileStr
    }
})

ipcMain.handle('write', (ev, jsonStr)=> {
    writeFileSync('archive.json', jsonStr)
})

// ipcMain.handle('databases',(e, arg1, arg2)=> {
//     e.sender.send('databases', arg1, arg2)
// })

ipcMain.handle('addDBAccount', (e, argu)=> {
    e.sender.send('addDBAccount', argu)
})

ipcMain.handle('queryTable', (e, argu)=> {
    e.sender.send('queryTable', argu)
})

let loginsObj

ipcMain.handle('stageLogins', (e, obj)=>{
    loginsObj = obj
})

ipcMain.on('checkLogins', (e, usr, psw) => {
    if (loginsObj[usr] == psw) {
        e.returnValue = true
    } else {
        e.returnValue = false
    }
})

ipcMain.handle('dialog', (ev, strVal)=> {
    const response = dialog.showMessageBox(BrowserWindow.getFocusedWindow(),{
        type: 'question',
        title: 'Confirmation',
        message: `${strVal}?`,
        buttons: ['Yes', 'No']
    }).then((res)=> {
        return JSON.stringify(res)
    })
    return response
})

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1200,
        height: 720,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true
          }
    })

    win.loadFile('index.html')
    win.maximize()
}

app.whenReady().then(() => {
    createWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})