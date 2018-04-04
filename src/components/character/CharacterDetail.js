import React, { Component } from 'react';

import ListComicBooks from './../comic/ListComicBooks';
import Loading from './../Loading';

import { loadCharacterById } from './../../store/characters/action';
import {loadComics} from './../../store/comics/action'

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
                <div className="col s12 m3" style={styles.backgroundCard}>
                    <div className='center-align'>
                        <h3><b style={styles.titlePage}>{data.name}</b></h3>
                        <img src={urlImage} />
                        <p style={styles.description}><h6>{data.description}</h6></p>
                        <p><h6 style={styles.description}>COMICS: {data.comics.available}</h6></p>
                        <p><h6 style={styles.description}>SERIES: {data.series.available}</h6></p>
                        <p><h6 style={styles.description}>STORIES: {data.stories.available}</h6></p>
            
                    </div>
                    <br></br>
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