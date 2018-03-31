import React, {Component} from 'react';

import { getCharacter } from './mappings';

import Fetching from '../general/Fetching';
import { marvelUrl } from '../general/marvelUrl';

class Characters extends Component {

  constructor(props) {
    super(props);
    this.state = {characters: [], status: '', data: [] }
  }

  componentWillReceiveProps(nextProps) {

    if (!nextProps.loading) {
      this.setState({
        characters: nextProps.data.data.results.map(getCharacter),
        status: nextProps.data.status,
        data: {
          count: nextProps.data.data.count,
          limit: nextProps.data.data.limit,
          offset: nextProps.data.data.offset,
          total: nextProps.data.data.total,
        }
      });
    }
  }

  render() {
    return (
      <article>
        <header>
          <h1>Personagens</h1>
        </header>
        <div>
          {this.state.characters.map(x => (<p>{x.name}</p>) )}
        </div>
        <p>{this.props.loading ? 'carregando...' : ''}</p>
      </article>
    );
  }
}

Characters.defaultProps = {
  data: {},
  loading: false
}

const FetchingCharacters = () => (
  <Fetching url={marvelUrl('characters')}>
    <Characters/>
  </Fetching>
);


export default FetchingCharacters;
