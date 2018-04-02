import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './PaginationWidget.scss';

export const getPages = (total, perPage) => {
  perPage = !!perPage ? perPage : 1;
  const numberPages = total/perPage;
  const pages = [];
  for (let i = 0; i < numberPages; i++) {
    pages.push(i + 1);
  }
  return pages;
};

export const filterPages = (pages, currentPage) => {

  if (pages.length < 10) {
    return pages;
  }

  const position = pages.findIndex(x => x === currentPage);
  let initial = position - 4 < 0 ? 0 : position - 4;
  let final = position + 5 > pages.length ? pages.length : position + 5;

  if (initial === 0 && final !== pages.length) {
    final = 9;
  }

  if (final === pages.length && initial !== 0) {
    initial = position - 9;
  }

  const array = [];
  for (let i = initial; i < final; i++) {
    array.push(pages[i]);
  }
  return array;
};

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

    this.state = { page: 1 };

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

  render() {

    const pages =
      filterPages(getPages(this.props.totalData, this.props.dataPerPage),this.state.page);

    if (!this.props.show) {
      return '';
    }

    return (
      <div className="PaginationWidget">
        <div>
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
  onChangePage: PropTypes.func
};

export default PaginationWidget;
