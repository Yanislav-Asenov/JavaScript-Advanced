window.onload = function stopwatch () {
  let time = -1
  let intervalID
  let startBtn = document.getElementById('startBtn')
  let stopBtn = document.getElementById('stopBtn')

  startBtn.addEventListener('click', () => {
    time = -1
    incrementTime()
    intervalID = setInterval(incrementTime, 1000)
    startBtn.disabled = true
    stopBtn.disabled = false
  })

  stopBtn.addEventListener('click', () => {
    clearInterval(intervalID)
    startBtn.disabled = false
    stopBtn.disabled = true
  })

  function incrementTime () {
    time++
    let hours = `0${Math.trunc(time / 60)}`.slice(-2)
    let minutes = `0${time % 60}`.slice(-2)
    let timerText = `${hours}:${minutes}`
    document.getElementById('time').textContent = timerText
  }
}
