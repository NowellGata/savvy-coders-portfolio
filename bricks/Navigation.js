function buildIconHTML(link){
    // If link.icon actually exists on this link, it is 'truth-y' so the `if` will take effect.
    // If link.icon is cd .t there for this link - it's UNDEFINED, of 'false-y' so the 'if' will NOT take effect.
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