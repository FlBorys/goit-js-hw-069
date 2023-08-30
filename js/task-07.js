const inputSize = document.getElementById('font-size-control');
const frontSizeSpan = document.getElementById('text');

inputSize.addEventListener('input', onInputSize);
function onInputSize(event) {
    frontSizeSpan.style.fontSize = `${event.currentTarget.value}px`;
};
