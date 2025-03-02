const MODELS_URL = "https://raw.githubusercontent.com/intern-jck/site-html/site-dev/assets/data/models.json";

const modelTypes = {
    general: {
        link: "",
        name: "",
        client: {
            name: "",
            url: "",
        },
        date: {
            start_month: "",
            start_year: "",
            end_month: "",
            end_year: "",
        },
        short: "",
        info: "",
        tech: [],
        photos: [],
        resources: [],
    },
    work: {
        name: "",
        client: {
            name: "",
            url: "",
        },
        date: {
            start_month: "",
            start_year: "",
            end_month: "",
            end_year: "",
        },
        short: "",
        info: "",
        tech: [],
        photos: [],
    },
    code: {
        name: "",
        url: "",
        date: {
            start_month: "",
            start_year: "",
            end_month: "",
            end_year: "",
        },
        short: "",
        info: "",
        tech: [],
        photos: [],
    },
    project: {
        name: "",
        url: "",
        date: {
            start_month: "",
            start_year: "",
            end_month: "",
            end_year: "",
        },
        short: "",
        info: "",
        tech: [],
        photos: [],
        resources: [],
    },
    music: {
        name: "",
        date: {
            start_month: "",
            start_year: "",
            end_month: "",
            end_year: "",
        },
        short: "",
        info: "",
        photos: [],
        resources: [],
    },
};

function getModelType(type) {
    fetch(MODELS_URL)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            return data;
        })
        .catch();
}

// function addInfo(info, parentDiv, modelType) {
//     // console.log("adding info:", info, modelType);
//     // Get the model for the info data
//     // const model = getModelType(modelType);

//     // const name, url = "";

//     const model = modelTypes[modelType];
//     // console.log(model);

//     // Use it's keys to access the info items
//     const keys = Object.keys(model);

//     // Create the container to add all info components
//     const infoContainer = document.createElement("div");
//     infoContainer.classList = "info-container";

//     keys.map((key, i) => {
//         if (key === "photos") {
//             return;
//         }

//         const infoRow = document.createElement("div");
//         infoRow.classList = "info-row";
//         const infoKey = document.createElement("div");
//         infoKey.classList = "info-key";
//         const infoValue = document.createElement("div");
//         infoValue.classList = "info-value";

//         // Adjust format of elements based on info key
//         switch (key) {
//             case "url":
//                 if (info[key].length > 0) {
//                     infoKey.textContent = `${key}: `;
//                     const urlAnchor = document.createElement("a");
//                     urlAnchor.textContent = info[key];
//                     urlAnchor.href = info[key];
//                     urlAnchor.target = "_blank";
//                     infoValue.append(urlAnchor);
//                     // console.log("NO URL")
//                     // break;
//                 }
//                 break;

//             case "client":
//                 const { name, url } = info[key];
//                 const clientAnchor = document.createElement("a");
//                 clientAnchor.href = url;
//                 clientAnchor.target = "_blank";
//                 clientAnchor.textContent = name;
//                 infoValue.append(clientAnchor);
//                 break;

//             case "date":
//                 const { start_month, start_year, end_month, end_year } = info[key];
//                 if (end_month && end_year) {
//                     infoValue.textContent = `${start_month} ${start_year} - ${end_month} ${end_year}`;
//                 } else {
//                     infoValue.textContent = `${start_month} ${start_year}`;
//                 }
//                 break;

//             // TODO: Change this to use an array of objects instead of array of arrays
//             case "tech":
//                 const techTagDiv = document.createElement("div");
//                 techTagDiv.classList = "tech-tag-div";
//                 info[key].map((value) => {
//                     const tag = document.createElement("a");
//                     tag.classList = "tech-tag";
//                     tag.textContent = value[0];
//                     tag.href = value[1];
//                     tag.target = "_blank";
//                     techTagDiv.append(tag);
//                 });
//                 infoValue.append(techTagDiv);
//                 // infoValue.classList .add("tech-tags")
//                 break;

//             case "resources":
//                 const resourceDiv = document.createElement("div");
//                 resourceDiv.classList = "resource-div";
//                 info[key].map((value) => {
//                     console.log(value);
//                     const resource = document.createElement("a");
//                     resource.classList = "resource";
//                     resource.textContent = value.name;
//                     resource.href = value.url;
//                     resource.target = "_blank";
//                     resourceDiv.append(resource);
//                 });
//                 // console.log(resourceDiv);
//                 infoValue.append(resourceDiv);
//                 break;

