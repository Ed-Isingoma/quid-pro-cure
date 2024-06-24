const { ipcRenderer, contextBridge } = require("electron")
const thesql = require('mysql')

async function archiveInit () {
    await ipcRenderer.invoke('read').then(result=>{
        contextBridge.exposeInMainWorld('archivePrel', result)
    })
}
archiveInit()

//concerning the database
const dbSetup = {
    makedb: 'create database if not exists quidprocuredb',
    useDB: 'use quidprocuredb',
    makeLogintbl: 'create table if not exists Employee (employeeID varchar(255) primary key, FirstName varchar(255), LastName varchar(255), Password varchar(255), DepartmentName varchar(255), JobTitle varchar(255), Email varchar(255))'
}

const db = thesql.createConnection({
    host: 'localhost',
    user: 'ed',
    password: 'aed'
})

db.connect((err)=> {if (err) throw err})

for (item in dbSetup) {
    db.query(dbSetup[item], (err, res)=>{
        if (err) throw err
    })
}

function loadLogins() {
    const getLogins = 'select * from Employee'
    db.query(getLogins, (err, result)=> {
        if (err) throw err
        const resultObj = {}
        if (!result.length) {
            const insertQuery = 'insert into Employee values ("001", "Ssebaggala", "testuser", "abc123", "sales", "marketer", "ssebs@gmail.com")'
            db.query(insertQuery, (err, res)=> {if (err) throw err})
            resultObj['testuser'] = 'abc123'
        } else {
            for (child of result) {
                const key = child['LastName']
                resultObj[key] = child['Password']
            }
        }
        ipcRenderer.invoke('stageLogins', resultObj)
    
    })
}
loadLogins()

ipcRenderer.on('addDBAccount', (e, query) => {
    db.query(query, (err, res)=> {
        if (err) throw err
    })
    loadLogins()
})

contextBridge.exposeInMainWorld('ipcCall', ipcRenderer.invoke)
contextBridge.exposeInMainWorld('ipcCallSync', ipcRenderer.sendSync)
