function buildPostsHTML(posts){

    return posts.map((post) => `<article>
        <h2>${post.title}</h2>
        <p>${post.body}HOWDY</p>
        </article>`).join('');
}


export default function(state){
    return `
    <h2>Welcome to ${state.title}'s Blog! </h2>
    ${buildPostsHTML(state.posts)};
    `;
}
