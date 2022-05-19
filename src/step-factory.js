import { Project } from "./project-factory";

function addStep() {
    console.log('adding step');
    // console.log(Project.selected);
    // create li for step
    // validate
    // associate info with project
}

function displaySteps() {
    // check if selected item is in project list
    // if not -> blank steps
    // else display associated steps
    console.log('displaying steps');
    console.log(Project.getSelectProject());
}

export { addStep, displaySteps };