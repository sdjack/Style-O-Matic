"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Accordion = require("./Accordion");

var _Accordion2 = _interopRequireDefault(_Accordion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * [AccordionExample description]
 */
/**
 * @memberof Accordion
 * @todo Write sub-component documentation
 * @author Steven Jackson
 */
var AccordionExample = function AccordionExample() {
  return _react2.default.createElement(
    _Accordion2.default,
    null,
    _react2.default.createElement(
      _Accordion2.default.Title,
      null,
      "Example Title 1"
    ),
    _react2.default.createElement(
      _Accordion2.default.Content,
      null,
      "Example Content 1"
    ),
    _react2.default.createElement(
      _Accordion2.default.Title,
      null,
      "Example Title 2"
    ),
    _react2.default.createElement(
      _Accordion2.default.Content,
      null,
      "Example Content 2"
    ),
    _react2.default.createElement(
      _Accordion2.default.Title,
      null,
      "Example Title 3"
    ),
    _react2.default.createElement(
      _Accordion2.default.Content,
      null,
      "Example Content 3"
    ),
    _react2.default.createElement(
      _Accordion2.default.Title,
      null,
      "Example Title 4"
    ),
    _react2.default.createElement(
      _Accordion2.default.Content,
      null,
      "Example Content 4"
    )
  );
};

exports.default = AccordionExample;
module.exports = exports["default"];