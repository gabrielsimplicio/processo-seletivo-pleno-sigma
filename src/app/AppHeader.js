import React from 'react';

import { Link } from "react-router-dom";

const AppHeader = () => (
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
);

export default AppHeader;
