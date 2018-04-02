import React from 'react'
import {Link} from 'react-router';

const DetailHeroe = (props) => (
    <div class="card" style={{width: '100%', paddingTop: '10px', textAlign: 'center', display: 'inline-block', marginTop: '35px', backgroundColor: '#cacaca17', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19'}}>
        <img src={props.thumbnail.path + '/standard_fantastic' + '.' + props.thumbnail.extension} className="img-responsive"/>
        <div class="card-body">
            <h4 class="card-title" style={{marginTop: '10px'}}>{props.name}</h4>
            <p class="card-text">{props.description}</p>
            <p class="card-text">Comics Available: {props.comics.available}</p>
            <p class="card-text">Stories Available: {props.stories.available}</p>
        </div>
    </div>
);


export default DetailHeroe;