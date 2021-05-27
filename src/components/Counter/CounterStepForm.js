import React, { Component } from 'react';
import * as actions from '../../redux/Counter/counter-actions';
import { connect } from 'react-redux';

const INITIAL_STATE = {
  initialValue: '',
  initialStep: '',
};

class CounterStepForm extends Component {
  state = INITIAL_STATE;

  onInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmitForm = event => {
    event.preventDefault();
    this.props.handleSubmitStep(this.state.initialStep);
    this.props.handleSubmitValue(this.state.initialValue);
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    return (
      <form onSubmit={this.onSubmitForm}>
        <input
          onChange={this.onInputChange}
          type="number"
          name="initialValue"
          value={this.state.initialValue}
        />

        <input
          onChange={this.onInputChange}
          type="number"
          name="initialStep"
          value={this.state.initialStep}
        />
        <button type="submit">Install Step</button>
      </form>
    );
  }
}

const counterActions = dispatch => ({
  handleSubmitValue: value => dispatch(actions.dynamicValue(value)),
  handleSubmitStep: value => dispatch(actions.dynamicStepValue(value)),
});

export default connect(null, counterActions)(CounterStepForm);

// const mapDispatchToProps = dispatch => ({
//   onSubmit: text => dispatch(todosActions.addTodo(text)),
// });
// export default connect(null, mapDispatchToProps)(TodoEditor);
