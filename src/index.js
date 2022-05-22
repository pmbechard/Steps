import { initializePage } from "./initializer";
import { updateTimeRange } from "./time-range";
import { initializeInput, Project } from "./project-factory";
import { addStep } from "./step-factory";

/*
TODO:
    - change project bcg when project overdue
    - add ability to save information using localstorage
*/

// Initialize static and dynamic page elements
initializePage();

// Logic for Time Range selection
const timeRangeOptions = document.querySelectorAll('#times-list li');
timeRangeOptions.forEach( (timeRange) => {
    timeRange.addEventListener('click', () => updateTimeRange(timeRange));
});

// Logic for adding new project
const addProjectButton = document.getElementById('add-project');
addProjectButton.addEventListener('click', () => initializeInput());

// Logic for adding new step
const addStepButton = document.getElementById('add-step');
addStepButton.addEventListener('click', () => addStep())
addStepButton.classList.add('disabled');
addStepButton.setAttribute('disabled', true);

// TODO: Retrieve data using localstorage

// TODO: Check for overdue projects
