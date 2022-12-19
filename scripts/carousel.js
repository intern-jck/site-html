
// examples
// https://codepen.io/czesster/pen/eYKqMPY

let currentSlide = 0;

const createCarousel = (images, mechDiv) => {
  console.log(mechDiv)

  // Container div for carousel content
  const carouselDiv = document.createElement('div');
  carouselDiv.classList = 'carousel-div';

  const carouselContent = document.createElement('div');
  carouselContent.classList = 'carousel-content';
  const slides = [];

  // Create carousel images
  for (let i in images) {
    const carouselImageContainer = document.createElement('div');
    carouselImageContainer.classList = 'carousel-img';

    const carouselImage = document.createElement('img');
    carouselImage.src = images[i];

    carouselImageContainer.appendChild(carouselImage);

    carouselContent.appendChild(carouselImageContainer);   
    slides.push(carouselImageContainer);
  }

  showSlide(slides, currentSlide);
  
  // Control buttons
  const leftButton = document.createElement('button');
  leftButton.classList = 'carousel-left-button';
  leftButton.textContent = 'BACK';
  leftButton.onclick = (event) => {
    if (currentSlide > 0) {
      currentSlide -= 1;
      console.log('back:', currentSlide)
    } 
    showSlide(slides, currentSlide);
  };

  const rightButton = document.createElement('button');
  rightButton.classList = 'carousel-right-button';
  rightButton.textContent = 'NEXT';
  rightButton.onclick = (event) => {
    if (currentSlide < slides.length) {
      currentSlide += 1;
      console.log('next:', currentSlide)
    } 
    showSlide(slides, currentSlide);
  };

  // Fill Carousel
  carouselDiv.appendChild(leftButton);
  carouselDiv.appendChild(carouselContent); 
  carouselDiv.appendChild(rightButton);   
  mechDiv.appendChild(carouselDiv);

};

const showSlide = (slides, index) => {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - index)}%)`;
  });
};

// window.onload = (event) => {
//   createCarousel();
//   console.log('carousel loaded')
// };
