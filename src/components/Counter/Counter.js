import React, { Component } from 'react';
import style from './Counter.module.css';
import PropTypes from 'prop-types';

class Counter extends Component {
  static defaultProps = {
    startValue: 0,
  };

  static propTypes = {
    startValue: PropTypes.number,
  };

  state = {
    value: this.props.startValue,
  };

  onIncrementClick = () => {
    this.setState(previewState => ({
      value: previewState.value + 1,
    }));
  };

  onDecrementClick = () => {
    this.setState(previewState => ({
      value: previewState.value - 1,
    }));
  };

  render() {
    const { value } = this.state;

    return (
      <div className={style.Wrapper}>
        <p>
          Счетчиик:
          <span>{value}</span>
        </p>

        <div>
          <button
            className={style.Btn}
            type="button"
            onClick={this.onIncrementClick}
          >
            Увелчиваем на 1
          </button>
          <button
            className={style.btn}
            type="button"
            onClick={this.onDecrementClick}
          >
            Уменьшаем на 1
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
