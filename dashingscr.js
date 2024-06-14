/*
##make a function that creates tables, which takes in arguments of column count, plus array of columns. then function also populates table. takes in argument as sequence of sequences of row values, and also whether it's a double-click table or not. And when there is not data to enter into table, says 'No table data yet'
##then function for confirmatory prompts
##function for creating sub-tables when a double-click occurs. same as the one which populates this table?
##function for appending inputs with their labels into div. there's text fields and normal input fields
##then function for appending buttons
##infact, function for creating those " " title divs
##function that sets the right-click menu items depending on which page we're in
##function that does the VAT and total of Totals
##functions that adds a search and its button. This one is a form
##function that clears page of divs. Stores certain data in a global variable sothat 'back' button can use this data
##function that handles click of back button. It clears page without setting global variable data and then makes the global variable data to get onto the page, and then disables the 'back' functionality
##function that refreshes the table. Checks whether the given table record is nolonger fit to be there and also checks whether table is now empty, to append a 'No data in table yet'
##function that makes row fields editable and puts Save and Cancel buttons

*/
const archive = {
    0: {
        "record1": ["RFQ1234567", "PR1234567", "PO1234567", "INV1234567"],
        "record2": ["RFQ2345678", "PR2345678", "PO2345678", "INV2345678"],
        "record3": ["RFQ3456789", "PR3456789", "PO3456789", "INV3456789"],
        "record4": ["RFQ4567890", "PR4567890", "PO4567890", "INV4567890"],
        "record5": ["RFQ5678901", "PR5678901", "PO5678901", "INV5678901"],
        "record6": ["RFQ6789012", "PR6789012", "PO6789012", "INV6789012"],
        "record7": ["RFQ7890123", "PR7890123", "PO7890123", "INV7890123"],
        "record8": ["RFQ8901234", "PR8901234", "PO8901234", "INV8901234"],
        "record9": ["RFQ9012345", "PR9012345", "PO9012345", "INV9012345"],
        "record10": ["RFQ0123456", "PR0123456", "PO0123456", "INV0123456"]
      },
    1: {},
    2: {},
    3: {},
    4: {},
    5: {},
    6: {},
    7: {},
    8: {},
    9: {},

}

