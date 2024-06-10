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

document.addEventListener('DOMContentLoaded', runSlider);

carouselItemBoxes.forEach((e, i) => {
  e.addEventListener('click', () => {
    slideIndex = i;
    clearInterval(intervalId);
    removeSlide();
    runSlider();
  });
});

// load and assign images

preloadImages(images);

carouseItems.forEach((e, i) => {
  e.style.backgroundImage = `radial-gradient(circle at center, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%), url(${images[i]})`;
});

document.addEventListener('DOMContentLoaded', () => {
  carouselItemBoxImgs.forEach((e, i) => {
    e.style.backgroundImage = `url(${images[i]})`;
  });
});

window.addEventListener('load', () => {
  // when images fully loaded
  carouselItemBoxImgs.forEach((e, i) => {
    e.style.backgroundImage = `url(${images[i]})`;
  });
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

// card containers

const sectionRoots = document.querySelectorAll('.card-section-root');
const slider = document.querySelector('.item-view-slide-container');
const cards = document.querySelectorAll('.card');
let numberOfCards;
let margin;

function renderBars() {
  if (window.innerWidth > 1200) {
    numberOfCards = 5;
  }

  if (window.innerWidth < 1200) {
    numberOfCards = 4;
  }

  if (window.innerWidth < 700) {
    numberOfCards = 2;
  }

  margin = numberOfCards * 20;

  const cardWidth = (slider.offsetWidth - margin) / numberOfCards;

  cards.forEach((e) => {
    e.style.width = `${cardWidth}px`;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderBars();

  sectionRoots.forEach((e) => {
    e.addEventListener('click', (event) => {
      const s = e.querySelector('.item-view-slide-container');
      if (event.target.classList.contains('left-scroll-svg')) {
        s.scrollLeft -= slider.offsetWidth;
      }

      if (event.target.classList.contains('right-scroll-svg')) {
        s.scrollLeft += slider.offsetWidth;
      }
    });
  });

  window.addEventListener('resize', renderBars);
});
