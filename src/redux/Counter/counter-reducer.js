import types from './counter-types';
import { combineReducers } from 'redux';

const valueReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case types.dynamicValue:
      return +payload;

    case types.increment:
      return state + payload;

    case types.decrement:
      return state - payload;

    default:
      return state;
  }
};

const dynamicStepValueReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case types.dynamicStepValue:
      return +payload;

    default:
      return state;
  }
};

const counterReducer = combineReducers({
  value: valueReducer,
  dynamicStepValue: dynamicStepValueReducer,
});

export default counterReducer;
