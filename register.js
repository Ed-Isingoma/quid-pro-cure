document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
    } else {
        alert('Sign up successful!');
        // You can add code here to handle the sign-up logic (e.g., sending data to a server)
    }
});
