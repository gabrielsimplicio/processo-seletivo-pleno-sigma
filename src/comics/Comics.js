import React, { Component } from 'react';

import Fetching from '../general/Fetching';
import Loading from "../general/Loading";
import { marvelUrl } from '../general/marvelUrl';
import { getComic } from './mappings';

import ComicLink from './ComicLink';

import './Comics.scss';

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

    if (this.props.loading) {
      return (
        <Loading isLoading={this.props.loading} />
      );
    }

    return (

      <article className="Comics">
        <header>
          <h1>Quadrinhos</h1>
        </header>
        <div>
          {this.state.comics.map(x => (<ComicLink {...x}/>) )}
        </div>
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
