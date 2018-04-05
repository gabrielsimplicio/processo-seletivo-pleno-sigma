import React from 'react'

import './Loading.scss';

const Loading = ({isLoading, message = 'Carregando', value, max = 10}) => {

  if (isLoading) {
    return (
      <div className="Loading">
        <div>
          <p>{message}</p>
          <progress max={max} value={value}></progress>
        </div>
      </div>
    );
  }

  return '';
}

export default Loading;


