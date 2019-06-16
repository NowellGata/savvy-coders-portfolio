import Navigation from './components/Navigation';
import Content from './components/Content';
import Footer from './components/Footer';

import * as states from './store';

import { capitalize } from 'lodash';

import Navigo from 'navigo';
// axios is NOT a a fxn. constructor
import axios from 'axios';

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

// function handleRoutes(params){}


// Fetch returns a Promise that contains a RESPONSE Object
// // Common structure when using FETCH
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//     .then((json) => console.log(json));

axios
    .get('https://jsonplaceholder.typicode.com/posts')
    // After CALL STACK is all empty, JS can execute the 'then' to 'unwrap' the Promise
    .then((response) => {
        // 'response.data' is an Array of 'Post' Objects
        // We need to get this into states.Blog.posts.
        response.data.forEach((post) => states.Blog.posts.push(post));
        // console.log('After forEach', states);
        // If user is routing to Blog, then render the blog page here.
        if(router.lastRouteResolved() && router.lastRouteResolved().params.path === 'blog'){
            render(states.Blog);
        }
    });


// console.log('I am after axios!');

router
    .on(':path', (params) => {
        render(states[capitalize(params.path)]);
    })
    .on('/', () => render(states.Home))
    .resolve();