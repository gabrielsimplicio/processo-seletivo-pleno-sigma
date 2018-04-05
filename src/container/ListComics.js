import React, {Component} from 'react';
import Comics from '../ui/Comics'
import MarvelApi from './../services/MarvelApi'
import Loader from './../ui/Loader'
import InfiniteScroll from 'react-infinite-scroller'


export default class ListComics extends Component {
    state = {
        search: '',
        isSearching: false,
        listComics: [],

    };

    componentWillMount() {
        this.loadApi()
    };

    loadApi = async () => {
        this.setState({
            listComics: [],
            isSearching: true
        })

        var data = await MarvelApi.getComics();

        this.setState({
            listComics: data.data.results,
            isSearching: false
        })
    };

    upadateValueInput(e) {
        this.setState({
            search: e.target.value
        })
    }

    async searchComics(e) {
        e.preventDefault();

        this.setState({
            listComics: [],
            isSearching: true
        })

        var data = await MarvelApi.getComics({titleStartsWith: this.state.search});
        this.setState({
            listComics: data.data.results,
            isSearching: false
        })
    }

    render() {
        if (this.state.isSearching) {
            return (<Loader/>);
        }
        return (

                <div className="container">
                    <form onSubmit={(e) => this.searchComics(e)} style={{margin: '40px auto'}}>
                        <div className="input-group">
                            <input className="form-control" type="search" placeholder="Find your favorite comic here ..." aria-label="Search" onChange={(e) => this.upadateValueInput(e)} value={this.state.search} required/>
                            <span className="input-group-btn">
                        <button className="btn btn-search" type="submit" id="submit"><i className="fa fa-search fa-fw"></i>Search</button>
                    </span>
                        </div>
                    </form>
                    <div className="row" style={{margin: '-30px'}}>
                        {this.state.listComics.map((obj, index) => <Comics idComic={obj.id} imgUrl={() => {
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


        );

    }
}