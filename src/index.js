import loadPage from "./DOM_management/page_layout.js"
import { loadProjectsMenu, addNewProjectInput, replaceNewProjectInput} from "./DOM_management/page_layout.js";
import Dir from "./manage_dir.js";


function changeProject(id){
    Dir.setActive(id);
    console.log(Dir.activeProj);
}



loadPage();
loadProjectsMenu(Dir);

/**
 * Add event listner for the default project in the left menu
 */
let defaultProj = document.querySelector('[data-id="0"]');
defaultProj.addEventListener("click", () => {
    changeProject(defaultProj.dataset.id);
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
                    changeProject(element.dataset.id);
                })
            });
        }
    }
});

