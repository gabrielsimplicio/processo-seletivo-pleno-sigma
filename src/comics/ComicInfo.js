import React from 'react';

import MarvelFetching from '../general/MarvelFetching';
import Loading from "../general/Loading";
import { formatToString } from "../general/formatCurrency";

import ComicCharacters from './ComicCharacters';

import {
  getImagePath,
  getFirstPrice,
  getCreatorName
} from "./mappings";

const ComicInfo = ({ data, loading }) => {

  if (loading) {
    return (
      <Loading isLoading={loading} />
    );
  }

  if (!data[0]) {
    return '';
  }

  const dataObject = data[0];

  const price = getFirstPrice(dataObject.prices);

  return(
    <article className="ComicInfo">
      <div>
        <img
          className="img-comic"
          src={getImagePath(dataObject.images)}
          alt={`Imagem do quadrinho ${dataObject.title}`}/>
        <header>
          <h1>{dataObject.title}</h1>
        </header>
        <p>{dataObject.description}</p>

        { dataObject.pageCount ? (<p>Páginas: {dataObject.pageCount}</p>) : '' }

        { price ? (<p>Preço: {formatToString(price)}</p>) : '' }

        <ul>
          {dataObject.creators.items
            .map(getCreatorName)
            .map((name, i) => (<li key={i}>{name}</li>))}
        </ul>

      </div>

      <ComicCharacters comicId={dataObject.id}/>

    </article>
  );

}

const FetchingComicInfo = ({match}) => (
  <MarvelFetching endpoint={`comics/${match.params.id}`}>
    <ComicInfo/>
  </MarvelFetching>
);

export default FetchingComicInfo;
