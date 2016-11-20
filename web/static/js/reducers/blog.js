import { handleActions } from 'redux-actions';

const defaultStore = {
  articles: [],
};

export default handleActions({
  SUCCESS_FETCH_POSTS: (state, action) => {
    return { articles: action.payload.data };
  },
  SUCCESS_ADD_ARTICLE: (state, action) => {
    return { articles: [action.payload.data].concat(state.articles) }
  },
}, defaultStore);
