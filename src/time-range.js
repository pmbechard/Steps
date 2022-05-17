function updateTimeRange(timeRange) {
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
                    } else {
                        project.style.visibility = 'visible';
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
                    } else {
                    project.style.visibility = 'hidden';
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
                    } else {
                        project.style.visibility = 'hidden';
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
                    } else {
                        project.style.visibility = 'hidden';
                    }
                }
            });
            break;
        case "time-all":
            projectsList.forEach( (project) => {
                if (!project.classList.contains('project-input')) {
                    project.style.visibility = 'visible'
                }
            });
            break;
    }




    
    // TODO: update Projects display based on selected time range
}

export { updateTimeRange };