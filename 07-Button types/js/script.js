const BtnClear = document.querySelector("#btn-clear");
const input = document.querySelector("input");

BtnClear.addEventListener("click", () => {
  input.value = "";
});
