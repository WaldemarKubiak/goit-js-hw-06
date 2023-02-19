const formLogin = document.querySelector(".login-form");

formLogin.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return console.log("Proszę, uzupełnij puste pola.");
  }

  const userLoginDetails = { Email: email.value, Password: password.value };

  console.log(userLoginDetails);
  event.currentTarget.reset();
}

// console.log(formLogin);
