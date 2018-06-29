import React from "react";
import classNames from "classnames";
import {
  CoreComponent,
  getCorePropTypes,
  getCorePropDefaults,
  getValidProps,
  ROLE
} from "../../lib";

class MainDrawer extends CoreComponent {
  static propTypes = getCorePropTypes({
    minimizable: "bool",
    defaultOpen: "bool",
    icon: "string"
  });

  static defaultProps = getCorePropDefaults({
    uirole: ROLE.DRAWER,
    minimizable: true,
    defaultOpen: false,
    icon: "fa fa-bars"
  });

  constructor(props) {
    super(props);
    this.state = {
      drawerActive: false
    };
  }

  onToggleHandler = e => {
    e.preventDefault();
    const { drawerActive } = this.state;
    this.setState({ drawerActive: !drawerActive });
  };

  render() {
    const {
      renderAs: Component,
      uiclass,
      icon,
      className,
      disabled,
      minimizable,
      children,
      props
    } = getValidProps(this.props);

    const active = this.state.drawerActive;
    const classes = {
      active,
      minimized: !active && minimizable
    };

    const toggle = [];
    if (minimizable) {
      toggle.push(
        <div key="main_drawer_toggle" className="ui-main-drawer-toggle">
          <button
            className={`ui-main-drawer-toggle-button ${icon}`}
            onClick={this.onToggleHandler}
          />
        </div>
      );
    }

    return (
      <Component {...props} className={classNames(className, classes)}>
        {toggle}
        {React.Children.map(children, child =>
          this.renderChild(child, {
            disabled,
            uiclass,
            active
          })
        )}
      </Component>
    );
  }
}

export default MainDrawer;
