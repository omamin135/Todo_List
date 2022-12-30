import loadPage from "./DOM_management/page_layout.js"
import { loadProjectsMenu, addNewProjectInput, replaceNewProjectInput} from "./DOM_management/page_layout.js";
import Dir from "./manage_dir.js";

loadPage();
loadProjectsMenu(Dir);

const newProjectButton = document.getElementById("new-proj-button");
newProjectButton.addEventListener("click", () => {
    if(newProjectButton.parentElement.dataset.inputmode === "false"){
        addNewProjectInput();
    } else {
        if (document.getElementById("new-project-input").checkValidity()){
            let newProjName = replaceNewProjectInput();
            Dir.addProject(newProjName);

            loadProjectsMenu(Dir);
        }
    }
});