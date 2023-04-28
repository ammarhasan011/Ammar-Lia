const hamburger = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function() {
  menu.classList.toggle('active');
});



function showMore(button) {
  var text = button.parentNode.querySelector('.more');
  text.style.display = 'block';
  button.style.display = 'none';
}



// Hämta referenser till HTML-elementen som du vill manipulera
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const textElement = document.getElementById("text");

// Skapa en array med textsträngar som du vill visa i din knapplista
const textArray = 
[
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit facere qui ipsam pariaturdeleniticupiditate",
  "piditate. Reprehenderit dolor magnam cupiditate neces. Sit facere qui ipsam pariaturdeleniticupiditate",
  "Lrbjuder våra tjänster både till företag och privare qui ipsam pariaturdeleniticupiditate",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit facere qui ipsam pariaturdeleniticupiditate",

];

// Sätt en räknare för att hålla reda på vilket index i textArray som du vill visa
let currentIndex = 0;

// Lägg till eventlyssnare för knapparna som ökar eller minskar räknaren och visar motsvarande text i textElement
previousButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    textElement.textContent = textArray[currentIndex];
  }
});

nextButton.addEventListener("click", () => {
  if (currentIndex < textArray.length - 1) {
    currentIndex++;
    textElement.textContent = textArray[currentIndex];
  }
});
