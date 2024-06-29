const { ipcRenderer, contextBridge } = require("electron")
const thesql = require('mysql2')

async function archiveInit () {
    await ipcRenderer.invoke('read').then(result=>{
        contextBridge.exposeInMainWorld('archivePrel', result)
    })
}
archiveInit()

const dbSetup = {
    makedb: 'create database if not exists quidprocuredb',
    useDB: 'use quidprocuredb',
    makeLogintbl: 'create table if not exists Employee (employeeID varchar(255) primary key, FirstName varchar(255), LastName varchar(255), Password varchar(255), Email varchar(255))',
    makeTable19: 'create table if not exists QuotationItemDetails (qItemID varchar(255) primary key, qID varchar(255), ItemDesc varchar(255), Qty varchar(255), Amount varchar(255), Discount varchar(255), Total varchar(255), buttonName varchar(255))',
    makeTable2: 'create table if not exists RFQitemDetails (rfqItemID varchar(255) primary key, rfqNumber varchar(255), rfqItemDesc varchar(255), rfqItemQty varchar(255), buttonName varchar(255))',
    makeTable25: 'create table if not exists BudgetMaintenance (itemID varchar(255) primary key, Description varchar(255), Amount varchar(255), Date varchar(255), buttonName varchar(255))',
    makeTable24: 'create table if not exists GenerateRFQ (RFQNumber varchar(255) primary key, EmployeeID varchar(255), DateCreated varchar(255), ClosingDate varchar(255), Description varchar(255), Conditions varchar(255))'
}

const db = thesql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234'
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
            const insertQuery = 'insert into Employee values ("001", "Ssebaggala", "testuser", "abc123", "ssebs@gmail.com")'
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

ipcRenderer.on('queryTable', (e, query)=> {
    db.query(query, (err, res)=> {
        if (err) throw err
    })
})

contextBridge.exposeInMainWorld('ipcCall', ipcRenderer.invoke)
contextBridge.exposeInMainWorld('ipcCallSync', ipcRenderer.sendSync)
