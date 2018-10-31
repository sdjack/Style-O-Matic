"use strict";

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp; /**
                    * @memberof Accordion
                    * @todo Write sub-component documentation
                    * @author Steven Jackson
                    */


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _lib = require("../../lib");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * [AccordionContent description]
 * @extends CoreComponent
 */
var AccordionContent = (_temp = _class = function (_CoreComponent) {
  _inherits(AccordionContent, _CoreComponent);

  function AccordionContent() {
    _classCallCheck(this, AccordionContent);

    return _possibleConstructorReturn(this, _CoreComponent.apply(this, arguments));
  }

  AccordionContent.prototype.render = function render() {
    var _getValidProps = (0, _lib.getValidProps)(this.props),
        Component = _getValidProps.renderAs,
        accordionindex = _getValidProps.accordionindex,
        children = _getValidProps.children,
        props = _getValidProps.props;

    return _react2.default.createElement(
      Component,
      _extends({}, props, { accordionindex: accordionindex }),
      children
    );
  };

  return AccordionContent;
}(_lib.CoreComponent), _class.propTypes = (0, _lib.setCorePropTypes)({ accordionindex: "string" }), _class.defaultProps = (0, _lib.setCorePropDefaults)({
  renderAs: "dd",
  uirole: _lib.ROLE.CONTENT
}), _temp);
exports.default = AccordionContent;
module.exports = exports["default"];