const pages = {
    home: {
        'Procurement- Performance and Accounts Payable': {
            tableCols: {
                id: 0,
                names: ['Request for quote', 'Purchase request', 'Purchase order', 'Invoice']
            }
        }
    },
    createRFQ: {
        'Procurement- Request for Quotation': {
            smallInputs: ['RFQ number', 'Employee ID', 'RFQ Date Created', 'RFQ Closing date'],
            largeInputs: ['RFQ Description', 'RFQ Conditions/criteria'],
            buttons: {
                names: {
                    'Generate RFQ number': '',
                    'Cancel RFQ': ''
                },
                confirmAt: ['Generate RFQ number']
            }
        },
        'RFQ Item': {
            tableCols: {
                id: 1,
                names: ['RFQ_Item_ID', 'RFQ_Number', 'RFQ_Item_Description', 'RFQ_Item_Qty']
            },
            buttons: {
                names: {
                    'Add RFQ Item': ''
                }
            }
        },
        'RFQ Item Details': {
            tableCols: {
                id: 2,
                names: ['RFQ_Item_ID', 'RFQ_Number', 'RFQ_Item_Description', 'RFQ_Item_Qty']
            },
            contextMenu: {
                'Delete': ''
            }
        }
    },
    processRFQ: {
        'Procurement- Purchase Requisition Information': {
            searchLabel: 'Search by RFQ Number',
            tableCols: {
                id: 3,
                names: ['RFQ_Number', 'RFQ_Description', 'RFQ_Condition', 'RFQ_Date_Created', 'RFQ_Date_Expiry'],
                subtableCols: {
                    names: ['RFQ_Item_ID', 'RFQ_Item_Description', 'RFQ_Item_Qty'],
                    contextMenu: {
                        'Link to service': ''
                    }
                }
            }
        }
    },
    linkRFQtoService: {
        'Procurement- Request for Quotation Supplier Selection': {
            smallInputs: ['RFQ number', 'Employee ID', 'RFQ date created', 'RFQ closing date'],
            largeInputs: ['RFQ description', 'RFQ condition/criteria', 'Service description', 'Account Description'],
            selectInputs: ['Type of service', 'Account Number'],
            buttons: {
                names: {
                    'Link RFQ to Service': ''
                },
                confirmAt: ['Link RFQ to Service']
            }
        },
        'List of suppliers that provide linked service': {
            tableCols: {
                id: 4,
                names: ['Select_Supplier', 'Supplier_ID', 'Company_Name', 'Contact_person_email', 'Freeze_flag']
            },
            buttons: {
                names: {
                    'Send notification email to selected suppliers': ''
                }
            }
        }
    },
    processQuotation: {
        "Quotation Information": {
            searchLabel: "Search by Quote Number",
            tableCols: {
                id: 5,
                names: ['Quotation_ID', 'Supplier_ID', 'RFQ_Number', 'Date_created', 'conditions', 'Special_instruction', 'Q_Cost'],
                subtableCols: {
                    names: ['Quotation_ID', 'Item_ID', 'Item Description', 'Quantity', 'Unit Price', 'Discount', 'Total'],
                    innerButtons: {
                        names: {
                            'Create Purchase Request': 'creatingPurchaseRequest',
                            'Reject Quotation': 'thrownQuotation'
                        },
                        confirmAt: ['Create Purchase Request', 'Reject Quotation']
                    },
                    vATandTotalsTarget: 'Total'
                }
            }
        }
    },
    thrownQuotation: {
        'Rejected Quotation': {
            smallInputs: ['Quotation ID'],
            largeInputs: ['Comments'],
            buttons: ['Submit']
        }
    },
    creatingPurchaseRequest: {
        'Purchase Requisitions (PR)': {
            smallInputs: ['Employee ID', 'Employee Name', 'Date Created', 'Department ID', 'Department Name', 'Quotation ID', 'Supplier ID', 'Supplier Name', 'RFQ Number', 'Cost Center Number', 'Service ID', 'Status'],
            largeInputs: ['Cost Center Description', 'Service Description', 'Rationale/Comments'],
            buttons: {
                names: {
                    'Generate PR': '',
                    'Back to Quotation': ''
                },
                confirmAt: ['Generate PR', 'Back to Quotation']
            }
        },
        'Purchase Request Item details': {
            tableCols: {
                id: 6,
                names: ['Quotation_ID', 'Item ID', 'Item Description', 'Account Number', 'Quantity', 'Unit Price', 'Discount', 'Total'],
                vATandTotalsTarget: 'Total'
            }
        }
    },
    purchaseReqAwaiting: {
        'Purchase Request Information': {
            searchLabel: 'Search by Purchase Request Number',
            tableCols: {
                id: 7,
                names: ['PR_ID', 'Requestor', 'CC_Number', 'Rationale', 'Supplier_ID', 'Service_ID', 'Status', 'Date_Created', 'Total- include VAT', 'Budget Status'],
                contextMenu: {
                    'View item details': 'viewingItemDetails',
                    'Approvals': ''
                }
            }
        }
    },
    viewingItemDetails: {
        'Procurement- Purchase Requisitions Information': {
            smallInputs: ['Purchase Request ID', 'RFQ Number', 'Quotation ID', 'Employee ID', 'Employee Name', 'Date created', 'Department ID', 'Department Name', 'Supplier ID', 'Supplier Name', 'Supplier Status', 'Service ID'],
            largeInputs: ['Service Description', 'Rationale'],
            buttons: {
                names: {
                    'Go to Approval': 'goneToApprove'
                },
                confirmAt: ['Go to Approval']
            }
        },
        'Budget Information': {
            smallInputs: ['CC_Number', 'CC_Balance', 'CC_Status', 'Account_Number', 'Account_Balance', 'Account_Status']
        },
        'Purchase Request Item details': {
            tableCols: {
                id: 8,
                names: ['Purchase_Request_Item_ID', 'Purchase_Request_ID', 'Account_Number', 'Item_Description', 'Quantity', 'Amount', 'Discount', 'Total'],
                vATandTotalsTarget: 'Total'
            }
        }
    },
    goneToApprove: {
        'Purchase Request awaiting Approvals': {
            tableCols: {
                id: 9,
                names: ['Purchase_Request_ID', 'Manager_ID', 'Status', 'Date Updated', 'Comments'],
                editIndex: [2, 4]
            }
        }
    },
    processApprovedPR: {
        'Procurement- Process Approved Purchase Request': {
            tableCols: {
                id: 10,
                names: ['Purchase_Request_ID', 'Employee_ID', 'Status', 'Date Updated', 'Comments'],
                contextMenu: {
                    'Create Purchase Order': ''
                }
            }
        }
    },
    processDeliveryNote: {
        'Procurement- Process Delivery Note or Voucher': {
            tableCols: {
                id: 11,
                names: ['Purchase_Order_ID', 'Purchase_Request_ID', 'Date_created'],
                contextMenu: {
                    'Create Delivery Note': 'creatingDelivNote'
                }
            }
        }
    },
    creatingDelivNote: {
        'Procurement- Delivery Note or Voucher': {
            smallInputs: ['Purchase_Order_ID', 'Purchase_Request_ID', 'PO Date Created', 'Employee ID', 'Employee Name', 'Department ID', 'Department Name', 'Supplier ID', 'Supplier Name'],
            buttons: {
                names: {
                    'Process Delivery Note': 'processDeliveryNote'
                }
            }
        },
        'Delivered Item details': {
            tableCols: ['Select Item', 'Purchase_Order_Item_ID', 'Purchase_Order_ID', 'Item_Description', 'Quantity', 'Amount', 'Discount', 'Total'],
            vATandTotalsTarget: 'Total'
        }
    },
    invoiceAwaitingApproval: {
        'Invoices Awaiting Approval': {
            tableCols: {
                names: ['Delivery_Note_ID', 'Invoice_ID', 'Employee_ID', 'RStatus', 'Date_created', 'Comment'],
                editIndex: [3, 5]
            }
        }
    },
    trackInvoice: {
        searchLabel: 'Search by Quote Number',
        tableCols: {
            names: ['Invoice_ID', 'Purchase_Order_ID', 'Delivery_Note_ID', 'Employee_ID', 'Department_ID', 'Supplier_ID', 'Date_captured', 'Due_Date'],
            contextMenu: {
                'View Item Details': 'itemDetails'
            }
        }
    },
    itemDetails: {
        'Tax Invoice': {
            smallInputs: ['Invoice_ID', 'Delivery_Note_ID', 'Purchase_Order_ID', 'Delivered Date', 'Employee ID', 'Employee Name', 'Department ID', 'Department Name', 'Tax Reference', 'Supplier ID', 'Supplier Name', 'Supplier VAT'],
            buttons: {
                names: {
                    'Make Payment': 'trackInvoice'
                },
                confirmAt: ['Make Payment']
            }
        },
        'Invoice Item details': {
            tableCols: {
                names: ['Invoice_Item_ID', 'Invoice_ID', 'Purchase_Order_ID', 'Item Description', 'Quantity', 'Amount', 'Discount', 'Total'],
                vATandTotalsTarget: 'Total'
            }
        }
    },
    availableRFQ: {
        'Purchase Order to be invoiced': {
            tableCols: {
                names: ['RFQ_Number', 'RFQ_Description', 'RFQ_Condition', 'RFQ_Date_created', 'RFQ_Date_expiry', 'Supplier_ID'],
                contextMenu: {
                    'Create Quote': 'createQuote'
                }
            }
        }
    },
    createQuote: {
        'Quotation- Request for Quote Available To Date': {
            smallInputs: ['RFQ_Number', 'RFQ_Date_created', 'RFQ_Date_Expiry'],
            largeInputs: ['RFQ_Description', 'RFQ_Condition'],
            buttons: {
                names: {
                    'Proceed with Quote': 'proceedWithQuote'
                },
                confirmAt: ['Proceed with Quote']
            }
        },
        'RFQ Items Details Information': {
            tableCols: {
                names: ['RFQ_Item_ID', 'RFQ_Item_Description', 'RFQ_Item_Qty']
            }
        }
    },
    proceedWithQuote: {
        'Quotation- Quotation (Q)': {
            smallInputs: ['Quotation ID', 'Supplier ID', 'Supplier Name', 'RFQ Number', 'Date Submitted'],
            largeInputs: ['RFQ_Description', 'Conditions/Requirements', 'Special Instructions'],
            buttons: {
                names: {
                    'Generate Q Number': 'proceedWithQuote',
                    'Clear Quote': '',
                    confirmAt: ['Generate Q Number']
                }
            }
        },
        'Quotation Items': {
            smallInputs: ['Quotation Item Description', 'Qty', 'Amount', 'Discount'],
            buttons: {
                names: {
                    'Add Quotation Item': ''
                }
            }
        },
        'Quotation Items Details': {
            tableCols: {
                names: ['Quotation Item ID', 'Quotation Id', 'Quotation_Item_Description', 'Quotation_Item_Qty', 'Quotation_Item_Amt', 'Quotation_Item_Discount (%)', 'Total'],
                contextMenu: {
                    'Delete': ''
                },
                vATandTotalsTarget: 'Total'
            }
        }
    },
    purchaseOrder2Binvoiced: {
        'Purchase Order to be Invoiced': {
            tableCols: {
                names: ['Delivery_Note_ID', 'Purchase_Order_ID', 'Date_created'],
                contextMenu: {
                    'Create Invoice': 'creatingInvoice'
                }
            }
        }
    },
    creatingInvoice: {
        'Tax Invoice': {
            smallInputs: ['Delivery_Note_ID', 'Purchase_Order_ID', 'Delivered Date', 'Employee ID', 'Employee Name', 'Department ID', 'Department Name', 'Tax Reference', 'Supplier ID', 'Supplier Name', 'Supplier VAT'],
            buttons: {
                names: {
                    'Create Invoice': 'purchaseOrder2Binvoiced'
                },
                confirmAt: 'Create Invoice'
            }
        },
        'Invoice Item details': {
            tableCols: {
                names: ['Purchase_Order_Item_ID', 'Purchase_Order_ID', 'Item Description', 'Quantity', 'Amount', 'Discount', 'Total'],
                vATandTotalsTarget: 'Total' //the VAT part wasnt there
            }
        }
    },
    submittedQuotation: {
        'Procurement- Purchase Requisition Information': {
            searchLabel: 'Search by RFQ Number',
            tableCols: {
                names: ['Supplier_ID', 'RFQ_Number', 'Quotation_ID', 'Date_Quoted', 'QStatus', 'Purchase_Request_ID', 'Purchase_Order_ID', 'Amount Invoiced', 'Payment Status'],
                contextMenu: {
                    'View Quote Details': ''
                }
            }
        }
    }
}

