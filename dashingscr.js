const invokeIPC = window.ipcCall
const archivePromised = window.archivePrel

const archive = JSON.parse(String.fromCharCode.apply(null, new Uint8Array(archivePromised)))

//concerning the database
// invokeIPC('databases', 'connect', '')
// const makedb = 'create database if not exists quidprocuredb'
// invokeIPC('databases', 'jstQuery', makedb)
// const useDB = 'use quidprocuredb'
// invokeIPC('databases', 'jstQuery', useDB)
// const maketbl = 'create table if not exists themrecords (sn varchar(255), sdref varchar(255), complainant varchar(255), suspect varchar(255), offence varchar(255), reference varchar(255), remarks varchar(255), finaldisp varchar(255), timestamp varchar(255) primary key)'
// invokeIPC('databases', 'jstQuery', maketbl)
// function readDB() {
//     const getRecords = 'select * from themrecords'
//     invokeIPC('databases', 'resultQuery', getRecords)
// }
// function addIntoTable(arr, tableName) {
//     const insert = `insert into ${tableName} values ("${arr[0]}", "${arr[1]}", "${arr[2]}", "${arr[3]}", "${arr[4]}", "${arr[5]}", "${arr[6]}", "${arr[7]}", "${arr[8]}")`
//     invokeIPC('databases', 'jstQuery', insert)
// }
// function delFromTable(timestamp, tableName) {
//     const toDel = `delete from ${tableName} where timestamp="${timestamp}"`
//     invokeIPC('databases', 'jstQuery', toDel)
// }
// function changeRec(timestamp, newArr) {
//     delFromTable(timestamp, 'themrecords')
//     addIntoTable(newArr, 'themrecords')
// }

