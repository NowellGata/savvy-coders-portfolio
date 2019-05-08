import Navigation from './components/Navigation';
import Header from './components/Header';
import Main from './components/Main';
import { type } from 'os';

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

