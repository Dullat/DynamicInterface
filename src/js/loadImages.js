import carouselImage1 from '../imgs/carousel/controll.jpg';
import carouselImage2 from '../imgs/carousel/genshin-impact.jpg';
import carouselImage3 from '../imgs/carousel/watch-dogs2.jpg';
import carouselImage4 from '../imgs/carousel/dont-starve.jpg';
import carouselImage5 from '../imgs/carousel/gta-drive-by.jpg';

const images = [
  carouselImage1,
  carouselImage2,
  carouselImage3,
  carouselImage4,
  carouselImage5,
];

function preloadImages(imgs) {
  imgs.forEach((imageSrc) => {
    const img = new Image();
    img.src = imageSrc;
  });
}

export { images, preloadImages };
