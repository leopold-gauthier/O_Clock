// Définir les variables globales
var interval;
var startTime;
var elapsedTime = 0;
var timer = document.getElementById("timer");
var startStopButton = document.getElementById("start-stop");
var resetButton = document.getElementById("reset");
var recordButton = document.getElementById("record");
var recordsList = document.getElementById("records");

// Fonction pour convertir le temps en heures, minutes et secondes
function convertTime(time) {
  var hours = Math.floor(time / 3600);
  var minutes = Math.floor((time % 3600) / 60);
  var seconds = time % 60;
  return ("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
}

// Fonction pour mettre à jour le chronomètre
function updateTimer() {
  var currentTime = new Date().getTime();
  elapsedTime = Math.floor((currentTime - startTime) / 1000);
  timer.innerHTML = convertTime(elapsedTime);
}

// Fonction pour démarrer ou arrêter le chronomètre
function startStopTimer() {
  if (interval) {
    clearInterval(interval);
    interval = null;
    startStopButton.innerHTML = "Start";
  } else {
    startTime = new Date().getTime() - elapsedTime * 1000;
    interval = setInterval(updateTimer, 1000);
    startStopButton.innerHTML = "Stop";
  }
}

// Fonction pour remettre le chronomètre à zéro
function resetTimer() {
  clearInterval(interval);
  interval = null;
  elapsedTime = 0;
  timer.innerHTML = convertTime(elapsedTime);
  startStopButton.innerHTML = "Start";
  recordsList.innerHTML = "";
}

// Fonction pour enregistrer le temps actuel dans la liste des temps
function recordTime() {
  var record = document.createElement("li");
  record.innerHTML = convertTime(elapsedTime);
  recordsList.appendChild(record);
}

// Écouter les événements sur les boutons
startStopButton.addEventListener("click", startStopTimer);
resetButton.addEventListener("click", resetTimer);
recordButton.addEventListener("click", recordTime);
