import React from 'react'

const ComicDetail = (props) => (
    <div className="card" style={{width: '100%', paddingTop: '10px', textAlign: 'center', display: 'inline-block', marginTop: '35px', backgroundColor: '#cacaca17', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19'}}>
        <img  src={props.imgUrl()} className="img-responsive"/>
        <div class="card-body">
            <h4 class="card-title" style={{marginTop: '10px'}}>{props.title}</h4>
            <p class="card-text">{props.description}</p>
            <p class="card-text">Issue Number: {props.issueNumber}</p>
            <p class="card-text">Price: {props.prices[0].price}</p>
            <p class="card-text">Page Count: {props.pageCount}</p>
        </div>
    </div>
);

export default ComicDetail;