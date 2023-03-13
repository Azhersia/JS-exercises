const resultEl = document.querySelector(".result")
const aiEl = document.querySelector(".aiAnswer")
const playerEl = document.querySelector(".playerAnswer")
const rockEl = document.querySelector(".rock")
const paperEl = document.querySelector(".paper")
const scissorsEl = document.querySelector(".scissors")
let playAnswer

function getAiAnswer() {
  let aiAnswer = Math.floor(Math.random() * 3) + 1;
  if (aiAnswer == 1) {
    aiEl.innerText = "rock"
  } else if (aiAnswer == 2) {
    aiEl.innerText = "paper"
  } else {
    aiEl.innerText = "scissors"
  }

  if (aiAnswer == 1 && playAnswer == "rock") {
    resultEl.innerText = "Draw!"
  } else if (aiAnswer == 2 && playAnswer == "paper") {
    resultEl.innerText = "Draw!"
  } else if (aiAnswer == 3 && playAnswer == "scissors") {
    resultEl.innerText = "Draw!"
  } else if (aiAnswer == 1 && playAnswer == "paper") {
    resultEl.innerText = "Player Wins!"
  } else if (aiAnswer == 1 && playAnswer == "scissors") {
    resultEl.innerText = "Ai Wins!"
  } else if (aiAnswer == 2 && playAnswer == "rock") {
    resultEl.innerText = "Ai Wins!"
  } else if (aiAnswer == 2 && playAnswer == "scissors") {
    resultEl.innerText = "Player Wins!"
  } else if (aiAnswer == 3 && playAnswer == "rock") {
    resultEl.innerText = "Player Wins!"
  } else {
    resultEl.innerText = "Ai Wins!"
  }

}



rockEl.addEventListener('click', function () {
  playAnswer = "rock"
  playerEl.innerText = "rock"
  getAiAnswer()
});

paperEl.addEventListener('click', function () {
  playAnswer = "paper"
  playerEl.innerText = "paper"
  getAiAnswer()
});

scissorsEl.addEventListener('click', function () {
  playAnswer = "scissors"
  playerEl.innerText = "scissors"
  getAiAnswer()
});

