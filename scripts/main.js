const primaryHeader = document.querySelector(".primary-header");
const navToggle = document.querySelector(".nav-toggle");
const primaryNav = document.querySelector(".navbar");

// Navigation
navToggle.addEventListener("click", () => {
    console.log("toggle clicked")
  primaryNav.hasAttribute("data-visible")
    ? navToggle.setAttribute("aria-expanded", false)
    : navToggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
});
