import React from 'react';

const ComicInfo = ({match }) => {
  return(
    <div>{ match.params.id }</div>
  );
}

export default ComicInfo;
