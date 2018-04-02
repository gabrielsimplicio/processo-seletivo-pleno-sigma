import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ListCharacter from './container/ListCharacter';
import DetailCharacter from './container/DetailCharacter';
import DetailComic from './container/DetailComic';
import ListComics from './container/ListComics'
import Home from './container/Home'
import Start from './container/Start'
import registerServiceWorker from './registerServiceWorker';
import {Router, Route, IndexRoute, hashHistory } from 'react-router';

ReactDOM.render(
   <Router history={hashHistory}>
       <Route path="/" component={App}>
           <IndexRoute component={Home}/>
           <Route exact path="/start" component={Start}/>
           <Route exact path="/home" component={Home}/>
           <Route exact path="/listCharacter" component={ListCharacter}/>
           <Route path="/listCharacter/:idCharacter" component={DetailCharacter}/>
           <Route exact path="/listComics" component={ListComics}/>
           <Route path="/listComics/:idComic" component={DetailComic}/>

       </Route>

   </Router>,

document.getElementById('root'));
registerServiceWorker();
