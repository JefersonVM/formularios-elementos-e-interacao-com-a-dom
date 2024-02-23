const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const ageInput = document.querySelector("#age");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const errors = [];

  if (nameInput.value.trim() === "") {
    errors.push("Nome é obrigatório");
  }

  if (emailInput.value.trim() === "") {
    errors.push("Email é obrigatório");
  }

  if (ageInput.value.trim() === "") {
    errors.push("Idade é obrigatório");
  }

  if (errors.length) {
    alert(errors.join("\n"));
    return;
  }

  alert("Formulário enviado com sucesso!");
  form.reset();
});
