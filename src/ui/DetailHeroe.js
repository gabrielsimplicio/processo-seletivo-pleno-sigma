import React from 'react'

const DetailHeroe = (props) => (
    <div className="card" style={{width: '100%', paddingTop: '10px', textAlign: 'center', display: 'inline-block', marginTop: '35px', backgroundColor: '#ECECEC', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19'}}>
        <h4 className="card-title" style={{marginTop: '10px'}}>{props.name}</h4>
            <img src={props.thumbnail.path + '/standard_fantastic' + '.' + props.thumbnail.extension} className="img-responsive"/>
        <div className="card-body">
            <p className="card-text">{props.description}</p>
            <p className="card-text">Comics Available: {props.comics.available}</p>
            <p className="card-text">Stories Available: {props.stories.available}</p>
            <p className="card-text">Total Comics: {props.comics.items.length}</p>
            <p className="card-text">Series Available: {props.series.available}</p>
            <p className="card-text">Total Series: {props.series.items.length}</p>
        </div>
    </div>
);

export default DetailHeroe;