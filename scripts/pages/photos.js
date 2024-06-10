const PHOTOS_URL =
  "https://raw.githubusercontent.com/intern-jck/site-html/site-dev/assets/data/photos.json";

const getPhotos = () => {
  fetch(PHOTOS_URL)
    .then((response) => response.json())
    .then((data) => {
      addPhotos(data);
    })
    .catch((error) => console.log("fetching photos url", error));
};

const addPhotos = (photos) => {
  // Get div from photos page
  const photosDiv = document.getElementById("photos-container");

  // TODO: Refactor to use pagination
  photos.forEach((photoUrl, i) => {
    // Create img container
    const imgButton = document.createElement("button");
    const imgDiv = document.createElement("div");
    
    imgButton.classList = "photo-button";
    imgDiv.classList = "photos-img";

    // Create img
    // const img = document.createElement('img');

    const img = new Image();
    img.src = photoUrl;
    img.loading = "lazy";
    img.alt = "...";

    // Add img to img container
    
    // Add img container to page
    imgDiv.appendChild(img);
    imgButton.appendChild(imgDiv);
    photosDiv.appendChild(imgButton);
    // photosDiv.appendChild(imgDiv);
  });
};

window.addEventListener(
  "load",
  function (event) {
    getPhotos();
  },
  false
);
