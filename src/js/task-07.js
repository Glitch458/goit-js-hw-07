const text = document.querySelector("#text");
const sizeController = document.querySelector("#font-size-control");

sizeController.addEventListener("input", () => {
  text.style.fontSize = `${sizeController.value}px`;
});
