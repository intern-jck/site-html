const CODE_JSON_URL = 'https://raw.githubusercontent.com/intern-jck/site-html/site-dev/assets/data/code.json';

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
    getCode();
  };
  parentDiv.appendChild(backButton);
}

const removeBackButton = () => {
  if (document.getElementById('back-button')) {
    document.getElementById('back-button').remove();
  }
};

const getCode = () => {
  fetch(CODE_JSON_URL)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      addCards(data, 'code-container', showCode);
    })
    .catch((error) => (console.log('fetching work url', error)));
};

const showCode = (code) => {
  const codeContainer = document.getElementById('code-container');
  clearDiv(codeContainer);
  addBackButton(codeContainer);

  const codeDiv = document.createElement('div');
  codeDiv.setAttribute('id', 'code-div');

  codeContainer.append(codeDiv);

  // Carousel
  addCarousel(code.photos, codeDiv);

  // Info
  addInfo(code, codeDiv, 'code');

};

window.addEventListener("load", function (event) {
  getCode();
}, false);