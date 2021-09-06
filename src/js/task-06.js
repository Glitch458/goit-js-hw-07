const input = document.querySelector("#validation-input");

input.addEventListener("blur", () => {
  if (input.value.length === 6) {
    if (input.classList.contains("invalid")) {
      input.classList.replace("invalid", "valid");
    } else {
      input.classList.add("valid");
    }
  } else {
    if (input.classList.contains("valid")) {
      input.classList.replace("valid", "invalid");
    } else {
      input.classList.add("invalid");
    }
  }
});
