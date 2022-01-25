import { showCatalogPage } from './catalog.js';
import { showHomePage, showAboutPage} from './home.js';
import { showLoginPage } from './login.js';
import { showRegisterPage } from './register.js';

document.querySelector('nav').addEventListener('click', onNavigate);

// Start application in home view
showHomePage();

const sections = {
    'homeBtn': showHomePage,
    'catalogBtn': showCatalogPage,
    'aboutBtn': showAboutPage,
    'loginBtn': showLoginPage,
    'registerBtn': showRegisterPage
}

updateUserNav();

function onNavigate(event) {
    if(event.target.tagName == 'A') {
        const view = sections[event.target.id];
        if(typeof view == 'function') {
            event.preventDefault();
            view();
        }
    }
}

export function updateUserNav() {
    const userData = JSON.parse(sessionStorage.getItem('userData'));
    if(userData != null) {
        document.getElementById('userNav').style.display = 'inline-block'
        document.getElementById('guestNav').style.display = 'none'
    } else {
        document.getElementById('userNav').style.display = 'none'
        document.getElementById('guestNav').style.display = 'inline-block'
    }
}


