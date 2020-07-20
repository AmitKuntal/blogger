import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './assets/main.css';
import './index.css';
import Home from './page/home';
import Stories from './page/stories';
import CreateStory from './page/createstory';


function App() {
  return (
    <Router>
      <Route path="/" exact component={Home}/>
      <Route path="/index" exact component={Home}/>
      <Route path="/story" exact component={Stories}/>
      <Route path="/create/post" exact component={CreateStory} />
    </Router>
  );
}

export default App;
