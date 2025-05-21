document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('login-btn');
    const loginInput = document.getElementById('login');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');
    const successOverlay = document.getElementById('success-overlay');

    const correctLogin = "login";
    const correctPassword = "password";
    const redirectUrl = "kopTomain.html";

    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.style.display = 'block';
    }

    function hideError() {
        errorMessage.style.display = 'none';
    }

    function showSuccessOverlay(url) {
        successOverlay.textContent = 'Успешная авторизация!';
        successOverlay.classList.add('active');
        setTimeout(() => {
            window.location.href = url;
        }, 1000);
    }

    loginBtn.addEventListener('click', function() {
        const login = loginInput.value.trim();
        const password = passwordInput.value;

        hideError();

        if (!login || !password) {
            showError("Пожалуйста, заполните все поля!");
            return;
        }

        if (login === correctLogin && password === correctPassword) {
            showSuccessOverlay(redirectUrl);
        } else {
            showError("Неправильный логин или пароль!");
        }
    });

    loginInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            loginBtn.click();
        }
    });

    passwordInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            loginBtn.click();
        }
    });
});