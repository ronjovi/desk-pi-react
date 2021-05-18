import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.global.scss';
import ClockPage from './components/Pages/ClockPage/ClockPage';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={ClockPage} />
      </Switch>
    </Router>
  );
}
