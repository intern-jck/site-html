// Carousel Class
class Carousel {
    constructor(name, nodes) {
        this.name = name;
        this.nodes = nodes;
        this.slideId = "";
        this.slideCount = 0;
        this.slideNumber = 0;
        this.test = "test";

        // this.carousel = document.getElementById(this.name);
        // this.options = {
        //     root: this.carousel,
        //     threshold: 0.85,
        // };
        // this.observer = new IntersectionObserver(this.handleIntersection.bind(this), this.options);
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
        let slide = document.getElementById(slideId);
        slide.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }

    create() {
        this.slideCount = this.nodes.length;
        this.slideNumber = 1;

        // Carousel List
        const carousel = document.createElement("ul");
        carousel.classList = "carousel";

        // Carousel Items/Slides
        for (let i = 0; i < this.slideCount; i++) {
            // console.log(this.nodes[i]);
            const slide = document.createElement("li");
            // slide.classList = "carousel-slide";
            slide.classList = `${this.name}-slide carousel-slide`;
            slide.id = `${this.name}-slide-${i + 1}`;
            slide.append(nodes[i]);
            carousel.append(slide);
        }

        // Carousel Controls
        const prevButton = document.createElement("button");
        prevButton.classList = `${this.name}-prev-button`;
        prevButton.textContent = "PREV";
        prevButton.onclick = () => {
            this.prevSlide();
        };

        const nextButton = document.createElement("button");
        nextButton.classList = `${this.name}-next-button`;
        nextButton.textContent = "NEXT";
        nextButton.onclick = () => {
            this.nextSlide();
        };

        const carouselControls = document.createElement("div");
        carouselControls.classList = "carousel-controls";
        carouselControls.append(prevButton);
        carouselControls.append(nextButton);

        // Carousel Dots
        const carouselDots = document.createElement("div");
        carouselDots.classList = "carousel-dots";
        for (let i = 0; i < this.slideCount; i++) {
            const dot = document.createElement("button");
            const dotIcon = document.createElement("i");
            dotIcon.classList = "fa-solid fa-circle";
            dot.classList = `${this.name}-dot`;
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
        // this.carousel.append(carousel);

        // document.getElementById(this.name).append(carouselContainer);

        // this.createObserver();
        // this.initObserver();
    }

    // handleIntersection(entries, observer) {
    //     console.log(entries);
    //     entries.forEach((entry) => {
    //         if (entry.isIntersecting) {
    //             // const nextSibling = entry.target.nextElementSibling;
    //             // const prevSibling = entry.target.previousElementSibling;

    //             // let prevId = "";
    //             // let nextId = "";

    //             // if (!prevSibling) {
    //             //     prevId = observer.root.lastElementChild.id;
    //             // } else {
    //             //     prevId = prevSibling.id;
    //             // }

    //             // if (!nextSibling) {
    //             //     nextId = observer.root.firstElementChild.id;
    //             // } else {
    //             //     nextId = nextSibling.id;
    //             // }

    //             const targetId = entry.target.id;

    //             this.slideNumber = parseInt(targetId.split("-")[targetId.length - 1]);
    //             console.log(targetId);
    //         }
    //     });
    // }

    // initObserver() {
    //     // this.slideCount = this.nodes.length;
    //     // this.slideNumber = 1;

    //     const divs = document.querySelectorAll(`${this.name}-slide`);
    //     for (let div of divs) {
    //         this.observer.observe(div);
    //     }
    // }
}