const pages = {
    home: {
        1: {
            title: 'Procurement- Performance and Accounts Payable',
            tableCols: {
                id: 0,
                names: ['Request for quote', 'Purchase request', 'Purchase order', 'Invoice']
            }
        }
    },
    createRFQ: {
        1: {
            title: 'Procurement- Request for Quotation',
            smallInputs: ['RFQ number', 'Employee ID', 'RFQ Date Created', 'RFQ Closing date'],
            largeInputs: ['RFQ Description', 'RFQ Conditions/criteria'],
            buttons: {
                names: {
                    'Generate RFQ number': 'createRFQ',
                    'Cancel RFQ': 'createRFQ'
                },
                confirmAt: ['Generate RFQ number']
            }
        },
        2: {
            title: 'RFQ Item',
            smallInputs: ['RFQ_Item_ID', 'RFQ_Number', 'RFQ_Item_Description', 'RFQ_Item_Qty'],
            buttons: {
                names: {
                    'Add RFQ Item': 'updateTable2*'
                }
            }
        },
        3: {
            title: 'RFQ Item Details',
            tableCols: {
                id: 2,
                names: ['RFQ_Item_ID', 'RFQ_Number', 'RFQ_Item_Description', 'RFQ_Item_Qty', ''],
                button: {
                    'Delete': 'deleteFromTable*'
                }
            },
        }
    },
    processRFQ: {
        1: {
            title: 'Procurement- Purchase Requisition Information',
            searchMetric: ['Search by RFQ Number', 1],
            tableCols: {
                id: 3,
                names: ['RFQ_Number', 'RFQ_Description', 'RFQ_Condition', 'RFQ_Date_Created', 'RFQ_Date_Expiry', ''],
                button: {
                    'View Process Details': 'viewProcessRFQDetails'
                }
            }
        }
    },
    viewProcessRFQDetails: {
        1: {
            title: '#',
            tableCols: {
                id: 12,
                names: ['RFQ_Item_ID', 'RFQ_Item_Description', 'RFQ_Item_Qty', ''],
                button: {
                    'Link to Service': 'linkRFQtoService'
                }
            }
        }
    },
    linkRFQtoService: {
        1: {
            title: 'Procurement- Request for Quotation Supplier Selection',
            smallInputs: ['RFQ number', 'Employee ID', 'RFQ date created', 'RFQ closing date', 'Type of service', 'Account Number'],
            largeInputs: ['RFQ description', 'RFQ condition/criteria', 'Service description', 'Account Description'],
            buttons: {
                names: {
                    'Link RFQ to Service': 'linkRFQtoService'
                },
                confirmAt: ['Link RFQ to Service']
            }
        },
        2: {
            title: 'List of suppliers that provide linked service',
            tableCols: {
                id: 4,
                names: ['Select_Supplier', 'Supplier_ID', 'Company_Name', 'Contact_person_email', 'Freeze_flag']
            },
            buttons: {
                names: {
                    'Send notification email to selected suppliers': 'linkRFQtoService'
                }
            }
        }
    },
    processQuotation: {
        1: {
            title: "Quotation Information",
            searchMetric: ["Search by Quote Number", 1],
            tableCols: {
                id: 5,
                names: ['Quotation ID', 'Supplier ID', 'RFQ Number', 'Date created', 'Conditions', 'Special Instruction', 'Q_Cost', ''],
                button: {
                    'View Details': 'viewQuoteDetails'
                }
            }
        }
    },
    viewQuoteDetails: {
        1: {
            title: 'Quote Item Details',
            tableCols: {
                id: 13,
                names: ['Quotation ID', 'Item_ID', 'Item Description', 'Quantity', 'Unit Price', 'Discount', 'Total'],
                vATandTotalsTarget: 'Total'
            },
            buttons: {
                names: {
                    'Create Purchase Request': 'creatingPurchaseRequest',
                    'Reject Quotation': 'thrownQuotation'
                },
                confirmAt: ['Create Purchase Request', 'Reject Quotation']
            }
        }
    },
    thrownQuotation: {
        1: {
            title: 'Rejected Quotation',
            smallInputs: ['Quotation ID'],
            largeInputs: ['Comments'],
            buttons: {
                names: {
                    'Submit': 'processQuotation',
                },
                confirmAt: ['Submit']
            }
        }
    },
    creatingPurchaseRequest: {
        1: {
            title: 'Purchase Requisitions (PR)',
            smallInputs: ['Employee ID', 'Employee Name', 'Date Created', 'Department ID', 'Department Name', 'Quotation ID', 'Supplier ID', 'Supplier Name', 'RFQ Number', 'Cost Center Number', 'Service ID', 'Status'],
            largeInputs: ['Cost Center Description', 'Service Description', 'Rationale/Comments'],
            buttons: {
                names: {
                    'Generate PR': 'creatingPurchaseRequest',
                    'Back to Quotation': 'processQuotation'
                },
                confirmAt: ['Generate PR', 'Back to Quotation']
            }
        },
        2: {
            title: 'Purchase Request Item details',
            tableCols: {
                id: 6,
                names: ['Quotation_ID', 'Item ID', 'Item Description', 'Account Number', 'Quantity', 'Unit Price', 'Discount', 'Total'],
                vATandTotalsTarget: 'Total'
            }
        }
    },
    purchaseReqAwaiting: {
        1: {
            title: 'Purchase Request Information',
            searchMetric: ['Search by Purchase Request Number', 1],
            tableCols: {
                id: 7,
                names: ['PR_ID', 'Requestor', 'CC_Number', 'Rationale', 'Supplier_ID', 'Service_ID', 'Status', 'Date_Created', 'Total- include VAT', 'Budget Status', ''],
                button: {
                    'View details': 'viewingItemDetails',
                }
            }
        }
    },
    viewingItemDetails: {
        1: {
            title: 'Procurement- Purchase Requisition Information',
            smallInputs: ['Purchase Request ID', 'RFQ Number', 'Quotation ID', 'Employee ID', 'Employee Name', 'Date created', 'Department ID', 'Department Name', 'Supplier ID', 'Supplier Name', 'Supplier Status', 'Service ID'],
            largeInputs: ['Service Description', 'Rationale'],
            buttons: {
                names: {
                    'Go to Approval': 'goneToApprove'
                },
                confirmAt: ['Go to Approval']
            }
        },
        2: {
            title: 'Budget Information',
            smallInputs: ['CC_Number', 'CC_Balance', 'CC_Status', 'Account_Number', 'Account_Balance', 'Account_Status']
        },
        3: {
            title: 'Purchase Request Item details',
            tableCols: {
                id: 8,
                names: ['Purchase_Request_Item_ID', 'PR_ID', 'Account_Number', 'Item_Description', 'Quantity', 'Amount', 'Discount', 'Total'],
                vATandTotalsTarget: 'Total'
            }
        }
    },
    goneToApprove: {
        1: {
            title: 'Purchase Request awaiting Approvals',
            tableCols: {
                id: 9,
                names: ['Purchase_Request_ID', 'Manager_ID', 'Status', 'Date Updated', 'Comments'],
                editIndex: [2, 4]
            }
        }
    },
    processApprovedPR: {
        1: {
            title: 'Procurement- Process Approved Purchase Request',
            tableCols: {
                id: 10,
                names: ['Purchase_Request_ID', 'Employee_ID', 'Status', 'Date Updated', 'Comments', ''],
                button: {
                    'Create Purchase Order': 'processApprovedPR'
                }
            }
        }
    },
    processDeliveryNote: {
        1: {
            title: 'Procurement- Process Delivery Note or Voucher',
            tableCols: {
                id: 11,
                names: ['Purchase_Order_ID', 'Purchase_Request_ID', 'Date_created', ''],
                button: {
                    'Create Delivery Note': 'creatingDelivNote'
                }
            }
        }
    },
    creatingDelivNote: {
        1: {
            title: 'Procurement- Delivery Note or Voucher',
            smallInputs: ['Purchase_Order Item_ID', 'PR_ID', 'PO Date Created', 'Employee ID', 'Employee Name', 'Department ID', 'Department Name', 'Supplier ID', 'Supplier Name'],
            buttons: {
                names: {
                    'Process Delivery Note': 'processDeliveryNote'
                }
            }
        },
        2: {
            title: 'Delivered Item details',
            tableCols: {
                id: 23,
                names: ['Select Item', 'Purchase_Order Item_ID', 'Purchase_Order ID', 'Item Description', 'Quantity', 'Amount', 'Discount', 'Total'],
                vATandTotalsTarget: 'Total'
            },
        }
    },
    invoiceAwaitingApproval: {
        1: {
            title: 'Invoices Awaiting Approval',
            tableCols: {
                id: 14,
                names: ['Delivery_Note_ID', 'Invoice_ID', 'Employee_ID', 'RStatus', 'Date_created', 'Comment'],
                editIndex: [3, 5]
            }
        }
    },
    trackInvoice: {
        1: {
            title: 'Track Invoice',
            searchMetric: ['Search by Quote Number', 1],
            tableCols: {
                id: 15,
                names: ['Invoice ID', 'Purchase Order ID', 'Delivery Note ID', 'Employee ID', 'Department ID', 'Supplier ID', 'Date Captured', 'Due_Date', ''],
                button: {
                    'View Details': 'itemDetails'
                }
            }
        }
    },
    itemDetails: {
        1: {
            title: 'Tax Invoice',
            smallInputs: ['Invoice_ID', 'Delivery_Note_ID', 'Purchase_Order_ID', 'Delivered Date', 'Employee ID', 'Employee Name', 'Department ID', 'Department Name', 'Tax Reference', 'Supplier ID', 'Supplier Name', 'Supplier VAT'],
            buttons: {
                names: {
                    'Make Payment': 'trackInvoice'
                },
                confirmAt: ['Make Payment']
            }
        },
        2: {
            title: 'Invoice Item details',
            tableCols: {
                id: 16,
                names: ['Invoice_Item_ID', 'Invoice_ID', 'Purchase_Order_ID', 'Item Description', 'Quantity', 'Amount', 'Discount', 'Total'],
                vATandTotalsTarget: 'Total'
            }
        }
    },
    availableRFQ: {
        1: {
            title: 'Purchase Order to be invoiced',
            tableCols: {
                id: 17,
                names: ['RFQ_Number', 'RFQ_Description', 'RFQ_Condition', 'RFQ_Date_created', 'RFQ_Date_expiry', 'Supplier_ID', ''],
                button: {
                    'Create Quote': 'createQuote'
                }
            }
        }
    },
    createQuote: {
        1: {
            title: 'Quotation- Request for Quote Available To Date',
            smallInputs: ['RFQ_Number', 'RFQ_Date_created', 'RFQ_Date_Expiry'],
            largeInputs: ['RFQ_Description', 'RFQ_Condition'],
            buttons: {
                names: {
                    'Proceed with Quote': 'proceedWithQuote'
                },
                confirmAt: ['Proceed with Quote']
            }
        },
        2: {
            title: 'RFQ Items Details Information',
            tableCols: {
                id: 18,
                names: ['RFQ_Item_ID', 'RFQ_Item_Description', 'RFQ_Item_Qty']
            }
        }
    },
    proceedWithQuote: {
        1: {
            title: 'Quotation- Quotation (Q)',
            smallInputs: ['Quotation ID', 'Supplier ID', 'Supplier Name', 'RFQ Number', 'Date Submitted'],
            largeInputs: ['RFQ Description', 'Conditions/ Requirements', 'Special Instructions'],
            buttons: {
                names: {
                    'Generate Q Number': 'proceedWithQuote',
                    'Clear Quote': 'proceedWithQuote'
                },
                confirmAt: ['Generate Q Number']
            }
        },
        2: {
            title: 'Quotation Items',
            smallInputs: ['Quotation Item Description', 'Qty', 'Amount', 'Discount'],
            buttons: {
                names: {
                    'Add Quotation Item': 'updateTable19*'
                }
            }
        },
        3: {
            title: 'Quotation Items Details',
            tableCols: {
                id: 19,
                names: ['Quotation Item ID', 'Quotation Id', 'Quotation Item Desc', 'Quotation Item Qty', 'Quotation Item Amt', 'Quotation Item Discount(%)', 'Total', ''],
                button: {
                    'Delete': 'deleteFromTable*'
                },
                vATandTotalsTarget: 'Total'
            }
        }
    },
    purchaseOrder2Binvoiced: {
        1: {
            title: 'Purchase Order to be Invoiced',
            tableCols: {
                id: 20,
                names: ['Delivery_Note_ID', 'Purchase_Order_ID', 'Date_created', ''],
                button: {
                    'Create Invoice': 'creatingInvoice'
                }
            }
        }
    },
    creatingInvoice: {
        1: {
            title: 'Tax Invoice',
            smallInputs: ['Delivery_Note_ID', 'Purchase_Order_ID', 'Delivered Date', 'Employee ID', 'Employee Name', 'Department ID', 'Department Name', 'Tax Reference', 'Supplier ID', 'Supplier Name', 'Supplier VAT'],
            buttons: {
                names: {
                    'Create Invoice': 'purchaseOrder2Binvoiced'
                },
                confirmAt: ['Create Invoice']
            }
        },
        2: {
            title: 'Invoice Item details',
            tableCols: {
                id: 21,
                names: ['Purchase_Order_Item_ID', 'Purchase_Order_ID', 'Item Description', 'Quantity', 'Amount', 'Discount', 'Total'],
                vATandTotalsTarget: 'Total'
            }
        }
    },
    submittedQuotation: {
        1: {
            title: 'Procurement- Purchase Requisition Information',
            searchMetric: ['Search by RFQ Number', 2],
            tableCols: {
                id: 22,
                names: ['Supplier ID', 'RFQ Number', 'Quotation ID', 'Date_Quoted', 'QStatus', 'PR_ID', 'Purchase Order ID', 'Amount Invoiced', 'Payment Status', ''],
                button: {
                    'View Quote Details': 'proceedWithQuote'
                }
            }
        }
    }
}

