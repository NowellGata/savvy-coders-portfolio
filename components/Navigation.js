// buildNavHTML should take the links, which is an Array
// It should iterate and generate the '<li>' that we need to build out the links.
// It should return for use inside the functional component, which generates the full markup

// function buildNavHTML(stateLinks)  {
// let linksHTML = '';


// if(link.icon){
//    return `<span class="${link.icon}"></span>`;
// }
//     return '';

// }

function buildNavHTML(stateLinks){
    let linksHTML = '';

    stateLinks.forEach((link) => {
        linksHTML += `
        <li>
          <a href="/${link.text.toLowerCase()}" data-navigo>
          ${buildIconHTML(link)} ${link.text}
          </a>
        </li>`;
    });

    return linksHTML;
}

export default (state) => `
  <nav class= "navbar">
    <ul class="flex">
      ${buildNavHTML(state.links.primary)}
      <li>
        Portfolio
        <ul class = "dropdown">
           ${buildNavHTML(state.links.dropdown)}
        </ul>
      </li>
    </ul>
</nav>`;


// <nav class="navbar">

// <ul>
//  <li><a href="./index.html">Home</a></li>
// <li><a href="./portfolio.html">Portfolio</a></li>
// <li><a href="./photos.html">Photos</a></li>
// <li><a href="./about.html">Resume</a></li>
// </ul>

// </nav>


