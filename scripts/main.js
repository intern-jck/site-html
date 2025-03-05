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

const icons = {
    "GitHub": "fa-brands fa-github",
    "YouTube": "fa-brands fa-youtube",
    "Ford Ranger": "fa-solid fa-truck-pickup",
    "DMX": "fa-solid fa-computer audio-visual",
    "WS2812b": "fa-solid fa-lightbulb audio-visual",
    "MIDI": "fa-solid fa-volume-high audio-visual",
    "ArtNet": "fa-solid fa-computer audio-visual",
    "Open Sound Control": "fa-solid fa-volume-high audio-visual",
    "Guitar": "fa-solid fa-guitar audio-visual",
    "Humbuckers": "fa-solid fa-guitar audio-visual",
    "Red Bear": "fa-solid fa-volume-high audio-visual",
    "Celestion": "fa-solid fa-volume-high audio-visual",
    "Orange": "fa-solid fa-volume-high audio-visual",
    "Fusion 360": "fa-solid fa-computer digital-fab",
    "3D Printing": "fa-solid fa-cubes digital-fab",
    "Laser Cutting": "fa-solid fa-bolt-lightning digital-fab",
    "Crankshaft": "fa-solid fa-computer linux",
    "Linux": "fa-brands fa-linux linux",
    "Retro Pi": "fa-solid fa-gamepad linux",
    "Raspberry Pi": "fa-brands fa-raspberry-pi linux",
    "Arduino": "fa-solid fa-robot programming",
    "Teensy": "fa-solid fa-computer programming",
    "Python": "fa-brands fa-python programming",
    "Python 3": "fa-brands fa-python programming",
    "Processing IDE": "fa-solid fa-computer programming",
    "JavaScript": "fa-brands fa-js programming",
    "HTML": "fa-brands fa-html5 programming",
    "CSS": "fa-brands fa-css programming",
    "Bootstrap 5": "fa-brands fa-bootstrap programming",
};
