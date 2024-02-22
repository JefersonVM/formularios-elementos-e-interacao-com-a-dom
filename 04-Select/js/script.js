const form = document.querySelector("form");
const select = document.querySelector("select");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(select.selectedIndex);
  console.log(select.options[select.selectedIndex].text);
  console.log(select.options[select.selectedIndex].value);
});

form.addEventListener("change", (e) => {
    console.log(e.target.selectedIndex);
    console.log(e.target.options[select.selectedIndex].text);
    console.log(e.target.options[select.selectedIndex].value);
});
