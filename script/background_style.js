const spinner = document.querySelector('.spinner');
const stars = document.querySelector('.stars');

const currentDate = new Date();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

const totalSeconds = (hours * 60 + minutes) * 60 + seconds;
const percentOfDay = (totalSeconds / 86400) * 100;

spinner.style.transform = `rotate(${percentOfDay * 3.6}deg)`;

const container = document.querySelector('.container');

function updateBackground() {
  const date = new Date();
  const hour = date.getHours();

  if (hours >= 6 && hours < 10) {
            stars.style.display = "none";
            container.style.background = 'linear-gradient(#3f006c, #750050, #b10042, #da4837, #f7bb38)';
    
        } else if (hours >= 10 && hours < 16) {
            stars.style.display = "none";
            container.style.background = 'linear-gradient(#3f006c, #750050, #b10042, #da4837, #f7bb38)';
    
        } else if (hours >= 16 && hours <= 20) {
            stars.style.display = "none";
            container.style.background = 'linear-gradient(#3f006c, #750050, #b10042, #da4837, #f7bb38)';
    
        } else {
            stars.style.display = "block";
            container.style.background = 'linear-gradient(#120136, #030027, #000449, #00082e, #071b00)';
           
        }


}

updateBackground();
setInterval(updateBackground, 1000 * 60 * 60); // Mettre à jour toutes les heures
