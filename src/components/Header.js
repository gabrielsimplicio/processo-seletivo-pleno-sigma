import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { loadChart } from './../store/cart/action';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import logo from './../react-marvel.png';
import cookie from "react-cookies";

const styles = {
    linkStyle:{
        lineHeight: '100%',
        display:'inline'
    }
}

class Header extends Component {
    
    componentWillMount(){
        this.props.loadChart();
    }

    render() {

        var itensCart = cookie.load('chartItems');
        if(!cookie.load('chartItems')){
            itensCart = [];
        }
    console.log(this.props.isRequestingStore);
        if(this.props.isRequestingStore){
            return (
                <header>
                    <nav  style={{backgroundColor:'#09237a'}} role="navigation">
                        <div className="nav-wrapper container">
                            <Link id="logo-container" to='/' className="brand-logo">
                                <img style={{width:'155px', paddingTop:'9px'}} src={logo}/>
                            </Link>
                            <ul className="right hide-on-med-and-down">
                                <li><Link to='/comics'><b>Comics</b></Link></li>
                                <li><Link to='/characters'><b>Characters</b></Link></li>
                                <li><Link to='/cart'><i style={styles.linkStyle} className="large material-icons">shopping_cart</i><span className="new badge red" data-badge-caption="loading"></span></Link></li>
                            </ul>
    
                            <ul id="nav-mobile" className="sidenav">
                                <li><Link className="sidenav-close" to='/comics'>Comics</Link></li>
                                <li><Link className="sidenav-close" to='/characters'>Characters</Link></li>
                                <li><Link className="sidenav-close" to='/cart'><i style={styles.linkStyle} className="large material-icons">shopping_cart</i><span className="new badge red" data-badge-caption="loading"></span></Link></li>
                            </ul>
                            <a  data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        </div>
                    </nav>
                </header>
            )
        }

        return (
            <header>
                <nav  style={{backgroundColor:'#09237a'}} role="navigation">
                    <div className="nav-wrapper container">
                        <Link id="logo-container" to='/' className="brand-logo">
                            <img style={{width:'155px', paddingTop:'9px'}} src={logo}/>
                        </Link>
                        <ul className="right hide-on-med-and-down">
                            <li><Link to='/comics'><b>Comics</b></Link></li>
                            <li><Link to='/characters'><b>Characters</b></Link></li>
                            <li><Link to='/cart'><i style={styles.linkStyle} className="large material-icons">shopping_cart</i><span className="new badge red" data-badge-caption="comics">{this.props.comics.length}</span></Link></li>
                        </ul>

                        <ul id="nav-mobile" className="sidenav">
                            <li><Link className="sidenav-close" to='/comics'>Comics</Link></li>
                            <li><Link className="sidenav-close" to='/characters'>Characters</Link></li>
                            <li><Link className="sidenav-close" to='/cart'><i style={styles.linkStyle} className="large material-icons">shopping_cart</i><span className="new badge red" data-badge-caption="comics">{this.props.comics.length}</span></Link></li>
                        </ul>
                        <a  data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    </div>
                </nav>
            </header>
        );
    }
}

const mapStateToProps = store => ({
    comics: store.chartReducer.listComic.comics,
    isRequestingStore: store.chartReducer.listComic.isRequesting
});

const mapDispatchToProps = dispatch => bindActionCreators({loadChart }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Header);