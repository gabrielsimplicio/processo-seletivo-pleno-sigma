import React, {Component} from 'react';

import ItemCharacter from './ItemCharacter';
import Loading from './../Loading';
import ReactPaginate from 'react-paginate';

import {loadCharacters} from './../../store/characters/action';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


var thisClass = null;

class ListCharacter extends Component {

    state = {
        inputValue: '',
        page: 0
    }

    componentWillMount() {
        thisClass = this;
        if (!this.props.idComic) {
            this.props.loadCharacters();
        }
    }

    updateInputValue(evt) {
        this.setState({
            inputValue: evt.target.value
        });
    }

    searchCharacters(evt) {
        evt.preventDefault();

        if (this.props.idComic) {
            this.props.loadCharacters({comics: this.props.idComic, name: this.state.inputValue});
        } else {
            this.props.loadCharacters({name: this.state.inputValue});
        }
    }

    reloadPage(){
        thisClass.setState({
            inputValue: '',
            page:0
        });

        if (thisClass.props.idComic) {
            thisClass.props.loadCharacters({comics: thisClass.props.idComic});
        } else {
            thisClass.props.loadCharacters();
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
                param = Object.assign(param, {name: thisClass.state.inputValue})
            }

            if (thisClass.props.idComic) {
                param = Object.assign(param, {comics: thisClass.props.idComic})
            }

            param = Object.assign(param, {page: page+1})

            thisClass.props.loadCharacters(param);
        }
    }


    render() {

        const {characters, isLoadSuccess} = this.props;

        let data = [];

        if (isLoadSuccess) {
            data = characters.data.results;
            var totalPages = Math.ceil(characters.data.total / 20);
            return (
                <div className='col s12'>
                    <h4><b>List of Character</b></h4>
                    <hr/>
                    <br></br>
                    <br></br>
                    <br></br>
                    <form onSubmit={(e) => this.searchCharacters(e)}>
                        <div className="row">
                            <div className="input-field col s5">
                                <input value="" id="disabled" placeholder='Search for name' type="text" className="validate" required value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}/>
                            </div>
                            <div className='col s4'>
                                <button className="waves-effect waves-light btn-large"><i className="large material-icons">search</i></button>
                            </div>
                            <div className='col s3'>
                                <button type='button' className="waves-effect waves-light btn-large" onClick={this.reloadPage}><i className="large material-icons">autorenew</i></button>
                            </div>
                        </div>
                    </form>
                    <br/>

                    <div className="row">
                        {data.map((n, i) =>
                            <ItemCharacter key={i} idCharacter={n.id} urlImage={n.thumbnail.path + "/standard_fantastic." + n.thumbnail.extension} name={n.name}/>
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
                                       activeClassName={"active"}/>
                    </div>
                </div>
            )
        }
        return (
            <Loading/>
        )

    }
}


const mapStateToProps = store => ({
    characters: store.characterReducer.listCharacter.characters,
    isLoadSuccess: store.characterReducer.listCharacter.isLoadSuccess
});

const mapDispatchToProps = dispatch => bindActionCreators({loadCharacters}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(ListCharacter);