const radios = document.getElementsByName("type");
const inputPJ = document.querySelector("#input-cnpj");
const inputCPF = document.querySelector("#input-cpf");

for (const radio of radios) {
  radio.addEventListener("change", (e) => {
    if (e.target.value === "company") {
      inputPJ.style.display = "block";
      inputCPF.style.display = "none";
    } else {
      inputPJ.style.display = "none";
      inputCPF.style.display = "block";
    }
  });
}
