import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './assets/main.css';
import './index.css';
import Home from './page/home';


function App() {
  return (
    <Router>
      <Route path="/" exact component={Home}/>
      <Route path="/index" exact component={Home}/>
    </Router>
  );
}

export default App;
