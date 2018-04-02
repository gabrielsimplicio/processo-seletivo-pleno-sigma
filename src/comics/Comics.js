import React, { Component } from 'react';

import MarvelFetching from '../general/MarvelFetching';
import Loading from "../general/Loading";
import { getComic } from './mappings';

import ComicLink from './ComicLink';

import './Comics.scss';

class Comics extends Component {

  constructor(props) {
    super(props);
    this.state = { comics: [], status: ''};
  }

  componentWillReceiveProps(nextProps) {

    if (!nextProps.loading) {
      this.setState({
        comics: nextProps.data.map(getComic),
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
          {this.state.comics.map(comicProps => (<ComicLink key={comicProps.id} {...comicProps}/>) )}
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
  <MarvelFetching endpoint="comics" pagination>
    <Comics/>
  </MarvelFetching>
);

export default FetchingComics;
