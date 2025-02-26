const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".nav-toggle");
const primaryNav = document.querySelector(".navbar");

// Navigation
navToggle.addEventListener("click", () => {
    console.log("toggle clicked");
    primaryNav.hasAttribute("data-visible")
        ? navToggle.setAttribute("aria-expanded", false)
        : navToggle.setAttribute("aria-expanded", true);
    primaryNav.toggleAttribute("data-visible");
});

function createCard(data, clickHandler) {
    const cardDiv = document.createElement("div");
    cardDiv.classList = "card-div";

    const cardImgDiv = document.createElement("div");
    cardImgDiv.classList = "card-img";
    cardImgDiv.onclick = (event) => {
        event.preventDefault();
        clickHandler(data);
    };

    const cardImg = document.createElement("img");
    cardImg.src = data.photos[0];

    const cardName = document.createElement("h2");
    cardName.classList = "card-name";
    cardName.textContent = data.name;

    const cardShort = document.createElement("h3");
    cardShort.classList = "card-short";
    cardShort.textContent = data.short;

    cardDiv.appendChild(cardImgDiv);
    cardDiv.appendChild(cardName);
    cardDiv.appendChild(cardShort);

    return cardDiv;
}

// Carousel Test
const nodes = [];
for (let i = 0; i < 5; i++) {
    const slideDiv = document.createElement("div");
    slideDiv.classList = "slide-content";
    const slideHeader = document.createElement("h3");
    slideHeader.textContent = `Slide ${i}`
    slideDiv.append(slideHeader)
    nodes.push(slideDiv)
}

const homeCarousel = new Carousel("home-carousel", nodes);
