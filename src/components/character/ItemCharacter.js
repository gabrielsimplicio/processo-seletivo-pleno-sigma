import React, { Component } from 'react'

import { Link } from 'react-router-dom';

class ItemCharacter extends Component {

    render() {
        return (
            <div className="col s12 m6 l4 xl3" style={{ padding: '30px' }}>
                <figure className="imgThumb">
                    <img className='responsive-img' src={this.props.urlImage} alt={this.props.name} />
                    <figcaption>
                        <h6><b>{this.props.name}</b></h6>
                        <p><b>Comics: {this.props.numbComics}</b></p>
                        <div className="icons">
                            <Link className='btn btn-floating waves-effect waves-light red' title="View Character Detail" to={'/characters/' + this.props.idCharacter}><i className="large material-icons">info</i></Link>
                        </div>
                    </figcaption>
                </figure>
            </div>
        )
    }
}

export default ItemCharacter;