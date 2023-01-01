import script from "./todo_card.css";


function loadCard(todo){

    let cardContainer = document.createElement("div");
    cardContainer.className = "card";

    let titleDateContainer = document.createElement("div");
    titleDateContainer.className = "title-date-container";
    let cardTitle = document.createElement("p");
    cardTitle.className = "card-title";
    cardTitle.textContent = todo.title;
    let cardDate = document.createElement("p");
    cardDate.className = "card-date";
    cardDate.textContent = todo.dueDate;

    titleDateContainer.appendChild(cardTitle);
    titleDateContainer.appendChild(cardDate);

    let completedContainer = document.createElement("div");
    completedContainer.className = "complete-container";
    let completeInput = document.createElement("input");
    completeInput.className = "complete-input";
    completeInput.type = "checkbox";
    let completeText = document.createElement("p");
    completeText.textContent = "complete";
    completedContainer.appendChild(completeInput);
    completedContainer.appendChild(completeText);

    let descriptionContainer = document.createElement("div");
    descriptionContainer.className = "description-container";
    let description = document.createElement("p");
    description.className = "description";
    description.textContent = todo.description;
    let expand = document.createElement("p");
    expand.className = "expand";
    expand.textContent = "expand";  
    descriptionContainer.appendChild(description);
    descriptionContainer.appendChild(expand);

    let editContainter = document.createElement("div");
    editContainter.className = "edit-container";
    let edit = document.createElement("p");
    edit.className = "edit";
    edit.textContent = "edit";
    editContainter.appendChild(edit);

    let priorityContainer = document.createElement("div");
    priorityContainer.className = "priority-container";
    let priorityText = document.createElement("p");
    priorityText.textContent = "Priority";
    let prioritySlider = document.createElement("div");
    prioritySlider.className = "priority-slider";

    let priorityIcon = document.createElement("div");
    priorityIcon.className = "priority-icon";
    prioritySlider.appendChild(priorityIcon);

    let priorityIndicator = document.createElement("p");
    priorityIndicator.textContent = "urgent";

    priorityContainer.appendChild(priorityText);
    priorityContainer.appendChild(prioritySlider);
    priorityContainer.appendChild(priorityIndicator);

    cardContainer.appendChild(titleDateContainer);
    cardContainer.appendChild(completedContainer);
    cardContainer.appendChild(descriptionContainer);
    cardContainer.appendChild(editContainter);
    cardContainer.appendChild(priorityContainer);

    document.getElementById("cards-container").appendChild(cardContainer);
}


function newCard(todo){

    let newCardBackground = document.createElement("div");
    newCardBackground.id = "new-card-back";

    let cardContainer = document.createElement("div");
    cardContainer.className = "new-card";

    let titleDateContainer = document.createElement("div");
    titleDateContainer.classList.add("edit-card");
    titleDateContainer.classList.add("title-date-container")
    let cardTitle = document.createElement("input");
    cardTitle.type = "text";
    cardTitle.classList.add("edit-card");
    cardTitle.classList.add("card-title");
    cardTitle.value = "title"; //---------------

    let cardDate = document.createElement("input");
    cardDate.type = "date";
    cardDate.classList.add("edit-card");
    cardDate.classList.add("card-date");

    titleDateContainer.appendChild(cardTitle);
    titleDateContainer.appendChild(cardDate);


    let descriptionContainer = document.createElement("div");
    descriptionContainer.classList.add("edit-card");
    descriptionContainer.classList.add("description-container");
    let description = document.createElement("textarea");
    description.classList.add("edit-card");
    description.classList.add("description")
    description.value = "just some text";
    descriptionContainer.appendChild(description);


    let priorityContainer = document.createElement("div");
    priorityContainer.classList.add("edit-card");
    priorityContainer.classList.add("priority-container");
    let priorityText = document.createElement("p");
    priorityText.textContent = "Priority";
    let prioritySlider = document.createElement("div");
    prioritySlider.classList.add("edit-card");
    prioritySlider.classList.add("priority-slider");

    let priorityIcon = document.createElement("div");
    priorityIcon.classList.add("edit-card");
    priorityIcon.classList.add("priority-icon");
    prioritySlider.appendChild(priorityIcon);

    let priorityIndicator = document.createElement("p");
    priorityIndicator.textContent = "urgent";

    priorityContainer.appendChild(priorityText);
    priorityContainer.appendChild(prioritySlider);
    priorityContainer.appendChild(priorityIndicator);

    cardContainer.appendChild(titleDateContainer);
    cardContainer.appendChild(descriptionContainer);
    cardContainer.appendChild(priorityContainer);

    newCardBackground.appendChild(cardContainer)

    document.querySelector("body").appendChild(newCardBackground);
}




export {loadCard, newCard};