import Navigation from './Components/Navigation';
import Header from './components/Header';
import Main from './components/Main';
// import ContentOne from './Components/Navigation';
// import ContentTwo from './Components/Navigation';
// import Footer from './Components/Footer';


// Use innerHTML property as a SETTER
document.querySelector('#root').innerHTML = `
  ${Navigation}
  ${Header}
  ${Main}
    `;
