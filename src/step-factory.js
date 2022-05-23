import completeIcon from "./img/complete.png";
import editIcon from './img/edit.png'
import deleteIcon from './img/delete.png'
import { Project } from "./project-factory";


const projectSteps = {};

function addStep() {
    if (!Project.selected) {
        return;
    }

    const stepList = document.getElementById('steps-list');
    const newStep = document.createElement('li');
    newStep.classList.add('step-input');
    const inputsDiv = document.createElement('div');
    inputsDiv.id = 'inputs-div';    
    const inputField = document.createElement('input');
    const buttonsDiv = document.createElement('div');
    buttonsDiv.id = 'buttons-div';       
    const saveButton = document.createElement('button');
    const cancelButton = document.createElement('button');


    stepList.insertBefore(newStep, stepList.lastElementChild);
    newStep.appendChild(inputsDiv);
    inputsDiv.appendChild(inputField);
    newStep.appendChild(buttonsDiv);
    buttonsDiv.appendChild(saveButton);
    buttonsDiv.appendChild(cancelButton);

    inputField.setAttribute('type', 'text');
    inputField.setAttribute('placeholder', 'Task name');
    inputField.setAttribute('minlength', '1');
    inputField.setAttribute('maxlength', '20');
    saveButton.innerHTML = '&#x2714;';
    saveButton.style.backgroundColor = 'rgb(17, 173, 0)';
    cancelButton.innerHTML = '&#x2717;';
    cancelButton.style.backgroundColor = 'rgb(169, 0, 0)';

    const addStepButton = document.getElementById('add-step');
    addStepButton.classList.add('disabled');
    addStepButton.setAttribute('disabled', 'true');
    addStepButton.classList.remove('pulse');
    const stepPrompt = document.getElementById('step-prompt');
    stepPrompt.style.visibility = 'hidden';

    saveButton.addEventListener('click', () => {
        if (inputField.value === '') {
            inputField.style.backgroundColor = 'rgba(163, 100, 100)';
            inputField.addEventListener('click', () => inputField.style.backgroundColor = 'white');
        } else {
            saveInput(newStep, inputField.value);
        }
    });

    cancelButton.addEventListener('click', () => {
        newStep.remove();
    });
}

function saveInput(liNode, taskName) {
    if (projectSteps[Project.selected.id]) {
        projectSteps[Project.selected.id].push(liNode);
        localStorage.setItem(Project.selected.id, [Project.selected.name,  Project.selected.dueDate, projectSteps[Project.selected.id].map( (step) => step.firstElementChild.textContent)]);
    } else {
        projectSteps[Project.selected.id] = [liNode];
        localStorage.setItem(Project.selected.id, [Project.selected.name,  Project.selected.dueDate, projectSteps[Project.selected.id].map( (step) => step.firstElementChild.textContent)]);
    }
    if (liNode.firstElementChild.firstElementChild) {
        liNode.firstElementChild.firstElementChild.remove();
    } else {
        liNode.firstElementChild.remove();
    }
    liNode.style.cursor = 'auto';

    const task = document.createElement('p');
    task.textContent = `${projectSteps[Project.selected.id].length}. ${taskName}`;
    liNode.firstElementChild.appendChild(task);

    const buttonsDiv = liNode.lastElementChild;
    buttonsDiv.innerHTML = '';
    
    const completeButton = new Image();
    completeButton.src = completeIcon;
    buttonsDiv.appendChild(completeButton);
    completeButton.style.height = '20px';
    completeButton.style.background = 'none';
    completeButton.classList.add('img-button');
    const editButton = new Image();
    editButton.src = editIcon;
    buttonsDiv.appendChild(editButton);
    editButton.style.height = '20px';
    editButton.style.background = 'none';
    editButton.classList.add('img-button');
    const deleteButton = new Image();
    deleteButton.src = deleteIcon;
    buttonsDiv.appendChild(deleteButton);
    deleteButton.style.height = '20px';
    deleteButton.style.background = 'none';
    deleteButton.classList.add('img-button');
    
    completeButton.addEventListener('click', () => {
        if (liNode.style.backgroundColor === 'rgba(174, 243, 174, 0.7)') {
            task.style.textDecoration = 'none';
            liNode.style.backgroundColor = '#444';
        } else {
            task.style.textDecoration = 'line-through';
            liNode.style.backgroundColor = 'rgba(174, 243, 174, 0.7)';
        }
        checkComplete();
    });

    editButton.addEventListener('click', () => editInput(liNode));

    deleteButton.addEventListener('click', () => {
        liNode.remove();
        projectSteps[Project.selected.id] = projectSteps[Project.selected.id].filter( (item) => item !== liNode);
        localStorage.setItem(Project.selected.id, [Project.selected.name,  Project.selected.dueDate, projectSteps[Project.selected.id].map( (step) => step.firstElementChild.textContent)]);
        displaySteps();
    });

    const addStepButton = document.getElementById('add-step');
    addStepButton.classList.remove('disabled');
    addStepButton.removeAttribute('disabled');

    displaySteps();
}

