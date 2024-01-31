const PROJECTS_JSON_URL =
  'https://raw.githubusercontent.com/intern-jck/site-html/site-dev/assets/data/projects.json';
const WORK_JSON_URL =
  'https://raw.githubusercontent.com/intern-jck/site-html/site-dev/assets/data/work.json';

// Helper function to clear all child elements from a parent div.
const clearDiv = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

const addBackButton = (parentDiv) => {
  const backButton = document.createElement('button');
  backButton.textContent = 'BACK';
  backButton.setAttribute('id', 'back-button');

  backButton.onclick = (event) => {
    getProjects();
  };

  parentDiv.appendChild(backButton);
};

const removeBackButton = () => {
  if (document.getElementById('back-button')) {
    document.getElementById('back-button').remove();
  }
};

const getProjects = () => {
  fetch(PROJECTS_JSON_URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      addCards(data, 'projects-container', showProject);
    })
    .catch((error) => console.log('fetching projects url', error));
};

const showProject = (project) => {
  const projectContainer = document.getElementById('projects-container');
  clearDiv(projectContainer);
  addBackButton(projectContainer);
  const projectDiv = document.createElement('div');
  projectDiv.setAttribute('id', 'project-div');
  projectContainer.append(projectDiv);
  // Carousel
  addCarousel(project.photos, projectDiv);
  // Info
  addInfo(project, projectDiv, 'project');
};

window.addEventListener(
  'load',
  function (event) {
    getProjects();
  },
  false
);
