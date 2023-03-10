let age = document.querySelector("#input")
let textEl = document.querySelector("#text")

function calculate() {
  if (age) {
    textEl.classList.add("shown")
  }

  if (age.value >= 65) {
    textEl.innerText = "You are a senior"
  } else if (age.value < 65 && age.value > 20) {
    textEl.innerText = "You are an adult"
  } else if (age.value < 20 && age.value > 13) {
    textEl.innerText = "You are a teenager"
  } else if (age.value < 13 && age.value > 0) {
    textEl.innerText = "You are a child"
  } else {
    textEl.innerText = " Please state a valid age"
  }
}
