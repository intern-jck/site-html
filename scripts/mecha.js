const MECHA_URL = `../assets/data/mechaData.json`;

// Helper function to clear all child elements from a parent div.
const clearDiv = (parent) => {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
};

const addBackButton = () => {
  // Remove it if it's there.
  const backButton = document.createElement('button');
  backButton.textContent = 'BACK';
  backButton.setAttribute('id', 'back-button');

  backButton.onclick = (event) => {
      event.preventDefault();
      getMecha();      
  };

  document.getElementById('mecha-container').appendChild(backButton);
}

const removeBackButton = () => {
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
  const mechaDiv = document.getElementById('mecha-container');
  const mechProjects = document.createElement('div');
  mechProjects.classList = 'mecha-projects-div';

  clearDiv(mechaDiv);
  removeBackButton();

  mecha.forEach((mech) => {

    const mechDiv = document.createElement('div');
    mechDiv.classList = 'mech-div';

    const mechName = document.createElement('h2');
    mechName.classList = 'mech-name';
    mechName.textContent = mech.name;

    const mechImgDiv = document.createElement('div');
    mechImgDiv.classList = 'mech-img';
    mechImgDiv.onclick = (event) => {
      event.preventDefault();
      showMechaProject(mech);
    };
    const mechImg = document.createElement('img');
    mechImg.src = mech.photos[0];

    mechDiv.appendChild(mechName);
    mechImgDiv.appendChild(mechImg);
    mechDiv.appendChild(mechImgDiv);
    mechProjects.appendChild(mechDiv);
  });

  mechaDiv.appendChild(mechProjects);

};

const showMechaProject = (mech) => {
  
  const mechaDiv = document.getElementById('mecha-container');
  clearDiv(mechaDiv);
  addBackButton();

  const mechDiv = document.createElement('div');
  mechDiv.classList = 'mech-project-div';

  // Carousel
  createCarousel(mech.photos, mechDiv);

  // Info

  // TODO: Write function to generate info
  const mechInfoDiv = document.createElement('div');
  mechInfoDiv.classList = 'mech-project-info';

  const mechName = document.createElement('h2');
  mechName.classList = 'mech-project-name';
  mechName.textContent = mech.name;
  mechInfoDiv.appendChild(mechName);
  mechDiv.appendChild(mechInfoDiv);
  mechaDiv.appendChild(mechDiv);
};

window.onload = (event) => {
  getMecha();
};
