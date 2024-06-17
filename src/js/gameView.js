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

document.addEventListener('DOMContentLoaded', () => {
  carousel();
  changer();
});
