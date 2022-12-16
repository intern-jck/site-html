const MECHA_URL = `../assets/data/mechaData.json`;

const getMecha = () => {
  fetch(MECHA_URL)
    .then((response) => (response.json()))
    .then((data) => {
      addMechaCard(data.reverse());
    })
    .catch((error) => (console.log('fetching mecha url', error)));
};

const addMechaCard = (mecha) => {

  // Get div from photos page
  const mechaDiv = document.getElementById('mecha-projects');
  
  mecha.forEach((mech) => {
    console.log(Object.keys(mech));

    const mechDiv = document.createElement('div');
    mechDiv.classList = "mech-div";

    const mechName = document.createElement('h2');
    mechName.classList = "mech-name";
    mechName.textContent = mech.name;

    const mechImgDiv = document.createElement('div');
    mechImgDiv.classList = "mech-img";
    const mechImg = document.createElement('img');
    mechImg.src = mech.photos[0];

    mechDiv.appendChild(mechName);
    mechImgDiv.appendChild(mechImg);
    mechDiv.appendChild(mechImgDiv);
    mechaDiv.appendChild(mechDiv);
  });

};

window.onload = (event) => {
  getMecha();
  console.log('mecha page loaded')
};
