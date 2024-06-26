const invokeIPCSync = window.ipcCallSync
const invokeIPC = window.ipcCall

function checkLogins() {
    const usr = document.querySelector('#username')
    const psw = document.querySelector('#password')
    const username = usr.value
    const password = psw.value
    usr.value = ''
    psw.value = ''
    if (invokeIPCSync('checkLogins', username, password)) {
        const link = document.querySelector('.enter')
        const profile = document.querySelector('#usertype')
        if (profile.value == 'Employee') {
            link.href = "dashboard.html"
        } else if (profile.value == 'Supplier') {
            link.href = "suppDashboard.html"
        }
        link.dispatchEvent(new MouseEvent('click'))
    } else {
        showToast('Incorrect password/username combination')
    }
}

const signupDoc = document.getElementById('signup-form')
if (signupDoc) {
    signupDoc.addEventListener('submit', (event) => {
    
        event.preventDefault()
    
        const psw = document.getElementById('password')
        const confirmPsw = document.getElementById('confirm-password')
        const usr = document.getElementById('username')
        const mail = document.getElementById('email')
        const username = usr.value
        const password = psw.value
        const confirmPassword = confirmPsw.value
        const email = mail.value
    
        if (password !== confirmPassword) {
            showToast('Passwords do not match!')
        } else {
            psw.value = ''
            usr.value = ''
            confirmPsw.value = ''
            mail.value = ''
    
            let employeeID = ''
            const dateArr = new Date().toString().split(' ')
            dateArr.splice(-4, 4)
            employeeID = dateArr.join('').replace(/:/g, '').slice(6)
    
            const firstName = ''
            
            const query = `insert into Employee values ("${employeeID}", "${firstName}", "${username}", "${password}", "${email}")`
            invokeIPC('addDBAccount', query)
            document.querySelector('.toLogin').dispatchEvent(new MouseEvent('click'))
            showToast('Account created. Sign in')
        }
    })
}



function showToast(message) {
    const toastContainer = document.querySelector('body')
    const toast = document.createElement('div')
    toast.classList.add('toast')
    toast.textContent = message
    toastContainer.appendChild(toast)
    setTimeout(() => {
        toastContainer.removeChild(toast)
    }, 1850)
}
