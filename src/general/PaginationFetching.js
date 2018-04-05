import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MarvelFetching from './MarvelFetching';
import PaginationWidget from './PaginationWidget';

const limiting = [
  { value: 10, description: 'Mostrar 10 por página'},
  { value: 20, description: 'Mostrar 20 por página'},
  { value: 30, description: 'Mostrar 30 por página'}
]

class PaginationFetching extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: false,
      total: 0,
      offset: 0,
      limit: limiting[0].value,
      orderBy: props.ordering[0].value,
      page: 1
    };

  }

  onChangePage(page) {
    let offset;
    if (page === 1) {
      offset = 0;
    } else {
      offset = page * this.state.limit;
    }

    this.setState({ offset });
  }

  onChangeOrder(orderBy) {
    this.setState({ orderBy });
  }

  onChangeLimit(limit) {
    this.setState({ limit });
  }

  onChangeTotal(total) {
    this.setState({ total });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.orderBy !== this.state.orderBy) {
      return true;
    }

    if (nextState.limit !== this.state.limit) {
      return true;
    }

    if (nextState.offset !== this.state.offset) {
      return true;
    }

    if (nextState.total !== this.state.total) {
      return true;
    }

    if (nextProps.endpoint !== this.props.endpoint ) {
      return true;
    }

    if (nextProps.ordering !== this.props.ordering ) {
      return true;
    }

    return false;
  }

  render() {

    return (
      <div className="PaginationFetching">
        <MarvelFetching
          endpoint={this.props.endpoint}
          offset={this.state.offset}
          limit={this.state.limit}
          orderBy={this.state.orderBy}
          onChangeTotal={this.onChangeTotal.bind(this)}>
            {this.props.children}
        </MarvelFetching>

        <PaginationWidget
          totalData={this.state.total}
          offsetPage={this.state.offset}
          dataPerPage={this.state.limit}
          ordering={this.props.ordering}
          limiting={limiting}
          onChangePage={this.onChangePage.bind(this)}
          onChangeOrder={this.onChangeOrder.bind(this)}
          onChangeLimit={this.onChangeLimit.bind(this)}/>

      </div>
    );

  }
}

PaginationFetching.defaultProps = {

};

PaginationFetching.propTypes = {
  endpoint: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  ordering: PropTypes.array.isRequired
}

export default PaginationFetching;
