import { images, preloadImages } from './loadImages.js';

const carouseItems = document.querySelectorAll(`[class*="carousel-item"]`);
const carouselItemBoxes = document.querySelectorAll(`[class*="item-box"]`);
const carouselItemBoxImgs = document.querySelectorAll(`[class*="item-image"]`);
const carouselItemBoxImgsFill = document.querySelectorAll(`.fill-background`);

let slideIndex = 0;
let intervalId;

// slider

function removeSlide() {
  carouseItems.forEach((item, i) => {
    item.classList.remove('active', 'hide');
    carouselItemBoxImgsFill[i].classList.remove('active');
  });
}

function showSlide(i) {
  removeSlide();
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
  carouseItems[slideIndex].classList.add('active', 'hide');
  carouselItemBoxImgsFill[slideIndex].classList.add('active');
  intervalId = setInterval(nextSlide, 4000);
}

function sliderSection() {
  document.addEventListener('DOMContentLoaded', () => {
    preloadImages(images);
  });

  window.addEventListener('load', () => {
    // when images fully loaded
    runSlider();

    carouselItemBoxes.forEach((e, i) => {
      e.addEventListener('click', () => {
        slideIndex = i;
        clearInterval(intervalId);
        removeSlide();
        runSlider();
      });
    });

    carouseItems.forEach((e, i) => {
      e.style.backgroundImage = `radial-gradient(circle at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%), url(${images[i]})`;
    });

    carouselItemBoxImgs.forEach((e, i) => {
      e.style.backgroundImage = `url(${images[i]})`;
    });
  });
}
export { sliderSection };
