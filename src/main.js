import './scss/style.scss';
import './scss/reset.scss';

const items = document.querySelectorAll(`[class*="carousel-item"]`);

let slideIndex = 0;

document.addEventListener('DOMContentLoaded', runSlider);

function runSlider() {
  items[slideIndex].classList.add('active');
  setInterval(nextSlide, 4000);
}

function showSlide(i) {
  items.forEach((item) => {
    item.classList.remove('active', 'hide');
  });
  items[i].classList.add('active', 'hide');
}

function nextSlide() {
  slideIndex += 1;
  if (slideIndex >= items.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}
