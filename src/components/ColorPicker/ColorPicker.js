import React, { Component } from 'react';
import styles from './ColorPicker.module.css';

class ColorPicker extends Component {
  state = {
    currentOption: 2,
  };

  currentActiveOption = index => {
    this.setState({ currentOption: index });
  };

  makeActiveClassName = index => {
    const activeClassName = [styles.ColorPicker__option];

    if (index === this.state.currentOption) {
      activeClassName.push(styles.ColorPicker__active);
    }

    return activeClassName.join(' ');
  };

  render() {
    const { options } = this.props;
    const { currentOption } = this.state;
    const { label } = options[currentOption];

    return (
      <div className={styles.ColorPicker}>
        <h2 className={styles.ColorPicker__title}>Color Picker</h2>
        <p>Выбран цвет: {label}</p>

        <div>
          {options.map(({ label, color }, index) => (
            <button
              className={this.makeActiveClassName(index)}
              key={label}
              style={{ backgroundColor: color }}
              onClick={() => this.currentActiveOption(index)}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
