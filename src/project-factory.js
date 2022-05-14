function initializeInput() {
    const addProjectButton = document.getElementById('add-project');
    addProjectButton.setAttribute('disabled', 'true');
    addProjectButton.classList.add('disabled');

    const projectsList = document.getElementById('projects-list');
    const projectInput = document.createElement('li');
    projectsList.insertBefore(projectInput, projectsList.firstChild);
    projectInput.classList.add('project-input');

    const inputsDiv = document.createElement('div');
    inputsDiv.id = 'inputs-div';
    const nameInput = document.createElement('input');
    const dueDateInput = document.createElement('input');
    const buttonsDiv = document.createElement('div');
    buttonsDiv.id = 'buttons-div';
    const saveButton = document.createElement('button');
    const cancelButton = document.createElement('button');

    projectInput.appendChild(inputsDiv);
    inputsDiv.appendChild(nameInput);
    inputsDiv.appendChild(dueDateInput);
    projectInput.appendChild(buttonsDiv);
    buttonsDiv.appendChild(saveButton);
    buttonsDiv.appendChild(cancelButton);

    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('placeholder', 'Project name');
    dueDateInput.setAttribute('type', 'date');
    saveButton.innerHTML = '&#x2714;';
    saveButton.style.backgroundColor = 'rgb(17, 173, 0)';
    cancelButton.innerHTML = '&#x2717;';
    cancelButton.style.backgroundColor = 'rgb(169, 0, 0)';



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

// On 'Save' create new object instance

class projectFactory {
    static nextAvailableID = 0;
    static allProjects = []

    constructor(name, dueDate) {
        this.name = name;
        this.dueDate = dueDate;
        this.id = nextAvailableID++;
        allProjects.push(this);
        createElement();
    }

    createElement() {
        const projectsList = document.getElementById('projects-list');
        const newProject = document.createElement('li');
        projectsList.appendChild('li');
        projectsList.id = this.id;
        newProject.textContent = this.name;
        // Add date info and delete option
    }

    deleteElement() {
        const projectsList = document.querySelectorAll('projects-list li');
        projectsList.forEach( (project) => {
            if (project.id === this.id) {
                project.remove();
            }
        });

    }

    get name() { return this._name }
    set name(newName) { this._name = newName }

    get dueDate() { return this._dueDate }
    set dueDate(newDate) {this._dueDate = newDate }
}

export { initializeInput };