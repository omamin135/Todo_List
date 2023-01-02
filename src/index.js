import loadPage from "./DOM_management/page_layout.js"
import { loadProjectsMenu, addNewProjectInput, replaceNewProjectInput} from "./DOM_management/page_layout.js";
import Dir from "./manage_dir.js";
import loadProjPage from "./DOM_management/render_active_project.js";
import {loadCard, newCard, removeEditCard} from "./DOM_management/todo_card.js";
import {Todo, Project} from "./project_classes.js";


loadPage();
loadProjectsMenu(Dir);
loadProjPage();
loadCard(Dir.projects[0].todo[0]);


/*
 * Add event listner for the default project in the left menu
 */
let defaultProj = document.querySelector('[data-id="0"]');
defaultProj.addEventListener("click", () => {
    /* toggle active project */
    Dir.setActive(defaultProj.dataset.id);
})

/*
 * Event handling for creating a new project
 */
const newProjectButton = document.getElementById("new-proj-button");
newProjectButton.addEventListener("click", () => {
    if(newProjectButton.parentElement.dataset.inputmode === "false"){
        addNewProjectInput();
    } else {
        if (document.getElementById("new-project-input").checkValidity()){
            let newProjName = replaceNewProjectInput();
            Dir.addProject(newProjName);

            loadProjectsMenu(Dir);

            /* add event listener for the new created project */
            document.querySelectorAll(".project").forEach((element) => {
                element.addEventListener("click", () => {
                    /* toggle active project */
                    Dir.setActive(element.dataset.id);
                })
            });
        }
    }
});

/* event listener for new-todo button */
document.getElementById("new-todo").addEventListener("click", () => {
    newCard(Dir.projects[0].todo[0]);
    
    document.getElementById("submit-card").onclick = function processNewCard(){
        Dir.addToActive(new Todo(document.querySelector(".edit-card.card-title").value,
                                 document.querySelector(".edit-card.card-date").value,
                                 document.querySelector(".edit-card.description").value,
                                 "high"
                                 ))
        removeEditCard();
        console.log(Dir.activeProject());
        loadCard(Dir.projects[Dir.activeProjIndex].todo[Dir.projects.length-1]);
    }
})



