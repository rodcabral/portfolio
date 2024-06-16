const projects_list = document.querySelector(".projects-list");

async function render_projects() {
    const projects = await fetch("./src/projects.json").then((res) => {
        return res.json();
    })

    projects.map((p) => {
        const li = document.createElement("li");
        li.classList.add("project");

        const a = document.createElement("a");
        a.href = p.link;
        li.appendChild(a);

        const img = document.createElement("img");
        img.src = p.image;

        const pType = document.createElement("p");
        pType.innerText = p.type;
        pType.classList.add("project-type");

        const pTitle = document.createElement("p");
        pTitle.innerText = p.title;
        pTitle.classList.add("project-title");

        const pAbout = document.createElement("p");
        pAbout.innerText = p.about;
        pAbout.classList.add("project-about");

        a.appendChild(img);
        a.appendChild(pType);
        a.appendChild(pTitle);
        a.append(pAbout);

        projects_list.appendChild(li);
    })
}

render_projects();
