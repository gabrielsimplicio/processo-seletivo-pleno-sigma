import React, {Component} from 'react';

import toastr from 'toastr';

import Loading from './../Loading';

import {loadChart} from '../../store/cart/action';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import cookie from "react-cookies";

var confToastr = {
    "closeButton": false,
    "positionClass": "toast-top-right",
    "timeOut": "5000"
}


class Cart extends Component {
    state ={
        totalPrice : 0
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
            cookie.save('chartItems', arrayIncookie, {expires: date})
            toastr.success('This comic has been removed from your cart','',confToastr);
        }

        this.props.loadChart();
    }



    render() {

        if (this.props.isLoadSuccess) {
            return (
                <div className={'row'}>
                    <div className="col s12">
                        <h5>Itens: {this.props.comics.length}</h5>
                        <h5>Total Price: ${this.props.totalPrice.toFixed(2)}</h5>
                    </div>
                    {this.props.comics.map((n, i) =>
                        <div key={i} className="col s12 m3">
                            <figure className="imgThumb"><img src={n.thumbnail.path + "/portrait_fantastic." + n.thumbnail.extension} alt={n.title}/>
                                <figcaption>
                                    <h6>{n.title}</h6>
                                    <br></br>
                                    <p>Price: ${n.prices[0].price}</p>
                                    <div className="icons">
                                        <a title="Remove Comic from Cart" href='#!' onClick={()=>{this.removeItemOfChart(n.id)}}><i className="material-icons">remove_shopping_cart</i></a>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    )}
                </div>
            );
        }

        return (<Loading/>);
    }

}

const mapStateToProps = store => ({
    comics: store.chartReducer.listComic.comics,
    isLoadSuccess: store.chartReducer.listComic.isLoadSuccess,
    totalPrice: store.chartReducer.listComic.totalPrice
});

const mapDispatchToProps = dispatch => bindActionCreators({loadChart}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);