const archive = {
    0: [
        ["RFQ1234567", "PR1234567", "PO1234567", "INV1234567"],
        ["RFQ2345678", "PR2345678", "PO2345678", "INV2345678"],
        ["RFQ3456789", "PR3456789", "PO3456789", "INV3456789"],
        ["RFQ4567890", "PR4567890", "PO4567890", "INV4567890"],
        ["RFQ5678901", "PR5678901", "PO5678901", "INV5678901"],
        ["RFQ6789012", "PR6789012", "PO6789012", "INV6789012"],
        ["RFQ7890123", "PR7890123", "PO7890123", "INV7890123"],
        ["RFQ8901234", "PR8901234", "PO8901234", "INV8901234"],
        ["RFQ9012345", "PR9012345", "PO9012345", "INV9012345"],
        ["RFQ0123456", "PR0123456", "PO0123456", "INV0123456"]
      ],
    1: [
        [1, "RFQ1001", "Widget A", 100],
        [2, "RFQ1002", "Widget B", 200],
        [3, "RFQ1003", "Gadget C", 150],
        [4, "RFQ1004", "Gadget D", 250],
        [5, "RFQ1005", "Device E", 300],
        [6, "RFQ1006", "Device F", 400],
        [7, "RFQ1007", "Component G", 350],
        [8, "RFQ1008", "Component H", 450],
        [9, "RFQ1009", "Part I", 500],
        [10, "RFQ1010", "Part J", 600]
    ],
    2: [
        [1, "RFQ1001", "Widget A", 100],
        [2, "RFQ1002", "Widget B", 200],
        [3, "RFQ1003", "Gadget C", 150],
        [4, "RFQ1004", "Gadget D", 250],
        [5, "RFQ1005", "Device E", 300],
        [6, "RFQ1006", "Device F", 400],
        [7, "RFQ1007", "Component G", 350],
        [8, "RFQ1008", "Component H", 450],
        [9, "RFQ1009", "Part I", 500],
        [10, "RFQ1010", "Part J", 600]
    ],
    3: [
        ["RFQ1001", "Description A", "New", "2024-01-01", "2024-06-01", "View Process details"],
        ["RFQ1002", "Description B", "Pending", "2024-02-01", "2024-07-01", "View Process details"],
        ["RFQ1003", "Description C", "Approved", "2024-03-01", "2024-08-01", "View Process details"],
        ["RFQ1004", "Description D", "Rejected", "2024-04-01", "2024-09-01", "View Process details"],
        ["RFQ1005", "Description E", "New", "2024-05-01", "2024-10-01", "View Process details"],
        ["RFQ1006", "Description F", "Pending", "2024-06-01", "2024-11-01", "View Process details"],
        ["RFQ1007", "Description G", "Approved", "2024-07-01", "2024-12-01", "View Process details"],
        ["RFQ1008", "Description H", "Rejected", "2024-08-01", "2025-01-01", "View Process details"],
        ["RFQ1009", "Description I", "New", "2024-09-01", "2025-02-01", "View Process details"],
        ["RFQ1010", "Description J", "Pending", "2024-10-01", "2025-03-01", "View Process details"]
    ],
    4: [
        [1, "Item Description A", 10],
        [2, "Item Description B", 20],
        [3, "Item Description C", 30],
        [4, "Item Description D", 40],
        [5, "Item Description E", 50],
        [6, "Item Description F", 60],
        [7, "Item Description G", 70],
        [8, "Item Description H", 80],
        [9, "Item Description I", 90],
        [10, "Item Description J", 100]
    ],
    5: [],
    6: [],
    7: {},
    8: {},
    9: {},

}

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
                    'Add RFQ Item': 'addToTable'
                },
                targetTable: 2
            }
        },
        3: {
            title: 'RFQ Item Details',
            tableCols: {
                id: 2,
                names: ['RFQ_Item_ID', 'RFQ_Number', 'RFQ_Item_Description', 'RFQ_Item_Qty', ''],
                button: {
                    'Delete': ''
                }
            },
        }
    },
    processRFQ: {
        1: {
            title: 'Procurement- Purchase Requisition Information',
            searchLabel: 'Search by RFQ Number',
            tableCols: {
                id: 3,
                names: ['RFQ_Number', 'RFQ_Description', 'RFQ_Condition', 'RFQ_Date_Created', 'RFQ_Date_Expiry', ''],
                button: {
                    'View Process Details': viewProcessRFQDetails
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
                    'Link to service': 'linkRFQtoService'
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
            searchLabel: "Search by Quote Number",
            tableCols: {
                id: 5,
                names: ['Quotation_ID', 'Supplier_ID', 'RFQ_Number', 'Date_created', 'conditions', 'Special_instruction', 'Q_Cost', ''],
                button: {
                    'View Details': viewQuoteDetails
                }
            }
        }
    },
    viewQuoteDetails: {
        1: {
            title: '#',
            tableCols: {
                id: 13,
                names: ['Quotation_ID', 'Item_ID', 'Item Description', 'Quantity', 'Unit Price', 'Discount', 'Total'],
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
                    'Submit': 'thrownQuotation',
                },
                confirmAt: ['Submit']
            }
        }
    },
    creatingPurchaseRequest: {
        1 : {
            title: 'Purchase Requisitions (PR)',
            smallInputs: ['Employee ID', 'Employee Name', 'Date Created', 'Department ID', 'Department Name', 'Quotation ID', 'Supplier ID', 'Supplier Name', 'RFQ Number', 'Cost Center Number', 'Service ID', 'Status'],
            largeInputs: ['Cost Center Description', 'Service Description', 'Rationale/Comments'],
            buttons: {
                names: {
                    'Generate PR': 'creatingPurchaseRequest',
                    'Back to Quotation': 'viewQuoteDetails'
                },
                confirmAt: ['Generate PR', 'Back to Quotation']
            }
        },
        2 : {
            title: 'Purchase Request Item details',
            tableCols: {
                id: 6,
                names: ['Quotation_ID', 'Item ID', 'Item Description', 'Account Number', 'Quantity', 'Unit Price', 'Discount', 'Total'],
                vATandTotalsTarget: 'Total'
            }
        }
    },
    purchaseReqAwaiting: {
        1 : {
            title: 'Purchase Request Information',
            searchLabel: 'Search by Purchase Request Number',
            tableCols: {
                id: 7,
                names: ['PR_ID', 'Requestor', 'CC_Number', 'Rationale', 'Supplier_ID', 'Service_ID', 'Status', 'Date_Created', 'Total- include VAT', 'Budget Status', ''],
                button: {
                    'View item details': 'viewingItemDetails',
                    // 'Approvals': ''
                }
            }
        }
    },
    viewingItemDetails: {
        1 : {
            title: 'Procurement- Purchase Requisitions Information',
            smallInputs: ['Purchase Request ID', 'RFQ Number', 'Quotation ID', 'Employee ID', 'Employee Name', 'Date created', 'Department ID', 'Department Name', 'Supplier ID', 'Supplier Name', 'Supplier Status', 'Service ID'],
            largeInputs: ['Service Description', 'Rationale'],
            buttons: {
                names: {
                    'Go to Approval': 'goneToApprove'
                },
                confirmAt: ['Go to Approval']
            }
        },
        2 : {
            title: 'Budget Information',
            smallInputs: ['CC_Number', 'CC_Balance', 'CC_Status', 'Account_Number', 'Account_Balance', 'Account_Status']
        },
        3 : {
            title: 'Purchase Request Item details',
            tableCols: {
                id: 8,
                names: ['Purchase_Request_Item_ID', 'Purchase_Request_ID', 'Account_Number', 'Item_Description', 'Quantity', 'Amount', 'Discount', 'Total'],
                vATandTotalsTarget: 'Total'
            }
        }
    },
    goneToApprove: {
        1 : {
            title: 'Purchase Request awaiting Approvals',
            tableCols: {
                id: 9,
                names: ['Purchase_Request_ID', 'Manager_ID', 'Status', 'Date Updated', 'Comments'],
                editIndex: [2, 4]
            }
        }
    },
    processApprovedPR: {
        1 : {
            title: 'Procurement- Process Approved Purchase Request',
            tableCols: {
                id: 10,
                names: ['Purchase_Request_ID', 'Employee_ID', 'Status', 'Date Updated', 'Comments', ''],
                button: {
                    'Create Purchase Order': ''
                }
            }
        }
    },
    processDeliveryNote: {
        1 : {
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
        1 : {
            title: 'Procurement- Delivery Note or Voucher',
            smallInputs: ['Purchase_Order_ID', 'Purchase_Request_ID', 'PO Date Created', 'Employee ID', 'Employee Name', 'Department ID', 'Department Name', 'Supplier ID', 'Supplier Name'],
            buttons: {
                names: {
                    'Process Delivery Note': 'processDeliveryNote'
                }
            }
        },
        2: {
            title: 'Delivered Item details',
            tableCols: ['Select Item', 'Purchase_Order_Item_ID', 'Purchase_Order_ID', 'Item_Description', 'Quantity', 'Amount', 'Discount', 'Total'],
            vATandTotalsTarget: 'Total'
        }
    },
    invoiceAwaitingApproval: {
        1 : {
            title: 'Invoices Awaiting Approval',
            tableCols: {
                id:14,
                names: ['Delivery_Note_ID', 'Invoice_ID', 'Employee_ID', 'RStatus', 'Date_created', 'Comment'],
                editIndex: [3, 5]
            }
        }
    },
    trackInvoice: {
        1: {
            title: '#',
            searchLabel: 'Search by Quote Number',
            tableCols: {
                id:15,
                names: ['Invoice_ID', 'Purchase_Order_ID', 'Delivery_Note_ID', 'Employee_ID', 'Department_ID', 'Supplier_ID', 'Date_captured', 'Due_Date', ''],
                button: {
                    'View Item Details': 'itemDetails'
                }
            }
        }
    },
    itemDetails: {
        1 : {
            title: 'Tax Invoice',
            smallInputs: ['Invoice_ID', 'Delivery_Note_ID', 'Purchase_Order_ID', 'Delivered Date', 'Employee ID', 'Employee Name', 'Department ID', 'Department Name', 'Tax Reference', 'Supplier ID', 'Supplier Name', 'Supplier VAT'],
            buttons: {
                names: {
                    'Make Payment': 'trackInvoice'
                },
                confirmAt: ['Make Payment']
            }
        },
        2 : {
            title: 'Invoice Item details',
            tableCols: {
                id:16,
                names: ['Invoice_Item_ID', 'Invoice_ID', 'Purchase_Order_ID', 'Item Description', 'Quantity', 'Amount', 'Discount', 'Total'],
                vATandTotalsTarget: 'Total'
            }
        }
    },
    availableRFQ: {
        1 : {
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
        1 : {
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
        2 : {
            title: 'RFQ Items Details Information',
            tableCols: {
                id:18,
                names: ['RFQ_Item_ID', 'RFQ_Item_Description', 'RFQ_Item_Qty']
            }
        }
    },
    proceedWithQuote: {
        1 : {
            title: 'Quotation- Quotation (Q)',
            smallInputs: ['Quotation ID', 'Supplier ID', 'Supplier Name', 'RFQ Number', 'Date Submitted'],
            largeInputs: ['RFQ_Description', 'Conditions/Requirements', 'Special Instructions'],
            buttons: {
                names: {
                    'Generate Q Number': 'proceedWithQuote',
                    'Clear Quote': 'proceedWithQuote'
                },
                confirmAt: ['Generate Q Number']
            }
        },
        2 : {
            title: 'Quotation Items',
            smallInputs: ['Quotation Item Description', 'Qty', 'Amount', 'Discount'],
            buttons: {
                names: {
                    'Add Quotation Item': 'proceedWithQuote' //showToast that it
                }
            }
        },
        3 : {
            title: 'Quotation Items Details',
            tableCols: {
                id:19,
                names: ['Quotation Item ID', 'Quotation Id', 'Quotation_Item_Desc', 'Quotation_Item_Qty', 'Quotation_Item_Amt', 'Quotation_Item_Dscnt(%)', 'Total', ''],
                button: {
                    'Delete': ''
                },
                vATandTotalsTarget: 'Total'
            }
        }
    },
    purchaseOrder2Binvoiced: {
        1 : {
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
        1 : {
            title: 'Tax Invoice',
            smallInputs: ['Delivery_Note_ID', 'Purchase_Order_ID', 'Delivered Date', 'Employee ID', 'Employee Name', 'Department ID', 'Department Name', 'Tax Reference', 'Supplier ID', 'Supplier Name', 'Supplier VAT'],
            buttons: {
                names: {
                    'Create Invoice': 'purchaseOrder2Binvoiced'
                },
                confirmAt: ['Create Invoice']
            }
        },
        2 : {
            title: 'Invoice Item details',
            tableCols: {
                id: 21,
                names: ['Purchase_Order_Item_ID', 'Purchase_Order_ID', 'Item Description', 'Quantity', 'Amount', 'Discount', 'Total'],
                vATandTotalsTarget: 'Total'
            }
        }
    },
    submittedQuotation: {
        1 : {
            title: 'Procurement- Purchase Requisition Information',
            searchLabel: 'Search by RFQ Number',
            tableCols: {
                id: 22,
                names: ['Supplier_ID', 'RFQ_Number', 'Quotation_ID', 'Date_Quoted', 'QStatus', 'Purchase_Request_ID', 'Purchase_Order_ID', 'Amount Invoiced', 'Payment Status', ''],
                button: {
                    'View Quote Details': ''
                }
            }
        }
    }
}

const layoutHandlers = {
    title: handleTitle,
    searchLabel: handleSearch,
    smallInputs: handleSmallInputs,
    largeInputs: handleLargeInputs,
    buttons: handleButtons,
    tableCols: handleTableCols,
}

function confirmThenCall(event, buttonName, funcName){
    if (confirm(`${buttonName}?`)) {
        if (funcName != 'addToTable' && funcName != 'deleteFromTable') {
            showPage(funcName)
        } else {
            funcName(event)
        }
    }
}
/*
>page name 
>>layout name
+searchLabel ... single val
+smallInputs ... arr of labels
+largeInputs ... arr of labels
+buttons
-names ... obj  -name: function to be called
-confirmAt ... arr
-targetTable .. number
+tableCols
-names ... arr
-editIndex ... arr (means that save and cancel buttons appear)
-button
-vATandTotalsTarget ... single val
*/

//add to table
//put targetTables on the buttons
//editIndex
//do the search
//handle click of back button
//add sample data

function addToTable(ev){

    showToast('Record generated.')
}

function renderTable(){

}

function getElPosition(element) {
    let index = 0;
    while (element = element.previousElementSibling) {
        index++;
    }
    return index;
}

function deleteFromTable(ev){
    const row = ev.target.parentElement.parentElement
    const index = getElPosition(row)
    const table = row.parentElement
    table.removeChild(row)
    archive[table.dataset.tableID].splice(index,1)
    showToast(`Record deleted.`)
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
        if ('targetTable' in buttonsObj) {
            button.dataset.targetTable = buttonsObj.targetTable
        }
        button.innerHTML = naem
        if ('confirmAt' in buttonsObj && naem in buttonsObj.confirmAt) {
            button.onclick = (event) => confirmThenCall(event, naem, buttonsObj.names.naem)
        } else {
            button.onclick = (event) => buttonsObj.names.naem(event)
        }
        buttonsDiv.appendChild(button)
    }
    return buttonsDiv
}

function handleSearch(label) {
    const form = document.createElement('form')
    form.classList.add('searchForm')
    form.innerHTML = `
        <label>${label}</label>
        <input type="text" placeholder="Search" class="searcher" onkeyup="searcher(event)">
        <button onclick="searcher(event)" class="searchBtn">Search</button>
        `
    return form
}

function searcher(ev) {
    ev.preventDefault()
    const searchVal = document.querySelector('.searcher').value
    console.log(searchVal)
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
            if ('editable' in colsObj) {
                for (num of editable) {
                    row.querySelector(`td:nth-child(${num + 1})`).classList.add('editable')
                }
            }
            if ('button' in colsObj) {
                const el = row.querySelector('td:last-child')
                const button = document.createElement('button')
                button.className = 'pgButton'
                button.onclick = (event) => confirmThenCall(event, el.innerHTML, colsObj.button[el.innerHTML])
                button.innerHTML = el.innerHTML
                el.innerHTML = ''
                el.appendChild(button)
            }
            table.appendChild(row)
        }
        if ('vATandTotalsTarget' in colsObj) {
            const vatsRow = document.createElement('tr')
            const vatEl = document.createElement('td')
            vatEl.colSpan = colsObj.length - 1
            vatEl.innerHTML = 'VAT:'
            vatEl.classList.add('bodyCol', 'totalsWords')
            const vatVal = document.createElement('td')
            vatVal.className = 'bodyCol'
            const totalsRow = document.createElement('tr')
            const totalEl = document.createElement('td')
            totalEl.colSpan = colsObj.length - 1
            totalEl.innerHTML = 'Total:'
            totalEl.classList.add('bodyCol', 'totalsWords')
            const totalVal = document.createElement('td')
            totalVal.className = 'bodyCol'
            let total = 0
            for (record of data) {
                total+= +record[-1]
            }
            vatVal.innerHTML = total * 0.18
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

function fetchData(id) {
    return archive[id]
}

function showPage(pgname) {
    const targetDiv = document.querySelector('.goes-down-here')
    while (targetDiv.firstChild) {
        targetDiv.removeChild(targetDiv.firstChild)
    }
    for (layout in pages[pgname]) {
        const border = document.createElement('div')
        border.className = 'layoutBorder'
        const elements = []
        for (layoutItem in pages[pgname][layout]) {
            const el = layoutHandlers[layoutItem](pages[pgname][layout][layoutItem])
            elements.push(el)
        }
        for (el of elements) {
            border.appendChild(el)
        }
        targetDiv.appendChild(border)
    }
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