//             // Otherwise just keep it simple
//             default:
//                 infoValue.textContent = info[key];
//                 break;
//         }

//         infoRow.append(infoKey);
//         infoRow.append(infoValue);
//         infoContainer.append(infoRow);
//     });

//     parentDiv.append(infoContainer);
// }

function addInfo2(info) {
    console.log(info);

    const keys = Object.keys(info);
    console.log(keys);

    const projectInfo = document.getElementById("project-info");

    const nodes = [];

    if (info["name"].length > 0) {
        console.log("add name");

        const nameRow = document.createElement("div");
        nameRow.classList = "info-row";

        const nameKey = document.createElement("p");
        nameKey.classList = "info-key";
        nameKey.textContent = "name:";

        const nameValue = document.createElement("span");
        nameValue.classList = "info-value";
        nameValue.textContent = info["name"];

        nameKey.append(nameValue);
        nameRow.append(nameKey);
        nodes.push(nameRow);
    }

    if (info["url"].length > 0) {
        console.log("add url");

        const urlRow = document.createElement("div");
        urlRow.classList = "info-row";

        const urlKey = document.createElement("p");
        urlKey.classList = "info-key";
        urlKey.textContent = "url:";

        const urlValue = document.createElement("span");
        urlValue.classList = "info-value";

        const urlAnchor = document.createElement("a");
        urlAnchor.textContent = info["url"];
        urlAnchor.href = info["url"];
        urlAnchor.target = "_blank";

        urlValue.append(urlAnchor);
        urlKey.append(urlValue);
        urlRow.append(urlKey);
        nodes.push(urlRow);
    }

    if (info["date"]) {
        console.log("add date");

        const dateRow = document.createElement("div");
        dateRow.classList = "info-row";

        const dateKey = document.createElement("p");
        dateKey.textContent = "date:";
        dateKey.classList = "info-key";

        const dateValue = document.createElement("span");
        dateValue.classList = "info-value";

        const { start_month, start_year, end_month, end_year } = info["date"];

        if (end_month && end_year) {
            dateValue.textContent = `${start_month} ${start_year} - ${end_month} ${end_year}`;
        } else {
            dateValue.textContent = `${start_month} ${start_year}`;
        }

        dateKey.append(dateValue);
        dateRow.append(dateKey);
        nodes.push(dateRow);
    }

    if (info["tech"].length > 0) {
        console.log("add tech");

        const techRow = document.createElement("div");
        techRow.classList = "info-row";

        const techKey = document.createElement("p");
        techKey.classList = "info-key";
        techKey.textContent = "tech:";

        const techValue = document.createElement("span");
        techValue.classList = "info-value";

        const tagList = document.createElement("ul")
        tagList.classList = "tech-tags"

        info["tech"].map((value) => {
            const tag = document.createElement("li")
            tag.classList = "tech-tag"
            const tagAnchor = document.createElement("a");
            tag.classList = "tech-tag";
            tag.textContent = value[0];
            tag.href = value[1];
            tag.target = "_blank";
            tag.append(tagAnchor)
            tagList.append(tag);
        });
        techValue.append(tagList)
        techKey.append(techValue);
        techRow.append(techKey);
        nodes.push(techRow);
    }

    if (info["info"].length > 0) {
        console.log("add info");

        const infoRow = document.createElement("div");
        infoRow.classList = "info-row";

        const infoKey = document.createElement("p");
        infoKey.textContent = "info:";
        infoKey.classList = "info-key"


        const infoValue = document.createElement("span");
        infoValue.classList = "info-value";
        infoValue.textContent = info["info"];

        infoKey.append(infoValue);
        infoRow.append(infoKey);
        nodes.push(infoRow);
    }

    if (info["resources"].length > 0) {
        console.log("add resources");

        const resourcesRow = document.createElement("div");
        resourcesRow.classList = "info-row";

        const resourcesKey = document.createElement("p");
        resourcesKey.textContent = "resources:";
        resourcesKey.classList = "info-key"

        const resourcesValue = document.createElement("span");
        resourcesValue.classList = "info-value";

        info["resources"].map((value) => {
            const tag = document.createElement("a");
            tag.classList = "resource-tag";
            tag.textContent = value.name;
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
