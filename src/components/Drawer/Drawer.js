import React from "react";
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
      this.setState({ drawerActive: !drawerActive });
    }
  };

  render() {
    const {
      renderAs: Component,
      uiclass,
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

    const toggle = [];
    if (minimizable) {
      toggle.push(
        <div key={`drawer_toggle_${this.GUID}`} className="ui-drawer-toggle">
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