const layoutHandlers = {
    title: handleTitle,
    searchMetric: handleSearch,
    smallInputs: handleSmallInputs,
    largeInputs: handleLargeInputs,
    buttons: handleButtons,
    tableCols: handleTableCols,
}

const sequencePointer = []
let currentPoint = null

function confirmThenCall(event) {
    invokeIPC('dialog', event.target.innerHTML).then((res)=>{
        if (JSON.parse(res).response == 0) {
            const funcName = event.target.dataset.clickRun
            if (funcName.slice(-1) == '*') {
                window[funcName.substring(0,funcName.length-1)](event)
            } else {
                showPage(funcName)
                showToast(`'${event.target.innerHTML}' executed.`)
            }
        }
    })
}
/*
>page name 
>>layout name
+searchMetric ... single val
+smallInputs ... arr of labels
+largeInputs ... arr of labels
+buttons
-names ... obj  -name: function to be called
-confirmAt ... arr
+tableCols
-id ... number
-names ... arr
-editIndex ... arr
-button
-vATandTotalsTarget ... single val
*/

function setNavButtons(pgName) {
    if (sequencePointer.length > 0 && sequencePointer[currentPoint] == pgName) return
    if (currentPoint != null) {
        sequencePointer.splice(currentPoint + 1, sequencePointer.length - currentPoint)
        currentPoint += 1
    } else {
        currentPoint = 0
    }
    sequencePointer.push(pgName)
}

