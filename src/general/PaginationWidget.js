import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  getPages,
  filterPages } from "./paginationMapping";

import './PaginationWidget.scss';


const PageButton = ({number, onClick, selected}) => (
  <span
    onClick={onClick}
    name={number}
    className={`page-button ${number === selected ? 'selected' : ''}`} >
    {number}
  </span>
)

class PaginationWidget extends Component {

  constructor(props) {
    super(props);

    this.state = {
      page: 1,
      orderBy: props.ordering[0].value,
      limit: props.limiting[0].value
     };

    this.onClickButton = this.onClickButton.bind(this);
  }

  onClickButton (numberPage) {

    this.setState({ page: numberPage });

    if (this.props.onChangePage) {
      this.props.onChangePage(numberPage);
    }
  }

  onClickFirst() {
    this.onClickButton(1);
  }

  onClickLast() {
    const pages = getPages(this.props.totalData, this.props.dataPerPage);

    this.onClickButton(pages[pages.length - 1]);
  }

  onChangeOrder(e) {
    this.setState({ orderBy: e.target.value });
    this.props.onChangeOrder(e.target.value);
  }

  onChangeLimit(e) {
    this.setState({ limit: e.target.value });
    this.props.onChangeLimit(e.target.value);
  }

  render() {

    const pages =
      filterPages(getPages(this.props.totalData, this.props.dataPerPage),this.state.page);

    if (!this.props.show) {
      return '';
    }

    return (
      <div className="PaginationWidget">
        <div className="ordering">
          <select type="select" className="dropdown"
            onChange={this.onChangeOrder.bind(this)}
            value={this.state.orderBy}>
            {this.props.ordering.map((x, i) =>
              (<option key={i} value={x.value}>{x.description}</option>))}
          </select>

          <select type="select" className="dropdown"
            onChange={this.onChangeLimit.bind(this)}
            value={this.state.limit}>
            {this.props.limiting.map((x,i) =>
              (<option key={i} value={x.value}>{x.description}</option>))}
          </select>
        </div>
        <div className="pages">
          <span className="button-first-last" onClick={this.onClickFirst.bind(this)}>Primeira</span>
          {
            pages.map(page => (
              <PageButton
                key={page}
                number={page}
                onClick={() => this.onClickButton(page)}
                selected={this.state.page} />
            ))
          }

          <span className="button-first-last" onClick={this.onClickLast.bind(this)}>Última</span>
        </div>
        <span className="page-description">

        </span>
      </div>
    )
  }
}

PaginationWidget.defaultProps = {
  show: true
}

PaginationWidget.propTypes = {
  show: PropTypes.bool,
  totalData: PropTypes.number.isRequired,
  dataPerPage: PropTypes.number.isRequired,
  offsetPage: PropTypes.number,
  ordering: PropTypes.array.isRequired,
  limiting: PropTypes.array.isRequired,
  onChangePage: PropTypes.func,
  onChangeOrder: PropTypes.func,
  onChangeLimit: PropTypes.func
};

export default PaginationWidget;
