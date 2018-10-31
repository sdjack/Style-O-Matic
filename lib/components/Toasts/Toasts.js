"use strict";

exports.__esModule = true;

var _class, _temp; /**
                    * @memberof components
                    * @namespace Toasts
                    * @author Steven Jackson
                   * @scss ../../scss/components/Toasts
                    * @example <Toasts>
                                Example Content
                              </Toasts>
                    */


var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _lib = require("../../lib");

var _ToastMessage = require("./ToastMessage.js");

var _ToastMessage2 = _interopRequireDefault(_ToastMessage);

require("./Toasts.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Toasts = (_temp = _class = function (_CoreComponent) {
  _inherits(Toasts, _CoreComponent);

  function Toasts(props) {
    _classCallCheck(this, Toasts);

    var _this = _possibleConstructorReturn(this, _CoreComponent.call(this, props));

    _this.handleClose = function (index) {
      var activeItems = _this.state.activeQueue;
      activeItems[index] = false;
      _this.setState({ activeQueue: activeItems });
    };

    _this.renderToasts = function () {
      var self = _this;
      var output = [];
      var delay = self.state.timeout;
      var items = self.state.queue;
      var activeItems = self.state.activeQueue;
      if (items.length > 0) {
        var _loop = function _loop(i) {
          var key = "toast-message_" + i;
          var msg = items[i].split("|");
          output.push(_react2.default.createElement(
            _ToastMessage2.default,
            {
              key: key,
              color: msg[1].toLowerCase(),
              active: !!activeItems[i],
              onClick: function onClick() {
                return self.handleClose(i);
              }
            },
            msg[0]
          ));
        };

        for (var i = 0; i < items.length; i += 1) {
          _loop(i);
        }
        if (self.removalTimer) {
          clearTimeout(self.removalTimer);
        }
        if (activeItems.length > 0) {
          self.removalTimer = setTimeout(function () {
            var garbage = self.state.activeQueue || [];
            garbage.pop();
            self.setState({ activeQueue: garbage });
          }, delay);
        } else {
          self.removalTimer = setTimeout(function () {
            self.setState({ queue: [], activeQueue: [] });
          }, delay);
        }
      }
      return output;
    };

    _this.state = {
      timeout: 5000,
      queue: [],
      activeQueue: []
    };
    return _this;
  }

  Toasts.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.messages && nextProps.messages.length !== this.state.queue.length) {
      if (this.removalTimer) {
        clearTimeout(this.removalTimer);
      }
      this.setState({
        active: true,
        timeout: nextProps.timeout,
        queue: _lodash2.default.cloneDeep(nextProps.messages),
        activeQueue: _lodash2.default.cloneDeep(nextProps.messages)
      });
    }
  };

  Toasts.prototype.render = function render() {
    var _getValidProps = (0, _lib.getValidProps)(this.props),
        Component = _getValidProps.renderAs,
        props = _getValidProps.props;

    return _react2.default.createElement(
      Component,
      props,
      this.renderToasts()
    );
  };

  return Toasts;
}(_lib.CoreComponent), _class.propTypes = (0, _lib.setCorePropTypes)({
  messages: "array",
  timeout: "number"
}), _class.defaultProps = (0, _lib.setCorePropDefaults)({
  renderAs: "div",
  uirole: _lib.ROLE.TOASTS,
  messages: [],
  timeout: 5000
}), _class.Message = _ToastMessage2.default, _temp);
exports.default = Toasts;
module.exports = exports["default"];