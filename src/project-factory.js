import editIcon from './img/edit.png'
import deleteIcon from './img/delete.png'
import { updateTimeRange } from './time-range';
import { displaySteps } from './step-factory';

function initializeInput() {
    let nameInput, dueDateInput, saveButton, cancelButton;
    getInput();
}

function editInput(idOfLI) {
    const li = document.getElementById(idOfLI);
    const name = li.firstChild.firstChild.textContent;
    const date = li.firstChild.lastChild.textContent;
    li.classList.add('project-input');
    getInput(name, date, idOfLI);
}

function getInput(name='', date='', idOfLI='') {
    // Disables add project button
    const addProjectButton = document.getElementById('add-project');
    addProjectButton.setAttribute('disabled', 'true');
    addProjectButton.classList.add('disabled');

    // Adds new list item for input
    const projectsList = document.getElementById('projects-list');
    let projectInput;
    if (idOfLI === '') {
        projectInput = document.createElement('li');
        projectsList.insertBefore(projectInput, projectsList.lastElementChild);
        projectInput.classList.add('project-input');
    } else {
        projectInput = document.getElementById(`${idOfLI}`);
        projectInput.innerHTML = '';
    }

    // Lays out input elements and buttons
    const inputsDiv = document.createElement('div');
    inputsDiv.id = 'inputs-div';
    const nameInput = document.createElement('input');
    nameInput.value = name;
    const dueDateInput = document.createElement('input');
    dueDateInput.value = date;
    const buttonsDiv = document.createElement('div');
    buttonsDiv.id = 'buttons-div';
    const saveButton = document.createElement('button');
    const cancelButton = document.createElement('button');

    // Adds elements to DOM
    projectInput.appendChild(inputsDiv);
    inputsDiv.appendChild(nameInput);
    inputsDiv.appendChild(dueDateInput);
    projectInput.appendChild(buttonsDiv);
    buttonsDiv.appendChild(saveButton);
    buttonsDiv.appendChild(cancelButton);

    // Sets styles and attributes of new elements
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('placeholder', 'Project name');
    nameInput.setAttribute('minlength', '1');
    nameInput.setAttribute('maxlength', '20');
    dueDateInput.setAttribute('type', 'date');
    saveButton.innerHTML = '&#x2714;';
    saveButton.style.backgroundColor = 'rgb(17, 173, 0)';
    cancelButton.innerHTML = '&#x2717;';
    cancelButton.style.backgroundColor = 'rgb(169, 0, 0)';

    validateInput(projectInput, nameInput, dueDateInput, saveButton, cancelButton, idOfLI);
}

function validateInput(projectInput, nameInput, dueDateInput, saveButton, cancelButton, idOfLI='') {
    const addProjectButton = document.getElementById('add-project');

    saveButton.addEventListener('click', () => {
        let today = new Date();
        let date = new Date(`${today.getFullYear()}-${parseInt(today.getMonth())+1}-${today.getDate()}`);
        let inputDate = new Date(`${dueDateInput.value}`);
        if (nameInput.value === '') {
            nameInput.style.backgroundColor = 'rgba(163, 100, 100)';
            nameInput.addEventListener('click', () => nameInput.style.backgroundColor = 'white');
        } else if (dueDateInput.value === '') {
            dueDateInput.style.backgroundColor = 'rgba(163, 100, 100)';
            dueDateInput.addEventListener('click', () => dueDateInput.style.backgroundColor = 'white');
         } else if (date > inputDate) {
            dueDateInput.style.backgroundColor = 'rgba(163, 100, 100)';
            dueDateInput.addEventListener('click', () => dueDateInput.style.backgroundColor = 'white');
         } else {
            if (idOfLI === '') {
                const project = new Project(nameInput.value, dueDateInput.value);
            } else {
                Project.allProjects.forEach( (item) => {
                    if (item.id == idOfLI) {
                        item.name = nameInput.value;
                        item.dueDate = dueDateInput.value;
                        projectInput.innerHTML = '';
                        item.createElement();
                    }
                });
            }
            addProjectButton.classList.remove('disabled');
            addProjectButton.removeAttribute('disabled');
            projectInput.remove();
            updateTimeRange();
        }
    });
    cancelButton.addEventListener('click', () => {
        addProjectButton.classList.remove('disabled');
        addProjectButton.removeAttribute('disabled');
        if (!projectInput.id) {
            projectInput.remove();
        } else {
            Project.allProjects.forEach( (item) => {
                if (item.id == idOfLI) {
                    item.createElement();
                }
            });
            projectInput.remove();
        }
    });
}


