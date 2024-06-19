import './scss/main.scss';
import './scss/reset.scss';
import './scss/header.scss';
import { sliderSection } from './js/slider.js';
import { headerScript } from './js/header.js';

// card containers

const sectionRoots = document.querySelectorAll('.card-section-root');
const slider = document.querySelector('.item-view-slide-container');
const cards = document.querySelectorAll('.card');
const wishlistBtn = document.querySelector('.cart-btn');
let numberOfCards;
let margin;
let wishlist = [];

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
    let added = false;
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
        if (!added) {
          document.body.appendChild(warnBox);
          added = true;
          wishlist.push(game);
          console.log(wishlist);
        }

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

function removeGameFromWishList(i) {
  wishlist.splice(i, 1);
}

let wishlistActive = false;

function cartSystem() {
  wishlistBtn.addEventListener('click', () => {
    let wishlistActive = true;
    const wishListMenu = document.createElement('div');
    const closeBtn = document.createElement('button');

    closeBtn.textContent = 'Close';
    wishListMenu.classList.add('wishlist-menu');

    wishlist.forEach((e, i) => {
      const item = document.createElement('div');
      const span = document.createElement('span');
      const delBtn = document.createElement('button');
      item.classList.add('wishlist-item');

      span.textContent = e;
      delBtn.textContent = 'Remove';

      item.append(span);
      item.append(delBtn);

      wishListMenu.append(item);
      console.log(item);

      delBtn.addEventListener('click', () => {
        removeGameFromWishList(i);
        wishListMenu.removeChild(item);
      });
    });

    wishListMenu.append(closeBtn);
    document.body.append(wishListMenu);
    document.body.style.overflow = `hidden`;

    document.querySelector('.toggle-btn').addEventListener('click', () => {
      if (wishlistActive) {
        document.body.removeChild(wishListMenu);
        wishlistActive = false;
      }
    });

    closeBtn.addEventListener('click', () => {
      document.body.removeChild(wishListMenu);
      document.body.style.overflow = `unset`;
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderBars();

  scrollBtn();

  cardControls();

  carouselBtns();

  cartSystem();

  window.addEventListener('resize', renderBars);
});

sliderSection();
headerScript();
