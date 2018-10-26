/**
 * @memberof components
 * @todo Write sub-component documentation
 * @author Steven Jackson
 */
import React from "react";
import "./Loading.css";

const LoadingStateless = ({ scene }) => {
  const wrapperClass = `ui-loading-${scene}`;
  const actorClass = `ui-loading-${scene}-actor`;
  const leftClass = `ui-loading-${scene}-left`;
  const rightClass = `ui-loading-${scene}-right`;
  const centerClass = `ui-loading-${scene}-center`;
  return (
    <div className="ui-loading ui-overlay active">
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
};

export default LoadingStateless;
