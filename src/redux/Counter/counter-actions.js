import types from './counter-types';

export const dynamicValue = value => ({
  type: types.dynamicValue,
  payload: value,
});

export const increment = value => ({
  type: types.increment,
  payload: value,
});

export const decrement = value => ({
  type: types.decrement,
  payload: value,
});

export const dynamicStepValue = value => ({
  type: types.dynamicStepValue,
  payload: value,
});
