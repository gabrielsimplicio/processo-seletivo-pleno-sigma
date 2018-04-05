import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import imgCharacter from './../character.png';
import imgComics from './../comics.png';
import imgLogo from './../react-marvel.png';

const styles = {
    backgroundCard: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        borderRadius: '15px',
        width: '308px',
        height: '450px'
    },
    titlePage: {
        fontFamily: 'fantasy',
        color: 'white',
        fontWeight: 'bold'
    }
}



class Home extends Component {

    render() {
        return (
            <div className='col s12'>
                <div className='row'>
                    <div className='col s12 m6 center-align'  style={{paddingLeft:'10%'}}>
                        <div style={styles.backgroundCard}>
                            <Link to={'/comics'} >
                                <div className='comicLink valign-wrapper' style={{height:'100%', paddingLeft:'20%',  borderRadius: '15px'}}>
                                    <h2 style={styles.titlePage}>Comics</h2>
                                </div>
                            </Link>
                        </div>
                    </div>
                    <div className='col s12 m6 center-align'  style={{paddingLeft:'10%'}}>
                        <div style={styles.backgroundCard}>
                            <Link to={'/characters'} >
                                <div className='comicLink valign-wrapper' style={{height:'100%', paddingLeft:'9%', borderRadius: '15px'}}>
                                    <h2 style={styles.titlePage}>Characters</h2>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;