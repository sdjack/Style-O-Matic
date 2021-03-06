"use strict";

exports.__esModule = true;

var _class, _temp; /**
                    * @memberof components
                    * @namespace Modal
                    * @author Steven Jackson
                   * @scss ../../scss/components/Modal
                    * @example <Modal>
                                Example Content
                              </Modal>
                    */


var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _lib = require("../../lib");

require("./Modal.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = (_temp = _class = function (_CoreComponent) {
  _inherits(Modal, _CoreComponent);

  function Modal(props, context) {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, _CoreComponent.call(this, props, context));

    _this.handleOpen = function () {
      _this.setState({ shown: true });
    };

    _this.handleClose = function () {
      _this.setState({ shown: false });
    };

    _this.handleToggle = function () {
      _this.setState({ shown: !_this.state.shown });
    };

    _this.handleClickShield = function (e) {
      e.preventDefault();
      e.stopPropagation();
    };

    _this.useParentNode = true;
    _this.elevatedContainer = null;
    _this.state = {
      shown: false
    };
    return _this;
  }

  Modal.prototype.componentDidMount = function componentDidMount() {
    if (!this.elevatedContainer) {
      this.elevatedContainer = document.getElementById("modal-container");
      if (!this.elevatedContainer) {
        this.elevatedContainer = document.createElement("div");
        this.elevatedContainer.setAttribute("id", "modal-container");
        document.body.appendChild(this.elevatedContainer);
      }
    }
  };

  Modal.prototype.componentDidUpdate = function componentDidUpdate() {
    this.renderElevated(this.props);
  };

  Modal.prototype.renderElevated = function renderElevated(activeProps) {
    var _getValidProps = (0, _lib.getValidProps)(activeProps, this.state),
        Component = _getValidProps.renderAs,
        className = _getValidProps.className,
        children = _getValidProps.children,
        props = _getValidProps.props,
        inherited = _getValidProps.inherited;

    if (this.elevatedContainer) {
      _reactDom2.default.render(_react2.default.createElement(
        Component,
        props,
        _react2.default.createElement(
          "div",
          {
            className: "ui-modal-outer-wrapper",
            role: "presentation",
            onClick: this.handleClose
          },
          _react2.default.createElement(
            "div",
            {
              className: "ui-modal-inner-wrapper",
              role: "presentation",
              onClick: this.handleClickShield
            },
            _react2.default.createElement(
              "div",
              {
                className: "ui-modal-dialog",
                role: "presentation",
                onClick: this.handleClickShield
              },
              _react2.default.createElement(
                "div",
                {
                  className: "ui-modal-close",
                  role: "presentation",
                  onClick: this.handleClose
                },
                _react2.default.createElement("i", { className: "ui-icon ui-icon-close", "aria-hidden": "true" })
              ),
              children
            )
          )
        )
      ), this.elevatedContainer);
    }
  };

  Modal.prototype.render = function render() {
    this.parentNode.onclick = this.handleToggle;
    return _react2.default.createElement("span", { ref: this.onSetRef });
  };

  return Modal;
}(_lib.CoreComponent), _class.defaultProps = (0, _lib.setCorePropDefaults)({
  renderAs: "div",
  uirole: _lib.ROLE.MODAL
}), _temp);
exports.default = Modal;
module.exports = exports["default"];