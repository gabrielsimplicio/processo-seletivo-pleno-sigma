import React from 'react';
import { Link } from 'react-router-dom';

import MarvelFetching from '../general/MarvelFetching';
import Loading from "../general/Loading";

const ComicCharacters = ({ data, loading }) => {

  if (loading) {
    return (
      <Loading isLoading={loading} />
    );
  }

  return (
    <section className="ComicCharacters">
      <header>
        <h1>Personagens</h1>
      </header>
      <ul>
        {data.map((props, i) => (<Character key={i} {...props} />))}
      </ul>
    </section>
  );
};

const Character = ({ id, name }) => {
  return (
    <li>
      <Link to={`/character/${id}`}>
        {name}
      </Link>
    </li>
  );
}

const FetchingComicCharacters = ({ comicId }) => (
  <MarvelFetching endpoint={`comics/${comicId}/characters`} pagination>
    <ComicCharacters/>
  </MarvelFetching>
);

export default FetchingComicCharacters;
