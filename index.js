import Navigation from './components/Navigation';
import Header from './components/Header';
import Main from './components/Main';

const state = {};
const home = {
  'title': "Domo Arigato Mr. Roboto!";
}
state.title = 'Nowell Gata';

// Use innerHTML property as a SETTER
const root = document.querySelector('#root');
// In each of these, we are invoking our fxns, and the 'return' is the resulting HTML.


// Render receives an ARGUMENT as a NAMED PARAMETER, 'State'
function render(state) {
  root.innerHTML = `
  ${Navigation(state)}
  ${Header(state)}
  ${Main(state)}
    `;

}

render(home);
