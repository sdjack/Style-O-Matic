import React, { cloneElement } from "react";
import classNames from "classnames";
import activeElement from "dom-helpers/activeElement";
import contains from "dom-helpers/query/contains";
import {
  CoreComponent,
  setCorePropDefaults,
  setCorePropTypes,
  getValidProps,
  UIGlobals,
  ROLE
} from "../../lib";

class NavFolder extends CoreComponent {
  static propTypes = setCorePropTypes({
    minimized: "bool"
  });

  static defaultProps = setCorePropDefaults({
    uirole: ROLE.FOLDER,
    text: ""
  });

  constructor(props) {
    super(props);
    this.folder = null;
    this.useParentNode = true;
    this.state = {
      open: false,
      offset: {}
    };
  }

  setFolderRef = ref => {
    if (ref) {
      const needsUpdate = this.folder === null;
      this.folder = ref;
      if (needsUpdate) {
        this.forceUpdate();
      }
    }
  };

  toggleExpansion = e => {
    e.preventDefault();
    const newState = this.state;
    if (!newState.open && this.node && this.folder) {
      const {
        bottom: screenBottom,
        height: screenHeight,
        width: screenWidth
      } = UIGlobals.getScreenDimensions();
      const { x, y, height, bottom } = this.node.getBoundingClientRect();
      const { width: folderWidth } = this.folder.getBoundingClientRect();
      const offset = {};
      if (y > screenHeight / 2) {
        let bottomOffset = 0;
        bottomOffset = height;
        bottomOffset += screenHeight;
        bottomOffset -= bottom;
        offset.bottom = `${bottomOffset}px`;
      }
      if (x + folderWidth > screenWidth - 10) {
        offset.right = "10px";
      }
      newState.offset = offset;
    }
    newState.open = !newState.open;
    this.setState(newState);
  };

  renderChild = (child, props) => {
    const role = child.props.uirole || ROLE.ITEM;
    let ref = c => {
      this[role] = c;
    };
    if (typeof child.ref !== "string") {
      ref = this.chainFunction(child.ref, ref);
    }
    return cloneElement(child, {
      ...props,
      ref,
      uirole: ROLE.FOLDERITEM,
      uiclass: this.childPrefix(role)
    });
  };

  render() {
    const {
      renderAs: Component,
      uiclass,
      coreClassName,
      iconClassName,
      to,
      path,
      text,
      visible,
      children,
      props,
      inherited
    } = getValidProps(this.props);

    const { offset, open } = this.state;

    const classes = {
      open,
      active: to && path.indexOf(to) !== -1
    };

    const caretClass = open ? "ui-icon-remove" : "ui-icon-add";
    const itemClass = visible ? "ui-nav-item visible" : "ui-nav-item";

    return (
      <div className={itemClass} ref={this.onSetRef}>
        <div
          className="ui-nav-item-link"
          role="presentation"
          onKeyDown={this.toggleExpansion}
          onClick={this.toggleExpansion}
        >
          <i className={`ui-nav-item-icon ${caretClass}`} />
          <span className="ui-nav-item-info">{text}</span>
        </div>
        <Component
          {...props}
          className={classNames(coreClassName, classes)}
          style={offset}
          ref={this.setFolderRef}
        >
          <div className="ui-nav-folder-title">{text}</div>
          {React.Children.map(children, child => {
            if (
              typeof child.props !== "undefined" &&
              typeof child.props.uirole !== "undefined" &&
              child.props.uirole === ROLE.ITEM
            ) {
              return this.renderChild(child, inherited);
            }
            return child;
          })}
        </Component>
      </div>
    );
  }
}

export default NavFolder;
