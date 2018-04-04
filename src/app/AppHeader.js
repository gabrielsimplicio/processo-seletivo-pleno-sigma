import React from 'react';

import { NavLink, Link } from "react-router-dom";

const AppHeader = () => (
  <header className="App-header">
    <Link to="/home">
      <img className="App-logo" src="/img/marvel-logo.png" alt="Logo da Marvel" />
    </Link>
    <div>
      <hgroup>
        <h1 className="App-title">Marvel HQ Store</h1>
      </hgroup>

      <nav className="App-navbar">
        <ul>
          {/* <li><NavLink to="/home" activeClassName="selected">Home</NavLink></li> */}
          <li><NavLink to="/comics" activeClassName="selected">Quadrinhos</NavLink></li>
          <li><NavLink to="/characters" activeClassName="selected">Personagens</NavLink></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default AppHeader;
