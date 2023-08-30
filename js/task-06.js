const form = document.getElementById("validation-input");
form.addEventListener('blur', onInputBlur);
function onInputBlur(event) {
    if (event.currentTarget.value.length >= form.getAttribute('data-length')) {
        form.className = 'valid';
    }
    else { form.className = 'invalid'; }
}