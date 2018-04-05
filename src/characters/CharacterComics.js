import React from 'react';
import { Link } from 'react-router-dom';

import MarvelFetching from '../general/MarvelFetching';
import Loading from "../general/Loading";

import { getThumbnailPath } from '../comics/mappings';

const CharacterComics = ({ data, loading }) => {

  if (loading) {
    return (
      <Loading isLoading={loading} />
    );
  }

  return (
    <section className="CharacterComics">
      <ul className="list">
        {data.map((props, i) => (<Comic key={i} {...props} />))}
      </ul>
    </section>
  );
};

const Comic = (props) => {
  return (
    <li className="comic">
      <Link to={`/comic/${props.id}`}>
        <img src={getThumbnailPath(props)}
          alt={`Imagem do personagem ${props.title}`}/>
      </Link>
    </li>
  );
}

const FetchingCharacterComics = ({ characterId }) => (
  <MarvelFetching endpoint={`characters/${characterId}/comics`}>
    <CharacterComics/>
  </MarvelFetching>
);

export default FetchingCharacterComics;
