let positionInitiale = -100;
let positionFinale = 500;
let wallpaper = document.getElementById('wallpaper');
let element = document.getElementById("astre");



function updateBackground() {
    let date = new Date();
    let hours = date.getUTCHours() + 2; // Ajouter UTC+2

    if (hours >= 6 && hours < 11) {
        positionInitiale = -100;
        positionFinale = 1000;
        wallpaper.style.backgroundColor = "lightblue";

    } else if (hours >= 11 && hours < 16) {
        wallpaper.style.backgroundColor = "blue";
        positionInitiale = -100;
        positionFinale = 1000;

    } else if (hours >= 16 && hours <= 20) {
        wallpaper.style.backgroundColor = "orange";

    } else {
        wallpaper.style.backgroundColor = "darkblue";
       
    }

}
// Définissez la fonction qui sera appelée à intervalles réguliers
function bouger() {
  // Calculez la nouvelle position de l'élément
  positionInitiale += 10;

  // Mettez à jour la position de l'élément
  element.style.left = positionInitiale + "px";

  // Arrêtez l'animation une fois que l'élément a atteint sa position finale
  if (positionInitiale >= positionFinale) {
    clearInterval(animation);
  }
}

// Appelez la fonction à intervalles réguliers
const animation = setInterval(bouger, 50);


updateBackground();
setInterval(updateBackground, 1000);

