const form = document.getElementById("name-input");
const listener = document.getElementById("name-output");

form.addEventListener('input', OnInputChange);
function OnInputChange(event) {
    console.log(event.currentTarget.value);
    
    if (event.currentTarget.value.trim() === "") {
        listener.textContent = "Anonymous";
    }
        else {
            listener.textContent = event.currentTarget.value.trim();
        }
};