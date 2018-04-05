import React from 'react';
import { Link } from 'react-router-dom';

import MarvelFetching from '../general/MarvelFetching';
import Loading from "../general/Loading";

import {
  getThumbnailPath
} from "./mappings";

const ComicCharacters = ({ data, loading }) => {

  if (loading) {
    return (
      <Loading isLoading={loading} />
    );
  }

  return (
    <section className="ComicCharacters">

      <ul className="list">
        {data.map((props, i) => (<Character key={i} {...props} />))}
      </ul>
    </section>
  );
};

const Character = ({ id, name, thumbnail }) => {
  return (
    <li className="character">
      <Link to={`/character/${id}`}>
        <img src={getThumbnailPath({thumbnail})}
             alt={`Imagem do personagem ${name}`}/>

      </Link>
    </li>
  );
}

const FetchingComicCharacters = ({ comicId }) => (
  <MarvelFetching endpoint={`comics/${comicId}/characters`} limit={30}>
    <ComicCharacters/>
  </MarvelFetching>
);

export default FetchingComicCharacters;
