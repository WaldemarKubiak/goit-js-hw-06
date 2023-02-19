const fontControl = document.querySelector("#font-size-control");
const textView = document.querySelector("#text");

fontControl.addEventListener("input", (event) => {
  textView.style.fontSize = `${event.currentTarget.value}px`;
});

// console.log(fontControl);
// console.log(textView);
