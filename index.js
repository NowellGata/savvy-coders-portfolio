import Navigation from './Components/Navigation';
import ContentOne from './Components/Navigation';
import ContentTwo from './Components/Navigation';
import Footer from './Components/Footer';

console.log(Navigation, ContentOne, ContentTwo, Footer);

// Use innerHTML property as a GETTER
let initialHTML = document.body.innerHTML;

// Use innerHTML property as a SETTER
document.body.innerHTML = `
  ${Navigation}
  ${ContentOne}
  ${ContentTwo}
  ${Footer}
  ${initialHTML}
  `;
