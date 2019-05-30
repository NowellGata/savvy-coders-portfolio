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

    router.updatePageLinks();
}

function handleRoutes(params){}

router
    .on(':path', (params) => {
        render(states[capitalize(params.path)]);
    })
    .on('/', () => render(states.Home))
    .resolve();


// Fetch returns a Promise that contains a RESPONSE Object
// Common structure when using FETCH
fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => console.log(json));

