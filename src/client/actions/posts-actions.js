import {
  POSTS_FETCH_START,
  POSTS_FETCH_SUCCESS,
  POSTS_FETCH_FAILURE
} from '../constants/actionTypes';

export const postsFetchStart = () => {
  return {
    type: POSTS_FETCH_START
  };
};

export const postsFetchSuccess = posts => {
  return {
    type: POSTS_FETCH_SUCCESS,
    payload: posts
  };
};

export const postsFetchFailure = message => {
  return {
    type: POSTS_FETCH_FAILURE,
    payload: message
  };
};

export const fetchPosts = () => dispatch => {
  dispatch(postsFetchStart());

  fetch('/posts')
    .then(res => {
      if (res.status >= 400) {
        throw new Error('Bad response from server');
      }

      return res.json();
    })
    .then(data => dispatch(postsFetchSuccess(data)))
    .catch(err => dispatch(postsFetchFailure(err.message)));
};
