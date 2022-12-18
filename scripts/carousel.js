
// examples
// https://codepen.io/czesster/pen/eYKqMPY


let currentSlide = 0;

const createCarousel = (slides) => {

  // Container div for carousel content
  const carouselDiv = document.createElement('div');
  carouselDiv.classList = 'carousel-div';

  // Control buttons
  const leftButton = document.createElement('button');
  leftButton.classList = 'carousel-left-button';
  leftButton.textContent = 'NEXT';
  leftButton.onclick = (event) => {
    if (currentSlide > 0) {
      currentSlide -= 1;
    } 
    showSlide(slides, currentSlide);
  };

  const rightButton = document.createElement('button');
  rightButton.classList = 'carousel-left-button';
  rightButton.textContent = 'BACK';
  rightButton.onclick = (event) => {
    if (currentSlide < slides.length) {
      currentSlide += 1;
    } 
    showSlide(slides, currentSlide);
  };

  // Carousel image
  const carouselImageContainer = document.createElement('div');
  const carouselImage = document.createElement('img');

  // Fill Carousel
  carouselDiv.appendChild(leftButton);
  carouselImageContainer.appendChild(carouselImage);
  carouselDiv.appendChild(carouselImageContainer);
  carouselDiv.appendChild(rightButton);   
    
};


const showSlide = (slides, index) => {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - index)}%)`;
  });
};

