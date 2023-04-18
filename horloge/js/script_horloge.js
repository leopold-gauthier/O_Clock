// Fonction pour mettre à jour l'horloge
function updateClock() {
    var date = new Date();
    var hours = date.getUTCHours() + 2; // Ajouter 1 pour UTC+1
    var minutes = date.getUTCMinutes();
    var seconds = date.getUTCSeconds();
    var timeString = ("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2) + ":" + ("0" + seconds).slice(-2);
    clock.innerHTML = timeString;

  }
  
  // Définir les variables globales
  var clock = document.getElementById("clock");
  var interval = setInterval(updateClock, 1000);
  
  // Appeler la fonction une fois pour afficher l'heure actuelle
  updateClock();
  

