/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import PropTypes from "prop-types";
import { uID } from "../_utilities/CoreUtils";
import "./Pagination.css";

class Pagination extends React.Component {
  static propTypes = {
    disabled: PropTypes.bool,
    config: PropTypes.shape({
      pageNum: PropTypes.number,
      pageTotal: PropTypes.number,
      onPageChange: PropTypes.func
    })
  };

  static defaultProps = {
    disabled: false,
    config: {
      pageNum: 0,
      pageTotal: 0
    }
  };

  handlePageClick = (e, pageRequest) => {
    e.preventDefault();
    const { pageNum, pageTotal, onPageChange } = this.props.config;
    if (typeof onPageChange !== "undefined") {
      if (pageRequest !== pageNum) {
        onPageChange(pageRequest);
      }
    }
  };

  handleForwardClick = e => {
    e.preventDefault();
    const { pageNum, pageTotal, onPageChange } = this.props.config;
    if (typeof onPageChange !== "undefined") {
      const currentPage = pageNum;
      const lastPage = pageTotal;
      if (currentPage + 1 <= lastPage) {
        onPageChange(currentPage + 1);
      }
    }
  };

  handleBackwardClick = e => {
    e.preventDefault();
    const { pageNum, pageTotal, onPageChange } = this.props.config;
    if (typeof onPageChange !== "undefined") {
      const currentPage = pageNum;
      if (currentPage - 1 > 0) {
        onPageChange(currentPage - 1);
      }
    }
  };

  handleFastForwardClick = e => {
    e.preventDefault();
    const { pageNum, pageTotal, onPageChange } = this.props.config;
    if (typeof onPageChange !== "undefined") {
      const currentPage = pageNum;
      const lastPage = pageTotal;
      if (currentPage !== lastPage) {
        onPageChange(lastPage);
      }
    }
  };

  handleFastBackwardClick = e => {
    e.preventDefault();
    const { pageNum, pageTotal, onPageChange } = this.props.config;
    if (typeof onPageChange !== "undefined") {
      const currentPage = pageNum;
      if (currentPage !== 1) {
        onPageChange(1);
      }
    }
  };

  renderCurrentPages = (pageNum, pageTotal) => {
    const output = [];
    const itemGUID = uID();
    const prevPage = pageNum === 1 ? 1 : pageNum - 1;
    const nextPage = pageNum === pageTotal ? pageTotal : pageNum + 1;
    if (pageNum === 1) {
      output.push(
        <li key={`pagination-page1_${itemGUID}`} className="theme-page_text">
          <a className="pagination-spacer-page">&nbsp;</a>
        </li>
      );
      output.push(
        <li key={`pagination-page2_${itemGUID}`} className="theme-page_text">
          <a
            href="#"
            className="pagination-current-page theme-button"
            onClick={e => this.handlePageClick(e, pageNum)}
          >
            {pageNum}
          </a>
        </li>
      );
      output.push(
        <li key={`pagination-page3_${itemGUID}`} className="theme-page_text">
          <a
            href="#"
            className="pagination-other-page theme-button"
            onClick={e => this.handlePageClick(e, nextPage)}
          >
            {nextPage}
          </a>
        </li>
      );
    } else if (pageNum === pageTotal) {
      output.push(
        <li key={`pagination-page1_${itemGUID}`} className="theme-page_text">
          <a
            href="#"
            className="pagination-other-page theme-button"
            onClick={e => this.handlePageClick(e, prevPage)}
          >
            {prevPage}
          </a>
        </li>
      );
      output.push(
        <li key={`pagination-page2_${itemGUID}`} className="theme-page_text">
          <a
            href="#"
            className="pagination-current-page theme-button"
            onClick={e => this.handlePageClick(e, pageNum)}
          >
            {pageNum}
          </a>
        </li>
      );
      output.push(
        <li key={`pagination-page3_${itemGUID}`} className="theme-page_text">
          <a className="pagination-spacer-page">&nbsp;</a>
        </li>
      );
    } else {
      output.push(
        <li key={`pagination-page1_${itemGUID}`} className="theme-page_text">
          <a
            href="#"
            className="pagination-other-page theme-button"
            onClick={e => this.handlePageClick(e, prevPage)}
          >
            {prevPage}
          </a>
        </li>
      );
      output.push(
        <li key={`pagination-page2_${itemGUID}`} className="theme-page_text">
          <a
            href="#"
            className="pagination-current-page theme-button"
            onClick={e => this.handlePageClick(e, pageNum)}
          >
            {pageNum}
          </a>
        </li>
      );
      output.push(
        <li key={`pagination-page3_${itemGUID}`} className="theme-page_text">
          <a
            href="#"
            className="pagination-other-page theme-button"
            onClick={e => this.handlePageClick(e, nextPage)}
          >
            {nextPage}
          </a>
        </li>
      );
    }
    return output;
  };

  render() {
    const { pageNum, pageTotal } = this.props.config;
    if (!this.props.disabled && pageTotal > 1) {
      const prevClass =
        pageNum < 2 ? " pagination-disabled" : " theme-page_text";
      const nextClass =
        pageNum >= pageTotal ? " pagination-disabled" : " theme-page_text";
      return (
        <div className="pagination-bar">
          <ul className="pagination theme-pagination">
            <li>
              <ul className="pagination pages">
                <li>
                  <a
                    href="#"
                    className={`pagination-step ${prevClass}`}
                    onClick={e => this.handleFastBackwardClick(e)}
                  >
                    <i className="fa fa-angle-double-left" aria-hidden="true" />
                  </a>
                </li>
                <li className={prevClass}>1</li>
              </ul>
            </li>
            <li>
              <a
                href="#"
                className={`pagination-step ${prevClass}`}
                onClick={e => this.handleBackwardClick(e)}
              >
                <i className="fa fa-angle-left" aria-hidden="true" />
              </a>
            </li>
            <li>
              <ul className="pagination pages">
                {this.renderCurrentPages(pageNum, pageTotal)}
              </ul>
            </li>
            <li>
              <a
                href="#"
                className={`pagination-step ${nextClass}`}
                onClick={e => this.handleForwardClick(e)}
              >
                <i className="fa fa-angle-right" aria-hidden="true" />
              </a>
            </li>
            <li>
              <ul className="pagination pages">
                <li className={nextClass}>{pageTotal}</li>
                <li>
                  <a
                    href="#"
                    className={`pagination-step ${nextClass}`}
                    onClick={e => this.handleFastForwardClick(e)}
                  >
                    <i
                      className="fa fa-angle-double-right"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      );
    }
    return <span />;
  }
}

export default Pagination;
