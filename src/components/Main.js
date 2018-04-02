import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';


import Home from './../components/Home';
import ListComicBooks from './../components/comic/ListComicBooks';
import ListCharacter from './../components/character/ListCharacter';
import ComicDetail from './../components/comic/ComicDetail';
import CharacterDetail from './../components/character/CharacterDetail';
import Cart from './cart/Cart';


class Main extends Component {
    render() {
        return (
            <main>
                <div className="container" style={{marginTop:'20px'}}>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/comics' component={ListComicBooks} />
                        <Route path='/comics/:idComic' component={ComicDetail} />
                        <Route exact path='/characters' component={ListCharacter} />
                        <Route path='/characters/:idCharacter' component={CharacterDetail} />
                        <Route exact path='/cart' component={Cart} />
                    </Switch>
                </div>
            </main>
        );
    }
}

export default Main;

/*<Route path='/roster' component={Roster} /> 
                    <Route path='/schedule' component={Schedule} /> */
