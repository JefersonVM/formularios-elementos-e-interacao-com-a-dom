const formRegister = document.querySelector(".form-register");

formRegister.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = formRegister.querySelector("#input-name").value;
  const useremail = formRegister.querySelector("#input-email").value;
  console.log(username, useremail);
  if (username && useremail) {
    formRegister.reset();
  }

  if (!username) {
    formRegister.querySelector("#input-name").classList.add("error");
  }
  if (!useremail) {
    formRegister.querySelector("#input-email").classList.add("error");
  }
});
