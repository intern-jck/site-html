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
    
    const icon = document.createElement("i");
    icon.classList = "fa-solid fa-ghost";

    cardHeader.append(cardName);
    cardHeader.append(icon);

    // Card image
    const cardImgDiv = document.createElement("div");
    cardImgDiv.classList = "card-img";
    cardImgDiv.onclick = (event) => {
        event.preventDefault();
        clickHandler(data);
    };

    const cardImg = document.createElement("img");
    cardImg.src = data.photos[0];
    cardImgDiv.append(cardImg)

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
    // card.append(cardContent);

    return card;
}
