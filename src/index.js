import { initializePage } from "./initializer";
import { updateTimeRange } from "./time-range";
import { initializeInput, Project, checkOverdue } from "./project-factory";
import { addStep, displaySteps, projectSteps } from "./step-factory";

/*
TODO:
    - change project bcg when project overdue
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
// FIXME: only initialize prompt if no local storage
(function(){
    if (localStorage.length > 0) {
        let counter = 0;
        Array.from(localStorage).forEach( (item) => {
            if (item) {
                item = item.split(',');
                const project = new Project(item[0], item[1]);
                for (let i = 2; i < item.length; i++) {
                    addStep(item[i].slice(3));
                    // FIXME: ...
                    // const spaceIndex = item[i].indexOf(' ');
                    // addStep(item[i].slice(spaceIndex));
                }
            }
        });
        
        
    }
})();

// TODO: Check for overdue projects

checkOverdue();
