import React, { Component } from 'react'

import { Link } from 'react-router-dom';

class ItemCharacter extends Component {
    /*
    *
    * */

    /*<div className="col s12 m3">
                <div className="card">
                    <div className="card-image">
                        <img width='100%' height='100%' src={this.props.urlImage} />
                    </div>
                    <div className="card-action center-align">
                        <Link className='waves-effect waves-light btn-small' to={'/characters/' + this.props.idCharacter}><i className="large material-icons">remove_red_eye</i></Link>
                    </div>
                </div>
            </div>*/

    render() {
        return (
            <div className="col s12 m3 ">
                <figure className="imgThumb"><img src={this.props.urlImage} alt={this.props.name}/>
                    <figcaption>
                        <h6>{this.props.name}</h6>
                        <div className="icons">
                            <Link title="View Character Detail" to={'/characters/' + this.props.idCharacter}><i className="large material-icons">remove_red_eye</i></Link>
                        </div>
                    </figcaption>
                </figure>
            </div>
        )
    }
}

export default ItemCharacter;