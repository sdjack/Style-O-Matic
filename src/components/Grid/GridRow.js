/**
 * @memberof components
 * @todo Write sub-component documentation
 * @author Steven Jackson
 */
import React from "react";
import {
  CoreComponent,
  getValidProps,
  setCorePropDefaults,
  ROLE
} from "../../lib";

class GridRow extends CoreComponent {
  static defaultProps = setCorePropDefaults({
    uirole: ROLE.ROW
  });

  render() {
    const { renderAs: Component, children, props, inherited } = getValidProps(
      this.props
    );

    return (
      <Component {...props}>
        {React.Children.map(children, child => {
          if (
            typeof child.props !== "undefined" &&
            typeof child.props.uirole !== "undefined"
          ) {
            switch (child.props.uirole) {
              case ROLE.COLUMN:
                return this.renderChild(child, inherited);
              default:
                return child;
            }
          }
          return child;
        })}
      </Component>
    );
  }
}

export default GridRow;
