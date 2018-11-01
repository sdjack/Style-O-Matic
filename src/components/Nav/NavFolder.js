/**
 * @memberof components
 * @todo Write sub-component documentation
 * @author Steven Jackson
 */
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

function getStyleOffset(ref) {
  const {
    bottom: screenBottom,
    height: screenHeight,
    width: screenWidth
  } = UIGlobals.getScreenDimensions();
  const {
    x,
    y,
    height,
    bottom,
    width: folderWidth
  } = ref.getBoundingClientRect();
  const offset = {};
  if (y > screenHeight / 2) {
    let bottomOffset = y;
    bottomOffset += height * 2;
    bottomOffset -= bottom;
    offset.bottom = `${bottomOffset}px`;
  }
  if (x + folderWidth > screenWidth - 10) {
    offset.right = "10px";
  }
  return offset;
}

class NavFolder extends CoreComponent {
  static propTypes = setCorePropTypes({
    minimized: "bool"
  });

  static defaultProps = setCorePropDefaults({
    uirole: ROLE.FOLDER,
    label: ""
  });

  constructor(props) {
    super(props);
    this.folder = null;
    this.state = {
      closed: props.closed,
      offset: {}
    };
  }

  setRefCallback = ref => {
    if (ref) {
      const newState = this.state;
      newState.offset = getStyleOffset(ref);
      this.setState(newState);
    }
  };

  toggleExpansion = e => {
    e.preventDefault();
    const newState = this.state;
    if (newState.closed && this.node) {
      newState.offset = getStyleOffset(this.node);
    }
    newState.closed = !newState.closed;
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
      label,
      children,
      props,
      inherited
    } = getValidProps(this.props);

    const { offset, closed } = this.state;

    const classes = {
      "ui--closed": closed,
      active: to && path.indexOf(to) !== -1
    };

    const itemClass = closed ? "ui-nav-item" : "ui-nav-item ui--open";
    return (
      <div className={itemClass} ref={this.onSetRef}>
        <i className="ui-nav-caret" />
        <div
          className="ui-nav-content"
          role="presentation"
          onKeyDown={this.toggleExpansion}
          onClick={this.toggleExpansion}
        >
          {label}
        </div>
        <Component
          {...props}
          className={classNames(coreClassName, classes)}
          style={offset}
          ref={this.setFolderRef}
        >
          <div className="ui-nav-title">{label}</div>
          {React.Children.map(children, child => {
            if (
              typeof child.props !== "undefined" &&
              typeof child.props.uirole !== "undefined" &&
              child.props.uirole === ROLE.ITEM
            ) {
              return this.renderChild(child, {
                label,
                ...inherited
              });
            }
            return child;
          })}
        </Component>
      </div>
    );
  }
}

export default NavFolder;
