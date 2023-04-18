// Définir les variables globales
var interval;
var duration;
var timer = document.getElementById("timer");
var startStopButton = document.getElementById("start-stop");
var minutesInput = document.getElementById("input-minutes");
var secondsInput = document.getElementById("input-seconds");

// Fonction pour convertir le temps en minutes et secondes
function convertTime(time) {
  var minutes = Math.floor(time / 60);
  var seconds = time % 60;
  return ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
}

// Fonction pour mettre à jour le minuteur
function updateTimer() {
  timer.innerHTML = convertTime(duration);
  // Si il arrive a Zéro alors ..
  if (duration === 0) {
    clearInterval(interval);
    alert("Votre temps c'est écoulé !");
  }
  duration--;
}

// Fonction pour démarrer ou arrêter le minuteur
function startStopTimer() {
  if (interval) {
    clearInterval(interval);
    interval = null;
    startStopButton.innerHTML = "Start";
  } else {
    duration = parseInt(minutesInput.value) * 60 + parseInt(secondsInput.value);
    if (duration > 0) {
      interval = setInterval(updateTimer, 1000);
      startStopButton.innerHTML = "Stop";
    }
  }
}

// Écouter les événements sur le bouton Start/Stop
startStopButton.addEventListener("click", startStopTimer);