const layoutHandlers = {
    // searchLabel: handleSearch,
    smallInputs: handleSmallInputs,
    largeInputs: handleLargeInputs,
    // selectInputs: handleselectInputs,
    buttons: handleButtons,
    tableCols: handleTableCols,
    // extras: handleExtras,
}
/*
>page name 
>>layout name
+searchLabel ... single val
+smallInputs ... arr of labels
+largeInputs ... arr of labels
+selectInputs ... arr
+buttons
-names ... obj  -name: function to be called
-confirmAt ... arr
+tableCols
-names ... arr
-editIndex ... arr (means that save and cancel buttons appear)
-contextMenu ... obj  -menuItem: function to be called
-vATandTotalsTarget ... single val
-subtableCols   (presence of this means there's a double-click event)
--names ... arr
--contextMenu ... obj  -menuItem: function to be called
--innerButtons (object, like buttons)
--vATandTotalsTarget ... single val
*/

function handleButtons(item){

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
    const header = document.createElement('tr')
    for (column of colsObj.names) {
        const col = document.createElement('th')
        col.className = 'headerCol'
        col.innerHTML = column
        header.appendChild(col)
    }
    table.appendChild(header)
    const data = fetchData(colsObj.id)
    if (Object.keys(data).length == 0) {
        const emptiesRow = document.createElement('tr')
        const emptyCol = document.createElement('td')
        emptyCol.innerHTML = 'No data to display yet'
        emptyCol.className = 'emptyCol'
        emptyCol.colSpan = colsObj['names'].length
        emptiesRow.appendChild(emptyCol)
        table.appendChild(emptiesRow)
    } else {
        for (record in data) {
            const row = document.createElement('tr')
            if ('contextMenu' in colsObj) {
                row.classList.add('contextable')
            }
            for (colnum in colsObj.names) {
                const datacol = document.createElement('td')
                datacol.classList.add('bodyCol')
                datacol.innerHTML = data[record][colnum]
                row.appendChild(datacol)
            }
            if ('editable' in colsObj) {
                for (num of editable) {
                    row.querySelector(`td:nth-child(${num+1})`).classList.add('editable')
                }
            }
            table.appendChild(row)
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
        const elements = []
        for (layoutItem in pages[pgname][layout]) {
            const el = layoutHandlers[layoutItem](pages[pgname][layout][layoutItem])
            elements.push(el)
        }
        for (el of elements){
            targetDiv.appendChild(el)
        }
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