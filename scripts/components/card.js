const icons = {
    Linux: "fa-brands fa-linux",
    "Raspberry Pi": "fa-brands fa-raspberry-pi",
    Arduino: "fa-solid fa-robot",
    "Python 3": "fa-brands fa-python",
    "Processing IDE": "fa-solid fa-computer",
    "Retro Pi": "fa-solid fa-gamepad",
    "Fusion 360": "fa-solid fa-computer",
    Crankshaft: "fa-solid fa-computer",
    DMX: "fa-solid fa-computer",
    "3D Printing": "fa-solid fa-cubes",
    "Laser Cutting": "fa-solid fa-bolt-lightning",
    WS2812b: "fa-solid fa-lightbulb",
    MIDI: "fa-solid fa-volume-high",
    Teensy: "fa-solid fa-computer",
    "Open Sound Control": "",
    ArtNet: "fa-solid fa-computer",
    Guitar: "fa-solid fa-guitar",
    Humbuckers: "fa-solid fa-guitar",
    "Ford Ranger": "fa-solid fa-truck-pickup",
    JavaScript: "fa-brands fa-js",
    "Red Bear": "fa-solid fa-volume-high",
    Celestion: "fa-solid fa-volume-high",
    Orange: "fa-solid fa-volume-high",
    HTML: "fa-brands fa-html5",
    CSS: "fa-brands fa-css",
    Bootstrap: "fa-brands fa-bootstrap",
};

// Components
function createCard(data, clickHandler) {
    // Card container
    const card = document.createElement("div");
    card.classList = "card";

    // Card header
    const cardHeader = document.createElement("div");
    cardHeader.classList = "card-header";

    const cardName = document.createElement("p");
    cardName.classList = "card-name";
    cardName.textContent = data.name;

    if (data.tech.length === 0) {
        console.log("no tech");
        const icon = document.createElement("i");
        icon.classList = "fa-solid fa-ghost";
        cardHeader.append(cardName);
        cardHeader.append(icon);
    } else {
        cardHeader.append(cardName);
        for (let i = 0; i < data.tech.length; i++) {
            let techName = data.tech[i][0];
            let techClass = icons[techName];
            if (techClass === undefined) {
                console.log(techName, techClass);
            }

            let icon = document.createElement("i");
            icon.classList = techClass;
            cardHeader.append(icon);
        }
    }

    // Card image
    const cardImgDiv = document.createElement("div");
    cardImgDiv.classList = "card-img";
    cardImgDiv.onclick = (event) => {
        event.preventDefault();
        clickHandler(data);
    };

    const cardImg = document.createElement("img");
    cardImg.src = data.photos[0];
    cardImgDiv.append(cardImg);

    // Card Type
    const cardType = document.createElement("div");
    cardType.classList = "card-type";
    const type = document.createElement("p");
    type.textContent = data.tech[0] ? data.tech[0][0] : "NO TECH";
    cardType.append(type);

    // Card Short
    const cardShort = document.createElement("p");
    cardShort.classList = "card-short";
    cardShort.textContent = data.short;

    // Card Footer
    const cardFooter = document.createElement("div");
    cardFooter.classList = "card-footer";
    const date = document.createElement("p");
    date.textContent = data.date.start_month + "/" + data.date.start_year;
    cardFooter.append(date);

    // Add everything to card
    card.append(cardHeader);
    card.append(cardImgDiv);
    card.append(cardType);
    card.append(cardShort);
    card.append(cardFooter);

    return card;
}
