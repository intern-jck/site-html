function addCards(cards, div, clickHandler) {
  const parentDiv = document.getElementById(div);
  clearDiv(parentDiv);

  const cardsContainer = document.createElement("div");
  cardsContainer.classList = "cards-container";

  cards.forEach((card) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList = "card-div";

    const cardName = document.createElement("h2");
    cardName.classList = "card-name";
    cardName.textContent = card.name;

    const cardImgDiv = document.createElement("div");
    cardImgDiv.classList = "card-img";
    cardImgDiv.onclick = (event) => {
      event.preventDefault();
      clickHandler(card);
    };

    const cardImg = document.createElement("img");
    cardImg.src = card.photos[0];

    const cardShort = document.createElement("h3");
    cardShort.classList = "card-short";
    cardShort.textContent = card.short;

    cardImgDiv.appendChild(cardImg);
    cardDiv.appendChild(cardImgDiv);
    cardDiv.appendChild(cardName);
    // cardDiv.appendChild(cardShort);
    cardsContainer.appendChild(cardDiv);
  });

  parentDiv.appendChild(cardsContainer);
}

function createCard(data) {
  const cardDiv = document.createElement("div");
  cardDiv.classList = "card-div";

  const cardName = document.createElement("h2");
  cardName.classList = "card-name";
  cardName.textContent = data.name;

  const cardImgDiv = document.createElement("div");
  cardImgDiv.classList = "card-img";
  cardImgDiv.onclick = (event) => {
    event.preventDefault();
    clickHandler(data);
  };

  const cardImg = document.createElement("img");
  cardImg.src = data.photos[0];

  const cardShort = document.createElement("h3");
  cardShort.classList = "card-short";
  cardShort.textContent = data.short;

  cardImgDiv.appendChild(cardImg);
  cardDiv.appendChild(cardImgDiv);
  cardDiv.appendChild(cardName);
  
  return cardDiv;
}
