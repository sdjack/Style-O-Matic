/**
 * @memberof components
 * @namespace Drawer
 * @author Steven Jackson
* @scss ../../scss/components/Drawer
 * @example <Drawer>
             Example Content
           </Drawer>
 */
import React from "react";
import _ from "lodash";
import classNames from "classnames";
import {
  CoreComponent,
  setCorePropTypes,
  setCorePropDefaults,
  getValidProps,
  UIGlobals,
  ROLE
} from "../../lib";
import "./Drawer.css";

class Drawer extends CoreComponent {
  static propTypes = setCorePropTypes({
    defaultOpen: "bool"
  });

  static defaultProps = setCorePropDefaults({
    uirole: ROLE.DRAWER,
    orientation: "horizontal",
    defaultOpen: true
  });

  constructor(props) {
    super(props);
    this.useParentNode = true;
    this.state = {
      orientation: props.orientation,
      active: props.defaultOpen
    };
  }

  componentDidMount() {
    this.ensureOrientation();
  }

  handleOnClick = () => {
    this.setState({ active: !this.state.active });
  };

  ensureOrientation = () => {
    if (this.node) {
      const { orientation } = this.state;
      const { width, height } = this.node.getBoundingClientRect();
      const {
        height: screenHeight,
        width: screenWidth
      } = UIGlobals.getScreenDimensions();
      let newOrientation = orientation;
      if (height > screenHeight / 2) {
        newOrientation = "vertical";
      } else {
        newOrientation = "horizontal";
      }
      if (newOrientation !== orientation) {
        this.setState({ orientation: newOrientation });
      }
    }
  };

  render() {
    const {
      renderAs: Component,
      uiclass,
      color,
      colorStyle,
      uuid,
      fixed,
      disabled,
      children,
      props
    } = getValidProps(this.props, this.state);
    // this.ensureOrientation();
    const { orientation, active } = this.state;
    return (
      <Component {...props} ref={this.onSetRef}>
        <div className="ui-drawer-content">
          {React.Children.map(children, child =>
            this.renderChild(child, {
              disabled,
              uiclass,
              orientation,
              active
            })
          )}
        </div>
      </Component>
    );
  }
}

export default Drawer;
