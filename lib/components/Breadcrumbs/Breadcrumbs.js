"use strict";

exports.__esModule = true;

var _class, _temp2; /**
                     * @memberof components
                     * @namespace Breadcrumbs
                     * @author Steven Jackson
                    * @scss ../../scss/components/Breadcrumbs
                     * @example <Breadcrumbs path="/demo/page1/page2/page3/page4" />
                     */


var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _lib = require("../../lib");

require("./Breadcrumbs.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Breadcrumbs = (_temp2 = _class = function (_CoreComponent) {
  _inherits(Breadcrumbs, _CoreComponent);

  function Breadcrumbs() {
    var _temp, _this, _ret;

    _classCallCheck(this, Breadcrumbs);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _CoreComponent.call.apply(_CoreComponent, [this].concat(args))), _this), _this.renderItem = function (target, name, index) {
      // console.log(target);
      if (typeof target === "string") {
        return _react2.default.createElement(
          "a",
          {
            className: "ui-breadcrumb",
            href: target,
            key: "breadcrumb-link_" + index
          },
          name
        );
      }
      return null;
    }, _this.renderItems = function (path) {
      var rows = [];
      if (!_lodash2.default.isNil(path)) {
        var pathnames = _this.props.pathnames;

        var crumbs = path.match(/(\/\w+)/g);
        if (crumbs && crumbs.length > 0) {
          var directPath = "";
          for (var i = 0; i < crumbs.length; i += 1) {
            var bc = crumbs[i];
            var label = !_lodash2.default.isNil(pathnames[bc]) ? pathnames[bc] : bc.replace(/\W/g, " ");
            if (i > 0) {
              rows.push(_react2.default.createElement(
                "span",
                {
                  key: "breadcrumb-divider_" + _this.props.uuid + "_" + i,
                  className: "ui-breadcrumb-divider"
                },
                "\xA0/\xA0"
              ));
            }
            directPath += bc;
            rows.push(_this.renderItem(directPath, label, i));
          }
        } else {
          var _label = pathnames[path];
          if (typeof _label !== "undefined" && typeof path !== "undefined") {
            rows.push(_this.renderItem(path, _label, 1));
          } else {
            rows.push(_this.renderItem("/", "Home", 1));
          }
        }
      }
      return rows;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Breadcrumbs.prototype.render = function render() {
    var _getValidProps = (0, _lib.getValidProps)(this.props),
        Component = _getValidProps.renderAs,
        path = _getValidProps.path,
        children = _getValidProps.children,
        props = _getValidProps.props;

    return _react2.default.createElement(
      Component,
      props,
      this.renderItems(path),
      children
    );
  };

  return Breadcrumbs;
}(_lib.CoreComponent), _class.propTypes = (0, _lib.setCorePropTypes)({
  pathnames: "array"
}), _class.defaultProps = (0, _lib.setCorePropDefaults)({
  uirole: _lib.ROLE.BREADCRUMBS,
  pathnames: []
}), _temp2);
exports.default = Breadcrumbs;
module.exports = exports["default"];