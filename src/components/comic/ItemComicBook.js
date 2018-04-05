import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class ItemComicBook extends Component {
    render() {
        return (
            <div className="col s12 m6 l4 xl3" style={{ padding: '30px' }}>
                <figure className="imgThumb">
                    <img className='responsive-img' src={this.props.urlImage} alt={this.props.title} />
                    <figcaption>
                        <h6><b>{this.props.title}</b></h6>
                        <p><b>Characters: {this.props.numbCharacters}</b></p>
                        <p><b>Price: ${this.props.price}</b></p>
                        <div className="icons">
                            <Link className='btn btn-floating waves-effect waves-light red' title="View Comic Detail" to={'/comics/' + this.props.idComic}><i className="material-icons">info</i></Link>
                            <span> </span>
                            <a className='btn btn-floating waves-effect waves-light red' title="Add Comic to Cart" href='#!' onClick={this.props.actionAddCart}><i className="material-icons">add_shopping_cart</i></a>
                        </div>
                    </figcaption>
                </figure>
            </div>
        );
    }
}

export default ItemComicBook;