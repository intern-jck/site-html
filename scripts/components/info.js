const MODELS_URL = 'https://raw.githubusercontent.com/intern-jck/site-html/site-dev/assets/data/models.json';

async function getModelType(type) {
  try {
    const response = await fetch(MODELS_URL);
    const data = await response.json();
    return data[type];
  } catch (error) {
    console.error(error);
    return error;
  }
}

async function addInfo(info, parentDiv, modelType) {

  // Get the model for the info data
  const model = await getModelType('general');
  // Use it's keys to access the info items
  const keys = Object.keys(model);
  console.log(keys)

  // Create the container to add all info components
  const infoContainer = document.createElement('div');
  infoContainer.classList = 'info-container';

  keys.map((key, i) => {

    const infoRow = document.createElement('div');
    infoRow.classList = 'info-row';
    if (key !== 'link') {
      const infoKey = document.createElement('span');
      infoKey.classList = 'info-key';
      const infoValue = document.createElement('span');
      infoValue.classList = 'info-value';

      infoKey.textContent = `${key}: `;
      infoValue.textContent = info[key];

      infoRow.append(infoKey);
      infoRow.append(infoValue);
      infoContainer.append(infoRow);
    }
  });

  parentDiv.appendChild(infoContainer);
}