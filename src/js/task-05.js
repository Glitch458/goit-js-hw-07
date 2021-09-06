const output = document.querySelector("#name-output");
const input = document.querySelector("#name-input");

input.addEventListener("input", () => {
  if (input.value === "") {
    output.textContent = "незнакомец";
  } else {
    output.textContent = input.value;
  }
});
console.dir(input);
