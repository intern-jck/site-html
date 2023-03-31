let currentSlide = 0;

function addCarousel(images, parentDiv) {

  // Container div for carousel content
  const carouselContainer = document.createElement('div');
  carouselContainer.classList = 'carousel-container';

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
  leftButton.classList = 'carousel-left-button onclick';
  leftButton.textContent = 'PREV';
  leftButton.onclick = (event) => {
    if (currentSlide > 0) {
      currentSlide -= 1;
    }
    showSlide(slides, currentSlide);
  };

  const rightButton = document.createElement('button');
  rightButton.classList = 'carousel-right-button onclick';
  rightButton.textContent = 'NEXT';
  rightButton.onclick = (event) => {
    if (currentSlide < slides.length - 1) {
      currentSlide += 1;
    }
    showSlide(slides, currentSlide);
  };

  // Fill Carousel
  const carounselControls = document.createElement('div');
  carounselControls.classList = 'carousel-controls';
  // carouselContainer.appendChild(leftButton);
  carouselContainer.appendChild(carouselContent);
  // carouselContainer.appendChild(rightButton);   
  carounselControls.appendChild(leftButton);
  carounselControls.appendChild(rightButton);
  carouselContainer.appendChild(carounselControls);
  parentDiv.appendChild(carouselContainer);

};

const showSlide = (slides, index) => {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - index)}%)`;
  });
};
