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

class NavFolder extends CoreComponent {
  static propTypes = setCorePropTypes({
    minimized: "bool"
  });

  static defaultProps = setCorePropDefaults({
    renderAs: "ul",
    uirole: ROLE.FOLDER,
    label: ""
  });

  constructor(props) {
    super(props);
    this.folder = null;
    this.state = {
      closed: props.closed
    };
  }

  toggleExpansion = e => {
    e.preventDefault();
    const newState = this.state;
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

    const { closed } = this.state;

    const classes = {
      "ui--closed": closed,
      active: to && path.indexOf(to) !== -1
    };

    const itemClass = closed ? "ui-nav-item" : "ui-nav-item ui--open";
    return (
      <li className={itemClass} ref={this.onSetRef}>
        <div
          className="ui-nav-caret"
          role="presentation"
          onKeyDown={this.toggleExpansion}
          onClick={this.toggleExpansion}
        >
          {label}
        </div>
        <Component {...props} className={classNames(coreClassName, classes)}>
          <h5 className="ui-nav-title">{label}</h5>
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
      </li>
    );
  }
}

export default NavFolder;
