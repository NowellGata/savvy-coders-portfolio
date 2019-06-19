import * as pages from './pages';

export default (state) => `
  <div id="bg-container">
    ${pages[state.pageContent](state)}
  </div>`;


// import * as pages from './pages';
// export default (state) => `
//    <div> ${pages[state.pageContent](state)}
//     </div>`;