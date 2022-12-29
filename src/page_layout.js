import style from "./page_layout.css";
import githubImg from "./assets/github-mark.svg";


function loadHeader() {
    const header = document.createElement("header");

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

    document.querySelector("body").appendChild(header);
}

export default loadHeader;