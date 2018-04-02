import React from 'react';

import { Link } from "react-router-dom";
import { formatToString } from "../general/formatCurrency";

const imageFilterRegex = /image_not_available/;

const ComicLink = ({title, id, thumbnail, price}) => (
  <Link to={`/comic/${id}`}>
    <div className="ComicLink">
      <img  src={imageFilterRegex.test(thumbnail) ? '/img/not_found.jpg' : thumbnail}
            alt={`Capa do quadrinho ${title}`} />
      <div className="description">
        <span className="title">{title}</span>
        {
          !price ?
            <span className="not-found">Não disponível</span> :
            <span className="price">{formatToString(price)}</span>
        }
      </div>

    </div>
  </Link>
);

export default ComicLink;
