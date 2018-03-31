import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './app/Home';
import Comics from './comics/Comics';
import Characters from './characters/Characters';

import './app/App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <header className="App-header">
            <hgroup>
              <h1 className="App-title">Bem-vindo à Marvel HQ Store</h1>
              <h2 className="App-subtitle">Sua melhor opção em Quadrinhos</h2>
            </hgroup>

            <nav className="App-navbar">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/comics">Quadrinhos</Link></li>
                <li><Link to="/characters">Personagens</Link></li>
              </ul>
            </nav>
          </header>

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
