"use strict";

Liferay.Loader.define("dynamic-data-mapping-form-field-type-slider@1.0.0/Slider/Slider.es", ['module', 'exports', 'require', 'dynamic-data-mapping-form-field-type/FieldBase/FieldBase.es', './SliderRegister.soy', './Slider.soy', 'frontend-js-metal-web$metal-component', 'frontend-js-metal-web$metal-soy', 'frontend-js-metal-web$metal-state'], function (module, exports, require) {
  var define = undefined;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = void 0;

  require("dynamic-data-mapping-form-field-type/FieldBase/FieldBase.es");

  require("./SliderRegister.soy");

  var _SliderSoy = _interopRequireDefault(require("./Slider.soy"));

  var _metalComponent = _interopRequireDefault(require("frontend-js-metal-web$metal-component"));

  var _metalSoy = _interopRequireDefault(require("frontend-js-metal-web$metal-soy"));

  var _metalState = require("frontend-js-metal-web$metal-state");

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function _typeof(obj) {
        return typeof obj;
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }return _typeof(obj);
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }return _assertThisInitialized(self);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }return self;
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };return _getPrototypeOf(o);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;return o;
    };return _setPrototypeOf(o, p);
  }

  /**
   * Slider Component
   */
  var DDMSlider =
  /*#__PURE__*/
  function (_Component) {
    _inherits(DDMSlider, _Component);

    function DDMSlider() {
      _classCallCheck(this, DDMSlider);

      return _possibleConstructorReturn(this, _getPrototypeOf(DDMSlider).apply(this, arguments));
    }

    _createClass(DDMSlider, [{
      key: "dispatchEvent",
      value: function dispatchEvent(event, name, value) {
        this.emit(name, {
          fieldInstance: this,
          originalEvent: event,
          value: value
        });
      }
    }, {
      key: "_handleFieldChanged",
      value: function _handleFieldChanged(event) {
        var _this = this;

        var value = event.target.value;
        this.setState({
          value: value
        }, function () {
          return _this.dispatchEvent(event, 'fieldEdited', value);
        });
      }
    }]);

    return DDMSlider;
  }(_metalComponent["default"]);

  DDMSlider.STATE = {
    name: _metalState.Config.string().required(),
    predefinedValue: _metalState.Config.oneOfType([_metalState.Config.number(), _metalState.Config.string()]),
    required: _metalState.Config.bool().value(false),
    showLabel: _metalState.Config.bool().value(true),
    spritemap: _metalState.Config.string(),
    value: _metalState.Config.string().value('')
  }; // Register component

  _metalSoy["default"].register(DDMSlider, _SliderSoy["default"]);

  var _default = DDMSlider;
  exports["default"] = _default;
  //# sourceMappingURL=Slider.es.js.map
});
//# sourceMappingURL=Slider.es.js.map