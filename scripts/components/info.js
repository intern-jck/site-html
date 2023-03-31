function addInfo(info, parentDiv) {
  // console.log(info, parentDiv)
  const entries = Object.entries(info);
  console.log(entries)
  const infoContainer = document.createElement('div');
  infoContainer.classList = 'info-container';


  entries.map((entry, i) => {
    const infoRow = document.createElement('div');
    infoRow.classList = 'info-row';

    if (entry[0] !== 'link') {
      const infoKey = document.createElement('span');
      infoKey.classList = 'info-key';

      const infoValue = document.createElement('span');
      infoValue.classList = 'info-value';

      infoKey.textContent = `${entry[0]}: `;
      infoValue.textContent = entry[1];

      infoRow.append(infoKey);
      infoRow.append(infoValue);

      infoContainer.append(infoRow);

    }
  });

  parentDiv.appendChild(infoContainer);
}