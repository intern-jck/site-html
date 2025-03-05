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
                const card = createCard(item, showProject);
                projectCards.append(card);
            }

            // Useful for styling project page
            // showProject(data[13]);

            projectsContainer.append(projectCards);
        })
        .catch((error) => console.log("fetching projects url", error));
}

// Show the input project's details
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
};

function createPhotosCarousel(photos, containerId) {
    const nodes = [];
    for (let i = 0; i < photos.length; i++) {
        const photo = document.createElement("img");
        photo.src = photos[i];
        nodes.push(photo);
    }

    const carousel = new Carousel(containerId, nodes);
}

function createProjectInfo(project, containerId) {
    const container = document.getElementById(containerId);
    addInfo(project);
}

window.onload = () => {
    getProjects();
};
