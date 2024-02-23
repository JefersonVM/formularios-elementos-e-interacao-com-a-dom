const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const periodSelect = document.querySelector("#period");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const errors = [];

  if (nameInput.value.trim() === "") {
    errors.push("Nome é obrigatório");
  }

  if (emailInput.value.trim() === "") {
    errors.push("Email é obrigatório");
  }

  if (periodSelect.value === "") {
    errors.push("Período é obrigatório");
  }

  if (errors.length) {
    alert(errors.join("\n"));
    return;
  }

  {
    const name = nameInput.value;
    const email = emailInput.value;
    const period = periodSelect.options[periodSelect.selectedIndex].text;

    console.log({ name, email, period });
  }

  alert("Formulário enviado com sucesso!");
  form.reset();
});
