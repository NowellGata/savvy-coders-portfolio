import Navigation from './components/Navigation';
import Header from './components/Header';
import Main from './components/Main';
// import ContentOne from './components/Navigation';
// import ContentTwo from './components/Navigation';
// import Footer from './components/Footer';


// Use innerHTML property as a SETTER
document.querySelector('#root').innerHTML = `
  ${Navigation}
  ${Header}
  ${Main}
    `;
