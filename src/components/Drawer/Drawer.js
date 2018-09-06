import React from "react";
import _ from "lodash";
import classNames from "classnames";
import {
  CoreComponent,
  getCorePropTypes,
  getCorePropDefaults,
  getValidProps,
  UIGlobals,
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
    this.useParentNode = true;
    this.state = {
      attachment: props.attach
    };
  }

  componentDidMount() {
    this.ensureAttachment();
  }

  ensureAttachment = () => {
    if (this.node) {
      const { attachment } = this.state;
      const {
        width,
        height,
        top,
        left,
        bottom,
        right
      } = this.node.getBoundingClientRect();
      const {
        height: screenHeight,
        width: screenWidth
      } = UIGlobals.getScreenDimensions();
      let newAttach = attachment;
      if (height > screenHeight / 2) {
        newAttach = left > screenWidth / 2 ? "right" : "left";
      } else {
        newAttach = top > screenHeight / 2 ? "bottom" : "top";
      }
      if (newAttach !== attachment) {
        this.setState({ attachment: newAttach });
      }
    }
  };

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
    this.ensureAttachment();
    const { attachment } = this.state;

    const classes = {
      [`ui-drawer-${attachment}`]: attachment,
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
      <Component
        {...props}
        className={classNames("ui-drawer", classes)}
        ref={this.onSetRef}
      >
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
