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
                let projectDate = new Date(project.querySelector('p').textContent);
                projectDate.setHours(0, 0, 0, 0);
                if (projectDate.getTime() !== today.getTime()) {
                    project.style.visibility = 'hidden';
                }
            });
            break;
        case "time-week":
            console.log('show week');
            break;
        case "time-month":
            console.log('show month');
            break;
        case "time-year":
            console.log('show year');
            break;
        case "time-all":
            projectsList.forEach( (project) => project.style.visibility = 'visible' );
            break;
    }




    
    // TODO: update Projects display based on selected time range
}

export { updateTimeRange };