"use strict";

exports.__esModule = true;

var _class, _temp; /**
                    * @memberof components
                    * @todo Write sub-component documentation
                    * @author Steven Jackson
                    */


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _lib = require("../../lib");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ToolBarTitle = (_temp = _class = function (_CoreComponent) {
  _inherits(ToolBarTitle, _CoreComponent);

  function ToolBarTitle() {
    _classCallCheck(this, ToolBarTitle);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, _CoreComponent.call.apply(_CoreComponent, [this].concat(args)));

    _this.onEventDispatch = function (eventName, eventData, eventSenders) {
      if (eventName === "scroll" && _this.node) {
        var _this$props = _this.props,
            text = _this$props.text,
            children = _this$props.children;

        var currentTitle = text || children;
        var newTitle = "";
        for (var i = 0; i < eventSenders.length; i += 1) {
          var sender = eventSenders[i];
          if (sender) {
            var scrollTop = _this.node.offsetParent.scrollTop;
            var _this$node = _this.node,
                offsetTop = _this$node.offsetTop,
                clientHeight = _this$node.clientHeight;

            var targetOffset = offsetTop + clientHeight;
            var pageOffset = scrollTop + 70;
            var titleText = sender.props.children;
            if (scrollTop > 0 && targetOffset < pageOffset) {
              newTitle = titleText;
            }
          }
        }
        if (currentTitle !== newTitle) {
          _this.setState({ dynamicText: newTitle });
        }
      }
    };

    _this.state = {
      dynamicText: null
    };
    return _this;
  }

  ToolBarTitle.prototype.render = function render() {
    var _getValidProps = (0, _lib.getValidProps)(this.props),
        text = _getValidProps.text,
        children = _getValidProps.children,
        props = _getValidProps.props;

    var dynamicText = this.state.dynamicText;


    var ElementType = (0, _lib.getElementType)(ToolBarTitle, this.props);
    var titleText = dynamicText || text || children;

    return _react2.default.createElement(
      ElementType,
      props,
      titleText
    );
  };

  return ToolBarTitle;
}(_lib.CoreComponent), _class.defaultProps = (0, _lib.setCorePropDefaults)({
  renderAs: "div",
  uirole: _lib.ROLE.TITLE,
  text: ""
}), _temp);
exports.default = ToolBarTitle;
module.exports = exports["default"];