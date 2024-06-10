function checkLogins() {
    const usr = document.querySelector('#username')
    const psw = document.querySelector('#password')
    const username = usr.value
    const password = psw.value
    usr.value = ''
    psw.value = ''
    if (username == 'testuser' && password == 'abc123') {
        const link = document.querySelector('.enter')
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
