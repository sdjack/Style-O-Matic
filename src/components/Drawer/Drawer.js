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

  constructor(props) {
    super(props);
    this.state = {
      drawerActive: false
    };
  }

  toggle = e => {
    if (!e.defaultPrevented) {
      e.preventDefault();
      const { drawerActive } = this.state;
      this.setPersistentState({ drawerActive: !drawerActive });
    }
  };

  render() {
    const {
      renderAs: Component,
      uiclass,
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

    const active = this.state.drawerActive;
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

    const toggle = [];
    if (minimizable) {
      toggle.push(
        <div key={`drawer_toggle_${uuid}`} className="ui-drawer-toggle">
          <button
            className={`ui-drawer-toggle-button ${icon}`}
            onClick={this.toggle}
          />
        </div>
      );
    }

    if (attach === "top" || attach === "right") {
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
          {toggle}
        </Component>
      );
    }

    return (
      <Component {...props} className={classNames("ui-drawer", classes)}>
        {toggle}
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
