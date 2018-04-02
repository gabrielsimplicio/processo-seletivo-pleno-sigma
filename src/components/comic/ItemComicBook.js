import React, {Component} from 'react';

import {Link} from 'react-router-dom';

class ItemComicBook extends Component {
    render() {
        return (
            <div className="col s12 m3 ">
                <figure className="imgThumb"><img src={this.props.urlImage} alt={this.props.title}/>
                    <figcaption>
                        <h6>{this.props.title}</h6>
                        <br></br>
                        <p>Price: ${this.props.price}</p>
                        <div className="icons">
                            <Link title="View Comic Detail" to={'/comics/' + this.props.idComic}><i className="material-icons">remove_red_eye</i></Link>
                            <a title="Add Comic to Cart" href='#!' onClick={this.props.actionAddCart}><i className="material-icons">add_shopping_cart</i></a>
                        </div>
                    </figcaption>
                </figure>
            </div>
        );
    }
}

export default ItemComicBook;