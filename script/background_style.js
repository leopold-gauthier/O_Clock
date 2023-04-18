   
   const sky = document.getElementsByClassName('sky');

   function updateBackground() {
        var date = new Date();
        var hours = date.getUTCHours() + 10; // Ajouter 2 pour UTC+1
        var timeString = (hours);
        console.log(timeString);
      
        if (timeString < 8) {

        } else if (timeString < 18) {
          
        } else {
            
        }

    }
    sky.style.background = dawn;


    var interval = setInterval(updateBackground, 1000);

    // Appeler la fonction une fois pour afficher l'heure actuelle
    updateBackground();
