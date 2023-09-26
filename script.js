const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
    e.preventDefault();

    ValidateInputs();
});

const setError = (element, message) => {
    const inputs = element.parentElement;
    const errorout = inputs.querySelector('.error');

    errorout.innerText = message;
    inputs.classList.add('error');
    inputs.classList.remove('success')
}

const setSuccess = (element, message) => {
    const inputs = element.parentElement;
    const errorout = inputs.querySelector('.error');

    errorout.innerText = element;
    inputs.classList.add('success');
    inputs.classList.remove('error')
}

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const ValidateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === '') {
        setError(username, "Username is required")
    } else {
        setSuccess(username);
    }

    if (emailValue === '') {
        setError(email, "Email is required")
    } else if (!isValidEmail(emailValue)) {
        setError(email, "Provide a valid email address.")
    } else {
        setSuccess(email);
    }

    if (passwordValue === '') {
        setError(password, "Password is required")
    } else if (passwordValue.length < 8) {
        setError(password, "Password must be at least 8 character.")
    } else {
        setSuccess(password);
    }

    if (password2Value === '') {
        setError(password2, "Password is required")
    } else {
        setSuccess(password2);
    }
};

