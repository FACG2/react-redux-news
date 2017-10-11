import {
  COUNTER_INCREMENT,
  COUNTER_DECREMENT
} from '../constants/actionTypes';

export const counterIncrement = () => {
  return {
    type: COUNTER_INCREMENT
  };
};

export const counterDecrement = () => {
  return {
    type: COUNTER_DECREMENT
  };
};
