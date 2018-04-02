import React, { Component } from 'react';

import ListComicBooks from './../comic/ListComicBooks';
import Loading from './../Loading';

import { loadCharacterById } from './../../store/characters/action';
import {loadComics} from './../../store/comics/action'

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class CharacterDetail extends Component {

    componentWillMount() {
        this.props.loadCharacterById(this.props.match.params.idCharacter);
        this.props.loadComics({characters:this.props.match.params.idCharacter});
    }

    render() {
        const { character, isLoadSuccess, isLoadSuccessComics} = this.props;

        if (isLoadSuccess && isLoadSuccessComics) {
            const data = character.data.results[0];

            const urlImage = `${data.thumbnail.path}/portrait_fantastic.${data.thumbnail.extension}`

            return (
                <div className="col s12 m3" style={{paddingTop:'20px'}}>
                    <h4><b>{data.name}</b></h4>
                    <div className="card horizontal">
                        <div className="card-image">
                            <img src={urlImage} />
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                <p><b>Comics Available(s): </b>{data.comics.available}</p>
                                <p><b>Series Available(s): </b>{data.series.available}</p>
                                <p><b>Stories Available(s): </b>{data.stories.available}</p>
                            </div>
                        </div>
                    </div>
                    <ListComicBooks idCharacter={data.id}/>
                </div>
            );
        }

        return (
            <Loading />
        )
    }
}

const mapStateToProps = store => ({
    character: store.characterReducer.detailCharacter.character,
    isLoadSuccess: store.characterReducer.detailCharacter.isLoadSuccess,
    isLoadSuccessComics: store.comicReducer.listComic.isLoadSuccess
});

const mapDispatchToProps = dispatch => bindActionCreators({ loadCharacterById, loadComics }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CharacterDetail);