// Carousel Class
class Carousel {
    constructor(name, nodes) {
        this.name = name;
        this.nodes = nodes;
        this.slideId = "";
        this.slideCount = 0;
        this.slideNumber = 0;
        this.test = "test";

        this.create();
    }

    prevSlide() {
        this.slideNumber -= 1;
        if (this.slideNumber < 1) {
            this.slideNumber = this.slideCount;
        }

        let slideId = `${this.name}-slide-${this.slideNumber}`;
        this.gotoSlide(slideId);
    }

    nextSlide() {
        this.slideNumber += 1;
        if (this.slideNumber > this.slideCount) {
            this.slideNumber = 1;
        }

        let slideId = `${this.name}-slide-${this.slideNumber}`;
        this.gotoSlide(slideId);
    }

    gotoSlide(slideId) {
        console.log("goto:", slideId);

        // Update slide number
        let arr = slideId.split("-");
        this.slideNumber = parseInt(arr[arr.length - 1]);

        let slide = document.getElementById(slideId);
        slide.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    create() {
        this.slideCount = this.nodes.length;
        this.slideNumber = 1;

        // Carousel List
        const carousel = document.createElement("ul");
        carousel.classList = `carousel ${this.name}-list`;
        carousel.id = `${this.name}-list`;

        // Carousel Items/Slides
        for (let i = 0; i < this.slideCount; i++) {
            const slide = document.createElement("li");
            slide.classList = `carousel-slide ${this.name}-slide`;
            slide.id = `${this.name}-slide-${i + 1}`;
            slide.append(this.nodes[i]);
            carousel.append(slide);
        }

        // Carousel Controls
        const prevButton = document.createElement("button");
        prevButton.classList = `carousel-slide-button ${this.name}-prev-button`;
        prevButton.textContent = "PREV";
        prevButton.onclick = () => {
            this.prevSlide();
        };

        const nextButton = document.createElement("button");
        nextButton.classList = `carousel-slide-button ${this.name}-next-button`;
        nextButton.textContent = "NEXT";
        nextButton.onclick = () => {
            this.nextSlide();
        };

        const carouselControls = document.createElement("div");
        carouselControls.classList = `carousel-controls ${this.name}-controls`;
        carouselControls.append(prevButton);
        carouselControls.append(nextButton);

        // Carousel Dots
        const carouselDots = document.createElement("div");
        carouselDots.classList = `carousel-dots ${this.name}-dots`;
        for (let i = 0; i < this.slideCount; i++) {
            const dot = document.createElement("button");
            const dotIcon = document.createElement("i");
            dotIcon.classList = "fa-solid fa-circle";
            dot.classList = `carousel-dot ${this.name}-dot`;
            dot.value = `${this.name}-slide-${i + 1}`;
            dot.onclick = () => {
                this.gotoSlide(dot.value);
            };

            dot.append(dotIcon);
            carouselDots.append(dot);
        }

        // Add all the carousel elements to carousel container
        const carouselContainer = document.getElementById(this.name);
        carouselContainer.append(carousel);
        carouselContainer.append(carouselControls);
        carouselContainer.append(carouselDots);
    }
}