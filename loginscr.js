const invokeIPCSync = window.ipcCallSync

function checkLogins() {
    const usr = document.querySelector('#username')
    const psw = document.querySelector('#password')
    const username = usr.value
    const password =  psw.value
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
