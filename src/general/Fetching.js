import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Fetching extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], loading: false };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch(this.props.url)
      .then(response => response.json())
      .then(jsonResponse => this.setState({data: jsonResponse, loading: false}));

  }

  render() {

    const { children } = this.props;

    return React.Children.map(children,
      child => React.cloneElement(child, { data: this.state.data, loading: this.state.loading }));

  }
}

Fetching.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}

export default Fetching;
