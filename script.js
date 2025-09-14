let timer;
let timeLeft = 0;
let isRunning = false;

function updateDisplay() {
  let hrs = Math.floor(timeLeft / 3600);
  let mins = Math.floor((timeLeft % 3600) / 60);
  let secs = timeLeft % 60;

  document.getElementById("display").textContent =
    String(hrs).padStart(2, '0') + ":" +
    String(mins).padStart(2, '0') + ":" +
    String(secs).padStart(2, '0');
}

function mulaiTimer() {
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

function lihatEdit() {
  document.getElementById("edit").style.display = "block";
}

function simpanTimer() {
  let hrs = parseInt(document.getElementById("hours").value) || 0;
  let mins = parseInt(document.getElementById("minutes").value) || 0;
  let secs = parseInt(document.getElementById("seconds").value) || 0;

  timeLeft = hrs * 3600 + mins * 60 + secs;
  updateDisplay();

  document.getElementById("edit").style.display = "none";
}

// tampil awal
updateDisplay();


// toggle menu background
function toggleThemeMenu() {
  const menu = document.getElementById("themeMenu");
  if (menu.style.display === "" || menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}
window.toggleThemeMenu = toggleThemeMenu;

// buat ngeset bg image

function setGambar(imageFile) {
  if(imageFile) {
    document.body.style.backgroundImage = `url(${imageFile})`;
    document.body.style.backgroundColor = "";
    localStorage.setItem("bgImage", imageFile);
  }
}

// buat ngerest bg ke awal
function resetBackground() {
  document.body.style.backgroundColor = "#ffffff"; 
  document.body.style.backgroundImage = "";
  localStorage.removeItem("bgColor");
  localStorage.removeItem("bgImage");
}

window.setGambar = setGambar;

window.addEventListener("DOMContentLoaded", () => {
  const savedImage = localStorage.getItem("bgImage");

  if (savedImage) {
    document.body.style.backgroundImage = `url(${savedImage})`;
    document.getElementById("Temagambar").value = savedImage;
  }else {
    document.body.style.backgroundColor = "#ffffff";
  }
});


