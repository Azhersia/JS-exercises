// declare variables
let timeLeft = 10
const timeEl = document.querySelector('#number')

// set interval
let timer = setInterval(function timeCount() {
  // current time - 1
  timeLeft -= 1;
  // time inner text replaced with current time
  timeEl.innerText = timeLeft

  // if time is 0 or less than 0 remove interval set text to "hello!"
  if (timeLeft <= 0) {
    clearInterval(timer)
    timeEl.innerText = 'Hello!'
  }
}, 1000)