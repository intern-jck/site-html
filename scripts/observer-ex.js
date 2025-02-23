const carousels = [...document.querySelectorAll("[data-carousel]")];

if (carousels) {
    // Checking for multiple carousels on the page
    carousels.map((carousel) => {
        // Carousel next and previous controls
        // Get the carousel items, container and controls
        const carouselItems = [...carousel.querySelectorAll(".carousel__item")];
        const carouselContainer = carousel.querySelector(".carousel__container");
        const carouselControls = [...carousel.querySelectorAll(".carousel__anchor-dot")];

        // Insert previous pagination button HTML
        carousel.insertAdjacentHTML(
            "afterbegin",
            `
      <a class="carousel__pagination-prev" href="#">
        <span class="carousel__pagination-label">Previous</span>
      </a>
    `
        );

        // Insert next pagination button HTML
        carousel.insertAdjacentHTML(
            "beforeend",
            `
      <a class="carousel__pagination-next" href="#">
        <span class="carousel__pagination-label">Next</span>
      </a>
    `
        );

        // Grab the newly made buttons
        const prevButton = carousel.querySelector(".carousel__pagination-prev");
        const nextButton = carousel.querySelector(".carousel__pagination-next");

        // Intersection callback
        const updatePagination = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Get the ID of either the previous sibling or the very last sibling
                    const prevDestination = () => {
                        if (entry.target.previousElementSibling) {
                            return entry.target.previousElementSibling.getAttribute("id");
                        }
                        return carouselContainer.lastElementChild.getAttribute("id");
                    };

                    // Get the ID of either the next sibling or the very first sibling
                    const nextDestination = () => {
                        if (entry.target.nextElementSibling) {
                            return entry.target.nextElementSibling.getAttribute("id");
                        }
                        return carouselContainer.firstElementChild.getAttribute("id");
                    };

                    // Apply anchor links dependant on the above to navigate carousel
                    prevButton.setAttribute("href", `#${prevDestination()}`);
                    nextButton.setAttribute("href", `#${nextDestination()}`);

                    // Apply active state on current control dot
                    carouselControls.map((control) => control.classList.remove("active"));
                    carousel
                        .querySelector(`.carousel__anchor-dot[href="#${entry.target.getAttribute("id")}"]`)
                        .classList.add("active");
                }
            });
        };

        // New observer on the carousel container, referring to the callback
        const observerAll = new IntersectionObserver(updatePagination, {
            root: carouselContainer,
            rootMargin: "0px",
            threshold: 1.0,
        });

        // Observe each carousel item
        carouselItems.map((item) => {
            observerAll.observe(item);
        });
    });
}