function nextPg() {
    if (!sequencePointer.length || currentPoint == sequencePointer.length - 1) return
    currentPoint += 1
    showPage(sequencePointer[currentPoint])
}

function prevPg() {
    if (!sequencePointer.length || currentPoint == 0) return
    currentPoint -= 1
    showPage(sequencePointer[currentPoint])
}

function getElPosition(element) {
    let index = -1 //because of the header
    while (element = element.previousElementSibling) {
        index++
    }
    return index
}

function deleteFromTable(ev) {
    const row = ev.target.parentElement.parentElement
    const index = getElPosition(row)
    const table = row.parentElement
    table.removeChild(row)
    archive[table.dataset.tableID].splice(index, 1)
    invokeIPC('write', JSON.stringify(archive)).then((res)=>{
    })
    showToast('Record deleted.')
}

function handleTitle(title) {
    const layoutTitle = document.createElement('div')
    layoutTitle.className = 'layoutTitle'
    layoutTitle.innerHTML = title
    return layoutTitle
}

function handleButtons(buttonsObj) {
    const buttonsDiv = document.createElement('div')
    buttonsDiv.className = 'buttonsDiv'
    for (naem in buttonsObj.names) {
        const button = document.createElement('button')
        button.className = 'pgButton'
        button.innerHTML = naem
        button.dataset.clickRun = buttonsObj.names[naem]
        if ('confirmAt' in buttonsObj && naem in buttonsObj.confirmAt) {
            button.onclick = (event) => confirmThenCall(event)
        } else {
            button.onclick = (event) => {
                const funcName = button.dataset.clickRun
                if (funcName.slice(-1) == '*') {
                    window[funcName.substring(0,funcName.length-1)](event)
                } else {
                    showPage(funcName)
                    showToast(`'${button.innerHTML}' executed.`)
                }
            }
        }
        buttonsDiv.appendChild(button)
    }
    return buttonsDiv
}

