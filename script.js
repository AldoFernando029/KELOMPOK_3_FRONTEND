let timer;
let timeLeft = 0;
let isRunning = false;

function updateDisplay() {
  let hrs = Math.floor(timeLeft / 3600);
  let mins = Math.floor((timeLeft % 3600) / 60);
  let secs = timeLeft % 60;

  document.getElementById("timer-display").textContent =
    String(hrs).padStart(2, '0') + ":" +
    String(mins).padStart(2, '0') + ":" +
    String(secs).padStart(2, '0');
}

function startTimer() {
  if (isRunning || timeLeft <= 0) return;

  isRunning = true;
  timer = setInterval(() => {
    timeLeft--;
    updateDisplay();

    if (timeLeft <= 0) {
      clearInterval(timer);
      isRunning = false;
      document.getElementById("alarmSound").play();
      alert("Waktu habis!");
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  timeLeft = 0;
  updateDisplay();
}

function showEdit() {
  document.getElementById("edit-area").style.display = "block";
}

function saveTime() {
  let hrs = parseInt(document.getElementById("hours").value) || 0;
  let mins = parseInt(document.getElementById("minutes").value) || 0;
  let secs = parseInt(document.getElementById("seconds").value) || 0;

  timeLeft = hrs * 3600 + mins * 60 + secs;
  updateDisplay();

  document.getElementById("edit-area").style.display = "none";
}

// tampil awal
updateDisplay();

