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
  const model = await getModelType(modelType);
  // Use it's keys to access the info items
  const keys = Object.keys(model);

  // Create the container to add all info components
  const infoContainer = document.createElement('div');
  infoContainer.classList = 'info-container';

  keys.map((key, i) => {

    // Don't need photos in info
    if (key === 'photos') {
      return;
    }

    const infoRow = document.createElement('div');
    infoRow.classList = 'info-row';
    const infoKey = document.createElement('div');
    infoKey.classList = 'info-key';
    const infoValue = document.createElement('div');
    infoValue.classList = 'info-value';

    infoKey.textContent = `${key}: `;

    // Adjust format of elements based on info key
    switch (key) {

      case 'client':
        const { name, url } = info[key];
        const clientAnchor = document.createElement('a');
        clientAnchor.href = url;
        clientAnchor.target = '_blank';
        clientAnchor.textContent = name;
        infoValue.append(clientAnchor);
        break;

      case 'date':
        const { start_month, start_year, end_month, end_year } = info[key];
        infoValue.textContent = `${start_month} ${start_year} - ${end_month} ${end_year}`;
        break;

      // TODO: Change this to use an array of objects instead of array of arrays
      case 'tech':
        const techTagDiv = document.createElement('div');
        techTagDiv.classList = 'tech-tag-div';
        info[key].map((value) => {
          const tag = document.createElement('a');
          tag.classList = 'tech-tag';
          tag.textContent = value[0];
          tag.href = value[1];
          tag.target = '_blank';
          techTagDiv.append(tag);
        });
        infoValue.append(techTagDiv);
        break;

      // Otherwise just keep it simple
      default:
        infoValue.textContent = info[key];
        break;
    }

    infoRow.append(infoKey);
    infoRow.append(infoValue);
    infoContainer.append(infoRow);
  });

  parentDiv.appendChild(infoContainer);
}