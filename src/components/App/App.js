/**
 * @namespace Style-O-Matic UI
 * @name App
 * @author Steven Jackson
 * @external scssdir
 * @see ../../scss/components/App
 * @example <App>
             Example Content
           </App>
 */
import React, { cloneElement } from "react";
import _ from "lodash";
import {
  CoreComponent,
  setCorePropDefaults,
  getValidProps,
  ROLE
} from "../../lib";
import "./App.css";

class App extends CoreComponent {
  static defaultProps = setCorePropDefaults({
    renderAs: "div",
    uirole: ROLE.APP
  });

  parseContainers = children => {
    const drawer = [];
    const header = [];
    const footer = [];
    const main = [];
    React.Children.map(children, child => {
      if (
        typeof child.props !== "undefined" &&
        typeof child.props.uirole !== "undefined"
      ) {
        switch (child.props.uirole) {
          case ROLE.DRAWER:
            drawer.push(child);
            return null;
          case ROLE.HEADER:
            header.push(child);
            return null;
          case ROLE.FOOTER:
            footer.push(child);
            return null;
          default:
            main.push(child);
            return null;
        }
      }
      return null;
    });
    let output = [];
    if (header.length > 0) {
      output = _.concat(output, header);
    }
    output.push(
      <div className="ui-app-container" key="app-drawer">
        {drawer}
        {main}
      </div>
    );
    if (footer.length > 0) {
      output = _.concat(output, footer);
    }
    return output;
  };

  render() {
    const { renderAs: Component, children, props } = getValidProps(this.props);
    const containers = this.parseContainers(children);

    return <Component {...props}>{containers}</Component>;
  }
}

export default App;
