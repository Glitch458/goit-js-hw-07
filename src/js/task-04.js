const counterValue = document.querySelector("#value");

let value = 0;

const incrementBtn = document.querySelector('[data-action="increment"');
incrementBtn.addEventListener("click", () => {
  counterValue.textContent = value += 1;
});

const decrementBtn = document.querySelector('[data-action="decrement"');
decrementBtn.addEventListener("click", () => {
  counterValue.textContent = value -= 1;
});
