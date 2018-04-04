import React, { Component } from 'react';

import ListCharacter from './../character/ListCharacter';
import Loading from './../Loading';


import { loadComicById } from './../../store/comics/action';
import { loadCharacters } from './../../store/characters/action';
import { loadChart } from '../../store/cart/action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import cookie from "react-cookies";
import toastr from 'toastr';

const confToastr = {
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
    description: {
        color: 'white',
        fontWeight: 'bold'
    }
}

class ComicDetail extends Component {

    componentWillMount() {
        this.props.loadComicById(this.props.match.params.idComic);
        this.props.loadCharacters({ comics: this.props.match.params.idComic });
    }

    addToChart(idComic) {
        var arrayInCookie = cookie.load('chartItems')

        if (!arrayInCookie) {
            arrayInCookie = [];
        }

        if (arrayInCookie.indexOf(idComic) == -1) {
            var date = new Date();
            date.setDate(date.getDate() + 7)
            arrayInCookie.push(idComic)
            cookie.save('chartItems', arrayInCookie, { expires: date })
            this.props.loadChart();
            toastr.success('This comic was added to your cart', '', confToastr);
        } else {
            toastr.error('Ops. This comic is already in your cart', '', confToastr);
        }


    }

    render() {

        const { comic, isLoadSuccess, isLoadSuccessCharacters } = this.props;


        if (isLoadSuccess && isLoadSuccessCharacters) {
            const data = comic.data.results[0]
            const urlImage = `${data.thumbnail.path}/portrait_fantastic.${data.thumbnail.extension}`

            return (
                <div className="col s12 m7" style={styles.backgroundCard}>
                    <div className='center-align'>
                        <h3><b style={styles.titlePage}>{data.title}</b></h3>
                        <img src={urlImage} />
                        <p style={styles.description}><h6>{data.description}</h6></p>
                        <p><h6 style={styles.description}>CHARACTERS: {data.characters.available}</h6></p>
                        <p><h6 style={styles.description}>PRICE: ${data.prices[0].price}</h6></p>
                        <button type='button' onClick={() => { this.addToChart(data.id)}} title="Add Comic to Cart" className="btn btn-floating waves-effect waves-light red"><i className="material-icons">add_shopping_cart</i></button>
                    </div>
                    <br></br>
                    <ListCharacter idComic={data.id} />
                </div>
            );
        }

        return (
            <Loading />
        )


    }
}


const mapStateToProps = store => ({
    comic: store.comicReducer.detailComic.comic,
    isLoadSuccess: store.comicReducer.detailComic.isLoadSuccess,
    isLoadSuccessCharacters: store.characterReducer.listCharacter.isLoadSuccess
});

const mapDispatchToProps = dispatch => bindActionCreators({ loadComicById, loadCharacters, loadChart}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ComicDetail);