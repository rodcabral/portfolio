// Copyright (C)  Rodrigo Cabral (rodcabral)

const projects_list = document.querySelector(".projects-list");
const general = document.querySelector(".general");
const backend_frontend = document.querySelector(".backend-frontend");
const machine_learning = document.querySelector(".machine-learning");
const graphics = document.querySelector(".graphics");

async function render_projects(find) {
    const projects = await fetch("./src/projects.json").then((res) => {
        return res.json();
    })

    const filteredProjects = projects.filter((p) => p.type.includes(find));

    if(filteredProjects.length == 0) {
        const p = document.createElement("p");
        p.classList.add("nothing");
        p.innerText = "Nothing here yet.";
        projects_list.appendChild(p);
        return;
    }

    filteredProjects.map((p) => {
        const li = document.createElement("li");
        li.classList.add("project");

        const a = document.createElement("a");
        a.href = p.link;
        a.target = "_blank";
        li.appendChild(a);

        const img = document.createElement("img");
        img.src = p.image;

        const pType = document.createElement("p");
        pType.innerText = p.type[0];
        pType.innerText += p.type[1] != "General" ? `, ${p.type[1]}` : "";
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

function clear_render() {
    projects_list.innerHTML = "";
    general.classList.remove("selected");
    backend_frontend.classList.remove("selected");
    machine_learning.classList.remove("selected");
    graphics.classList.remove("selected");

}

general.addEventListener("click", () => {
    clear_render();
    general.classList.add("selected");
    render_projects("General");
});

backend_frontend.addEventListener("click", () => {
    clear_render();
    backend_frontend.classList.add("selected");
    render_projects("Frontend");
});

machine_learning.addEventListener("click", () => {
    clear_render();
    machine_learning.classList.add("selected");
    render_projects("Machine Learning");
});

graphics.addEventListener("click", () => {
    clear_render();
    graphics.classList.add("selected");
    render_projects("Graphics");
});

render_projects("General");

// Copyright (C)  Rodrigo Cabral (rodcabral)
