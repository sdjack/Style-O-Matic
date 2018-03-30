/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */

/* eslint "react/prop-types": [0] */

import React from "react";
import PropTypes from "prop-types";
import { uID } from "../_utilities/CoreUtils";

class SelectBoxItem extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
    callback: PropTypes.func.isRequired
  };

  handleOnClick = e => {
    e.stopPropagation();
    e.preventDefault();
    const { callback, data } = this.props;
    document.dispatchEvent(new MouseEvent("mousedown"));
    callback(data);
  };

  render() {
    const { name, data, callback, ...props } = this.props;
    return (
      <button
        key={`selectbox-item_${uID()}`}
        {...props}
        onClick={this.handleOnClick}
      >
        {name}
      </button>
    );
  }
}

export default SelectBoxItem;
