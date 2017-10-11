import {
  COUNTER_INCREMENT,
  COUNTER_DECREMENT
} from '../constants/actionTypes';

const initialState = {
  count: 0
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case COUNTER_INCREMENT: {
      return {
        ...state,
        count: state.count + 1
      };
    }
    case COUNTER_DECREMENT: {
      return {
        ...state,
        count: state.count - 1
      };
    }
    default:
      return state;
  }
};

export default counter;
