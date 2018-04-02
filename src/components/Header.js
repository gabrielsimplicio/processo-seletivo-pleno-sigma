import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from './../react-marvel.png';

import cookie from "react-cookies";

class Header extends Component {
    
    render() {

        var itensCart = cookie.load('chartItems');
        if(!cookie.load('chartItems')){
            itensCart = [];
        }


        return (
            <header>
                <nav  style={{backgroundColor:'#09237a'}} role="navigation">
                    <div className="nav-wrapper container">
                        <Link id="logo-container" to='/' className="brand-logo">
                            <img style={{width:'155px', paddingTop:'9px'}} src={logo}/>
                        </Link>
                        <ul className="right hide-on-med-and-down">
                            <li><Link to='/comics'>Comics</Link></li>
                            <li><Link to='/characters'>Characters</Link></li>
                            <li><Link to='/cart'><i className="large material-icons">shopping_cart</i></Link></li>
                        </ul>

                        <ul id="nav-mobile" className="sidenav">
                            <li><Link className="sidenav-close" to='/comics'>Comics</Link></li>
                            <li><Link className="sidenav-close" to='/characters'>Characters</Link></li>
                            <li><Link className="sidenav-close" to='/cart'><i className="large material-icons">shopping_cart</i></Link></li>
                        </ul>
                        <a  data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;