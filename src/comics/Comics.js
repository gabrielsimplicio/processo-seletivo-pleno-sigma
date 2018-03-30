import React, { Component } from 'react';

import { marvelUrl } from '../general/marvelUrl';

class Comics extends Component {

  constructor(props) {
    super(props);

  }


  componentDidMount() {
    fetch(marvelUrl('comics'))
      .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        console.log(response);
      });
  }

  render() {
    return (
      <p>Comics List</p>
    );
  }
}

export default Comics;
