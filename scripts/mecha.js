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

  // Info
  const mechInfoDiv = document.createElement('div');
  mechInfoDiv.classList = "mech-project-info";
  const mechName = document.createElement('h2');
  mechName.classList = "mech-project-name";
  mechName.textContent = mech.name;
  mechInfoDiv.appendChild(mechName);
  
  mechImgDiv.appendChild(mechImg);
  mechDiv.appendChild(mechImgDiv);

  mechDiv.appendChild(mechInfoDiv);
  mechaDiv.appendChild(mechDiv);
};

window.onload = (event) => {
  getMecha();
  console.log('mecha page loaded')
};
