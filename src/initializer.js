import './style.css';
import logo from './img/steps_logo.png';
import gitHubLogo from './img/github.png';


function initializePage() {
    const header = document.querySelector('header');
    const logoImg = new Image();
    logoImg.src = logo;
    header.insertBefore(logoImg, header.firstChild);
    logoImg.style.width = '85px';

    const projectsList = document.getElementById('projects-list');
    projectsList.addEventListener('click', () => {
        const projects = document.querySelectorAll('#projects-list li');
        const steps = document.querySelectorAll('#steps-list li');
        const startPrompt = document.getElementById('start-prompt');
        const stepPrompt = document.getElementById('step-prompt');
        const addProjectButton = document.getElementById('add-project');
        const addStepButton = document.getElementById('add-step');
        if (Array.from(projects).length > 0) {
            startPrompt.style.visibility = 'hidden';
            addProjectButton.classList.remove('pulse');
            if (Array.from(steps).length === 0) {
                stepPrompt.style.visibility = 'visible';
                addStepButton.classList.add('pulse');
            } else {
                stepPrompt.style.visibility = 'hidden';
                addStepButton.classList.remove('pulse');  
            }
        } else {
            startPrompt.style.visibility = 'visible';
            addProjectButton.classList.add('pulse');
        }
    });
    
    const footer = document.querySelector('footer');
    const gitHubImg = new Image();
    gitHubImg.src = gitHubLogo;
    footer.insertBefore(gitHubImg, footer.firstChild);
    gitHubImg.classList.add('footer-link')
    gitHubImg.onclick = () => open('https://github.com/pmbechard/', '_blank');
}

export { initializePage };
