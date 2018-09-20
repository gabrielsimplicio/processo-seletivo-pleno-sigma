import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './../components/Home';
import ListComicBooks from './../components/comic/ListComicBooks';
import ListCharacter from './../components/character/ListCharacter';
import ComicDetail from './../components/comic/ComicDetail';
import CharacterDetail from './../components/character/CharacterDetail';
import Cart from './cart/Cart';

const styleBackground = {
    background: 'url("https://images2.alphacoders.com/661/thumb-1920-66190.jpg") no-repeat center center fixed',
    webKitBackgroundSize: 'cover',
    backgroundSize: 'cover'
}


class Main extends Component {
    render() {
        return (
            <main style={styleBackground} className='valign-wrapper'>
                <div className="container">
                    <Switch>
                        <Route exact path='/' component={Home} />
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
