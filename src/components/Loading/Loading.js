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
        <div className="ui-loading-container">
          <div className="ui-actor-stage">
            <div className="ui-actor left-sheep" />
            <div className="ui-actor helix">
              <div className="helix1" />
              <div className="helix2" />
              <div className="helix3" />
            </div>
            <div className="ui-actor right-sheep" />
          </div>
        </div>
      </div>
    );
  }
}

export default Loading;
