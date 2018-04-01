import React from 'react';

import { formatToString } from "../general/formatCurrency";

const imageFilterRegex = /image_not_available/;

const ComicLink = ({title, id, thumbnail, price}) => (
  <a href="#">
    <div className="ComicLink">
      <img  src={imageFilterRegex.test(thumbnail) ? '/img/not_found.jpg' : thumbnail}
            alt={`${title} thumbnail`} />
      <div className="description">
        <span className="title">{title}</span>
        {
          !price ?
            <span className="not-found">Não disponível</span> :
            <span className="price">{formatToString(price)}</span>
        }
      </div>

    </div>
  </a>
);

export default ComicLink;
