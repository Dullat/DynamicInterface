import '../scss/reset.scss';
import '../scss/gameView.scss';

const carouselImages = document.querySelectorAll('.image-bg-div');
const carouselChanger = document.querySelectorAll('.changer');

function carousel(img) {
  carouselImages.forEach((e, index) => {
    e.style.display = `none`;
  });
  if (!img) {
    carouselImages[0].style.display = 'block';
  } else carouselImages[img].style.display = 'block';
}

function changer() {
  carouselChanger.forEach((e, i) => {
    e.addEventListener('click', () => {
      carousel(i);
    });
  });
}

function getGame() {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get('game');
}

function convert(game) {
  return game.replace(/[-\s]/g, '').toLowerCase();
}

function setGame() {
  const game = getGame();

  if (game === 'null') {
    document.querySelectorAll('.game-title').forEach((e) => {
      e.textContent = `NuLL. sry no game`;
    });
  } else {
    document.querySelectorAll('.game-title').forEach((e) => {
      e.textContent = game;
    });
    import(`../imgs/view/${convert(game)}.jpg`).then((image) => {
      document.querySelectorAll('.image-1').forEach((e) => {
        e.style.backgroundImage = `url(${image.default})`;
      });
      document.querySelector('.loggo-watermark').style.backgroundImage =
        `url(${image.default})`;
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  carousel();
  changer();
  setGame();
});
