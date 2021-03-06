/**
 * @memberof components
 * @namespace Grid
 * @author Steven Jackson
* @scss ../../scss/components/Grid
 * @example <Grid>
             Example Content
           </Grid>
 */
import React from "react";
import {
  CoreComponent,
  getValidProps,
  setCorePropDefaults,
  ROLE
} from "../../lib";
import GridRow from "./GridRow.js";
import GridColumn from "./GridColumn.js";
import "./Grid.css";

class Grid extends CoreComponent {
  static defaultProps = setCorePropDefaults({
    renderAs: "div",
    uirole: ROLE.GRID
  });

  static Row = GridRow;
  static Column = GridColumn;

  renderCore = () => {
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
              case ROLE.ROW:
                return this.renderChild(child, inherited);
              default:
                return child;
            }
          }
          return child;
        })}
      </Component>
    );
  };
}

export default Grid;
