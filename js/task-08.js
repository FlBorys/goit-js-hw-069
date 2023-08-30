const formEl = document.querySelector('.login-form');
const inputElements = formEl.querySelectorAll('input');

formEl.addEventListener('submit', validateForm);

function validateForm(event) {
    event.preventDefault();
    
    let isFormValid = true;
    inputElements.forEach(inputEl => {
        if (inputEl.value === '') {
            isFormValid = false;
        }
    });    
    if (!isFormValid) {
        alert('Будь ласка, заповніть усі поля перед відправленням форми.');
        return false;
    } else {
        onSubmit(event);
        formEl.reset();
    }        
}

function onSubmit(event) {
    

    const { email, password } = event.target.elements;
    const data = {
        email: email.value,
        password: password.value,
    };
    console.log(data);
}


