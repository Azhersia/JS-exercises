const numberEl = document.querySelector("#number")
let count = localStorage.getItem("count")

function add() {
  count++
  numberEl.innerText = count
  localStorage.setItem("count", count.toString())
}
function minus() {
  count--
  numberEl.innerText = count
  localStorage.setItem("count", count.toString())
}

numberEl.innerText = count