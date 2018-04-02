import React, {Component} from 'react';

import {Link} from 'react-router-dom';

import imgCharacter from './../character.png';
import imgComics from './../comics.png';
import imgLogo from './../react-marvel.png';


class Home extends Component {


    render() {
        return (
            <div className='col s12 center' style={{paddingTop: '20px'}}>

                <br></br>
                <div className='row'>
                    <div className='col s12 m6'>
                        <div className="card">
                            <div className="card-content ">
                                <Link to={'/comics'}>
                                    <img src={imgComics} style={{height: '200px'}}/>
                                    <br></br>
                                    <b>List All Comics</b>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='col s12 m6'>
                        <div className="card">
                            <div className="card-content ">
                                <Link to={'/characters'}>
                                    <img src={imgCharacter} style={{height: '200px'}}/>
                                    <br></br>
                                    <b>List All Characters</b>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;