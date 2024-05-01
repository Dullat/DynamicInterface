import './scss/style.scss';
import './scss/reset.scss';
import { images, preloadImages } from './js/loadImages.js';

const carouseItems = document.querySelectorAll(`[class*="carousel-item"]`);
const carouselItemBoxes = document.querySelectorAll(`[class*="item-image"]`);
const carouselItemBoxesFill = document.querySelectorAll(`.fill-background`);
let slideIndex = 0;

// slider

function showSlide(i) {
  carouseItems.forEach((item) => {
    item.classList.remove('active', 'hide');
    carouselItemBoxesFill[i].classList.remove('active');
  });
  carouseItems[i].classList.add('active', 'hide');
  carouselItemBoxesFill[i].classList.add('active');
}

function nextSlide() {
  slideIndex += 1;
  if (slideIndex >= carouseItems.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}

function runSlider() {
  carouseItems[slideIndex].classList.add('active');
  carouselItemBoxesFill[slideIndex].classList.add('active');
  setInterval(nextSlide, 4000);
}

document.addEventListener('DOMContentLoaded', runSlider);

// load and assign images

preloadImages(images);

carouseItems.forEach((e, i) => {
  e.style.backgroundImage = `url(${images[i]})`;
});

carouselItemBoxes.forEach((e, i) => {
  e.style.backgroundImage = `url(${images[i]})`;
});
