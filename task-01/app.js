document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.getElementById('email');
    const password = document.getElementById('password');

    if (!email.validity.valid) {
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
    }

    if (password.value.length < 6) {
        password.classList.add('is-invalid');
    } else {
        password.classList.remove('is-invalid');
    }

    if (email.validity.valid && password.value.length >= 6) {
        console.log('Logging in with:', {
            email: email.value,
            password: password.value
        });
    }
});