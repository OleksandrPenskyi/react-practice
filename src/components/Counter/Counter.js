import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/Counter/counter-actions';
import Controls from './Controls';
import Value from './Value';
import './Counter.css';

function Counter({ value, step, onIncrement, onDecrement }) {
  return (
    <div className="Counter">
      <Value value={value} />
      <Controls
        step={step}
        onIncrement={() => onIncrement(step)}
        onDecrement={() => onDecrement(step)}
      />
    </div>
  );
}

const counterProps = state => ({
  value: state.counter.value,
  step: state.counter.dynamicStepValue,
});

const counterActions = dispatch => ({
  onIncrement: step => dispatch(actions.increment(step)),
  onDecrement: step => dispatch(actions.decrement(step)),
});

export default connect(counterProps, counterActions)(Counter);
