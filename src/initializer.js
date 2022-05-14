import './style.css';
import logo from './img/steps_logo.png';
import gitHubLogo from './img/github.png';


function initializePage() {
    const header = document.querySelector('header');
    const logoImg = new Image();
    logoImg.src = logo;
    header.insertBefore(logoImg, header.firstChild);
    logoImg.style.width = '85px';
    
    const footer = document.querySelector('footer');
    const gitHubImg = new Image();
    gitHubImg.src = gitHubLogo;
    footer.insertBefore(gitHubImg, footer.firstChild);
    gitHubImg.classList.add('footer-link')
    gitHubImg.onclick = () => open('https://github.com/pmbechard/', '_blank');
}

export { initializePage };