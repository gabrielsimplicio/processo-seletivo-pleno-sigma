import React, { Component } from 'react';

import PaginationFetching from '../general/PaginationFetching';
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
        <div className="items">
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

const order = [
  { value: '-focDate', description: 'Mais Recentes' },
  { value: 'focDate', description: 'Mais Antigos' },
  { value: 'title', description: 'Ordem Alfabética' },
  { value: 'issueNumber', description: 'Menor Numeração' },
  { value: '-issueNumber', description: 'Maior Numeração' }
];

const FetchingComics = () => (
  <PaginationFetching
    endpoint="comics"
    ordering={order}>
    <Comics/>
  </PaginationFetching>
);

export default FetchingComics;
