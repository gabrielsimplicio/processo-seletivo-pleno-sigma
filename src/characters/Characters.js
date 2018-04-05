import React, {Component} from 'react';

import PaginationFetching from '../general/PaginationFetching';
import Loading from "../general/Loading";
import { getCharacter } from './mappings';

import CharactersLink from "./CharactersLink";

import './Characters.scss';

class Characters extends Component {

  constructor(props) {
    super(props);
    this.state = { characters: [], status: '', data: [] }
  }

  componentWillReceiveProps(nextProps) {

    if (!nextProps.loading) {
      this.setState({
        characters: nextProps.data.map(getCharacter),
      });
    }
  }

  render() {

    if (this.props.loading) {
      return (
        <Loading isLoading={this.props.loading} />
      );
    }

    return (

      <article className="Characters">
        <header>
          <h1>Personagens</h1>
        </header>
        <div className="items">
          {this.state.characters.map(props => (<CharactersLink key={props.id} {...props}/>) )}
        </div>
      </article>
    );

  }
}

Characters.defaultProps = {
  data: {},
  loading: false
}

const order = [
  { value: 'name', description: 'Nome Ordem Crescente' },
  { value: '-name', description: 'Nome Ordem Descrescente' },
  { value: '-modified', description: 'Recentemente Alterados' },
  { value: 'modified', description: 'Antigamente Alterados' }
];

const FetchingCharacters = () => (
  <PaginationFetching endpoint="characters" ordering={order}>
    <Characters/>
  </PaginationFetching>
);

export default FetchingCharacters;
