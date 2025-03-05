function addInfo(info) {
    const keys = Object.keys(info);
    const projectInfo = document.getElementById("project-info");
    const nodes = [];

    if (info["name"].length > 0) {
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
        const techRow = document.createElement("div");
        techRow.classList = "info-row";

        const techKey = document.createElement("p");
        techKey.classList = "info-key";
        techKey.textContent = "tech:";

        techRow.append(techKey);
        info["tech"].map((value) => {
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

    if (info["info"].length > 0) {
        const infoRow = document.createElement("div");
        infoRow.classList = "info-row";

        const infoKey = document.createElement("p");
        infoKey.textContent = "info:";
        infoKey.classList = "info-key";

        const infoValue = document.createElement("span");
        infoValue.classList = "info-value";
        infoValue.textContent = info["info"];

        infoKey.append(infoValue);
        infoRow.append(infoKey);
        nodes.push(infoRow);
    }

    if (info["resources"].length > 0) {
        const resourcesRow = document.createElement("div");
        resourcesRow.classList = "info-row";

        const resourcesKey = document.createElement("p");
        resourcesKey.textContent = "resources:";
        resourcesKey.classList = "info-key";

        const resourcesValue = document.createElement("span");
        resourcesValue.classList = "info-value";

        info["resources"].map((value) => {
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
