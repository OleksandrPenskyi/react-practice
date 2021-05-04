import React, { Component } from 'react';
import style from './Switcher.module.css';

class Switcher extends Component {
  state = {
    visible: false,
  };

  switchDropdownMenu = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    const { visible } = this.state;
    return (
      <div className={style.Dropdown}>
        <button onClick={this.switchDropdownMenu} type="button">
          {visible ? 'Hide' : 'Show'}
        </button>

        {visible && <div className={style.Dropdown__menu}>Выпадающее меню</div>}
      </div>
    );
  }
}

export default Switcher;
