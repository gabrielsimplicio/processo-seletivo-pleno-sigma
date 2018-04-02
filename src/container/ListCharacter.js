import React, {Component} from 'react';
import Heroes from '../ui/Heroes'
import MarvelApi from './../services/MarvelApi'
import Loader from './../ui/Loader'


export default class ListCharacter extends Component {
    state = {
        search: '',
        isSearching: false,
        listCharacter: []
    };

    componentWillMount() {
        this.loadApi()
    };

    loadApi = async () => {
        this.setState({
            listCharacter: [],
            isSearching: true
        })

        var data = await MarvelApi.getCharacters();

        this.setState({
            listCharacter: data.data.results,
            isSearching: false
        })
    };

    upadateValueInput(e) {
        this.setState({
            search: e.target.value
        })
    }

    async searchCharacter(e) {
        e.preventDefault();

        this.setState({
            listCharacter: [],
            isSearching: true
        })

        var data = await MarvelApi.getCharacters({nameStartsWith: this.state.search});
        this.setState({
            listCharacter: data.data.results,
            isSearching: false
        })
    }



    render() {
        if (this.state.isSearching) {
            return (<Loader/>);
        }

        return (
            <div className="container">
                <form onSubmit={(e) => this.searchCharacter(e)} style={{ margin: '40px auto'}}>
                    <div className="input-group">
                        <input className="form-control" type="search" placeholder="Find your favorite hero here ..." aria-label="Search" onChange={(e) => this.upadateValueInput(e)} value={this.state.search} required />
                        <span className="input-group-btn">
                        <button className="btn btn-search"  type="submit" id="submit"><i className="fa fa-search fa-fw"></i> Search</button>
                    </span>
                    </div>
                </form>
                <div className="row" style={{margin: '-30px'}}>
                    {this.state.listCharacter.map((obj, index) =>
                        <Heroes idCharacter={obj.id} imgUrl={obj.thumbnail.path + '/portrait_incredible' + '.' + obj.thumbnail.extension} key={index}  {...obj}/>
                    )}
                </div>
            </div>
        );
    };
};