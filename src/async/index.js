import { selectSubreddit, fetchPosts, DEFAULT_SUBREDDIT } from './actions'
import store from './store'

const asyncDemo = function () {
  console.log('asyncDemo');

  store.dispatch(selectSubreddit(DEFAULT_SUBREDDIT));
  store.dispatch(fetchPosts(DEFAULT_SUBREDDIT))
    // .then(() => console.log(store.getState()))
  ;
};

export default asyncDemo

