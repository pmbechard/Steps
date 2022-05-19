import { Project } from "./project-factory";

function addStep() {
    // if/which project is selected
    if (!Project.selected) {
        return;
    }
    // create li for step
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

    
    // validate
    // associate info with project
}

function getStepInput() {
    // add new li to ol with #, input box, save and delete
}

function validateInput() {
    // check input from user
}

function saveInput() {
    // turn input li into step
    // add step to project object
}

function displaySteps() {
    // check if selected item is in project list
    // if not -> blank steps
    // else display associated steps
    console.log('displaying steps');
    console.log(Project.getSelectProject());
}

export { addStep, displaySteps };