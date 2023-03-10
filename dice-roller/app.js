
// Function to roll the dice
function rollTheDice() {

  let randomNumber = Math.floor(Math.random() * 6) + 1;

  if (randomNumber >= 6) {
    console.log("6")
    document.getElementById("dice").src = "./img/dice6.png";
  } else if (randomNumber == 5) {
    console.log("5")
    document.getElementById("dice").src = "./img/dice5.png";
  } else if (randomNumber == 4) {
    console.log("4")
    document.getElementById("dice").src = "./img/dice4.png";
  } else if (randomNumber == 3) {
    console.log("3")
    document.getElementById("dice").src = "./img/dice3.png";
  } else if (randomNumber == 2) {
    console.log("2")
    document.getElementById("dice").src = "./img/dice2.png";
  } else {
    console.log("1")
    document.getElementById("dice").src = "./img/dice1.png";
  }
}