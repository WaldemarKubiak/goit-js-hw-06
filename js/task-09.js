function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const changeColBtn = document.querySelector(".change-color");
const colorValue = document.querySelector(".color");

const changeColor = () => {
  body.style.backgroundColor = getRandomHexColor();
  colorValue.textContent = getRandomHexColor();
};

changeColBtn.addEventListener("click", changeColor);

// console.log(body);
// console.log(changeColBtn);
// console.log(getRandomHexColor());
