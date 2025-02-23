const PROJECTS_URL = "https://raw.githubusercontent.com/intern-jck/jsons/main/jcksite/all_projects.json";

// Helper function to clear all child elements from a parent div.
const clearDiv = (parent) => {
    if (parent.firstChild === null) {
        return;
    }

    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

const getProjects = () => {
    fetch(PROJECTS_URL)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            createProjectsSlider(data);
        })
        .catch((error) => console.log("fetching projects url", error));
};

function createProjectsSlider(data) {
    const projectContainer = document.getElementById("projects-container");
    clearDiv(projectContainer);

    const projectsList = document.createElement("ul");
    projectsList.id = "projects-list";
    projectsList.classList = "projects-list slider";

    data.forEach((project, i) => {
        const li = document.createElement("li");

        const card = createCard(project, showProject);
        li.appendChild(card);

        projectsList.appendChild(li);
    });

    projectContainer.appendChild(projectsList);

    const slider = new A11YSlider(document.querySelector(".projects-list"), {
        dots: false,
        adaptiveHeight: false,
    });

    const list = projectContainer.querySelector("projects-list");
    console.log("list:", list);
}

const addBackButton = (parentDiv) => {
    console.log("back");
    const backButton = document.createElement("button");
    backButton.textContent = "BACK";
    backButton.setAttribute("id", "back-button");

    backButton.onclick = (event) => {
        getProjects();
    };

    parentDiv.appendChild(backButton);
};

const removeBackButton = () => {
    if (document.getElementById("back-button")) {
        document.getElementById("back-button").remove();
    }
};

const showProject = (project) => {
    const projectContainer = document.getElementById("projects-container");

    clearDiv(projectContainer);

    addBackButton(projectContainer);

    const projectDiv = document.createElement("div");
    projectDiv.setAttribute("id", "project-div");
    projectContainer.append(projectDiv);

    // Carousel
    addCarousel(project.photos, projectDiv);

    // Info
    addInfo(project, projectDiv, "project");
};

window.onload = () => {
    getProjects();
};
