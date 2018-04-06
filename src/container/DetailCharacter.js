import React, {Component} from 'react';
import MarvelApi from './../services/MarvelApi';
import DetailHeroe from "../ui/DetailHeroe";
import Comics from '../ui/Comics'
import Loader from './../ui/Loader'

class DetailCharacter extends Component {
    state = {
        character: null,
        characterIsLoading: false,
        listComics: [],
        listComicsIsLoading: false
    }

    componentWillMount() {
        this.loadApi();

    }

    async loadApi() {

        this.setState({
            characterIsLoading: true
        });

        var character = await MarvelApi.getCharactersById(this.props.params.idCharacter);


        this.setState({
            characterIsLoading: false,
            character: character.data.results[0]

        });

        this.setState({
            listComicsIsLoading: true
        });

        var listaComics = await MarvelApi.getComics({characters: this.props.params.idCharacter});

        this.setState({
            listComicsIsLoading: false,
            listComics: listaComics.data.results
        });
    }

    render() {

        if (this.state.characterIsLoading || this.state.listComicsIsLoading) {
            return (<Loader/>)
        }

        return (
            <div className="container">
                <div className="row" style={{ margin: '40px auto'}}>
                    <DetailHeroe {...this.state.character}/>
                </div>

                <div className="row" style={{margin: '-30px'}}>
                    {this.state.listComics.map((obj, index) =>  <Comics idComic={obj.id} imgUrl={() => {
                            var retorno = "";
                            if (obj.images.length > 0) {
                                retorno = obj.images[0].path + '/portrait_incredible' + '.' + obj.images[0].extension;
                            } else {
                                retorno = obj.thumbnail.path + '/portrait_incredible' + '.' + obj.thumbnail.extension;
                            }
                            return retorno;

                        }} key={index}  {...obj}/>
                    )}
                </div>
            </div>

        )
    }


}

export default DetailCharacter;
