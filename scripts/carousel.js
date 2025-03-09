// Carousel Class
class Carousel {
    constructor(name, nodes) {
        this.name = name;
        this.nodes = nodes;
        this.slideId = "";
        this.slideCount = 0;
        this.slideNumber = 0;
        this.oldSlide = 0;
        this.test = "test";

        this.create();
    }

    prevSlide() {
        this.slideNumber -= 1;
        if (this.slideNumber < 1) {
            this.slideNumber = this.slideCount;
        }

        this.gotoSlide(this.slideNumber);
    }

    nextSlide() {
        this.slideNumber += 1;
        if (this.slideNumber > this.slideCount) {
            this.slideNumber = 1;
        }

        this.gotoSlide(this.slideNumber);
    }

    gotoSlide(id) {
        // remove active from current dot
        let slideId = `${this.name}-slide-${id}`;
        console.log("goto: ", slideId);

        console.log(`old: ${this.name}-dot-${this.oldSlide}`);
        let currentdot = document.getElementById(`${this.name}-dot-${this.oldSlide}`);
        currentdot.classList.remove("active-dot");

        // Update slide number
        let arr = slideId.split("-");
        this.slideNumber = parseInt(arr[arr.length - 1]);

        let slide = document.getElementById(slideId);
        slide.scrollIntoView({ behavior: "smooth", block: "nearest" });

        // set dot to active
        console.log(`current: ${this.name}-dot-${id}`);
        let activedot = document.getElementById(`${this.name}-dot-${id}`);
        activedot.classList.add("active-dot");
        activedot.scrollIntoView({ behavior: "smooth", block: "nearest" });

        // update old slide
        this.oldSlide = id;
    }

    create() {
        this.slideCount = this.nodes.length;
        this.slideNumber = 1;
        this.oldSlide = this.slideNumber;

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
        prevButton.classList = `carousel-prev-button ${this.name}-prev-button`;
        const prevIcon = document.createElement("i");
        prevIcon.classList = "fa-solid fa-caret-left";
        prevButton.append(prevIcon);

        prevButton.onclick = () => {
            this.prevSlide();
        };

        const nextButton = document.createElement("button");
        nextButton.classList = `carousel-next-button ${this.name}-next-button`;
        const nextIcon = document.createElement("i");
        nextIcon.classList = "fa-solid fa-caret-right";
        nextButton.append(nextIcon);

        nextButton.onclick = () => {
            this.nextSlide();
        };

        const carouselControls = document.createElement("div");
        carouselControls.classList = `carousel-controls ${this.name}-controls`;

        carouselControls.append(prevButton);
        carouselControls.append(nextButton);

        // Carousel Dots
        const carouselDots = document.createElement("div");
        carouselDots.classList = `carousel-dots ${this.name}-dots carousel`;
        for (let i = 0; i < this.slideCount; i++) {
            const dot = document.createElement("button");
            const dotIcon = document.createElement("i");
            dotIcon.classList = "fa-solid fa-circle";
            dot.classList = `carousel-dot ${this.name}-dot`;

            if (i === 0) {
                dot.classList.add("active-dot");
            }

            dot.id = `${this.name}-dot-${i + 1}`;
            dot.value = `${i + 1}`;
            dot.onclick = () => {
                this.gotoSlide(dot.value);
            };

            dot.append(dotIcon);
            carouselDots.append(dot);
        }

        carouselControls.append(prevButton);
        carouselControls.append(carouselDots);
        carouselControls.append(nextButton);

        // Add all the carousel elements to carousel container
        const carouselContainer = document.getElementById(this.name);
        carouselContainer.append(carousel);
        carouselContainer.append(carouselControls);
    }
}
