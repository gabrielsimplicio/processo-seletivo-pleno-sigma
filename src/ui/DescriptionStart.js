import React from 'react';
import {Link} from 'react-router';

const DescriptionStart = () => (
    <div className="bodyIntro">
        <div className="wrapper run-animation" id="animate">
            <div className="logo">
                <h1 style={{color: '#e1e600'}}>This is an example of a SPA developed in ReactJS with Marvel API integration.</h1>
                <div className="row">
                    <div className='col-md-6'><Link to="/listCharacter" className="restart">LIST ALL HEROES</Link></div>
                    <div className='col-md-6'><Link to="/listComics" className="restart">LIST ALL COMICS</Link></div>
                </div>
            </div>
        </div>
    </div>

);

export default DescriptionStart;