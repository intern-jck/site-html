const MECHA_URL = `../assets/data/mechaData.json`;

// Helper function to clear all child elements from a parent div.
const clearDiv = (parent) => {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
};

const addBackButton = (backToView) => {
  // Remove it if it's there.

  console.log('adding back button')
  // removeBackButton();
  const backButton = document.createElement('button');
  backButton.textContent = 'BACK';
  backButton.setAttribute('id', 'back-button');

  backButton.onclick = (event) => {
      event.preventDefault();
      getMecha();      
  };

  document.getElementById('mecha-projects').appendChild(backButton);
}

const removeBackButton = () => {
  console.log('removing back button')
  if (document.getElementById('back-button')) {
      document.getElementById('back-button').remove();
  }
};


const getMecha = () => {
  fetch(MECHA_URL)
    .then((response) => (response.json()))
    .then((data) => {
      addMechaCard(data.reverse());
    })
    .catch((error) => (console.log('fetching mecha url', error)));
};

const addMechaCard = (mecha) => {

  // Get div from photos page
  const mechaDiv = document.getElementById('mecha-projects');  
  clearDiv(mechaDiv);
  removeBackButton();

  mecha.forEach((mech) => {
    // console.log(Object.keys(mech));

    const mechDiv = document.createElement('div');
    mechDiv.classList = "mech-div";

    const mechName = document.createElement('h2');
    mechName.classList = "mech-name";
    mechName.textContent = mech.name;

    const mechImgDiv = document.createElement('div');
    mechImgDiv.classList = "mech-img";
    mechImgDiv.onclick = (event) => {
      event.preventDefault();
      showMechaProject(mech);
    };
    const mechImg = document.createElement('img');
    mechImg.src = mech.photos[0];

    mechDiv.appendChild(mechName);
    mechImgDiv.appendChild(mechImg);
    mechDiv.appendChild(mechImgDiv);
    mechaDiv.appendChild(mechDiv);
  });

};

const showMechaProject = (mech) => {
  
  const mechaDiv = document.getElementById('mecha-projects');
  clearDiv(mechaDiv);
  addBackButton();

  console.log(Object.keys(mech));

  const mechDiv = document.createElement('div');
  mechDiv.classList = "mech-project-div";

  // Carousel
  const mechImgDiv = document.createElement('div');
  mechImgDiv.classList = "mech-project-img";
  const mechImg = document.createElement('img');
  mechImg.src = mech.photos[0];

  // mechImgDiv.appendChild(mechImg);
  // mechDiv.appendChild(mechImgDiv);

  mechDiv.appendChild(createCarousel(mech.photos))



  // Info
  const mechInfoDiv = document.createElement('div');
  mechInfoDiv.classList = "mech-project-info";
  const mechName = document.createElement('h2');
  mechName.classList = "mech-project-name";
  mechName.textContent = mech.name;
  mechInfoDiv.appendChild(mechName);
  

  mechDiv.appendChild(mechInfoDiv);
  mechaDiv.appendChild(mechDiv);
};




let currentSlide = 0;

const createCarousel = (images) => {

  // Container div for carousel content
  const carouselDiv = document.createElement('div');
  carouselDiv.classList = 'carousel-div';

  // Carousel image  NEEDED?
  const carouselImageContainer = document.createElement('div');
  carouselImageContainer.classList = 'carousel-img-container';
  // const carouselImage = document.createElement('img');

  // Create a slide for each image.
  const slides = [];
  images.forEach((image) => {
    console.log(image)
    const slideDiv = document.createElement('div');
    const slide = document.createElement('img');
    slide.src = image;
    slideDiv.classList = 'carousel-slide-div';
    slideDiv.appendChild(slide);
    carouselImageContainer.appendChild(slideDiv);
    slides.push(slideDiv);
  });

  carouselDiv.appendChild(carouselImageContainer);  

  // Control buttons
  const leftButton = document.createElement('button');
  leftButton.classList = 'carousel-left-button';
  leftButton.textContent = 'NEXT';
  leftButton.onclick = (event) => {
    if (currentSlide > 0) {
      currentSlide -= 1;
    } 
    // showSlide(slides, currentSlide);
  };

  const rightButton = document.createElement('button');
  rightButton.classList = 'carousel-left-button';
  rightButton.textContent = 'BACK';
  rightButton.onclick = (event) => {
    if (currentSlide < slides.length) {
      currentSlide += 1;
    }
    // showSlide(slides, currentSlide);
  };

  // Fill Carousel
  carouselDiv.appendChild(leftButton);
  carouselDiv.appendChild(carouselImageContainer);
  carouselDiv.appendChild(rightButton);
  return carouselDiv;
};

const showSlide = (slides, index) => {
  console.log(slides, index)
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - index)}%)`;
  });
};
















window.onload = (event) => {
  getMecha();
  console.log('mecha page loaded')
};
