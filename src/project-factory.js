const initializeInput = ((li) => {
    // Open modal or add inputs to li
})();

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
        // Implement deletion
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