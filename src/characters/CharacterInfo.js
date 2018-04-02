import React from 'react';

import MarvelFetching from '../general/MarvelFetching';
import Loading from "../general/Loading";
import CharacterComics from './CharacterComics';

import { getThumbnailPath } from "./mappings";

const CharacterInfo = ({ data, loading }) => {

  if (loading) {
    return (
      <Loading isLoading={loading} />
    );
  }

  if (!data[0]) {
    return '';
  }

  const dataObject = data[0];

  return(
    <article className="CharacterInfo">
      <div>
        <img
          className="img-character"
          src={getThumbnailPath(dataObject.thumbnail)}
          alt={`Imagem do personagem ${dataObject.name}`}/>
        <header>
          <h1>{dataObject.name}</h1>
        </header>
        <p className="description">{dataObject.description}</p>
      </div>
      <CharacterComics characterId={dataObject.id}/>
    </article>
  );

}

const FetchingCharacterInfo = ({match}) => (
  <MarvelFetching endpoint={`characters/${match.params.id}`}>
    <CharacterInfo/>
  </MarvelFetching>
);

export default FetchingCharacterInfo;
