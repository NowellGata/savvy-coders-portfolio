import * as pages from './pages';
export default (state) => `
   <div> ${pages[state.pageContent](state)}
    </div>`;
