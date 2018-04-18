/* ========================================================================
 * Style-O-Matic UI
 *
 * @author: Steven Jackson
 * ======================================================================== */
/* eslint "react/prop-types": [0] */

import { Component, cloneElement } from "react";
import { uID } from "./coreUtilities.js";
import { getCorePropTypes, getCorePropDefaults } from "./propUtilities.js";
import { ROLE, getInheritedClass } from "./ROLE.js";
import UI from "./UI.js";

const getChildClass = (uiclass, role) =>
  (uiclass ? `${uiclass}-` : "") + (role ? `${role}` : "");

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
    if (this.props.observe) {
      UI.registerObserver(this, this.props.observe);
    }
    if (this.props.dispatch) {
      UI.registerDispatcher(this, this.props.dispatch);
    }
    if (this.WillMount) {
      this.WillMount();
    }
  }

  componentWillUnmount() {
    if (this.props.observe) {
      UI.unregisterObserver(this, this.props.observe);
    }
    if (this.props.dispatch) {
      UI.unregisterDispatcher(this, this.props.dispatch);
    }
    if (this.WillUnmount) {
      this.WillUnmount();
    }
  }

  onSetRef = ref => {
    this.uiRef = ref;
  };

  onEventDispatch = (eventName, eventData, eventSenders) => {
    // console.log(`${eventName} - ${eventData}`);
    // console.log(eventSenders);
  };

  childPrefix = variant =>
    getInheritedClass(this.props) + (variant ? `-${variant}` : "");

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

  setChildProps = (role, ref, props) => {
    const parentClass = getInheritedClass(this.props);
    const childClass = getChildClass(parentClass, role);
    return {
      ...props,
      ref,
      parentclass: parentClass,
      uiclass: childClass
    };
  };

  renderChild = (child, props) => {
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
  };
}
