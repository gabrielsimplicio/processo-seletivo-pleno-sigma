import React from 'react'

const ComicDetail = (props) => (

    <div className="card" style={{width: '100%', paddingTop: '10px', textAlign: 'center', display: 'inline-block', marginTop: '35px', backgroundColor: '#ECECEC', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19'}}>
        <h4 className="card-title" style={{marginTop: '10px'}}>{props.title}</h4>
        <img src={props.imgUrl()} className="img-responsive"/>
        <div className="card-body">
            <p className="card-text">{props.description}</p>
            <p className="card-text">Issue Number: {props.issueNumber}</p>
            <p className="card-text">Price: {props.prices[0].price}</p>
        </div>
    </div>
);

export default ComicDetail;