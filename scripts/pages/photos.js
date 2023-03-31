const PHOTOS_URL = 'https://raw.githubusercontent.com/intern-jck/site-html/site-dev/assets/data/photos.json';

const getPhotos = () => {
  fetch(PHOTOS_URL)
    .then((response) => (response.json()))
    .then((data) => {
      addPhotos(data);
    })
    .catch((error) => (console.log('fetching photos url', error)));
};

const addPhotos = (photos) => {

  // Get div from photos page
  const photosDiv = document.getElementById('photos-container');

  // TODO: Refactor to use pagination
  photos.forEach((photoUrl, i) => {
    // Create img container
    const imgDiv = document.createElement('div');
    imgDiv.classList = 'photos-img';

    // Create img
    // const img = document.createElement('img');

    const img = new Image();
    img.src = photoUrl;
    img.loading = 'lazy';
    img.alt = '...';

    // Add img to img container
    imgDiv.appendChild(img);

    // Add img container to page
    photosDiv.appendChild(imgDiv);

  });

};

getPhotos();
