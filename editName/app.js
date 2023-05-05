const modalEl = document.getElementById("myModal");
const firstNameEl = document.querySelector("#firstName");
const contentEl = document.querySelector(".content");
const lastNameEl = document.querySelector("#lastName");
const ageEl = document.querySelector("#age");
const parsedPerson = JSON.parse(localStorage.getItem('person'))
contentEl.innerHTML = `
${parsedPerson.firstName} ${parsedPerson.lastName}, ${parsedPerson.age} years old
`

// When the user clicks on the button, open the modal
function openModal() {
  modalEl.style.display = "block";
}
// When the user clicks on save, close modal
function closeModal() {
  const person = {
    firstName: firstNameEl.value,
    lastName: lastNameEl.value,
    age: ageEl.value
  }
  const stringPerson = JSON.stringify(person)
  localStorage.setItem('person', stringPerson)
  const parsedPerson = JSON.parse(localStorage.getItem('person'))
  contentEl.innerHTML = `
${parsedPerson.firstName} ${parsedPerson.lastName}, ${parsedPerson.age} years old
`
  modalEl.style.display = "none";
}