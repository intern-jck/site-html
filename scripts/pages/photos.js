const PHOTOS_URL =
  "https://raw.githubusercontent.com/intern-jck/site-html/site-dev/assets/data/photos.json";

const test_url = "https://ik.imagekit.io/jcksite/DSC00252.JPG?updatedAt=1733109421694?tr=h-300,w-300";

const getPhotos = () => {
  fetch(PHOTOS_URL)
    .then((response) => response.json())
    .then((data) => {
      addPhotos(data);
    })
    .catch((error) => console.log("fetching photos url", error));
};

const addPhotos = (photos) => {

  const photosDiv = document.getElementById("photos-container");

  photos.forEach((photoUrl, i) => {
    
    const imgDiv = document.createElement("div");
    imgDiv.classList = "photo-div";

    const img = new Image();
    img.src = photoUrl;
    img.classList = "photo-img"
    console.log(photoUrl)
    img.loading = "lazy";
    img.alt = "...";

    imgDiv.appendChild(img);
    photosDiv.appendChild(img);
  });
};

window.onload = () => {
  getPhotos();
}
