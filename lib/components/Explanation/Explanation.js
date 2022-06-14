"use strict";

function _typeof(obj) {
  "@babel/helpers - typeof";
  return (
    (_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj &&
              "function" == typeof Symbol &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? "symbol"
              : typeof obj;
          }),
    _typeof(obj)
  );
}

Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  }
  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

var Explanation = /*#__PURE__*/ (function (_React$Component) {
  _inherits(Explanation, _React$Component);

  var _super = _createSuper(Explanation);

  function Explanation(props) {
    var _this;

    _classCallCheck(this, Explanation);

    _this = _super.call(this, props);
    _this.state = {
      HTMLarray: [
        {
          title: "Step 1 - Create JSX Components ",
          description: "Write sample JSX components in a file called src",
        },
        {
          title:
            "Step 2 - Use Babel CLI to transcribe JSX to browser-friendly Javascript",
          description:
            "JSX syntax is not readible by browsers. Install Babel CLI dependencies and include this following script in the package.json => 'step1-babel': 'babel src -d lib'",
        },
        {
          title: "Step 3 - Run the script step1-babel ",
          description:
            "Babel will generate generate browser friendly javascript in the lib folder",
        },
        {
          title:
            "Step 4 - Include the following script 'step2-webpack': 'webpack --config webpack.config.js'",
          description: "make sure to npm i -d webpack",
        },
        {
          title: "Step 5 - write a webpack.config.js file '",
          description:
            "A webpack.config.js file will dictate how the webpack should transform the javascript files in lib folder",
        },
        {
          title: "Step 6 - Use npm run step2-webpack",
          description:
            "By running this script, we then allow the javascript to accept require syntax, as require is Node",
        },
      ],
    };
    return _this;
  }

  _createClass(Explanation, [
    {
      key: "render",
      value: function render() {
        return /*#__PURE__*/ _react["default"].createElement(
          "div",
          {
            className: "Explanation",
          },
          /*#__PURE__*/ _react["default"].createElement(
            "h2",
            {
              className: "center",
            },
            " WebPack Explanation - Steps "
          ),
          this.state.HTMLarray.map(function (items) {
            return /*#__PURE__*/ _react["default"].createElement(
              "div",
              {
                className: "steps",
              },
              /*#__PURE__*/ _react["default"].createElement(
                "h3",
                null,
                " ",
                items.title,
                " "
              ),
              /*#__PURE__*/ _react["default"].createElement(
                "p",
                null,
                " ",
                items.description,
                " "
              )
            );
          })
        );
      },
    },
  ]);

  return Explanation;
})(_react["default"].Component);

var _default = Explanation;
exports["default"] = _default;
