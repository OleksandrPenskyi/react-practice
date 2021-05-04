import React from 'react';
import Switcher from './components/Switcher';
import Counter from './components/Counter';
import ColorPicker from './components/ColorPicker';

import colorPicker from './data/colorPicker.json';

const App = () => (
  <>
    <Counter startValue={12} />
    <Switcher />
    <ColorPicker options={colorPicker} />
  </>
);

export default App;
