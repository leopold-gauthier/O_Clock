function updateBackground() {
    let date = new Date();
    let hours = date.getUTCHours() + 2; // Ajouter UTC+2
    let wallpaper = document.getElementById('wallpaper');



    console.log(hours);
    console.log(wallpaper);

    if (hours >= 6 && hours < 11) {
        wallpaper.style.backgroundColor = "lightblue";

    } else if (hours >= 11 && hours < 16) {
        wallpaper.style.backgroundColor = "blue";

    } else if (hours >= 16 && hours <= 20) {
        wallpaper.style.backgroundColor = "orange";

    } else {
        wallpaper.style.backgroundColor = "darkblue";

    }

}

updateBackground();
setInterval(updateBackground, 1000);