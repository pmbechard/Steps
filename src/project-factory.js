function initializeInput() {
    // TODO: break this monstrous function up
    const addProjectButton = document.getElementById('add-project');
    let nameInput, dueDateInput, saveButton, cancelButton;
    [nameInput, dueDateInput, saveButton, cancelButton] = getInput();
    const projectInput = document.getElementById('projects-list').lastElementChild.previousElementSibling;

    saveButton.addEventListener('click', () => {
        let today = new Date();
        let date = new Date(`${today.getFullYear()}-${parseInt(today.getMonth())+1}-${today.getDate()}`);
        let inputDate = new Date(`${dueDateInput.value}`);
        if (nameInput.value === '') {
            nameInput.style.backgroundColor = 'rgba(169, 0, 0, 0.5)';
            nameInput.addEventListener('click', () => nameInput.style.backgroundColor = 'white');
        } else if (dueDateInput.value === '') {
            dueDateInput.style.backgroundColor = 'rgba(169, 0, 0, 0.5)';
            dueDateInput.addEventListener('click', () => dueDateInput.style.backgroundColor = 'white');
         } else if (date >inputDate) {
            dueDateInput.style.backgroundColor = 'rgba(169, 0, 0, 0.5)';
            dueDateInput.addEventListener('click', () => dueDateInput.style.backgroundColor = 'white');
         } else {
            // CREATE PROJECT OBJECT
            const project = new Project(nameInput.value, dueDateInput.value);
            addProjectButton.classList.remove('disabled');
            addProjectButton.removeAttribute('disabled');
            projectInput.remove();
        }
    });
    cancelButton.addEventListener('click', () => {
        addProjectButton.classList.remove('disabled');
        addProjectButton.removeAttribute('disabled');
        projectInput.remove();
    });
}

function getInput(name='', date='') {
    // Disables add project button
    const addProjectButton = document.getElementById('add-project');
    addProjectButton.setAttribute('disabled', 'true');
    addProjectButton.classList.add('disabled');

    // Adds new list item for input
    const projectsList = document.getElementById('projects-list');
    const projectInput = document.createElement('li');
    projectsList.insertBefore(projectInput, projectsList.lastElementChild);
    projectInput.classList.add('project-input');

    // Lays out input elements and buttons
    const inputsDiv = document.createElement('div');
    inputsDiv.id = 'inputs-div';
    const nameInput = document.createElement('input');
    nameInput.textContent = name;
    const dueDateInput = document.createElement('input');
    dueDateInput.textContent = date;
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

    return [nameInput, dueDateInput, saveButton, cancelButton];
}

class Project {
    static nextAvailableID = 0;
    static allProjects = []

    constructor(name, dueDate) {
        this.name = name;
        this.dueDate = dueDate;
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
        editButton.innerHTML = '&#9998;';
        editButton.style.background = 'none';
        const deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'DEL';
        deleteButton.style.fontSize = '8px';
        deleteButton.style.background = 'none';

        const newProjectButtons = document.createElement('div');
        newProjectButtons.appendChild(editButton);
        newProjectButtons.appendChild(deleteButton);
        newProject.appendChild(newProjectButtons);

        newProject.style.display = 'flex';
        newProject.style.justifyContent = 'space-between';
        newProject.style.alignItems = 'center';

        // TODO: Add functionality to edit and delete buttons
        // TODO: Change edit and delete icons
    }

    deleteElement() {
        // Untested
        const projectsList = document.querySelectorAll('projects-list li');
        projectsList.forEach( (project) => {
            if (project.id === this.id) {
                project.remove();
            }
        });
        Projects.allProjects.filter( (project) => project !== this);
    }

    get name() { return this._name }
    set name(newName) { this._name = newName }

    get dueDate() { return this._dueDate }
    set dueDate(newDate) {this._dueDate = newDate }
}

export { initializeInput };