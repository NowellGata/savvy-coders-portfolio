function buildPostsHTML(posts){
    // console.log('I received posts', posts);
    return posts.map((post) => `<article>
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        </article>`
    );
}


export default function(state){
    return `
    <h1>Hello from the Blog! ${state.title}</h1>
    ${buildPostsHTML(state.posts)};
    `;
}
