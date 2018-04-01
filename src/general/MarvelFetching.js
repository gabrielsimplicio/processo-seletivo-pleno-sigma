import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { marvelUrl } from './marvelUrl';
import PaginationWidget from './PaginationWidget';

class MarvelFetching extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      total: 0,
      loading: false,
      offset: 0,
      page: 1
    };

    this.fetchData = this.fetchData.bind(this);
  }

  onChangePage(page) {
    let offset;
    if (page === 1) {
      offset = 0;
    } else {
      offset = page * this.props.limit;
    }

    this.setState({ offset });
    this.fetchData(offset);
  }

  fetchData(offset) {
    this.setState({ loading: true });

    const url = marvelUrl(this.props.endpoint, {
      limit: this.props.limit,
      offset
    });

    fetch(url)
      .then(response => response.json())
      .then(jsonResponse => {
        this.setState({
          data: jsonResponse.data.results,
          total: jsonResponse.data.total,
          loading: false
        });
      });
  }

  componentDidMount() {

    if (this.props.endpoint) {
      this.fetchData(0);
    }

  }

  render() {

    const { children } = this.props;

    if (!this.props.pagination) {
      return React.Children.map(children,
        child => React.cloneElement(child, { data: this.state.data, loading: this.state.loading }));
    }

    return (
      <div className="MarvelFetching-container">

        {
          React.Children.map(children,
            child => React.cloneElement(child, { data: this.state.data, loading: this.state.loading }))
        }

        <PaginationWidget
          show={!this.state.loading}
          totalData={this.state.total}
          offsetPage={this.state.offset}
          dataPerPage={this.props.limit}
          onChangePage={this.onChangePage.bind(this)}/>

      </div>
    );

  }
}

MarvelFetching.defaultProps = {
  limit: 20
};

MarvelFetching.propTypes = {
  endpoint: PropTypes.string,
  children: PropTypes.element.isRequired,
  limit: PropTypes.number,
  pagination: PropTypes.bool
}

export default MarvelFetching;
