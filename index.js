import Navigation from './components/Navigation';
import Header from './components/Header';
import Main from './components/Main';

// State is an Object Literal that will hold information that functional components to properly render

const state = {};

state.title = 'Nowell Gata';

// Use innerHTML property as a SETTER
document.querySelector('#root').innerHTML =
// In each of these, we are invoking our fxns, and the 'return' is the resulting HTML.
  `${Navigation(state)}
  ${Header(state)}
  ${Main(state)}
    `;

// Create click event handlers that will respond when we click on one of our navigation elements

function navHello(hello){
    console.log(`hiya from ${hello}`);
}

document.querySelector('nav a').addEventListener('click', (event) => {
    console.log(event.target.textcontent);
    navHello('clicky click');
});