function checkComplete() {
    const steps = document.querySelectorAll('#steps-list li');
    if (Array.from(steps).length > 0 && Array.from(steps).every( (step) => step.style.backgroundColor === 'rgba(174, 243, 174, 0.7)')) {
        const project = document.getElementById(Project.selected.element.id);
        project.classList.remove('selected');
        project.classList.add('complete');
        project.style.backgroundColor = 'rgba(174, 243, 174, 0.7)';
    } else if (Project.selected) {
        const project = document.getElementById(Project.selected.element.id);
        project.classList.remove('complete');
        project.classList.add('selected');
        project.style.backgroundColor = 'rgb(48, 93, 255)';
    }
}

function editInput(liNode) {
    const currentName = liNode.firstElementChild.textContent.split(' ')[1];
    liNode.firstElementChild.remove();
    liNode.lastElementChild.remove();
    const newInput = document.createElement('input');


    const inputsDiv = document.createElement('div');
    const buttonsDiv = document.createElement('div');
    buttonsDiv.id = 'buttons-div';       
    const saveButton = document.createElement('button');
    const cancelButton = document.createElement('button');

    liNode.appendChild(inputsDiv);
    inputsDiv.appendChild(newInput);
    newInput.value = currentName;
    liNode.appendChild(buttonsDiv);
    buttonsDiv.appendChild(saveButton);
    buttonsDiv.appendChild(cancelButton);

    newInput.setAttribute('type', 'text');
    newInput.setAttribute('placeholder', 'Task name');
    newInput.setAttribute('minlength', '1');
    newInput.setAttribute('maxlength', '20');
    saveButton.innerHTML = '&#x2714;';
    saveButton.style.backgroundColor = 'rgb(17, 173, 0)';
    cancelButton.innerHTML = '&#x2717;';
    cancelButton.style.backgroundColor = 'rgb(169, 0, 0)';

    saveButton.addEventListener('click', () => {
        if (newInput.value === '') {
            newInput.style.backgroundColor = 'rgba(163, 100, 100)';
            newInput.addEventListener('click', () => newInput.style.backgroundColor = 'white');
        } else {
            projectSteps[Project.selected.id] = projectSteps[Project.selected.id].filter( (step) => step !== liNode);
            localStorage.setItem(Project.selected.id, [Project.selected.name,  Project.selected.dueDate, projectSteps[Project.selected.id].map( (step) => step.firstElementChild.textContent)]);
            saveInput(liNode, newInput.value);
        }
    });


};

function displaySteps() {
    const stepList = document.getElementById('steps-list');
    const steps = document.querySelectorAll('#steps-list li');
    steps.forEach( (step) => step.remove() );
    if (Project.selected && projectSteps[Project.selected.id]) {
        let counter = 1;
        projectSteps[Project.selected.id].forEach( (project) => {
            stepList.insertBefore(project, stepList.lastElementChild);
            project.firstElementChild.textContent = `${counter++}. ` + project.firstElementChild.textContent.split(' ')[1];
        });
        localStorage.setItem(Project.selected.id, [Project.selected.name,  Project.selected.dueDate, projectSteps[Project.selected.id].map( (step) => step.firstElementChild.textContent)]);
    }
    checkComplete();
}

export { addStep, displaySteps };