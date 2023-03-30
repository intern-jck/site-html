const WORK_JSON_URL = 'https://raw.githubusercontent.com/intern-jck/site-html/main/assets/data/workData.json';

// Helper function to clear all child elements from a parent div.
const clearDiv = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

const addBackButton = (containerId) => {
  const backButton = document.createElement('button');
  backButton.textContent = 'BACK';
  backButton.classList = 'onclick';
  backButton.setAttribute('id', 'back-button');

  backButton.onclick = (event) => {
    getWork();
  };

  document.getElementById(containerId).appendChild(backButton);
}

const removeBackButton = () => {
  if (document.getElementById('back-button')) {
    document.getElementById('back-button').remove();
  }
};

const getWork = () => {
  fetch(WORK_JSON_URL)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      addCards(data.reverse(), 'work-container');
    })
    .catch((error) => (console.log('fetching work url', error)));
};

const addCards = (work, div) => {
  const cardContainer = document.getElementById(div);
  clearDiv(cardContainer);
  const workProjects = document.createElement('div');
  workProjects.classList = 'work-projects-div';
  work.forEach((work) => {
    const workCardDiv = document.createElement('div');
    workCardDiv.classList = 'work-card-div';
    const workName = document.createElement('h2');
    workName.classList = 'work-name';
    workName.textContent = work.name;
    const workImgDiv = document.createElement('div');
    workImgDiv.classList = 'work-img';
    workImgDiv.onclick = (event) => {
      event.preventDefault();
      showWork(work);
    };
    const workImg = document.createElement('img');
    workImg.src = work.photos[0];
    workCardDiv.appendChild(workName);
    workImgDiv.appendChild(workImg);
    workCardDiv.appendChild(workImgDiv);
    workProjects.appendChild(workCardDiv);
  });
  cardContainer.appendChild(workProjects);
};

const showWork = (work) => {
  const workContainer = document.getElementById('work-container');
  clearDiv(workContainer);
  addBackButton('work-container');

  const workDiv = document.createElement('div');
  workDiv.classList = 'work-project-div';

  // Carousel
  createCarousel(work.photos, workDiv);

  // Info
  // TODO: Write function to generate info
  const workInfoDiv = document.createElement('div');
  workInfoDiv.classList = 'work-project-info';

  // Add name
  const workName = document.createElement('div');
  workName.classList = 'work-info-key';
  workName.textContent = `NAME:`;
  const workNameValue = document.createElement('span');
  workNameValue.classList = 'work-info-value';
  workNameValue.textContent = `${work.name}`
  workName.appendChild(workNameValue);
  workInfoDiv.appendChild(workName);

  // Add client 
  const workClient = document.createElement('div');
  workClient.classList = 'work-info-key';
  workClient.textContent = `CLIENT:`;
  const workClientValue = document.createElement('a');
  workClientValue.href = work.client_url;
  workClientValue.target = '_blank';
  workClientValue.classList = 'work-info-value';
  workClientValue.textContent = `${work.client}`
  workClient.appendChild(workClientValue);
  workInfoDiv.appendChild(workClient);

  // Add date
  const workDate = document.createElement('div');
  workDate.classList = 'work-info-key';
  workDate.textContent = `DATE:`;
  const workDateValue = document.createElement('span');
  workDateValue.classList = 'work-info-value';
  workDateValue.textContent = `${work.date}`
  workDate.appendChild(workDateValue);
  workInfoDiv.appendChild(workDate);

  // Add tech
  const workTech = document.createElement('div');
  workTech.classList = 'work-info-key';
  workTech.textContent = `TECH:`;

  const workTechValue = document.createElement('div');
  workTechValue.classList = 'work-info-tech';

  for (let i in work.tech) {
    const techTag = document.createElement('a');
    techTag.textContent = work.tech[i][0];
    techTag.href = work.tech[i][1];
    techTag.target = '_blank';
    workTechValue.appendChild(techTag);
  }

  workTech.appendChild(workTechValue);
  workInfoDiv.appendChild(workTech);

  // Add info
  const workInfo = document.createElement('div');
  workInfo.classList = 'work-info-key';
  workInfo.textContent = `INFO:`;
  const workInfoValue = document.createElement('span');
  workInfoValue.classList = 'work-info-value';
  workInfoValue.textContent = `${work.info}`
  workInfo.appendChild(workInfoValue);
  workInfoDiv.appendChild(workInfo);

  workDiv.appendChild(workInfoDiv);
  workContainer.appendChild(workDiv);
};

window.addEventListener("load", function (event) {
  getWork();
}, false);