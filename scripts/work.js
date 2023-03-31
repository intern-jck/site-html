const WORK_JSON_URL = 'https://raw.githubusercontent.com/intern-jck/site-html/main/assets/data/workData.json';

// Helper function to clear all child elements from a parent div.
const clearDiv = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

const addBackButton = (parentDiv) => {
  const backButton = document.createElement('button');
  backButton.textContent = 'BACK';
  backButton.classList = 'onclick';
  backButton.setAttribute('id', 'back-button');

  backButton.onclick = (event) => {
    getWork();
  };

  parentDiv.appendChild(backButton);
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
      addCards(data.reverse(), 'work-container', showWork);
    })
    .catch((error) => (console.log('fetching work url', error)));
};

const showWork = (work) => {
  const workContainer = document.getElementById('work-container');
  clearDiv(workContainer);
  addBackButton(workContainer);

  const workDiv = document.createElement('div');
  workDiv.setAttribute('id', 'work-div');

  workContainer.append(workDiv);

  // Carousel
  addCarousel(work.photos, workDiv);

  // Info
  addInfo(work, workDiv);

};

window.addEventListener("load", function (event) {
  getWork();
}, false);