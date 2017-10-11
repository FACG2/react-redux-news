import {
  POSTS_FETCH_START,
  POSTS_FETCH_SUCCESS,
  POSTS_FETCH_FAILURE
} from '../constants/actionTypes';

const initialState = {
  posts: [],
  error: undefined,
  isFetching: false
};

const posts = (state = initialState, action) => {
  switch (action.type) {
    case POSTS_FETCH_START: {
      return {
        ...state,
        error: undefined,
        isFetching: true
      };
    }
    case POSTS_FETCH_SUCCESS: {
      return {
        ...state,
        posts: action.payload,
        isFetching: false
      };
    }
    case POSTS_FETCH_FAILURE: {
      return {
        ...state,
        error: action.payload,
        isFetching: false
      };
    }
    default:
      return state;
  }
};

export default posts;
