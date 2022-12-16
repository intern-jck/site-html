const PHOTOS_URL = `../assets/data/photosData.json`;

const getPhotos = () => {
  fetch(PHOTOS_URL)
    .then((response) => (response.json()))
    .then((data) => {
      // console.log(data);
      addPhotos(data);
    })
    .catch((error) => (console.log('fetching photos url', error)));
};

const addPhotos = (photos) => {

  // Get div from photos page
  const photosDiv = document.getElementById('photos-container');

  photos.forEach((photoUrl) => {
    // Create img container
    const imgDiv = document.createElement('div');
    imgDiv.classList = 'photos-img';
  
    // Create img
    const img = document.createElement('img');
    img.src = photoUrl;
    img.loading = 'lazy';
  
    // Add img to img container
    imgDiv.appendChild(img);
  
    // Add img container to page
    photosDiv.appendChild(imgDiv);
  });


};

window.onload = (event) => {
  getPhotos();
  console.log('photos page loaded')
};
