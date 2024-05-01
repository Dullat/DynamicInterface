import './scss/style.scss';
import './scss/reset.scss';
import { images, preloadImages } from './js/loadImages.js';

const carouseItems = document.querySelectorAll(`[class*="carousel-item"]`);
const carouselItemBoxes = document.querySelectorAll(`[class*="item-box"]`);
const carouselItemBoxImgs = document.querySelectorAll(`[class*="item-image"]`);
const carouselItemBoxImgsFill = document.querySelectorAll(`.fill-background`);
const toggledMenuDropBtn = document.querySelector('.menu-toggle-btn');
const toggledMenu = document.querySelector('.toggled-menu');
let slideIndex = 0;

// slider

function showSlide(i) {
  carouseItems.forEach((item) => {
    item.classList.remove('active', 'hide');
    carouselItemBoxImgsFill[i].classList.remove('active');
  });
  carouseItems[i].classList.add('active', 'hide');
  carouselItemBoxImgsFill[i].classList.add('active');
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
  carouselItemBoxImgsFill[slideIndex].classList.add('active');
  setInterval(nextSlide, 4000);
}

document.addEventListener('DOMContentLoaded', runSlider);

carouselItemBoxes.forEach((e, i) => {
  e.addEventListener('click', () => {
    slideIndex = i - 1;
    nextSlide();
  });
});

// load and assign images

preloadImages(images);

carouseItems.forEach((e, i) => {
  e.style.backgroundImage = `url(${images[i]})`;
});

carouselItemBoxImgs.forEach((e, i) => {
  e.style.backgroundImage = `url(${images[i]})`;
});

// drop

toggledMenuDropBtn.addEventListener('click', () => {
  toggledMenu.classList.toggle('active');
  toggledMenuDropBtn.classList.toggle('active');
});

window.addEventListener('click', (e) => {
  if (e.target !== toggledMenu && e.target !== toggledMenuDropBtn) {
    toggledMenu.classList.remove('active');
    toggledMenuDropBtn.classList.remove('active');
  }
});