function handleSearch(metric) {
    const form = document.createElement('form')
    form.classList.add('searchForm')
    form.innerHTML = `
        <label>${metric[0]}</label>
        <input type="text" data-position=${metric[1]} placeholder="Search" class="searcher" onkeyup="searcher(event)">
        <button onclick="searcher(event)" class="searchBtn">Search</button>
        `
    return form
}

function searcher(ev) {
    ev.preventDefault()
    const searchEl = document.querySelector('.searcher')
    const targetTable = ev.target.parentElement.parentElement.querySelector('table')
    const divs = targetTable.querySelectorAll(`tr:nth-child(n+2) td:nth-of-type(${searchEl.dataset.position})`)
    divs.forEach((el) => {
        if (!searchEl.value) {
            el.parentElement.style.display = 'table-row'
            el.parentElement.style.width = '100%'
            el.color = 'black'
            return
        }
        if (el.innerHTML.toLowerCase().includes(searchEl.value.toLowerCase())) {
            el.parentElement.style.display = 'table-row'
            el.parentElement.style.width = '100%'
            el.color = 'orange'
        } else {
            el.parentElement.style.display = 'none'
            el.color = 'black'
        }
    })
}

function handleSmallInputs(inputsArr) {
    const inputsDiv = document.createElement('div')
    inputsDiv.classList.add('inputsDiv')
    for (member of inputsArr) {
        const oneInput = document.createElement('div')
        oneInput.classList.add('oneInput')
        oneInput.innerHTML = `
        <label>${member}</label>
        <input type="text" class="smallInput">
        `
        inputsDiv.appendChild(oneInput)
    }
    return inputsDiv
}

