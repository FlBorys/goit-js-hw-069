const btnClickIncrease = document.querySelector('button[data-action="increment"]');
const btnClickDecrease = document.querySelector('button[data-action="decrement"]');
const initialValue = document.getElementById("value");

let counterValue = 0;
btnClickIncrease.addEventListener("click", function () {
    counterValue += 1;
    initialValue.textContent = countValue;
});

btnClickDecrease.addEventListener("click", function () {
    counterValue -= 1;
    initialValue.textContent = countValue;
});