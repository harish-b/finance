import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Executions from './containers/Executions';
import Home from './containers/Home';

function App() {
  return (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/executions" exact component={Executions} />
        </Switch>
    </Router>
  );
}

export default App;
