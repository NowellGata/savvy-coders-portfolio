import Navigation from './components/Navigation';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/footer';
// Nest states

state.title = 'Nowell Gata';

const states = {
    'home': {
    }

};
const home = {
    'title': 'HOLA'
};

const contact = {
    'title': 'Welcome to my contact page'
};

const about = {
    'title': 'Welcome to about page'
};


// Use innerHTML property as a SETTER
const root = document.querySelector('#root');
// In each of these, we are invoking our fxns, and the 'return' is the resulting HTML.


// Render receives an ARGUMENT as a NAMED PARAMETER, 'State'
function render(state){
    root.innerHTML = `
  ${Navigation(state)}
  ${Header(state)}
  ${Main(state)}
    `;
}

render(home);

const links = document.querySelectorAll('nav a');

links.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        render(states[`${e.target.textContent.toLowerCase()}`]);
    });
});
