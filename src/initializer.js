import './style.css';
import logo from './img/steps_logo.png';
import gitHubLogo from './img/github.png';

/*
TODO:
    Disable steps until project is created/selected
    Auto select project when created
*/


function initializePage() {
    const header = document.querySelector('header');
    const logoImg = new Image();
    logoImg.src = logo;
    header.insertBefore(logoImg, header.firstChild);
    logoImg.style.width = '85px';

    const projectsList = document.getElementById('projects-list');
    projectsList.addEventListener('click', () => {
        const projects = document.querySelectorAll('#projects-list li');
        const startPrompt = document.getElementById('start-prompt');
        const addProjectButton = document.getElementById('add-project');
        if (Array.from(projects).length > 0) {
            startPrompt.style.visibility = 'hidden';
            addProjectButton.classList.remove('pulse');
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
