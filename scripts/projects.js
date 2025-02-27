const PROJECTS_URL = "https://raw.githubusercontent.com/intern-jck/jsons/main/jcksite/all_projects.json";

window.onload = () => {
    getProjects();
};

// Utility Functions

// Remove a target div's child elements
function clearDiv(parent) {
    if (parent.firstChild === null) {
        return;
    }

    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// Remove the back button from the page
function removeBackButton() {
    if (document.getElementById("back-button")) {
        document.getElementById("back-button").remove();
    }
}

// Adds the back button to the page
function addBackButton(parentDiv) {
    const backButton = document.createElement("button");
    backButton.textContent = "BACK";
    backButton.setAttribute("id", "back-button");

    backButton.onclick = (event) => {
        getProjects();
    };

    parentDiv.appendChild(backButton);
}

// Project Functions

// Fetch the projects json add create project cards
function getProjects() {
    fetch(PROJECTS_URL)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            // Create a carousel to show projects
            const projectsContainer = document.getElementById("projects-container");
            const nodes = [];
            for (let item of data) {
                const card = createCard(item, showProject);
                // projectsContainer.appendChild(card);
                nodes.push(card)
            }

            const projectCarousel = new Carousel("project-carousel", nodes);
            //    createProjectsSlider(data);
        })
        .catch((error) => console.log("fetching projects url", error));
}

// Creates a carousel with the input data
function createProjectsSlider(data) {
    // Grab the container div
    const projectContainer = document.getElementById("projects-container");
    clearDiv(projectContainer);

    const projectsList = document.createElement("ul");
    projectsList.id = "projects-list";
    projectsList.classList = "projects-list slider";

    const nodes = [];

    data.forEach((project, i) => {
        const li = document.createElement("li");

        const card = createCard(project, showProject);
        nodes.push(card);

        li.appendChild(card);
        projectsList.appendChild(li);
        nodes.push(li);
    });

    // const projectCarousel = new Carousel("project-carousel", nodes);
    projectContainer.appendChild(projectsList);

    const slider = new A11YSlider(document.querySelector(".projects-list"), {
        dots: false,
        adaptiveHeight: false,
    });

    const list = projectContainer.querySelector("projects-list");
    console.log("list:", list);
}

// Show the input project's details
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
