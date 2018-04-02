import React from 'react';
import { Link } from 'react-router-dom';

import MarvelFetching from '../general/MarvelFetching';
import Loading from "../general/Loading";

const CharacterComics = ({ data, loading }) => {

  if (loading) {
    return (
      <Loading isLoading={loading} />
    );
  }

  return (
    <section className="CharacterComics">
      <header>
        <h1>Quadrinhos em que aparece</h1>
      </header>
      <ul>
        {data.map((props, i) => (<Comic key={i} {...props} />))}
      </ul>
    </section>
  );
};

const Comic = ({ id, title }) => {
  return (
    <li>
      <Link to={`/comic/${id}`}>
        {title}
      </Link>
    </li>
  );
}

const FetchingCharacterComics = ({ characterId }) => (
  <MarvelFetching endpoint={`characters/${characterId}/comics`} pagination>
    <CharacterComics/>
  </MarvelFetching>
);

export default FetchingCharacterComics;
