// const MECHA_URL = `../assets/data/mechaData.json`;
const MECHA_URL = 'https://raw.githubusercontent.com/intern-jck/site-html/main/assets/data/mechaData.json';

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
  backButton.classList = 'onclick';
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
      addMechaCards(data.reverse());
    })
    .catch((error) => (console.log('fetching mecha url', error)));
};

const addMechaCards = (mecha) => {

  // Get div from photos page
  const mechaDiv = document.getElementById('mecha-container');
  clearDiv(mechaDiv);
  removeBackButton();

  const mechProjects = document.createElement('div');
  mechProjects.classList = 'mecha-projects-div';

  mecha.forEach((mech) => {

    const mechaCardDiv = document.createElement('div');
    mechaCardDiv.classList = 'mecha-card-div';

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

    mechaCardDiv.appendChild(mechName);
    mechImgDiv.appendChild(mechImg);
    mechaCardDiv.appendChild(mechImgDiv);
    mechProjects.appendChild(mechaCardDiv);
  });

  mechaDiv.appendChild(mechProjects);

};

const showMechaProject = (mech) => {
  console.log(Object.keys(mech))
  const mechaDiv = document.getElementById('mecha-container');
  clearDiv(mechaDiv);
  addBackButton();

  const mechDiv = document.createElement('div');
  mechDiv.classList = 'mecha-project-div';

  // Carousel
  createCarousel(mech.photos, mechDiv);

  // Info
  // TODO: Write function to generate info
  const mechaInfoDiv = document.createElement('div');
  mechaInfoDiv.classList = 'mecha-project-info';

  // Add name
  const mechaName = document.createElement('div');
  mechaName.classList = 'mecha-info-key';
  mechaName.textContent = `NAME:`;
  const mechaNameValue = document.createElement('span');
  mechaNameValue.classList = 'mecha-info-value';
  mechaNameValue.textContent = `${mech.name}`
  mechaName.appendChild(mechaNameValue);
  mechaInfoDiv.appendChild(mechaName);

  // Add client 
  const mechaClient = document.createElement('div');
  mechaClient.classList = 'mecha-info-key';
  mechaClient.textContent = `CLIENT:`;
  const mechaClientValue = document.createElement('a');
  mechaClientValue.href = mech.client_url;
  mechaClientValue.target = '_blank';
  mechaClientValue.classList = 'mecha-info-value';
  mechaClientValue.textContent = `${mech.client}`
  mechaClient.appendChild(mechaClientValue);
  mechaInfoDiv.appendChild(mechaClient);

  // Add date
  const mechaDate = document.createElement('div');
  mechaDate.classList = 'mecha-info-key';
  mechaDate.textContent = `DATE:`;
  const mechaDateValue = document.createElement('span');
  mechaDateValue.classList = 'mecha-info-value';
  mechaDateValue.textContent = `${mech.date}`
  mechaDate.appendChild(mechaDateValue);
  mechaInfoDiv.appendChild(mechaDate);

  // Add tech
  const mechaTech = document.createElement('div');
  mechaTech.classList = 'mecha-info-key';
  mechaTech.textContent = `TECH:`;

  const mechaTechValue = document.createElement('div');
  mechaTechValue.classList = 'mecha-info-tech';

  for (let i in mech.tech) {
    const techTag = document.createElement('a');
    techTag.textContent = mech.tech[i][0];
    techTag.href = mech.tech[i][1];
    techTag.target = '_blank';
    mechaTechValue.appendChild(techTag);
  }

  mechaTech.appendChild(mechaTechValue);
  mechaInfoDiv.appendChild(mechaTech);

  // Add info
  const mechaInfo = document.createElement('div');
  mechaInfo.classList = 'mecha-info-key';
  mechaInfo.textContent = `INFO:`;
  const mechaInfoValue = document.createElement('span');
  mechaInfoValue.classList = 'mecha-info-value';
  mechaInfoValue.textContent = `${mech.info}`
  mechaInfo.appendChild(mechaInfoValue);
  mechaInfoDiv.appendChild(mechaInfo);

  mechDiv.appendChild(mechaInfoDiv);
  mechaDiv.appendChild(mechDiv);
};

window.addEventListener("load", function (event) {
  getMecha();
}, false);