const celsEl = document.querySelector("#cels")
const tempEl = document.querySelector(".temp")
const inputEl = document.querySelector(".input")

function convert() {
  const inputValue = parseInt(inputEl.value)

  if (celsEl.checked) {
    let fahrenConverted = inputValue * 9 / 5 + 32;
    tempEl.innerHTML = `${fahrenConverted} Fahrenheit`
  } else {
    let celsConverted = (inputValue - 32) * 5 / 9;
    tempEl.innerHTML = `${celsConverted} Celsius`
  }
}