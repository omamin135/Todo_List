
class Todo {
    constructor(title, dueDate, description, priority) {
        this.title = title;
        this.dueDate = dueDate;
        this.description = description;
        this.priority = priority;
        this.complete = false;
    }

    toggleComplete(){
        this.complete = !this.complete;
    }

    changePriority(priority){
        this.priority = priority;
    }
}

class Project {
    constructor(name){
        this.name = name;
        this.numItems = 0;
        this.items = [];
    };

    addItem(item){
        this.items.push(item);
    }

    removeItem(index){
        this.items.splice(index, 1);
    }
}

class Projects {
    constructor(){
        this.projects = [];
    }

    addProject(project){
        this.projects.push(project);
    }

    removeProject(index){
        this.projects.splice(index, 1);
    }
}

export {Todo, Project, Projects}