// buildNavHTML should take the links, which is an Array
// It should iterate and generate the '<li>' that we need to build out the links.
// It should return for use inside the functional component, which generates the full markup

function buildNavHTML(stateLinks) {
  const linksHTML = '';
  stateLinks.forEach((link) => {
    linksHTML += `<li><a href="">${link}</a></li>`;
  })

  return linksHTML;
}

export default (state) => `<nav>
  <ul class="flex">
      ${buildNavHTML(state.links)}
      <li>Portfolio
      <ul = "dropdown>
      <li><a href="class.html">Class</a></li>
      <li><a href="web-store.html">Web Store</a></li>
      <li><a href="demo.html">Demo Day</a></li>

  </ul>
  </li>
  </ul>
</nav>`;

}

