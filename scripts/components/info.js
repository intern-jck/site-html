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
  const model = await getModelType('project');
  // Use it's keys to access the info items
  const keys = Object.keys(model);
  console.log(keys)

  // Create the container to add all info components
  const infoContainer = document.createElement('div');
  infoContainer.classList = 'info-container';

  keys.map((key, i) => {

    // Don't need these in info
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
      // WIll need to change this to use an array of objects instead of array of arrays
      case 'tech':
        const techTagDiv = document.createElement('div');
        techTagDiv.classList = 'tech-tag-div';
        info[key].map((tag, i) => {
          const tagName = document.createElement('a');
          tagName.textContent = tag[0];
          tagName.href = tag[1];
          tagName.target = '_blank';
          techTagDiv.append(tagName);
        });
        infoValue.append(techTagDiv);
        break;
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