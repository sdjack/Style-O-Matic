import React from "react";
import {
  CoreComponent,
  setCorePropTypes,
  setCorePropDefaults,
  getValidProps,
  ROLE
} from "../../lib";
import "./Loading.css";

class Loading extends CoreComponent {
  static propTypes = setCorePropTypes({
    scene: "string"
  });

  static defaultProps = setCorePropDefaults({
    renderAs: "div",
    uirole: ROLE.LOADING,
    scene: "sheep"
  });

  render() {
    const { scene, children, props } = getValidProps(this.props);
    const wrapperClass = `ui-loading-${scene}`;
    const actorClass = `ui-loading-${scene}-actor`;
    const leftClass = `ui-loading-${scene}-left`;
    const rightClass = `ui-loading-${scene}-right`;
    const centerClass = `ui-loading-${scene}-center`;
    return (
      <div {...props}>
        <div className={`ui-loading-scene-wrapper ${wrapperClass}`}>
          <div className="ui-loading-scene">
            <div className={`${actorClass} ${leftClass}`} />
            <div className={`${actorClass} ${centerClass}`}>
              <div className={`${centerClass}1`} />
              <div className={`${centerClass}2`} />
              <div className={`${centerClass}3`} />
              <div className={`${centerClass}4`} />
              <div className={`${centerClass}5`} />
              <div className={`${centerClass}6`} />
              <div className={`${centerClass}7`} />
              <div className={`${centerClass}8`} />
              <div className={`${centerClass}9`} />
            </div>
            <div className={`${actorClass} ${rightClass}`} />
          </div>
        </div>
      </div>
    );
  }
}

export default Loading;
