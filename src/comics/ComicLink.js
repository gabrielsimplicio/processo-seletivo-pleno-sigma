import React from 'react';

import { formatToString } from "../general/formatCurrency";

const ComicLink = ({title, id, thumbnail, url, price}) => (
  <a href="#">
  <div className="ComicLink">
    <img src="/img/not_found.jpg" alt={`${title} thumbnail`} />
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
