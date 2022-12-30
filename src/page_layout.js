import style from "./page_layout.css";
import githubImg from "./assets/github-mark.svg";


function loadHeader() {
    const header = document.querySelector("header");

    let p = document.createElement("p");
    p.textContent = "TODO";
    p.id = "todo-title";
    header.appendChild(p);

    let signitureDiv = document.createElement("div");
    signitureDiv.id = "signiture";

    p = document.createElement("p");
    p.textContent = "Made By: Om Amin";
    signitureDiv.appendChild(p);
    
    let a = document.createElement("a");
    a.href = "https://github.com/omamin135/Todo_List";
    a.target = "_black";
    
    let img = document.createElement("img");
    img.src = githubImg;

    img.alt = "github";

    a.appendChild(img);

    signitureDiv.appendChild(a);
    header.appendChild(signitureDiv);

}

function loadLeftMenu(){

    const leftMenuDiv = document.createElement("div");
    leftMenuDiv.id = "left-menu";

    leftMenuDiv.appendChild(loadDefaultSelections());
    leftMenuDiv.appendChild(loadProjectSelections());

    document.getElementById("content").appendChild(leftMenuDiv);
}

function loadDefaultSelections(){

    const defaultSelDiv = document.createElement("div");
    defaultSelDiv.id = "default-selection"

    let div = document.createElement("div");
    let p = document.createElement("p");
    p.textContent = "Today";
    div.id = "today";
    div.appendChild(p);
    defaultSelDiv.appendChild(div);

    div = document.createElement("div");
    p = document.createElement("p");
    p.textContent = "Timeline";
    div.id = "timeline";
    div.appendChild(p);
    defaultSelDiv.appendChild(div);


    div = document.createElement("div");
    p = document.createElement("p");
    p.textContent = "Priority";
    div.id = "priority";
    div.appendChild(p);
    defaultSelDiv.appendChild(div);

    return defaultSelDiv;
}

function loadProjectSelections(){

    const projectSelDiv = document.createElement("div");
    projectSelDiv.id = "project-selection";

    let p = document.createElement("p");
    p.textContent = "Projects";

    projectSelDiv.appendChild(p);

    let ul = document.createElement("ul");
    ul.id = "projects";

    ul.appendChild(createProject(1));
    ul.appendChild(createProject(2));

    projectSelDiv.appendChild(ul);
    return projectSelDiv;
}

function createProject(id) {

    let li = document.createElement("li");
    li.className = "project";
    li.setAttribute("data-it", 1);

    let p = document.createElement("p");
    p.textContent = "Project 2";
    li.appendChild(p);

    p = document.createElement("p");
    p.textContent = 0;
    li.appendChild(p);

    return li;
}

function loadPage(){
    loadHeader();
    loadLeftMenu();
}

export default loadPage;