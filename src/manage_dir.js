import {Project} from "./project_classes.js";

class Projects {
    constructor(){
        this.projects = [new Project("default")];
        this.activeProj = 0;
    }

    addProject(project){
        this.projects.push(project);
    }

    removeProject(index){
        this.projects.splice(index, 1);
        if (this.activeProj === index){
            this.activeProj--;
        }
    }

    setActive(index){
        this.activeProj = index;
    }
}

let Dir = new Projects();

export default Dir;