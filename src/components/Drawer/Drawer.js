import React from "react";
import _ from "lodash";
import classNames from "classnames";
import {
  CoreComponent,
  getCorePropTypes,
  getCorePropDefaults,
  getValidProps,
  ROLE
} from "../../lib";
import "./Drawer.css";

class Drawer extends CoreComponent {
  static propTypes = getCorePropTypes({
    minimizable: "bool",
    defaultOpen: "bool",
    icon: "string"
  });

  static defaultProps = getCorePropDefaults({
    uirole: ROLE.DRAWER,
    minimizable: true,
    defaultOpen: false,
    icon: "fa fa-bars",
    attach: "left"
  });

  render() {
    const {
      renderAs: Component,
      uiclass,
      active,
      color,
      colorStyle,
      uuid,
      attach,
      icon,
      disabled,
      minimizable,
      children,
      props
    } = getValidProps(this.props);

    const classes = {
      [`ui-drawer-${attach}`]: attach,
      active,
      minimized: !active && minimizable
    };
    if (!_.isNil(color)) {
      const nohover = String(color).indexOf("!") !== -1;
      const cleanColor = String(color).replace("!", "");
      let colorClass = `ui-${cleanColor}`;
      if (!_.isNil(colorStyle)) {
        colorClass += `-${colorStyle}`;
      }
      if (nohover) {
        colorClass += "-no-hover";
      }
      classes[colorClass] = true;
    }

    return (
      <Component {...props} className={classNames("ui-drawer", classes)}>
        <div className="ui-drawer-content">
          {React.Children.map(children, child => (
            <div className="ui-drawer-row">
              {this.renderChild(child, {
                disabled,
                uiclass,
                active
              })}
            </div>
          ))}
        </div>
      </Component>
    );
  }
}

export default Drawer;
