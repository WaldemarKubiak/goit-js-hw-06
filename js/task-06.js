const textInput = document.querySelector("#validation-input");

textInput.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length === Number(textInput.dataset.length)) {
    textInput.classList.add("valid");
    if (textInput.classList.contains("invalid")) {
      textInput.classList.remove("invalid");
    }
  } else {
    textInput.classList.add("invalid");
    if (textInput.classList.contains("valid")) {
      textInput.classList.remove("valid");
    }
  }
});

// console.log(textInput);
// console.log(Number(textInput.dataset.length));
