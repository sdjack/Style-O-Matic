import React from "react";
import {
  CoreComponent,
  setCorePropDefaults,
  getValidProps,
  ROLE
} from "../../lib";
import "./Loading.css";

class Loading extends CoreComponent {
  static defaultProps = setCorePropDefaults({
    renderAs: "div",
    uirole: ROLE.LOADING
  });

  render() {
    const { children, props } = getValidProps(this.props);

    return (
      <div {...props}>
        <div className="loading-cube">
          <div className="cube cube1" />
          <div className="cube cube2" />
          <div className="cube cube3" />
          <div className="cube cube4" />
          <div className="cube cube5" />
          <div className="cube cube6" />
          <div className="cube cube7" />
          <div className="cube cube8" />
          <div className="cube cube9" />
        </div>
      </div>
    );
  }
}

export default Loading;
