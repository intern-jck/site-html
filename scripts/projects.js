const PROJECTS_URL = "https://raw.githubusercontent.com/intern-jck/jsons/main/jcksite/all_projects.json";

window.onload = () => {
    getProjects();
};

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

// Remove the back button from the page
// function removeBackButton() {
//     if (document.getElementById("back-button")) {
//         document.getElementById("back-button").remove();
//     }
// }

// Adds the back button to the page
// function addBackButton(parentDiv) {
//     const backButton = document.createElement("button");
//     backButton.textContent = "BACK";
//     backButton.setAttribute("id", "back-button");

//     backButton.onclick = (event) => {
//         getProjects();
//     };

//     parentDiv.appendChild(backButton);
// }

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
            
            const projectCards = document.createElement("div")
            projectCards.classList = "project-cards"
            
            // const projectsCarousel = document.createElement("div");
            // projectsCarousel.id = "project-carousel";
            // projectsCarousel.classList = "project-carousel";
            // projectsContainer.append(projectsCarousel);
            
            const nodes = [];
            for (let item of data) {
                const card = createCard(item, showProject);
                // nodes.push(card);
                projectCards.append(card)
            }


            // const projectCarousel = new Carousel("project-carousel", nodes);
            // showProject(data[13]);

            projectsContainer.append(projectCards)

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
        // const container = document.createElement("div");
        // container.classList = "photos-carousel-slide";

        const photo = document.createElement("img");
        photo.src = photos[i];
        // container.append(photo);
        nodes.push(photo);
    }

    const carousel = new Carousel(containerId, nodes);
}

function createProjectInfo(project, containerId) {
    const container = document.getElementById(containerId);
    // const projectInfo = document.createElement("div");

    // projectInfo.id = "project-info";
    // projectInfo.classList = "project-info";
    // container.append(projectInfo);

    // add all the info
    // addInfo(project, container, project.type);
    addInfo2(project);
}
