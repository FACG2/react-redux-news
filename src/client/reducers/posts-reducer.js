import postsFixture from '../components/posts/Posts.fixture';

const initialState = {
  postsArr: postsFixture
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default posts;
