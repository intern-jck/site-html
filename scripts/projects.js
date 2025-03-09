const PROJECTS_URL = "https://raw.githubusercontent.com/intern-jck/jsons/refs/heads/main/jcksite/all_projects.json";

// Utility Functions
// Remove a target div's child elements
function clearDiv(parentId) {
    const parent = document.getElementById(parentId);
    if (parent.firstChild === null) {
        return;
    }

    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// Project Functions
// Fetch the projects json add create project cards
function getProjects() {
    fetch(PROJECTS_URL)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            // Clear out the container
            clearDiv("projects-container");

            // Create a carousel to show project cards
            const projectsContainer = document.getElementById("projects-container");

            const projectCards = document.createElement("div");
            projectCards.classList = "project-cards";

            const nodes = [];
            for (let item of data) {
                const card = createProjectCard(item, showProject);
                projectCards.append(card);
            }

            // Useful for testing and styling project page
            // showProject(data[8]);

            projectsContainer.append(projectCards);
        })
        .catch((error) => console.log("fetching projects url", error));
}

// Components
function createProjectCard(data, clickHandler) {
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
        const icon = document.createElement("i");
        icon.classList = "fa-solid fa-ghost";
        cardHeader.append(cardName);
        cardHeader.append(icon);
    } else {
        cardHeader.append(cardName);

        // limit number of icons shown
        let techCount = data.tech.length;
        if (techCount >= 4) {
            techCount = 4;
        }

        for (let i = 0; i < techCount; i++) {
            let techName = data.tech[i][0];
            let techClass = icons[techName];
            let icon = document.createElement("i");
            icon.classList = techClass;
            icon.classList.add(`card-icon-${i + 1}`);
            cardHeader.append(icon);

            // Change card background color based on tech icon
            if (i === 0) {
                // Add a card class based on the main/first tech tag
                if (techClass.includes("linux")) {
                    card.classList.add("card-linux");
                } else if (techClass.includes("audio-visual")) {
                    card.classList.add("card-audio-visual");
                } else if (techClass.includes("digital-fab")) {
                    card.classList.add("card-digital-fab");
                } else if (techClass.includes("programming")) {
                    card.classList.add("card-programming");
                }
            }
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

// Show a project's details
const showProject = (project) => {
    clearDiv("projects-container");
    const projectsContainer = document.getElementById("projects-container");

    const projectContainer = document.createElement("div");
    projectContainer.id = "project";
    projectContainer.classList = "project";

    const closeButton = document.createElement("button");
    const closeIcon = document.createElement("i");
    closeIcon.classList = "fa-solid fa-xmark";
    closeButton.id = "close-button";
    closeButton.classList = "close-button";
    closeButton.onclick = (event) => {
        event.preventDefault();
        getProjects();
    };

    closeButton.append(closeIcon);
    projectContainer.appendChild(closeButton);

    const photosContainer = document.createElement("div");
    photosContainer.id = "project-photos";
    photosContainer.classList = "project-photos";

    const infoContainer = document.createElement("div");
    infoContainer.id = "project-info";
    infoContainer.classList = "project-info";

    projectContainer.append(closeButton);
    projectContainer.append(photosContainer);
    projectContainer.append(infoContainer);
    projectsContainer.append(projectContainer);

    // Carousel
    createPhotosCarousel(project.photos, "project-photos");

    // Info
    createProjectInfo(project, "project-info");

    projectsContainer.scrollIntoView({ behavior: "smooth", block: "nearest" });
};

// Add the project's photos to a carousel
function createPhotosCarousel(photos, containerId) {
    const nodes = [];
    for (let i = 0; i < photos.length; i++) {
        const photo = document.createElement("img");
        photo.src = photos[i];
        nodes.push(photo);
    }

    const carousel = new Carousel(containerId, nodes);
}

// Add the project's info
function createProjectInfo(project, containerId) {
    const projectInfo = document.getElementById(containerId);

    const keys = Object.keys(project);
    const nodes = [];

    if (project["name"].length > 0) {
        const nameRow = document.createElement("div");
        nameRow.classList = "info-row";

        const nameKey = document.createElement("p");
        nameKey.classList = "info-key";
        nameKey.textContent = "name:";

        const nameValue = document.createElement("span");
        nameValue.classList = "info-value";
        nameValue.textContent = project["name"];

        nameKey.append(nameValue);
        nameRow.append(nameKey);
        nodes.push(nameRow);
    }

    if (project["url"] !== undefined && project["url"].length > 0) {
        const urlRow = document.createElement("div");
        urlRow.classList = "info-row";

        const urlKey = document.createElement("p");
        urlKey.classList = "info-key";
        urlKey.textContent = "url:";

        const urlValue = document.createElement("span");
        urlValue.classList = "info-value";

        const urlAnchor = document.createElement("a");
        urlAnchor.textContent = project["url"];
        urlAnchor.href = project["url"];
        urlAnchor.target = "_blank";

        urlValue.append(urlAnchor);
        urlKey.append(urlValue);
        urlRow.append(urlKey);
        nodes.push(urlRow);
    }

    if (project["date"]) {
        const dateRow = document.createElement("div");
        dateRow.classList = "info-row";

        const dateKey = document.createElement("p");
        dateKey.textContent = "date:";
        dateKey.classList = "info-key";

        const dateValue = document.createElement("span");
        dateValue.classList = "info-value";

        const { start_month, start_year, end_month, end_year } = project["date"];

        if (end_month && end_year) {
            dateValue.textContent = `${start_month} ${start_year} - ${end_month} ${end_year}`;
        } else {
            dateValue.textContent = `${start_month} ${start_year}`;
        }

        dateKey.append(dateValue);
        dateRow.append(dateKey);
        nodes.push(dateRow);
    }

    if (project["tech"].length > 0) {
        const techRow = document.createElement("div");
        techRow.classList = "info-row";

        const techKey = document.createElement("p");
        techKey.classList = "info-key";
        techKey.textContent = "tech:";

        techRow.append(techKey);
        project["tech"].map((value) => {
            const tagAnchor = document.createElement("a");
            tagAnchor.classList = "tech-tag";
            tagAnchor.textContent = value[0];
            tagAnchor.href = value[1];
            tagAnchor.target = "_blank";

            const tagIcon = document.createElement("i");
            tagIcon.classList = icons[value[0]];
            tagAnchor.prepend(tagIcon);

            techRow.append(tagAnchor);
        });

        nodes.push(techRow);
    }

    if (project["info"].length > 0) {
        const infoRow = document.createElement("div");
        infoRow.classList = "info-row";

        const infoKey = document.createElement("p");
        infoKey.textContent = "info:";
        infoKey.classList = "info-key";

        const infoValue = document.createElement("span");
        infoValue.classList = "info-value";
        infoValue.textContent = project["info"];

        infoKey.append(infoValue);
        infoRow.append(infoKey);
        nodes.push(infoRow);
    }

    if (project["url"] !== undefined && project["resources"].length > 0) {
        const resourcesRow = document.createElement("div");
        resourcesRow.classList = "info-row";

        const resourcesKey = document.createElement("p");
        resourcesKey.textContent = "resources:";
        resourcesKey.classList = "info-key";

        const resourcesValue = document.createElement("span");
        resourcesValue.classList = "info-value";

        project["resources"].map((value) => {
            const tag = document.createElement("a");
            tag.classList = "resource-tag";

            const tagIcon = document.createElement("i");
            tagIcon.classList = icons[value.name];
            tag.append(tagIcon);

            tag.href = value.url;
            tag.target = "_blank";
            resourcesValue.append(tag);
        });

        resourcesKey.append(resourcesValue);
        resourcesRow.append(resourcesKey);
        nodes.push(resourcesRow);
    }

    for (let i = 0; i < nodes.length; i++) {
        projectInfo.append(nodes[i]);
    }
}

window.onload = () => {
    getProjects();
};
