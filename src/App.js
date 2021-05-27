import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import CounterPage from './Page/CounterPage';

const App = () => (
  <>
    <ul>
      <li>
        <Link to="/counter">Счётчик</Link>
      </li>
    </ul>

    <Switch>
      <Route path="/counter">
        <CounterPage />
      </Route>
    </Switch>
  </>
);

export default App;
