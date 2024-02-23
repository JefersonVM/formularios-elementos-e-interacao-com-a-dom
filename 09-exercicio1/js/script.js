const form = document.querySelector("form");
const inputName = document.querySelector("#input-name");
const inputEmail = document.querySelector("#input-email");
const inputPassword = document.querySelector("#input-password");
const inputConfirmPassword = document.querySelector("#input-confirm-password");
const acceptTerms = document.querySelector("#accept");
const strong = document.querySelector("strong");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  strong.innerHTML = "";

  if (inputName.value.length < 10) {
    strong.innerHTML = "Nome precisa ter no mínimo 10 caracteres";
    return;
  }

  if (inputEmail.value.indexOf("hotmail") === -1) {
    strong.innerHTML = "Só aceitamos email da hotmail";
    return;
  }

  if (inputPassword.value !== inputConfirmPassword.value) {
    strong.innerHTML = "Senhas não conferem";
    return;
  } else if (!acceptTerms.checked) {
    strong.innerHTML = "Aceite os termos";
    return;
  } else {
    strong.innerHTML = "Formulário enviado com sucesso!";
  }

  const data = {
    name: inputName.value,
    email: inputEmail.value,
    password: inputPassword.value,
  };
  console.log(data);
});