function handleLargeInputs(inputsArr) {
    const inputsDiv = document.createElement('div')
    inputsDiv.classList.add('inputsDiv')
    for (member of inputsArr) {
        const oneInput = document.createElement('div')
        oneInput.classList.add('oneInput')
        oneInput.innerHTML = `
        <label>${member}</label>
        <textarea class="largeInput" rows=6></textarea>
        `
        inputsDiv.appendChild(oneInput)
    }
    return inputsDiv
}

function updateTable2(ev) {
    ev.preventDefault()
    const values = []
    document.querySelectorAll('.layoutBorder:nth-of-type(2) input').forEach(e => {
        values.push(e.value)
    })
    values.push('Delete')
    archive[2].unshift(values)
    invokeIPC('write', JSON.stringify(archive))
    showPage(sequencePointer[currentPoint])
    showToast('Table Updated.')
}

function updateTable19(ev){
    ev.preventDefault()
    const values = []
    document.querySelectorAll('.layoutBorder:nth-of-type(2) input').forEach(e=>{
        values.push(e.value)
    })
    const total = (+values[2] - +values[3]) * +values[1]
    values.push(total)
    values.push('Delete')
    const quoteID = 'QU0' + Math.round(Math.random()*100).toString()
    const itemID = 'Q_ITEM0' + Math.round(Math.random()*100).toString()
    values.unshift(quoteID)
    values.unshift(itemID)
    archive[19].unshift(values)
    invokeIPC('write', JSON.stringify(archive))
    showPage(sequencePointer[currentPoint])
    showToast('Table Updated.')
}

