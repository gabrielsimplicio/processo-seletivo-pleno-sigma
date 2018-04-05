import React, {Component} from 'react';
import MarvelImg from '../images/marvel.svg'
import {Link} from 'react-router';


class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to='/' className="navbar-brand" style={{width: '150px'}}><img src={MarvelImg} style={{width: '150px'}}/></Link>
                    <button className="navbar-toggler" type="button" style={{borderColor: '#e9ecef'}} data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link to='/start' className="nav-link menu">HOME</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="/listCharacter" className="nav-link menu">CHARACTER</Link>
                            </li>
                            <li className="nav-item active">
                                <Link to="/listComics" className="nav-link menu">COMICS</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <hr></hr>

            </div>
        );
    }
};

export default NavBar

