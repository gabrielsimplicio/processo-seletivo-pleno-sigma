import React, { Component } from 'react';

import ServiceComics from './../../services/marvelService';

import toastr from 'toastr';

import ItemComicBook from './ItemComicBook';
import Loading from './../Loading';
import ReactPaginate from 'react-paginate';

import { loadComics } from './../../store/comics/action';
import { loadChart } from '../../store/cart/action';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import cookie from "react-cookies";

let thisClass = null;

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
    }
}


class ListComicBooks extends Component {

    state = {
        inputValue: '',
        page: 0
    }

    componentWillMount() {
        thisClass = this;
        if (!this.props.idCharacter) {
            this.props.loadComics();
        }

    }

    updateInputValue(evt) {
        this.setState({
            inputValue: evt.target.value
        });
    }

    searchComics(evt) {
        evt.preventDefault();

        //const valueInput = e.target.elements.nameInput.value;

        if (this.props.idCharacter) {
            this.props.loadComics({ title: this.state.inputValue, characters: this.props.idCharacter });
        } else {
            this.props.loadComics({ title: this.state.inputValue });
        }

    }

    reloadPage() {
        thisClass.setState({
            inputValue: '',
            page: 0
        });

        if (thisClass.props.idCharacter) {
            thisClass.props.loadComics({ characters: thisClass.props.idCharacter });
        } else {
            thisClass.props.loadComics();
        }
    }

    paginationAction(data) {
        var page = data.selected;

        if (thisClass.state.page != page) {
            thisClass.setState({
                page: page
            })

            var param = {};

            if (thisClass.state.inputValue) {
                param = Object.assign(param, { title: thisClass.state.inputValue })
            }

            if (thisClass.props.idCharacter) {
                param = Object.assign(param, { characters: thisClass.props.idCharacter })
            }

            param = Object.assign(param, { page: page + 1 })

            thisClass.props.loadComics(param);
        }
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
        const { comics, isLoadSuccess } = this.props;

        let data = [];
        if (isLoadSuccess) {
            data = comics.data.results;
            var totalPages = Math.ceil(comics.data.total / 20);


            return (
                <div className="col s12" style={styles.backgroundCard}>
                    <div className="center-align">
                        <h3><b style={styles.titlePage}>LIST OF COMICS</b></h3>
                        <hr />
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <form onSubmit={(e) => this.searchComics(e)}>
                        <div className="row">
                            <div className="input-field input-group col s12">
                                <input style={{ color: 'white' }} value="" id="disabled" placeholder='Search for title' type="text" className="validate" required value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} />
                                <span className='suffix'>
                                    <button className="btn btn-floating waves-effect waves-light red"><i className="large material-icons">search</i></button>
                                </span>
                                <div style={{width:'20px'}}></div>
                                <span className='suffix'>
                                    <button type='button' className="btn btn-floating waves-effect waves-light red" onClick={this.reloadPage}><i className="large material-icons">autorenew</i></button>
                                </span>
                            </div>
                        </div>
                    </form>
                    <br />
                    <div className="row center-align">
                        {data.map((n, i) =>
                            <ItemComicBook key={i} numbCharacters={n.characters.available} idComic={n.id} urlImage={n.thumbnail.path + "/portrait_fantastic." + n.thumbnail.extension} title={n.title} actionAddCart={() => { this.addToChart(n.id) }} price={n.prices[0].price} />
                        )}
                    </div>
                    <div className='col s12 center-align'>
                        <ReactPaginate previousLabel={'<'}
                            nextLabel={'>'}
                            pageClassName={'waves-effect'}
                            previousClassName={'waves-effect'}
                            nextClassName={'waves-effect'}
                            breakLabel={<a href="#!">...</a>}
                            breakClassName={"waves-effect"}
                            pageCount={totalPages}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={this.paginationAction}
                            containerClassName={"pagination"}
                            initialPage={this.state.page}
                            activeClassName={"active"} />
                    </div>
                </div>
            )
        }
        return (
            <Loading />
        )

    }
}

const mapStateToProps = store => ({
    comics: store.comicReducer.listComic.comics,
    comicsInChart: store.chartReducer.listComic.comics,
    isLoadSuccess: store.comicReducer.listComic.isLoadSuccess
});

const mapDispatchToProps = dispatch => bindActionCreators({ loadComics, loadChart }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ListComicBooks);