function handleTableCols(colsObj) {
    const table = document.createElement('table')
    table.className = 'einTable'
    table.dataset.tableID = colsObj.id
    const header = document.createElement('tr')
    for (column of colsObj.names) {
        const col = document.createElement('th')
        col.className = 'headerCol'
        col.innerHTML = column
        header.appendChild(col)
    }
    table.appendChild(header)
    const data = fetchData(colsObj.id)
    if (data.length == 0) {
        const emptiesRow = document.createElement('tr')
        const emptyCol = document.createElement('td')
        emptyCol.innerHTML = 'No data to display yet'
        emptyCol.className = 'emptyCol'
        emptyCol.colSpan = colsObj['names'].length
        emptiesRow.appendChild(emptyCol)
        table.appendChild(emptiesRow)
    } else {
        for (record of data) {
            const row = document.createElement('tr')
            for (colnum in colsObj.names) {
                const datacol = document.createElement('td')
                datacol.classList.add('bodyCol')
                datacol.innerHTML = record[colnum]
                row.appendChild(datacol)
            }
            if ('editIndex' in colsObj) {
                for (num of colsObj.editIndex) {
                    const inputEl = document.createElement('input')
                    inputEl.type = 'text'
                    inputEl.className = 'tableInput'
                    const td = row.querySelector(`td:nth-child(${num + 1})`)
                    inputEl.value = td.innerHTML
                    td.innerHTML = ''
                    inputEl.readOnly = true
                    td.appendChild(inputEl)
                }
                row.ondblclick = () => {
                    row.querySelectorAll('input').forEach((el) => {
                        el.readOnly = false
                        el.style.backgroundColor = 'white'
                    })
                    const saveBtn = document.createElement('button')
                    saveBtn.innerHTML = 'Save'
                    const cancelBtn = document.createElement('button')
                    cancelBtn.innerHTML = 'Cancel'
                    saveBtn.classList.add('editIndexBtn', 'editSave')
                    cancelBtn.classList.add('editIndexBtn', 'editCancel')
                    saveBtn.onclick = (event) => clickedEditBtn(event)
                    cancelBtn.onclick = (event) => clickedEditBtn(event)
                    row.lastElementChild.appendChild(saveBtn)
                    row.lastElementChild.appendChild(cancelBtn)
                }
            }
            if ('button' in colsObj) {
                const el = row.querySelector('td:last-child')
                const button = document.createElement('button')
                button.className = 'pgButton'
                button.dataset.clickRun = colsObj.button[el.innerHTML]
                button.onclick = (event) => confirmThenCall(event)
                button.innerHTML = el.innerHTML
                el.innerHTML = ''
                el.appendChild(button)
            }
            table.appendChild(row)
        }
        if ('vATandTotalsTarget' in colsObj) {
            const vatsRow = document.createElement('tr')
            const vatEl = document.createElement('td')
            vatEl.colSpan = colsObj.names.length - 1
            vatEl.innerHTML = 'VAT:'
            vatEl.classList.add('bodyCol', 'totalsWords')
            const vatVal = document.createElement('td')
            vatVal.className = 'bodyCol'
            const totalsRow = document.createElement('tr')
            const totalEl = document.createElement('td')
            totalEl.colSpan = colsObj.names.length - 1
            totalEl.innerHTML = 'Total:'
            totalEl.classList.add('bodyCol', 'totalsWords')
            const totalVal = document.createElement('td')
            totalVal.className = 'bodyCol'
            let total = 0
            for (record of data) {
                if (+record[record.length - 1]) {
                    total += +record[record.length - 1]
                } else {
                    total += +record[record.length - 2]
                }
            }
            vatVal.innerHTML = Math.round(total * 0.18)
            totalVal.innerHTML = total
            vatsRow.appendChild(vatEl)
            vatsRow.appendChild(vatVal)
            totalsRow.appendChild(totalEl)
            totalsRow.appendChild(totalVal)
            table.appendChild(vatsRow)
            table.appendChild(totalsRow)
        }
    }
    return table
}

function clickedEditBtn(ev) {
    ev.target.parentElement.parentElement.querySelectorAll('input').forEach((el) => {
        el.readOnly = true
        el.style.backgroundColor = 'transparent'
    })
    document.querySelectorAll('.editIndexBtn').forEach((el) => el.remove())
    showToast('Execution succeeded')
}

function fetchData(id) {
    return archive[id]
}

function showPage(pgName) {
    const targetDiv = document.querySelector('.goes-down-here')
    while (targetDiv.firstChild) {
        targetDiv.removeChild(targetDiv.firstChild)
    }
    for (layout in pages[pgName]) {
        const border = document.createElement('div')
        border.className = 'layoutBorder'
        const elements = []
        for (layoutItem in pages[pgName][layout]) {
            const el = layoutHandlers[layoutItem](pages[pgName][layout][layoutItem])
            elements.push(el)
        }
        for (el of elements) {
            border.appendChild(el)
        }
        targetDiv.appendChild(border)
    }
    setNavButtons(pgName)
}

function showToast(message) {
    const toastContainer = document.querySelector('body');
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.textContent = message;
    toastContainer.appendChild(toast);
    setTimeout(() => {
        toastContainer.removeChild(toast);
    }, 1850);
}

showPage('home')