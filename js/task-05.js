const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
  textOutput.textContent = event.currentTarget.value;

  if (event.currentTarget.value === "") {
    return (textOutput.textContent = "Anonymous");
  }
});

// console.log(textInput);
// console.log(textOutput);
