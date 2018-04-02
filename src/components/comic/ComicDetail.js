import React, { Component } from 'react';

import ListCharacter from './../character/ListCharacter';
import Loading from './../Loading';


import { loadComicById } from './../../store/comics/action';
import { loadCharacters} from './../../store/characters/action';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class ComicDetail extends Component {

    componentWillMount() {
        this.props.loadComicById(this.props.match.params.idComic);
        this.props.loadCharacters({comics:this.props.match.params.idComic});
    }

    render() {

        const { comic, isLoadSuccess, isLoadSuccessCharacters} = this.props;


        if (isLoadSuccess && isLoadSuccessCharacters) {
            const data = comic.data.results[0]
            const urlImage = `${data.thumbnail.path}/portrait_fantastic.${data.thumbnail.extension}`

            return (
                <div className="col s12 m7" >
                    <h4><b>{data.title}</b></h4>
                    <div className="card horizontal">
                        <div className="card-image">
                            <img src={urlImage} />
                        </div>
                        <div className="card-stacked">
                            <div className="card-content">
                                <p>{data.description}</p>
                            </div>
                        </div>
                    </div>
                    <ListCharacter idComic={data.id}/>
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

const mapDispatchToProps = dispatch => bindActionCreators({ loadComicById, loadCharacters}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ComicDetail);