import { selectSubreddit, fetchPosts, DEFAULT_SUBREDDIT } from './actions'
import store from './store'

const asyncDemo = function () {
  console.log('%c ================== ASYNC! ================== ', 'background: #222; color: #bada55');
  store.dispatch(selectSubreddit(DEFAULT_SUBREDDIT));
  store.dispatch(fetchPosts(DEFAULT_SUBREDDIT));
};

export default asyncDemo

