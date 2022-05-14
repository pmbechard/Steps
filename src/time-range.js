function updateTimeRange(timeRange) {
    const timeRangeOptions = document.querySelectorAll('#times-list li');
    timeRangeOptions.forEach( (option) => option.classList.remove('selected') );
    timeRange.classList.add('selected');
    // update Projects display
}

export { updateTimeRange };