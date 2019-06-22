import Navigation from './bricks/Navigation';
import Content from './bricks/Content';
import Footer from './bricks/Footer';

import * as states from './store';

import { capitalize } from 'lodash';

import Navigo from 'navigo';

import axios from 'axios';

const router = new Navigo(window.location.origin);

const root = document.querySelector('#root');

function render(state){
    // TODO: Use Shadow DOM and Virtual DOM 'diffing' to avoid re-rendering ALL of the bricks
    root.innerHTML = `
  ${Navigation(state)}
  ${Content(state)}
  ${Footer(state)}
  `;

    router.updatePageLinks();
}

axios
    .get('https://jsonplaceholder.typicode.com/posts')

    .then((response) => {
        response.data.forEach((post) => states.Blog.posts.push(post));

        if(router.lastRouteResolved().params && router.lastRouteResolved().params.path === 'blog'){
            render(states.Blog);
        }
    });

router
    .on(':path', (params) => {
        render(states[capitalize(params.path)]);
    })
    .on('/', () => render(states.Home))
    .resolve();