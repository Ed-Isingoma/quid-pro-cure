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
        [1, "RFQ1001", "Widget A", 100, 'Delete'],
        [2, "RFQ1002", "Widget B", 200, 'Delete'],
        [3, "RFQ1003", "Gadget C", 150, 'Delete'],
        [4, "RFQ1004", "Gadget D", 250, 'Delete'],
        [5, "RFQ1005", "Device E", 300, 'Delete'],
        [6, "RFQ1006", "Device F", 400, 'Delete'],
        [7, "RFQ1007", "Component G", 350, 'Delete'],
        [8, "RFQ1008", "Component H", 450, 'Delete'],
        [9, "RFQ1009", "Part I", 500, 'Delete'],
        [10, "RFQ1010", "Part J", 600, 'Delete']
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
    5: [
        ['QUO001', 'SUP001', 'RFQ202301', '2023-06-15', 'Standard conditions', 'None', 1500, 'View Details'],
        ['QUO002', 'SUP002', 'RFQ202302', '2023-06-15', 'Urgent delivery required', 'Include product samples', 2200, 'View Details'],
        ['QUO003', 'SUP003', 'RFQ202303', '2023-06-14', 'Bulk order discount applicable', 'No returns accepted', 1800, 'View Details'],
        ['QUO004', 'SUP002', 'RFQ202304', '2023-06-14', 'Payment upon delivery', 'Require signed contract', 1950, 'View Details'],
        ['QUO005', 'SUP001', 'RFQ202305', '2023-06-13', 'Include installation service', 'Delivery to multiple locations', 2800, 'View Details']
    ],
    6: [
        ['QUO001', 'ITEM001', 'Widget A', 'ACCT123', 10, 25.00, 5, 245.00],
        ['QUO002', 'ITEM002', 'Gadget B', 'ACCT456', 5, 50.00, 0, 250.00],
        ['QUO003', 'ITEM003', 'Tool C', 'ACCT789', 8, 15.00, 2, 116.00],
        ['QUO004', 'ITEM002', 'Gadget B', 'ACCT123', 3, 50.00, 0, 150.00],
        ['QUO005', 'ITEM001', 'Widget A', 'ACCT456', 12, 25.00, 8, 284.00],
        ['QUO006', 'ITEM004', 'Accessory D', 'ACCT789', 2, 35.00, 0, 70.00],
        ['QUO007', 'ITEM003', 'Tool C', 'ACCT123', 6, 15.00, 3, 87.00],
        ['QUO008', 'ITEM001', 'Widget A', 'ACCT456', 15, 25.00, 10, 350.00],
        ['QUO009', 'ITEM004', 'Accessory D', 'ACCT789', 4, 35.00, 1, 136.00],
        ['QUO010', 'ITEM002', 'Gadget B', 'ACCT123', 7, 50.00, 5, 350.00]
    ],
    7: [
        ['PR001', 'User1', 'CC1234', 'Rationale 1', 'SUP001', 'SVC001', 'Pending', '2023-06-15', 2500.50, 'Within budget', 'View item details'],
        ['PR002', 'User2', 'CC5678', 'Rationale 2', 'SUP002', 'SVC002', 'Approved', '2023-06-15', 1800.75, 'Over budget', 'View item details'],
        ['PR003', 'User3', 'CC2468', 'Rationale 3', 'SUP003', 'SVC003', 'Pending', '2023-06-14', 3100.25, 'Within budget', 'View item details'],
        ['PR004', 'User4', 'CC1357', 'Rationale 4', 'SUP002', 'SVC004', 'Approved', '2023-06-14', 2200.00, 'Over budget', 'View item details']
    ],
    8: [
        ['PR_ITEM001', 'PR001', 'ACCT123', 'Widget A', 10, 250.00, 5, 2375.00],
        ['PR_ITEM002', 'PR002', 'ACCT456', 'Gadget B', 5, 500.00, 0, 2500.00],
        ['PR_ITEM003', 'PR003', 'ACCT789', 'Tool C', 8, 150.00, 2, 1164.00],
        ['PR_ITEM004', 'PR004', 'ACCT123', 'Gadget B', 3, 500.00, 0, 1500.00],
        ['PR_ITEM005', 'PR005', 'ACCT456', 'Widget A', 12, 250.00, 8, 2708.00],
        ['PR_ITEM006', 'PR006', 'ACCT789', 'Accessory D', 2, 350.00, 0, 700.00],
        ['PR_ITEM007', 'PR007', 'ACCT123', 'Tool C', 6, 150.00, 3, 975.00],
        ['PR_ITEM008', 'PR008', 'ACCT456', 'Widget A', 15, 250.00, 10, 3375.00],
        ['PR_ITEM009', 'PR009', 'ACCT789', 'Accessory D', 4, 350.00, 1, 1365.00],
        ['PR_ITEM010', 'PR010', 'ACCT123', 'Gadget B', 7, 500.00, 5, 3325.00]
    ],
    9: [
        ['PR001', 'MGR001', 'Pending', '2023-06-15', 'Awaiting budget approval'],
        ['PR002', 'MGR002', 'Approved', '2023-06-14', 'Ready for procurement'],
        ['PR003', 'MGR003', 'Pending', '2023-06-13', 'Reviewing supplier quotes'],
        ['PR004', 'MGR001', 'Approved', '2023-06-12', 'Budget allocated'],
        ['PR005', 'MGR002', 'Pending', '2023-06-11', 'Additional documentation required']
    ],
    10: [
        ['PR001', 'EMP001', 'Pending', '2023-06-15', 'Awaiting budget approval', 'Create Purchase Order'],
        ['PR002', 'EMP002', 'Approved', '2023-06-14', 'Ready for procurement', 'Create Purchase Order'],
        ['PR003', 'EMP003', 'Pending', '2023-06-13', 'Reviewing supplier quotes', 'Create Purchase Order'],
        ['PR004', 'EMP001', 'Approved', '2023-06-12', 'Budget allocated', 'Create Purchase Order'],
        ['PR005', 'EMP002', 'Pending', '2023-06-11', 'Additional documentation required', 'Create Purchase Order']
    ],
    11: [
        ['PO001', 'PR001', '2023-06-15', 'Create Delivery Note'],
        ['PO002', 'PR002', '2023-06-14', 'Create Delivery Note'],
        ['PO003', 'PR003', '2023-06-13', 'Create Delivery Note'],
        ['PO004', 'PR004', '2023-06-12', 'Create Delivery Note'],
        ['PO005', 'PR005', '2023-06-11', 'Create Delivery Note']
    ],
    12: [
        ['RFQ001', 'Service A', 5, 'Link to Service'],
        ['RFQ002', 'Service B', 3, 'Link to Service'],
        ['RFQ003', 'Service C', 8, 'Link to Service'],
        ['RFQ004', 'Service D', 2, 'Link to Service'],
        ['RFQ005', 'Service E', 10, 'Link to Service']
    ],
    13: [
        ['QUO001', 'ITEM001', 'Item A', 5, 100, 10, 450],
        ['QUO002', 'ITEM002', 'Item B', 3, 150, 5, 420],
        ['QUO003', 'ITEM003', 'Item C', 8, 80, 0, 640],
        ['QUO004', 'ITEM002', 'Item B', 2, 200, 15, 340],
        ['QUO005', 'ITEM001', 'Item A', 6, 120, 8, 624],
        ['QUO006', 'ITEM004', 'Item D', 4, 180, 12, 633],
        ['QUO007', 'ITEM003', 'Item C', 7, 90, 3, 600],
        ['QUO008', 'ITEM001', 'Item A', 9, 110, 6, 891],
        ['QUO009', 'ITEM004', 'Item D', 3, 160, 10, 432],
        ['QUO010', 'ITEM002', 'Item B', 5, 130, 8, 520]
    ],
    14: [
        ['DN001', 'INV001', 'EMP001', 'Delivered', '2023-06-15', 'Goods received in good condition'],
        ['DN002', 'INV002', 'EMP002', 'Processing', '2023-06-14', 'Awaiting approval for payment'],
        ['DN003', 'INV003', 'EMP003', 'Delivered', '2023-06-13', 'Accepted by customer'],
        ['DN004', 'INV004', 'EMP001', 'Processing', '2023-06-12', 'Additional items requested'],
        ['DN005', 'INV005', 'EMP002', 'Delivered', '2023-06-11', 'Invoice sent to accounting']
    ],
    15: [
        ['INV001', 'PO001', 'DN001', 'EMP001', 'DEP001', 'SUP001', '2023-06-15', '2023-07-15', 'View Item Details'],
        ['INV002', 'PO002', 'DN002', 'EMP002', 'DEP002', 'SUP002', '2023-06-14', '2023-07-14', 'View Item Details'],
        ['INV003', 'PO003', 'DN003', 'EMP003', 'DEP003', 'SUP003', '2023-06-13', '2023-07-13', 'View Item Details'],
        ['INV004', 'PO004', 'DN004', 'EMP001', 'DEP001', 'SUP002', '2023-06-12', '2023-07-12', 'View Item Details'],
        ['INV005', 'PO005', 'DN005', 'EMP002', 'DEP002', 'SUP001', '2023-06-11', '2023-07-11', 'View Item Details']
    ],
    16: [
        ['INV_ITEM001', 'INV001', 'PO001', 'Item A', 10, 50.00, 5, 475.00],
        ['INV_ITEM002', 'INV002', 'PO002', 'Item B', 5, 100.00, 10, 450.00],
        ['INV_ITEM003', 'INV003', 'PO003', 'Item C', 8, 25.00, 0, 200.00],
        ['INV_ITEM004', 'INV004', 'PO004', 'Item D', 2, 150.00, 15, 255.00],
        ['INV_ITEM005', 'INV005', 'PO005', 'Item E', 12, 75.00, 5, 855.00],
        ['INV_ITEM006', 'INV001', 'PO001', 'Item F', 7, 60.00, 3, 399.00],
        ['INV_ITEM007', 'INV002', 'PO002', 'Item G', 4, 80.00, 8, 294.00],
        ['INV_ITEM008', 'INV003', 'PO003', 'Item H', 9, 40.00, 2, 352.00],
        ['INV_ITEM009', 'INV004', 'PO004', 'Item I', 6, 55.00, 4, 318.00],
        ['INV_ITEM010', 'INV005', 'PO005', 'Item J', 11, 30.00, 1, 326.00]
    ],
    17: [
        ['RFQ001', 'Office Supplies', 'Urgent', '2023-06-10', '2023-06-20', 'SUP001', 'Create Quote'],
        ['RFQ002', 'IT Equipment', 'Standard', '2023-06-12', '2023-06-22', 'SUP002', 'Create Quote'],
        ['RFQ003', 'Furniture', 'Priority', '2023-06-14', '2023-06-24', 'SUP003', 'Create Quote'],
        ['RFQ004', 'Stationery', 'Standard', '2023-06-16', '2023-06-26', 'SUP004', 'Create Quote'],
        ['RFQ005', 'Maintenance Services', 'Urgent', '2023-06-18', '2023-06-28', 'SUP005', 'Create Quote']
    ],
    18: [
        ['RFQ_ITEM001', 'Office Chairs', 10],
        ['RFQ_ITEM002', 'Desktop Computers', 5],
        ['RFQ_ITEM003', 'Printer Paper', 20],
        ['RFQ_ITEM004', 'Projectors', 3],
        ['RFQ_ITEM005', 'Whiteboards', 7]
    ],
    19: [
        ['Q_ITEM001', 'QUO001', 'Item A', 10, 50.00, 5, 475.00, 'Delete'],
        ['Q_ITEM002', 'QUO002', 'Item B', 5, 100.00, 10, 450.00, 'Delete'],
        ['Q_ITEM003', 'QUO003', 'Item C', 8, 25.00, 0, 200.00, 'Delete'],
        ['Q_ITEM004', 'QUO004', 'Item D', 2, 150.00, 15, 255.00, 'Delete'],
        ['Q_ITEM005', 'QUO005', 'Item E', 12, 75.00, 5, 855.00, 'Delete'],
        ['Q_ITEM006', 'QUO001', 'Item F', 7, 60.00, 3, 399.00, 'Delete'],
        ['Q_ITEM007', 'QUO002', 'Item G', 4, 80.00, 8, 294.00, 'Delete'],
        ['Q_ITEM008', 'QUO003', 'Item H', 9, 40.00, 2, 352.00, 'Delete'],
        ['Q_ITEM009', 'QUO004', 'Item I', 6, 55.00, 4, 318.00, 'Delete'],
        ['Q_ITEM010', 'QUO005', 'Item J', 11, 30.00, 1, 326.00, 'Delete']
    ],
    20: [
        ['DN001', 'PO001', '2023-06-15', 'Create Invoice'],
        ['DN002', 'PO002', '2023-06-14', 'Create Invoice'],
        ['DN003', 'PO003', '2023-06-13', 'Create Invoice'],
        ['DN004', 'PO004', '2023-06-12', 'Create Invoice'],
        ['DN005', 'PO005', '2023-06-11', 'Create Invoice']
    ],
    21: [
        ['PO_ITEM001', 'PO001', 'Item A', 10, 50.00, 5, 475.00],
        ['PO_ITEM002', 'PO002', 'Item B', 5, 100.00, 10, 450.00],
        ['PO_ITEM003', 'PO003', 'Item C', 8, 25.00, 0, 200.00],
        ['PO_ITEM004', 'PO004', 'Item D', 2, 150.00, 15, 255.00],
        ['PO_ITEM005', 'PO005', 'Item E', 12, 75.00, 5, 855.00],
        ['PO_ITEM006', 'PO001', 'Item F', 7, 60.00, 3, 399.00],
        ['PO_ITEM007', 'PO002', 'Item G', 4, 80.00, 8, 294.00],
        ['PO_ITEM008', 'PO003', 'Item H', 9, 40.00, 2, 352.00],
        ['PO_ITEM009', 'PO004', 'Item I', 6, 55.00, 4, 318.00],
        ['PO_ITEM010', 'PO005', 'Item J', 11, 30.00, 1, 326.00]
    ],
    22: [
        ['SUP001', 'RFQ001', 'QUO001', '2023-06-10', 'Pending', 'PR001', 'PO001', 1500.00, 'Unpaid', 'View Quote Details'],
        ['SUP002', 'RFQ002', 'QUO002', '2023-06-11', 'Approved', 'PR002', 'PO002', 2000.00, 'Paid', 'View Quote Details'],
        ['SUP003', 'RFQ003', 'QUO003', '2023-06-12', 'Rejected', 'PR003', 'PO003', 2500.00, 'Unpaid', 'View Quote Details'],
        ['SUP004', 'RFQ004', 'QUO004', '2023-06-13', 'Pending', 'PR004', 'PO004', 3000.00, 'Paid', 'View Quote Details'],
        ['SUP005', 'RFQ005', 'QUO005', '2023-06-14', 'Approved', 'PR005', 'PO005', 3500.00, 'Unpaid', 'View Quote Details']
    ],
    23: [
        ['Select Item', 'PO_ITEM001', 'PO001', 'Item A', 10, 50.00, 5, 475.00],
        ['Select Item', 'PO_ITEM002', 'PO002', 'Item B', 5, 100.00, 10, 450.00],
        ['Select Item', 'PO_ITEM003', 'PO003', 'Item C', 8, 25.00, 0, 200.00],
        ['Select Item', 'PO_ITEM004', 'PO004', 'Item D', 2, 150.00, 15, 255.00],
        ['Select Item', 'PO_ITEM005', 'PO005', 'Item E', 12, 75.00, 5, 855.00],
        ['Select Item', 'PO_ITEM006', 'PO001', 'Item F', 7, 60.00, 3, 399.00],
        ['Select Item', 'PO_ITEM007', 'PO002', 'Item G', 4, 80.00, 8, 294.00],
        ['Select Item', 'PO_ITEM008', 'PO003', 'Item H', 9, 40.00, 2, 352.00],
        ['Select Item', 'PO_ITEM009', 'PO004', 'Item I', 6, 55.00, 4, 318.00],
        ['Select Item', 'PO_ITEM010', 'PO005', 'Item J', 11, 30.00, 1, 326.00]
    ]
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
                    'Add RFQ Item': 'createRFQ'
                }
            }
        },
        3: {
            title: 'RFQ Item Details',
            tableCols: {
                id: 2,
                names: ['RFQ_Item_ID', 'RFQ_Number', 'RFQ_Item_Description', 'RFQ_Item_Qty', ''],
                button: {
                    'Delete': 'deleteFromTable'
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
            searchMetric: ["Search by Quote Number", 1],
            tableCols: {
                id: 5,
                names: ['Quotation_ID', 'Supplier_ID', 'RFQ_Number', 'Date_created', 'conditions', 'Special_instruction', 'Q_Cost', ''],
                button: {
                    'View Details': 'viewQuoteDetails'
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
            searchMetric: ['Search by Purchase Request Number', 1],
            tableCols: {
                id: 7,
                names: ['PR_ID', 'Requestor', 'CC_Number', 'Rationale', 'Supplier_ID', 'Service_ID', 'Status', 'Date_Created', 'Total- include VAT', 'Budget Status', ''],
                button: {
                    'View item details': 'viewingItemDetails',
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
                    'Create Purchase Order': 'processApprovedPR'
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
            tableCols: {
                id: 23,
                names: ['Select Item', 'Purchase_Order_Item_ID', 'Purchase_Order_ID', 'Item_Description', 'Quantity', 'Amount', 'Discount', 'Total'],
                vATandTotalsTarget: 'Total'
            },
        }
    },
    invoiceAwaitingApproval: {
        1 : {
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
            title: '#',
            searchMetric: ['Search by Quote Number', 1],
            tableCols: {
                id: 15,
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
                id: 16,
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
                id: 18,
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
                    'Add Quotation Item': 'proceedWithQuote'
                }
            }
        },
        3 : {
            title: 'Quotation Items Details',
            tableCols: {
                id: 19,
                names: ['Quotation Item ID', 'Quotation Id', 'Quotation_Item_Desc', 'Quotation_Item_Qty', 'Quotation_Item_Amt', 'Quotation_Item_Dscnt(%)', 'Total', ''],
                button: {
                    'Delete': 'deleteFromTable'
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
            searchMetric: ['Search by RFQ Number', 2],
            tableCols: {
                id: 22,
                names: ['Supplier_ID', 'RFQ_Number', 'Quotation_ID', 'Date_Quoted', 'QStatus', 'Purchase_Request_ID', 'Purchase_Order_ID', 'Amount Invoiced', 'Payment Status', ''],
                button: {
                    'View Quote Details': 'submittedQuotation'
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

function confirmThenCall(event, buttonName, funcName){
    if (confirm(`${buttonName}?`)) {
        if (funcName == 'deleteFromTable') {
            deleteFromTable(event)
        } else {
            showPage(funcName)
            showToast(`'${buttonName}' executed.`)
        }
    }
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
-editIndex ... arr (means that save and cancel buttons appear)
-button
-vATandTotalsTarget ... single val
*/

function setNavButtons(pgName){
    if (sequencePointer.length>0 && sequencePointer[currentPoint] == pgName) return
    if (currentPoint != null) {
        sequencePointer.splice(currentPoint+1, sequencePointer.length-currentPoint)
        currentPoint+=1
    } else {
        currentPoint = 0
    }
    sequencePointer.push(pgName)
}

function nextPg(){
    if (!sequencePointer.length || currentPoint == sequencePointer.length-1) return
    currentPoint+=1
    showPage(sequencePointer[currentPoint])
}

function prevPg(){
    if(!sequencePointer.length || currentPoint == 0) return
    currentPoint-=1
    showPage(sequencePointer[currentPoint])
}

function getElPosition(element) {
    let index = -1 //because of the header
    while (element = element.previousElementSibling) {
        index++
    }
    return index
}

function deleteFromTable(ev){
    const row = ev.target.parentElement.parentElement
    const index = getElPosition(row)
    const table = row.parentElement
    table.removeChild(row)
    archive[table.dataset.tableID].splice(index,1)
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
            button.onclick = (event) => confirmThenCall(event, event.target.innerHTML, button.dataset.clickRun)
        } else {
            button.onclick = (event) => {
                if (button.dataset.clickRun == 'deleteFromTable') {
                    deleteFromTable(event)
                } else {
                    showPage(button.dataset.clickRun)
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
    divs.forEach((el)=>{
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
                    const td = row.querySelector(`td:nth-child(${num+1})`)
                    inputEl.value = td.innerHTML
                    td.innerHTML = ''
                    inputEl.readOnly = true
                    td.appendChild(inputEl)
                    row.style.position = 'relative'
                }
                row.ondblclick = ()=> {
                    row.querySelectorAll('input').forEach((el)=>{
                        el.readOnly = false
                        el.style.backgroundColor = 'white'
                    })
                    const saveBtn = document.createElement('button')
                    const cancelBtn = document.createElement('button')
                    saveBtn.classList.add('editIndexBtn', 'editSave')
                    cancelBtn.classList.add('editIndexBtn', 'cancelSave')
                    saveBtn.onclick = clickedEditBtn
                }
            }
            if ('button' in colsObj) {
                const el = row.querySelector('td:last-child')
                const button = document.createElement('button')
                const buttonWrds = el.innerHTML
                button.className = 'pgButton'
                button.onclick = (event) => confirmThenCall(event, buttonWrds, colsObj.button[buttonWrds])
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
                total+= +record[record.length-1]
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

function clickedEditBtn() {
    row.querySelectorAll('input').forEach((el)=>{
        el.readOnly = true
        el.style.backgroundColor = 'transparent'
    })
    document.querySelectorAll('.editIndexBtn').forEach((el)=> el.remove())
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