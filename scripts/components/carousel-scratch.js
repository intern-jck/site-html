function addCarousel(images, parentDiv) {
    let currentSlide = 0;

    // Container div for carousel slides and controls
    const carouselContainer = document.createElement("div");
    carouselContainer.classList = "carousel-container";

    // Create carousel images and add to slides
    const carouselSlides = document.createElement("div");
    carouselSlides.classList = "carousel-slides";
    const slides = [];

    for (let i in images) {
        const carouselImageContainer = document.createElement("div");
        carouselImageContainer.classList = "carousel-img";
        const carouselImage = document.createElement("img");
        carouselImage.src = images[i];
        carouselImageContainer.appendChild(carouselImage);
        carouselSlides.appendChild(carouselImageContainer);
        slides.push(carouselImageContainer);
    }

    // Create slide control buttons
    const carounselControls = document.createElement("div");
    carounselControls.classList = "carousel-controls";

    const leftButton = document.createElement("button");
    leftButton.classList = "carousel-left-button";

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
    rightButton.classList = "carousel-right-button";
    const rightIcon = document.createElement("i");
    rightIcon.classList = "fa-solid fa-caret-right";
    rightButton.append(rightIcon);
    rightButton.onclick = (event) => {
        if (currentSlide < slides.length - 1) {
            currentSlide += 1;
        }
        showSlide(slides, currentSlide);
    };

    // Add everything
    carounselControls.appendChild(leftButton);
    carounselControls.appendChild(rightButton);
    carouselContainer.appendChild(carouselSlides);
    carouselContainer.appendChild(carounselControls);
    parentDiv.appendChild(carouselContainer);

    // Show the first slide
    showSlide(slides, currentSlide);
}

// For a given index, shift all the images left or right to show the slide at index.
const showSlide = (slides, index) => {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
    });
};

// window.onload = (event) => {
//   currentSlide = 0;
// };

// NEW CODE
// let slideCount = 3;
// let slideNumber = 1;
// let currentSlide = "";

// function prevSlide() {
//     slideNumber -= 1;
//     if (slideNumber < 1) {
//         slideNumber = slideCount;
//     }

//     let slideId = `slide_${slideNumber}`;
//     gotoSlide(slideId);
// }

// function nextSlide() {
//     slideNumber += 1;
//     if (slideNumber > slideCount) {
//         slideNumber = 1;
//     }

//     let slideId = `slide_${slideNumber}`;
//     gotoSlide(slideId);
// }

// function gotoSlide(slideId) {
//     let slide = document.getElementById(slideId);
//     slide.scrollIntoView({ behavior: "smooth", block: "nearest" });
// }

// const carousel = document.getElementById("carousel");
// const options = {
//     root: carousel,
//     threshold: 0.85,
// };

// function callback(entries, observer) {
//     entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//             const nextSibling = entry.target.nextElementSibling;
//             const prevSibling = entry.target.previousElementSibling;

//             let prevId = "";
//             let nextId = "";

//             if (!prevSibling) {
//                 prevId = observer.root.lastElementChild.id;
//             } else {
//                 prevId = prevSibling.id;
//             }

//             if (!nextSibling) {
//                 nextId = observer.root.firstElementChild.id;
//             } else {
//                 nextId = nextSibling.id;
//             }

//             slideNumber = parseInt(entry.target.id.split("_")[1]);
//         }
//     });
// }

// const observer = new IntersectionObserver(callback, options);

// const divs = document.querySelectorAll(".carousel-slide");

// for (let div of divs) {
//     observer.observe(div);
// }


function createCarousel2(id, nodes) {
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
