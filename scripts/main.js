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

function createCarousel(nodes) {
    const carousel = document.createElement("div");
    carousel.classList = "carousel";

    for (let i = 0; i < nodes.length; i++) {
        console.log(nodes[i]);
    }

    const leftButton = document.createElement("button");
    leftButton.classList = "carousel-prev";

    const leftIcon = document.createElement("i");
    leftIcon.classList = "fa-solid fa-caret-left";
    leftButton.append(leftIcon);
    leftButton.onclick = (event) => {
        if (currentSlide > 0) {
            currentSlide -= 1;
        }
        showSlide(slides, currentSlide);
    };

    const rightButton = document.createElement("button");
    rightButton.classList = "carousel-next";

    const rightIcon = document.createElement("i");
    rightIcon.classList = "fa-solid fa-caret-right";
    rightButton.append(rightIcon);
    rightButton.onclick = (event) => {
        if (currentSlide < slides.length - 1) {
            currentSlide += 1;
        }
        showSlide(slides, currentSlide);
    };

    return carousel;
}
