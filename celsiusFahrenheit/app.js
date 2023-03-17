function getSelectValues() {
  const fromValue = document.getElementById("list1").value;
  const toValue = document.getElementById("list2").value;
  let temp = document.getElementById("tempInput").value;
  let resultEl = document.querySelector(".result");

  function convert() {
    if (fromValue == "fromCels" && toValue == "toFahr") {
      temp = (temp * 1.8) + 32
      resultEl.innerText = temp
    } else if (fromValue == "fromFahr" && toValue == "toCels") {
      temp = (temp - 32) / 1.8
      resultEl.innerText = temp
    } else {
      resultEl.innerText = "please choose correct temps"
    }
  }
  convert()
}
