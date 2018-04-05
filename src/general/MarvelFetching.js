import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { marvelUrl } from './marvelUrl';

const fetchData = (props) => {

  const params = {};

  if (props.limit != undefined) {
    params.limit = props.limit;
  }

  if (props.offset != undefined) {
    params.offset = props.offset;
  }

  if (props.orderBy != undefined) {
    params.orderBy = props.orderBy;
  }

  const url = marvelUrl(props.endpoint, params);

  return fetch(url).then(response => response.json())
}

class MarvelFetching extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      total: 0,
      loading: false
    };

    this.onChangeTotal = this.onChangeTotal.bind(this);
  }

  onChangeTotal(total) {
    if (this.props.onChangeTotal) {
      this.props.onChangeTotal(total);
    }
  }

  componentDidMount() {

    if (this.props.endpoint) {
      this.setState({ loading: true });
      fetchData(this.props)
        .then(jsonResponse => {
          this.onChangeTotal(jsonResponse.data.total);
          this.setState({
            data: jsonResponse.data.results,
            total: jsonResponse.data.total,
            loading: false
          });
        });
    }

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.endpoint) {
      this.setState({ loading: true });
      fetchData(nextProps)
        .then(jsonResponse => {
          this.onChangeTotal(jsonResponse.data.total);
          this.setState({
            data: jsonResponse.data.results,
            total: jsonResponse.data.total,
            loading: false
          });
        });
    }
  }

  render() {

    const { children } = this.props;

    return React.Children.map(children,
      child => React.cloneElement(child, { data: this.state.data, loading: this.state.loading }));

  }
}

MarvelFetching.defaultProps = {
  limit: 20
};

MarvelFetching.propTypes = {
  endpoint: PropTypes.string,
  children: PropTypes.element.isRequired,
  limit: PropTypes.number,
  offset: PropTypes.number,
  orderBy: PropTypes.any
}

export default MarvelFetching;
