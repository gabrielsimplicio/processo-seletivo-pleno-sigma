import React from 'react';

import { Link } from "react-router-dom";

const imageFilterRegex = /image_not_available/;

const CharacterLink = ({name, id, thumbnail}) => (
  <Link to={`/character/${id}`}>
    <div className="CharacterLink">
      <div className="img-wrapper">
        <img  src={imageFilterRegex.test(thumbnail) ? '/img/not_found.jpg' : thumbnail}
              alt={`${name} thumbnail`} />

      </div>

        <span className="name">{name}</span>

    </div>
  </Link>
);

export default CharacterLink;
