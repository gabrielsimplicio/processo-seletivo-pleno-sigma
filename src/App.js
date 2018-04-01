import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AppHeader from "./app/AppHeader";
import Home from './app/Home';
import Comics from './comics/Comics';
import Characters from './characters/Characters';

import './app/App.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <AppHeader/>

          <div className="App-content">

            <Route exact path="/" component={Home}/>
            <Route path="/comics" component={Comics}/>
            <Route path="/characters" component={Characters}/>

          </div>

        </div>
      </Router>
    );
  }
}

export default App;
