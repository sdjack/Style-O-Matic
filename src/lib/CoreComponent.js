/**
 * @memberof utilities
 * @namespace CoreComponent
 * @author Steven Jackson
 */
/* eslint-disable */
import React, { Component, cloneElement } from "react";
import _ from "lodash";
import { uID } from "./coreUtilities.js";
import { setCorePropTypes, setCorePropDefaults, getValidProps } from "./propUtilities.js";
import { ROLE, getParentClass, getChildClass } from "./ROLE.js";
import EventManager from "./EventManager.js";
import UIGlobals from "./UIGlobals.js";
import LoadingStateless from "../components/Loading/LoadingStateless.js";
/* eslint-enable */
/* eslint "react/prop-types": [0] */

export default class CoreComponent extends Component {
  static propTypes = setCorePropTypes();

  static defaultProps = setCorePropDefaults();

  constructor(props, ...args) {
    super(props, ...args);
    this.GUID = props.uuid;
    const state = this.state || {};
    this.state = { ...state };
    this.node = null;
    this.useParentNode = false;
    this.debugging = false;
    this.parentNode = { clientWidth: 1, clientHeight: 1 };
  }

  componentWillMount() {
    EventManager.registerComponent(this);
    if (this.props.observe) {
      EventManager.registerObserver(this, this.props.observe);
    }
    if (this.props.dispatch) {
      EventManager.registerDispatcher(this, this.props.dispatch);
    }
    if (this.WillMount) {
      this.WillMount();
    }
  }

  componentDidMount() {
    const srcState = this.state;
    const newState = srcState || {};
    if (this.props.persistentId) {
      if (srcState && !_.isEmpty(srcState)) {
        const storage = UIGlobals.readSetting(this.props.persistentId);
        if (storage) {
          const savedState = JSON.parse(storage);
          _.forIn(srcState, (value, key) => {
            if (savedState && typeof savedState[key] !== "undefined") {
              newState[key] = savedState[key];
            } else {
              newState[key] = value;
            }
          });
        }
      }
    }
    /* eslint-disable */
    this.setState(newState);
    /* eslint-enable */
  }

  componentWillUnmount() {
    EventManager.unregisterComponent(this);
    if (this.props.observe) {
      EventManager.unregisterObserver(this, this.props.observe);
    }
    if (this.props.dispatch) {
      EventManager.unregisterDispatcher(this, this.props.dispatch);
    }
    if (this.WillUnmount) {
      this.WillUnmount();
    }
  }

  onSetRef = ref => {
    if (ref) {
      const needsUpdate = this.node === null;
      this.node = ref;
      this.parentNode = ref.parentNode;
      if (needsUpdate) {
        if (this.setRefCallback) {
          this.setRefCallback(ref);
        } else if (this.useParentNode) {
          this.forceUpdate();
        }
      }
    }
  };

  onEventDispatch = (...args) => {
    if (this.props.onDispatch) {
      this.props.onDispatch(...args);
    }
  };

  setPersistentState = newState => {
    if (this.props.persistentId) {
      UIGlobals.applySetting(this.props.persistentId, JSON.stringify(newState));
    }
    this.setState(newState);
  };

  setChildProps = (role, ref, props) => {
    const parentClass = getParentClass(this.props);
    const childClass = getChildClass(parentClass, role);
    return {
      ...props,
      ref,
      parentclass: parentClass,
      uiclass: childClass
    };
  };

  chainFunction = (...funcs) =>
    funcs
      .filter(f => f !== null)
      .reduce((acc, f) => {
        if (f && typeof f !== "function") {
          throw new Error(
            "Invalid Argument Type, must only provide functions, undefined, or null."
          );
        }

        if (!acc) {
          return f;
        }

        return function chainedFunction(...args) {
          acc.apply(this, args);
          f.apply(this, args);
        };
      }, null);

  childPrefix = variant =>
    getParentClass(this.props) + (variant ? `-${variant}` : "");

  renderChild = (child, props) => {
    if (child.props) {
      const role = child.props.uirole || ROLE.CONTENT;
      let ref = c => {
        this[role] = c;
      };
      if (typeof child.ref === "string") {
        throw new Error("Child components cannot set ref to string.");
      } else {
        ref = this.chainFunction(child.ref, ref);
      }
      return cloneElement(child, this.setChildProps(role, ref, props));
    }
    return child;
  };

  renderOrphan = (child, props) => {
    if (child.props) {
      const role = child.props.uirole || ROLE.CONTENT;
      let ref = c => {
        this[role] = c;
      };
      if (typeof child.ref === "string") {
        throw new Error("Child components cannot set ref to string.");
      } else {
        ref = this.chainFunction(child.ref, ref);
      }
      return cloneElement(child, {
        ...props,
        ref,
        parentclass: role,
        uiclass: role
      });
    }
    return child;
  };

  renderCore = () => {
    const { renderAs: ElementType, children, props } = getValidProps(
      this.props
    );
    return <ElementType {...props}>{children}</ElementType>;
  };

  render() {
    const { uuid, loader } = this.props;
    const rendered = [this.renderCore()];
    if (loader) {
      rendered.push(
        <LoadingStateless key={`loading-${uuid}`} scene={loader} />
      );
    }
    return rendered;
  }
}
