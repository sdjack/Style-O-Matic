"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp, _initialiseProps; /**
                                      * @memberof components
                                      * @namespace Accordion
                                      * @author Steven Jackson
                                      * @scss ../../scss/components/Accordion
                                      * @example <Accordion>
                                        <Accordion.Title>
                                          Example Title
                                        </Accordion.Title>
                                        <Accordion.Content>
                                          Example Content
                                        </Accordion.Content>
                                      </Accordion>
                                      */


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _lib = require("../../lib");

var _AccordionTitle = require("./AccordionTitle.js");

var _AccordionTitle2 = _interopRequireDefault(_AccordionTitle);

var _AccordionContent = require("./AccordionContent.js");

var _AccordionContent2 = _interopRequireDefault(_AccordionContent);

require("./Accordion.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Accordion = (_temp = _class = function (_CoreComponent) {
  _inherits(Accordion, _CoreComponent);

  function Accordion(props) {
    _classCallCheck(this, Accordion);

    var _this = _possibleConstructorReturn(this, _CoreComponent.call(this, props));

    _initialiseProps.call(_this);

    _this.maxIndex = -1;
    _this.state = {
      activeItem: props.id + "_item_0"
    };
    return _this;
  }

  return Accordion;
}(_lib.CoreComponent), _class.propTypes = (0, _lib.setCorePropTypes)({
  caret: "bool"
}), _class.defaultProps = (0, _lib.setPropDefaultsAutoId)({
  renderAs: "dl",
  uirole: _lib.ROLE.ACCORDION,
  caret: false
}), _class.Title = _AccordionTitle2.default, _class.Content = _AccordionContent2.default, _initialiseProps = function _initialiseProps() {
  var _this2 = this;

  this.getTitleIndex = function () {
    _this2.maxIndex = _this2.maxIndex + 1;
    return _this2.maxIndex;
  };

  this.getContentIndex = function () {
    return _this2.maxIndex;
  };

  this.handleOnClick = function (e) {
    e.preventDefault();
    e.stopPropagation();
    var accordionindex = e.currentTarget.attributes.accordionindex;

    var activeItem = accordionindex.value;
    if (activeItem === _this2.state.activeItem) {
      _this2.setState({ activeItem: "" });
    } else {
      _this2.setState({ activeItem: activeItem });
    }
  };

  this.renderChild = function (child, props, parentId, getIndex) {
    var role = child.props.uirole;
    var index = getIndex();
    var activeItem = parentId + "_item_" + index;
    var ref = function ref(c) {
      _this2[activeItem] = c;
    };
    if (typeof child.ref !== "string") {
      ref = _this2.chainFunction(child.ref, ref);
    }
    return (0, _react.cloneElement)(child, _this2.setChildProps(role, ref, _extends({}, props, {
      accordionindex: activeItem,
      active: activeItem === _this2.state.activeItem
    })));
  };

  this.renderCore = function () {
    var _getValidProps = (0, _lib.getValidProps)(_this2.props),
        Component = _getValidProps.renderAs,
        id = _getValidProps.id,
        caret = _getValidProps.caret,
        children = _getValidProps.children,
        props = _getValidProps.props,
        inherited = _getValidProps.inherited;

    _this2.maxIndex = -1;

    return _react2.default.createElement(
      Component,
      props,
      _react2.default.Children.map(children, function (child) {
        if (typeof child.props !== "undefined" && typeof child.props.uirole !== "undefined") {
          switch (child.props.uirole) {
            case _lib.ROLE.TITLE:
              return _this2.renderChild(child, _extends({}, inherited, {
                caret: caret,
                onClick: _this2.handleOnClick
              }), id, _this2.getTitleIndex);
            case _lib.ROLE.CONTENT:
              return _this2.renderChild(child, _extends({}, inherited, {
                caret: caret
              }), id, _this2.getContentIndex);
            default:
              return child;
          }
        }
        return child;
      })
    );
  };
}, _temp);
exports.default = Accordion;
module.exports = exports["default"];