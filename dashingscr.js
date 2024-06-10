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