//Home - Carousel Images

const carouselImages = document.querySelectorAll('.carousel img');
let currentIndex = 0;

function showImage(index) {
  carouselImages.forEach(image => {
    image.classList.remove('active');
  });
  carouselImages[index].classList.add('active');
}

function rotateCarousel() {
  currentIndex++;
  if (currentIndex >= carouselImages.length) {
    currentIndex = 0;
  }
  showImage(currentIndex);
}

// Set the initial image as active
showImage(currentIndex);

// Delay the rotation of the carousel by 1 minute (60000 milliseconds)
setTimeout(function() {
  setInterval(rotateCarousel, 30000);
}, 1000);
