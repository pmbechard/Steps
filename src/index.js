import { initializePage } from "./initializer";
import { updateTimeRange } from "./time-range";

// Initialize static and dynamic page elements
initializePage();

// Logic for Time Range selection
const timeRangeOptions = document.querySelectorAll('#times-list li');
timeRangeOptions.forEach( (timeRange) => {
    timeRange.addEventListener('click', () => {
        updateTimeRange(timeRange.textContent);
    });
});

// Logic for adding new project


// Logic for adding new step
