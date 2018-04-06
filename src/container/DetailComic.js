import React, {Component} from 'react';
import MarvelApi from './../services/MarvelApi';
import ComicDetail from "../ui/ComicDetail";
import Heroes from '../ui/Heroes'
import Loader from './../ui/Loader'

class DetailComic extends Component {
    state = {
        comic: null,
        comicIsLoading: false,
        listCharacter: [],
        listCharacterIsLoading: false
    }

    componentWillMount() {
        this.loadApi();

    }

    async loadApi() {

        this.setState({
            comicIsLoading: true
        });

        var comic = await MarvelApi.getComicsById(this.props.params.idComic);


        this.setState({
            comicIsLoading: false,
            comic: comic.data.results[0]

        });

        this.setState({
            listCharacterIsLoading: true
        });

        var listaCharacter = await MarvelApi.getCharacters({comics: this.props.params.idComic});

        this.setState({
            listCharacterIsLoading: false,
            listCharacter: listaCharacter.data.results
        });

    }

    render() {

        if (this.state.comicIsLoading || this.state.listCharacterIsLoading) {
            return (<Loader/>)
        }

        return (
            <div className="container">
                <div className="row" style={{margin: '40px auto'}}>
                    <ComicDetail imgUrl={() => {
                        var retorno = "";
                        if (this.state.comic.images.length > 0) {
                            retorno = this.state.comic.images[0].path + '/portrait_incredible' + '.' + this.state.comic.images[0].extension;
                        } else {
                            retorno = this.state.comic.thumbnail.path + '/portrait_incredible' + '.' + this.state.comic.thumbnail.extension;
                        }
                        return retorno;

                    }} {...this.state.comic}/>
                </div>


                <div className="row" style={{margin: '-30px'}}>
                    {this.state.listCharacter.map((obj, index) =>
                        <Heroes idCharacter={obj.id} imgUrl={obj.thumbnail.path + '/portrait_incredible' + '.' + obj.thumbnail.extension} key={index}  {...obj}/>
                    )}
                </div>
            </div>

        )
    }


}

export default DetailComic;