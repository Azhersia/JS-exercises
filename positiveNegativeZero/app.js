const numbr = document.querySelector("#input")
const text = document.querySelector("#text")

function checkNumber() {
  if (numbr.value > 0) {
    text.innerText = "The number is positive"
    text.classList.remove("negative", "zero")
    text.classList.add("positive", "shown")
  } else if (numbr.value < 0) {
    text.innerText = "The number is negative"
    text.classList.remove("positive", "zero")
    text.classList.add("negative", "shown")
  } else {
    text.innerText = "The number is zero"
    text.classList.remove("negative", "positive")
    text.classList.add("zero", "shown")
  }
}