class Project {
    static nextAvailableID = 0;
    static allProjects = [];
    static selected;

    constructor(name, dueDate) {
        this.name = name;
        this.dueDate = dueDate;
        let element;
        this.id = Project.nextAvailableID++;
        Project.allProjects.push(this);
        this.createElement();
    }

    createElement() {
        const projectsList = document.getElementById('projects-list');
        const newProject = document.createElement('li');
        projectsList.insertBefore(newProject, projectsList.lastElementChild);
        newProject.id = this.id;
        const nameElement = document.createElement('h4');
        nameElement.classList.add('project-name');
        nameElement.textContent = this.name;
        const dateElement = document.createElement('p');
        dateElement.classList.add = 'project-date';
        dateElement.textContent = this.dueDate;
        const newProjectInfo = document.createElement('div');
        newProjectInfo.appendChild(nameElement);
        newProjectInfo.appendChild(dateElement);
        newProject.appendChild(newProjectInfo);

        const editButton = document.createElement('button');
        const editImg = new Image();
        editImg.src = editIcon;
        editButton.appendChild(editImg);
        editImg.style.height = '20px';
        editButton.style.background = 'none';
        editButton.addEventListener('click', () => editInput(editButton.parentElement.parentElement.id));
        
        const deleteButton = document.createElement('button');
        const deleteImg = new Image();
        deleteImg.src = deleteIcon;
        deleteButton.appendChild(deleteImg);
        deleteImg.style.height = '20px';
        deleteButton.style.background = 'none';
        deleteButton.addEventListener('click', () => this.deleteElement());

        const newProjectButtons = document.createElement('div');
        newProjectButtons.appendChild(editButton);
        newProjectButtons.appendChild(deleteButton);
        newProject.appendChild(newProjectButtons);

        newProject.style.display = 'flex';
        newProject.style.justifyContent = 'space-between';
        newProject.style.alignItems = 'center';

        this.element = newProject;
        this.selectProject();

        newProject.addEventListener('click', () => this.selectProject());
    }

    deleteElement() {
        const projectsList = document.querySelectorAll('#projects-list li');
        projectsList.forEach( (project) => {
            if (project.id == this.id) {
                project.remove();
            }
        });
        Project.allProjects = Project.allProjects.filter( (project) => project !== this);
        Project.selected = undefined;
        const addStepButton = document.getElementById('add-step');
        addStepButton.classList.add('disabled');
        addStepButton.setAttribute('disabled', 'true');
        displaySteps();
    }

    selectProject() {
        Project.allProjects.forEach( (project) => {
            if (project === this) {
                this.element.style.backgroundColor = 'rgb(48, 93, 255)';
                Project.selected = this;
                displaySteps();
            } else {
                project.element.style.backgroundColor = '#444';
            }
            const addStepButton = document.getElementById('add-step');
            addStepButton.classList.remove('disabled');
            addStepButton.removeAttribute('disabled');
        });
    }

    static getSelectProject() { return Project.selected };

    get name() { return this._name }
    set name(newName) { this._name = newName }

    get dueDate() { return this._dueDate }
    set dueDate(newDate) {this._dueDate = newDate }
}

export { initializeInput, Project };