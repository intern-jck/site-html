
// // Add name
// const workName = document.createElement('div');
// workName.classList = 'work-info-key';
// workName.textContent = `NAME:`;
// const workNameValue = document.createElement('span');
// workNameValue.classList = 'work-info-value';
// workNameValue.textContent = `${work.name}`
// workName.appendChild(workNameValue);
// infoDiv.appendChild(workName);

// // Add client
// const workClient = document.createElement('div');
// workClient.classList = 'work-info-key';
// workClient.textContent = `CLIENT:`;
// const workClientValue = document.createElement('a');
// workClientValue.href = work.client_url;
// workClientValue.target = '_blank';
// workClientValue.classList = 'work-info-value';
// workClientValue.textContent = `${work.client}`
// workClient.appendChild(workClientValue);
// infoDiv.appendChild(workClient);

// // Add date
// const workDate = document.createElement('div');
// workDate.classList = 'work-info-key';
// workDate.textContent = `DATE:`;
// const workDateValue = document.createElement('span');
// workDateValue.classList = 'work-info-value';
// workDateValue.textContent = `${work.date}`
// workDate.appendChild(workDateValue);
// infoDiv.appendChild(workDate);

// // Add tech
// const workTech = document.createElement('div');
// workTech.classList = 'work-info-key';
// workTech.textContent = `TECH:`;

// const workTechValue = document.createElement('div');
// workTechValue.classList = 'work-info-tech';

// for (let i in work.tech) {
//   const techTag = document.createElement('a');
//   techTag.textContent = work.tech[i][0];
//   techTag.href = work.tech[i][1];
//   techTag.target = '_blank';
//   workTechValue.appendChild(techTag);
// }

// workTech.appendChild(workTechValue);
// infoDiv.appendChild(workTech);

// // Add info
// const workInfo = document.createElement('div');
// workInfo.classList = 'work-info-key';
// workInfo.textContent = `INFO:`;
// const workInfoValue = document.createElement('span');
// workInfoValue.classList = 'work-info-value';
// workInfoValue.textContent = `${work.info}`
// workInfo.appendChild(workInfoValue);
// infoDiv.appendChild(workInfo);