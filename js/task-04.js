const decBtn = document.querySelector('button[data-action="decrement"]');
const incBtn = document.querySelector('button[data-action="increment"]');
const valueBoard = document.querySelector("#value");

let counterValue = 0;

decBtn.addEventListener("click", () => {
  counterValue -= 1;
  valueBoard.textContent = counterValue;
});

incBtn.addEventListener("click", () => {
  counterValue += 1;
  valueBoard.textContent = counterValue;
});

// console.log(decBtn);
// console.log(incBtn);
// console.log(valueBoard);
// console.log(counterValue);
