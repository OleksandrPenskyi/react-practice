import React from 'react';
import Switcher from './components/Switcher';
import Counter from './components/Counter';

const App = () => (
  <>
    <Counter startValue={12} />
    <Switcher />
  </>
);

export default App;
