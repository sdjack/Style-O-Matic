/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */
/* eslint-disable */
import { Component, cloneElement } from "react";
import { uID } from "./coreUtilities.js";
import { getCorePropTypes, getCorePropDefaults } from "./propUtilities.js";
import { ROLE, getParentClass, getChildClass } from "./ROLE.js";
import EventManager from "./EventManager.js";
/* eslint-enable */
/* eslint "react/prop-types": [0] */

export default class CoreComponent extends Component {
  static propTypes = getCorePropTypes();

  static defaultProps = getCorePropDefaults();

  constructor(...args) {
    super(...args);
    this.GUID = uID();
    const state = this.state || {};
    this.state = { ...state };
    this.uiRef = null;
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
    this.uiRef = ref;
  };

  /* eslint-disable */
  onEventDispatch = (eventName, eventData, eventSenders) => {
    // console.log(`${eventName} - ${eventData}`);
    // console.log(eventSenders);
  };
  /* eslint-enable */

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
    funcs.filter(f => f != null).reduce((acc, f) => {
      if (typeof f !== "function") {
        throw new Error(
          "Invalid Argument Type, must only provide functions, undefined, or null."
        );
      }

      if (acc === null) {
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
}
