import React, { Component } from 'react';

import toastr from 'toastr';

import Loading from './../Loading';

import { Link } from 'react-router-dom';

import { loadChart } from '../../store/cart/action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import cookie from "react-cookies";

var confToastr = {
    "closeButton": false,
    "positionClass": "toast-top-right",
    "timeOut": "5000"
}

const styles = {
    backgroundCard: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: '20px',
        borderRadius: '15px'
    },
    titlePage: {
        fontFamily: 'fantasy',
        color: 'white',
        fontWeight: 'bold'
    },
    describe: {
        color: 'white',
        fontWeight: 'bold'
    }
}


class Cart extends Component {
    state = {
        totalPrice: 0
    }
    componentWillMount() {
        this.props.loadChart();
    }

    removeItemOfChart(id) {
        var arrayIncookie = cookie.load('chartItems')
        var index = arrayIncookie.indexOf(id)

        if (index > -1) {
            var date = new Date();
            date.setDate(date.getDate() + 7)
            arrayIncookie.splice(index, 1);
            cookie.save('chartItems', arrayIncookie, { expires: date })
            toastr.success('This comic has been removed from your cart', '', confToastr);
        }

        this.props.loadChart();
    }

    render() {

        if (this.props.isLoadSuccess) {
            return (
                <div className={'row'}>
                    <div className="col s12" style={styles.backgroundCard}>
                        <div className="center-align">
                            <h3><b style={styles.titlePage}>CART</b></h3>
                            <hr />
                        </div>
                        <br></br>
                        <br></br>
                        <h5 style={styles.describe}>Itens: {this.props.comics.length}</h5>
                        <h5 style={styles.describe}>Total Price: ${this.props.totalPrice.toFixed(2)}</h5>
                        <br />
                        <div className="row center-align">
                        {this.props.comics.map((n, i) =>
                        <div className="col s12 m6 l4 xl3" style={{ padding: '30px' }}>
                            <figure className="imgThumb">
                                <img className='responsive-img' src={n.thumbnail.path + "/portrait_fantastic." + n.thumbnail.extension} alt={n.title} />
                                <figcaption>
                                    <h6><b>{n.title}</b></h6>
                                    <p><b>Characters: {n.characters.available}</b></p>
                                    <p><b>Price: ${n.prices[0].price}</b></p>
                                    <div className="icons">
                                        <Link title="View Comic Detail" to={'/comics/' + n.id}><i className="material-icons">remove_red_eye</i></Link>
                                        <a title="Remove Comic from Cart" href='#!' onClick={() => { this.removeItemOfChart(n.id) }}><i className="material-icons">remove_shopping_cart</i></a>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    )}
                        </div>
                    </div>
                </div>
            );
        }

        return (<Loading />);
    }

}

const mapStateToProps = store => ({
    comics: store.chartReducer.listComic.comics,
    isLoadSuccess: store.chartReducer.listComic.isLoadSuccess,
    totalPrice: store.chartReducer.listComic.totalPrice
});

const mapDispatchToProps = dispatch => bindActionCreators({ loadChart }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);