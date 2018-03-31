import React, { Component } from 'react';

import Fetching from '../general/Fetching';
import { marvelUrl } from '../general/marvelUrl';
import { getComic } from './mappings';

class Comics extends Component {

  constructor(props) {
    super(props);
    this.state = { comics: [], status: '', data: {} };
  }

  componentWillReceiveProps(nextProps) {

    if (!nextProps.loading) {
      this.setState({
        comics: nextProps.data.data.results.map(getComic),
        status: nextProps.data.status,
        data: {
          count: nextProps.data.data.count,
          limit: nextProps.data.data.limit,
          offset: nextProps.data.data.offset,
          total: nextProps.data.data.total,
        }
      });
    }
  }

  render() {
    return (

        <article>
          <header>
            <h1>Quadrinhos</h1>
          </header>
          <div>
            {this.state.comics.map(x => (<p>{x.title}</p>) )}
          </div>
          <p>{this.props.loading ? 'carregando...' : ''}</p>
        </article>
    );
  }
}

Comics.defaultProps = {
  data: {},
  loading: false
}

const FetchingComics = () => (
  <Fetching url={marvelUrl('comics')}>
    <Comics/>
  </Fetching>
);

export default FetchingComics;
