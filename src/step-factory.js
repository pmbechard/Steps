import completeIcon from "./img/complete.png";
import editIcon from './img/edit.png'
import deleteIcon from './img/delete.png'
import { Project } from "./project-factory";

/*
TODO:
    - add functionality to edit button
    - make step displays dynamic/specific to project
*/



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
    if (projectSteps[Project.selected]) {
        projectSteps[Project.selected].push(liNode);
    } else {
        projectSteps[Project.selected] = [liNode]; 
    }

    liNode.firstElementChild.firstElementChild.remove();
    liNode.style.cursor = 'auto';

    const task = document.createElement('p');
    task.textContent = `${projectSteps[Project.selected].length}. ${taskName}`;
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
    });

    editButton.addEventListener('click', () => editInput(liNode));

    deleteButton.addEventListener('click', () => {
        liNode.remove();
        // TODO: rearrange numbers
        projectSteps[Project.selected] = projectSteps[Project.selected].filter( (item) => item !== liNode);
    });

    const addStepButton = document.getElementById('add-step');
    addStepButton.classList.remove('disabled');
    addStepButton.removeAttribute('disabled');

    displaySteps();
}

function editInput(liNode) {
    // TODO
};

function displaySteps() {
    // check if selected item is in project list
    // if not -> blank steps
    // else display associated steps
    console.log('displaying steps');
    console.log(Project.getSelectProject());
    console.log(projectSteps)
}

export { addStep, displaySteps };