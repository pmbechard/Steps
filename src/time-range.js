import { Project } from "./project-factory";
import { addStep, displaySteps } from "./step-factory";

function updateTimeRange(timeRange=document.getElementById('time-all')) {
    const timeRangeOptions = document.querySelectorAll('#times-list li');
    timeRangeOptions.forEach( (option) => option.classList.remove('selected') );
    timeRange.classList.add('selected');

    const projectsList = document.querySelectorAll('#projects-list li');
    let date = new Date();
    let today = new Date(`${date.getFullYear()}-${parseInt(date.getMonth())+1}-${date.getDate()}`);

    switch (timeRange.id) {
        case "time-today":
            projectsList.forEach( (project) => {
                if (!project.classList.contains('project-input')) {
                    let projectDate = new Date(project.querySelector('p').textContent);
                    projectDate.setHours(0, 0, 0, 0);
                    if (projectDate.getTime() !== today.getTime()) {
                        project.style.visibility = 'hidden';
                        project.style.position = 'absolute';
                    } else {
                        project.style.visibility = 'visible';
                        project.style.position = 'relative';
                    }
                }
            });
            break;
        case "time-week":
            projectsList.forEach( (project) => {
                if (!project.classList.contains('project-input')) {
                    let projectDate = new Date(project.querySelector('p').textContent);
                    projectDate.setHours(0, 0, 0, 0);
                    let oneWeekFromToday = new Date(`${date.getFullYear()}-${parseInt(date.getMonth())+1}-${date.getDate()+7}`)
                    if (projectDate.getTime() >= today.getTime() && projectDate.getTime() <= oneWeekFromToday.getTime()) {
                        project.style.visibility = 'visible';
                        project.style.position = 'relative';
                    } else {
                    project.style.visibility = 'hidden';
                    project.style.position = 'absolute';
                    }
                }
            });
            break;
        case "time-month":
            projectsList.forEach( (project) => {
                if (!project.classList.contains('project-input')) {
                    let projectDate = new Date(project.querySelector('p').textContent);
                    projectDate.setHours(0, 0, 0, 0);
                    if (projectDate.getFullYear() === today.getFullYear() && projectDate.getMonth() === today.getMonth()) {
                        project.style.visibility = 'visible';
                        project.style.position = 'relative';
                    } else {
                        project.style.visibility = 'hidden';
                        project.style.position = 'absolute';
                    }
                }
            });
            break;
        case "time-year":
            projectsList.forEach( (project) => {
                if (!project.classList.contains('project-input')) {
                    let projectDate = new Date(project.querySelector('p').textContent);
                    projectDate.setHours(0, 0, 0, 0);
                    if (projectDate.getFullYear() === today.getFullYear()) {
                        project.style.visibility = 'visible';
                        project.style.position = 'relative';
                    } else {
                        project.style.visibility = 'hidden';
                        project.style.position = 'absolute';
                    }
                }
            });
            break;
        case "time-all":
            projectsList.forEach( (project) => {
                if (!project.classList.contains('project-input')) {
                    project.style.visibility = 'visible'
                    project.style.position = 'relative';
                }
            });
            break;
    }
    Project.selected = undefined;
    const projects = document.querySelectorAll('#projects-list li');
    projects.forEach( (project) => project.style.backgroundColor = '#444' );
    const addStepButton = document.getElementById('add-step');
    addStepButton.classList.add('disabled');
    const stepPrompt = document.getElementById('step-prompt');
    stepPrompt.style.visibility = 'hidden';
    const startPrompt = document.getElementById('start-prompt');
    startPrompt.style.visibility = 'visible';
    projectsList.forEach( (project) => {
        if (project.style.visibility !== 'hidden') {
            startPrompt.style.visibility = 'hidden';

        }
    });
    displaySteps();
}

export { updateTimeRange };