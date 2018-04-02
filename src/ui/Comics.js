import React from 'react'
import {Link} from 'react-router';

const Comics = (props) => (
    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
        <div className="imageBox btn-1 card-1" style={{padding: 0}}>
            <img src={props.imgUrl()} className="img-responsive" style={{width: '100%'}}/>
            <h3>{props.title}</h3>
            <ul style={{listStyle: 'none'}}>
                <li style={{width: '50%'}} title="Adicionar ao carrinho">
                    <a href="#" onClick={props.action}><i className="fas fa-cart-plus" aria-hidden="true" title="Adicionar ao carrinho"></i></a>
                </li>
                <li style={{width: '50%'}}>
                    <Link style={{width:'80%'}} to={`/listComics/${props.idComic}`}><i className="fa fa-external-link-square-alt" aria-hidden="true" title="Descrição"></i></Link>
                </li>
            </ul>
        </div>
    </div>


);

export default Comics;