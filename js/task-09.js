const changeColor = document.querySelector('.color');
const changeBackground = document.querySelector('body');
changeBackground.addEventListener('click', getRandomHexColor);

function getRandomHexColor(event) {
  const randomHexColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
  changeBackground.style.backgroundColor = randomHexColor;
  changeColor.textContent = `${randomHexColor}`;
  return randomHexColor;
}

