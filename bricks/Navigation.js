function buildIconHTML(link){

    if(link.icon){
        return `<span class="${link.icon}"></span>`;
    }

    return '';
}

function buildNavHTML(stateLinks){
    return stateLinks
        .map(
            (link) =>
                `<a href="/${link.text.toLowerCase()}" data-navigo>${buildIconHTML(
                    link
                )}${link.text}</a>`
        )
        .join(' ');
}

export default (state) => `<nav class="navbar-expand-sm navbar-dark bg-dark">
    ${buildNavHTML(state.links.primary)}

</nav>`;
