
import Navigation from './components/Navigation';
import Content from './components/Content';
import Footer from './components/Footer';
import * as states from './store';
import { capitalize } from 'lodash';
import Navigo from 'navigo';
const router = new Navigo(window.location.origin);

// Use innerHTML property as a SETTER
const root = document.querySelector('#root');

// render receives an argument as a named parameter: 'state'
function render(state){
    // TODO: Use Shadow DOM and Virtual DOM 'diffing' to avoid re-rendering ALL of the components
    root.innerHTML = `
  ${Navigation(state)}
  ${Content(state)}
  ${Footer(state)}
  `;

    router updatePageLinks(){

    }
    const links = document.querySelectorAll('nav a');

    // links.forEach((link) => {
        // link.addEventListener('click', (e) => {
         //   e.preventDefault();
           // render(states[`${e.target.textContent}`]);
        });
    });
}

function handleRoutes(params){
    render(states[capitalize(params.path)]);
}

router
    .on(':path', (params) => console.log(params.path))
    .on('/', () => (render(states.Home)))
    .resolve();
