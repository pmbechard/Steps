function initializeInput() {
    const projectsList = document.getElementById('projects-list');
    const projectInput = document.createElement('li');
    projectsList.insertBefore(projectInput, projectsList.firstChild)

    // Name date save cancel

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


    projectInput.classList.add('project-input');

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