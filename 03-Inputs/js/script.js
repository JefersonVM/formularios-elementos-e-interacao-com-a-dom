const form = document.querySelector("form");
const radios = document.getElementsByName("period");
const inputEmail = document.querySelector("#input-email");
const ckeckCousrses = document.querySelectorAll(".check-courses");

// for (const radio of radios) {
//   radio.addEventListener("change", (event) => {
//     console.log(event.target.value);
//   });
// }

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const courses = [];

  for (const check of ckeckCousrses) {

    if (check.checked) {
      courses.push(check.name);
    } 
  
    
  }

    console.log(courses); 

  if (inputEmail.value.indexOf("gmail") === -1) {
    console.log("Email inválido");
  }

  for (const radio of radios) {
    if (radio.checked) {
      console.log(radio.value);
    }
  }
});

inputEmail.addEventListener("keyup", (event) => {
  if (inputEmail.value.indexOf("gmail") === -1) {
    console.log("Email inválido");
    return;
  }
  console.log("Email válido");
});

for (const check of ckeckCousrses) {
  check.addEventListener("change", (event) => {
    console.log(event.target.name);
  });
}