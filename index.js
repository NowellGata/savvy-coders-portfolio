import Navigation from './components/Navigation';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
// Nest states

state.title = 'Nowell Gata';

const states = {
    'home': {
        'title': 'Welcome to my Savvy Portfolio!'
        'image': img,
        'links': {
            'primary': ['Home', 'About', 'Contact' ],
            'dropdown': ['Class', 'Project', 'Hack-a-Thon','Demo Day']
    },

};
    'about': {
    'title': 'About Me'
    'links': ['Home', 'About', 'Contact' ]
};

    'contact': {
    'title': 'Contact Me'
    'links': ['Home', 'About', 'Contact' ]
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
