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

    saveButton.addEventListener('click', () => {
        if (inputField.value === '') {
            inputField.style.backgroundColor = 'rgba(163, 100, 100)';
            inputField.addEventListener('click', () => inputField.style.backgroundColor = 'white');
        } else {
            saveInput(inputField.value);
        }
    });

    cancelButton.addEventListener('click', () => {
        newStep.remove();
    });
}

function saveInput(taskName) {
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