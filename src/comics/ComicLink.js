import React from 'react';

import { Link } from "react-router-dom";
import { formatToString } from "../general/formatCurrency";

const ComicLink = ({title, id, thumbnail, price}) => (
  <Link to={`/comic/${id}`}>
    <div className="ComicLink">
      <img  src={thumbnail}
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
