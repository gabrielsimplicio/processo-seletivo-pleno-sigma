import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Comics from './comics/Comics';
import Characters from './characters/Characters';

import './app/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <header className="App-header">
            <h1 className="App-title">Welcome to React</h1>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/comics">Quadrinhos</Link></li>
              <li><Link to="/characters">Personagens</Link></li>
            </ul>
          </header>

          <Route exact path="/" component={Home}/>
          <Route path="/comics" component={Comics}/>
          <Route path="/characters" component={Characters}/>


        </div>
      </Router>
    );
  }
}

const Home = () => (
  <p className="App-intro">
    To get started, edit <code>src/App.js</code> and save to reload.
  </p>
);

export default App;
