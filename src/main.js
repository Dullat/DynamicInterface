import './scss/main.scss';
import './scss/reset.scss';
import './scss/header.scss';
import { sliderSection } from './js/slider.js';
import { headerScript } from './js/header.js';

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

function scrollBtn() {
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
}

function cardControls() {
  cards.forEach((e) => {
    e.addEventListener('mouseover', () => {
      e.querySelector('.add-to-wishlist').style.display = `block`;
    });
    e.addEventListener('mouseout', () => {
      e.querySelector('.add-to-wishlist').style.display = `none`;
    });
    e.addEventListener('click', (event) => {
      const game = e.getAttribute('gameName');
      if (event.target.tagName === 'svg') {
        console.log('clicked');
        const p = document.createElement('p');
        const warnBox = document.createElement('div');
        const svgIcon = e.querySelector('.add-to-wishlist');

        p.innerHTML = 'Added to your WishList';
        warnBox.classList.add('warn-box');
        warnBox.appendChild(p);
        document.body.appendChild(warnBox);

        svgIcon.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <title>check</title>
    <path d="M18.9,8.1L9,18L4.05,13.05L4.76,12.34L9,16.59L18.19,7.39L18.9,8.1Z" />
  </svg>
`;
        setTimeout(() => {
          warnBox.remove();
        }, 4000);
      } else {
        window.location.href = `./gameView.html?game=${encodeURIComponent(game)}`;
      }
    });
  });
}

function carouselBtns() {
  document.querySelectorAll('.btn-secondary').forEach((e) => {
    e.addEventListener('click', () => {
      const game = e.getAttribute('gameName');
      window.location.href = `./gameView.html?game=${encodeURIComponent(game)}`;
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderBars();

  scrollBtn();

  cardControls();

  carouselBtns();

  window.addEventListener('resize', renderBars);
});

sliderSection();
headerScript();
