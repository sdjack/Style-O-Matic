import React from "react";
import {
  CoreComponent,
  getCorePropDefaults,
  getPropTypesA11y,
  getValidProps,
  ROLE
} from "../../lib";
import "./Pagination.css";

class Pagination extends CoreComponent {
  static propTypes = getPropTypesA11y({
    pageNum: "number",
    pageTotal: "number",
    onPageChange: "func"
  });

  static defaultProps = getCorePropDefaults({
    renderAs: "div",
    uirole: ROLE.PAGINATION,
    id: "pagination_id",
    pageNum: 1,
    pageTotal: 1,
    onPageChange: null
  });

  constructor(props) {
    super(props);
    this.state = {
      currentPage: props.pageNum || 1
    };
  }

  handlePageClick = (e, pageRequest) => {
    e.preventDefault();
    const { currentPage } = this.state;
    const { onPageChange } = this.props;
    if (pageRequest !== -1 && pageRequest !== currentPage) {
      if (onPageChange) {
        onPageChange(pageRequest);
      }
    }
    this.setState({ currentPage: pageRequest });
  };

  handleForwardClick = e => {
    e.preventDefault();
    const { currentPage } = this.state;
    const { pageTotal, onPageChange } = this.props;
    if (currentPage + 1 <= pageTotal) {
      if (onPageChange) {
        onPageChange(currentPage + 1);
      }
      this.setState({ currentPage: currentPage + 1 });
    }
  };

  handleBackwardClick = e => {
    e.preventDefault();
    const { currentPage } = this.state;
    const { onPageChange } = this.props;
    if (currentPage - 1 > 0) {
      if (onPageChange) {
        onPageChange(currentPage - 1);
      }
      this.setState({ currentPage: currentPage - 1 });
    }
  };

  handleFastForwardClick = e => {
    e.preventDefault();
    const { currentPage } = this.state;
    const { pageTotal, onPageChange } = this.props;
    if (currentPage !== pageTotal) {
      if (onPageChange) {
        onPageChange(pageTotal);
      }
      this.setState({ currentPage: pageTotal });
    }
  };

  handleFastBackwardClick = e => {
    e.preventDefault();
    const { currentPage } = this.state;
    const { onPageChange } = this.props;
    if (currentPage !== 1) {
      if (onPageChange) {
        onPageChange(1);
      }
      this.setState({ currentPage: 1 });
    }
  };

  render() {
    const {
      renderAs: Component,
      coreClassName,
      styleClassName,
      pageTotal
    } = getValidProps(this.props);

    const { currentPage } = this.state;

    const prevPage = currentPage > 1 ? currentPage - 1 : 1;
    const nextPage = currentPage < pageTotal ? currentPage + 1 : pageTotal;

    const buttonClass = `ui-pagination-button ${styleClassName}`;
    const prevClass = currentPage < 2 ? `${buttonClass} disabled` : buttonClass;
    const nextClass =
      currentPage >= pageTotal ? `${buttonClass} disabled` : buttonClass;
    const prevPageClass =
      prevPage === -1 ? `${buttonClass} disabled` : buttonClass;
    const nextPageClass =
      nextPage === -1 ? `${buttonClass} disabled` : buttonClass;

    return (
      <Component className={coreClassName}>
        <button
          className={prevClass}
          onClick={e => this.handleFastBackwardClick(e)}
        >
          <div className={`ui-pagination-control ${prevClass}`}>
            <span className="ui-pagination-icon" aria-hidden="true">
              &#9198;&nbsp;
            </span>
            <span className="ui-pagination-num">1</span>
          </div>
        </button>
        <button
          className={prevClass}
          onClick={e => this.handleBackwardClick(e)}
        >
          <div className={`ui-pagination-control ${prevClass}`}>
            <span className="ui-pagination-icon" aria-hidden="true">
              &#9204;
            </span>
            <span className="ui-pagination-num">{prevPage}</span>
          </div>
        </button>
        <button
          className={prevClass}
          onClick={e => this.handlePageClick(e, prevPage)}
        >
          <div className="ui-pagination-page">{prevPage}</div>
        </button>
        <button
          className={buttonClass}
          onClick={e => this.handlePageClick(e, currentPage)}
        >
          <div className="ui-pagination-page active">{currentPage}</div>
        </button>
        <button
          className={nextClass}
          onClick={e => this.handlePageClick(e, nextPage)}
        >
          <div className="ui-pagination-page">{nextPage}</div>
        </button>
        <button className={nextClass} onClick={e => this.handleForwardClick(e)}>
          <div className={`ui-pagination-control ${nextClass}`}>
            <span className="ui-pagination-num">{nextPage}</span>
            <span className="ui-pagination-icon" aria-hidden="true">
              &#9205;
            </span>
          </div>
        </button>
        <button
          className={nextClass}
          onClick={e => this.handleFastForwardClick(e)}
        >
          <div className={`ui-pagination-control ${nextClass}`}>
            <span className="ui-pagination-num">{pageTotal}</span>
            <span className="ui-pagination-icon" aria-hidden="true">
              &nbsp;&#9197;
            </span>
          </div>
        </button>
      </Component>
    );
  }
}

export default Pagination;
