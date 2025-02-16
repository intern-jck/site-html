const PROJECTS_URL =
  "https://raw.githubusercontent.com/intern-jck/jsons/main/jcksite/all_projects.json";

// Helper function to clear all child elements from a parent div.
const clearDiv = (parent) => {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
};

// const slider = new A11YSlider(document.querySelector(".slider"), {
//   adaptiveHeight: true,
//   dots: false,
// });

const getProjects = () => {
  fetch(PROJECTS_URL)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      // addCards(data, "projects-container", showProject);

      const projectContainer = document.getElementById("projects-container");
      // console.log(data)

      const projectSlider = document.createElement("ul");
      projectSlider.classList = "slider";

      // for (let i = 0; i < 4; i++) {
      //   const li = document.createElement("li");
      //   li.textContent = i + 1;
      //   projectSlider.appendChild(li);
      // }

      data.forEach((project, i) => {
        const li = document.createElement("li");
                
        const card = createCard(project);
        console.log(createCard(project))
        li.appendChild(card);
        
        projectSlider.appendChild(li);
      });

      // projectsDiv.appendChild(projectSlider);
      projectContainer.appendChild(projectSlider);

      const slider = new A11YSlider(document.querySelector(".slider"), {
        adaptiveHeight: true,
        dots: false,
      });
    })
    .catch((error) => console.log("fetching projects url", error));
};

// const slider = new A11YSlider(document.querySelector(".slider"), {
//   adaptiveHeight: true,
//   dots: true,

//   // centerMode: true,
//   // arrows: false,
//   // responsive: {
//   //   480: {
//   //     dots: false, // dots enabled 1280px and up
//   //   },
//   // },

// });

const addBackButton = (parentDiv) => {
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
