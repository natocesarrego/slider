"use strict";

Liferay.Loader.define("dynamic-data-mapping-form-field-type-slider@1.0.0/Slider/Slider.soy", ['module', 'exports', 'require', 'frontend-js-metal-web$metal-component', 'frontend-js-metal-web$metal-soy'], function (module, exports, require) {
  var define = undefined;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = exports.templates = exports.Slider = void 0;

  var _metalComponent = _interopRequireDefault(require("frontend-js-metal-web$metal-component"));

  var _metalSoy = _interopRequireDefault(require("frontend-js-metal-web$metal-soy"));

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

  var templates;
  exports.templates = templates;
  goog.loadModule(function (exports) {
    var soy = goog.require('soy');

    goog.require('soydata');

    // This file was automatically generated from Slider.soy.
    // Please don't edit this file by hand.

    /**
     * @fileoverview Templates in namespace Slider.
     * @public
     */

    goog.module('Slider.incrementaldom');

    goog.require('goog.soy.data.SanitizedContent');

    var incrementalDom = goog.require('incrementaldom');

    goog.require('soy.asserts');

    goog.require('soy.idom');

    var $templateAlias1 = _metalSoy["default"].getTemplate('FieldBase.incrementaldom', 'render');
    /**
     * @param {{
     *  label: (!goog.soy.data.SanitizedContent|string),
     *  name: (!goog.soy.data.SanitizedContent|string),
     *  showLabel: boolean,
     *  tip: (!goog.soy.data.SanitizedContent|string),
     *  value: (?),
     *  _handleFieldChanged: (*|null|undefined),
     *  predefinedValue: (*|null|undefined),
     *  required: (boolean|null|undefined),
     *  spritemap: (!goog.soy.data.SanitizedContent|null|string|undefined)
     * }} opt_data
     * @param {Object<string, *>=} opt_ijData
     * @param {Object<string, *>=} opt_ijData_deprecated
     * @return {void}
     * @suppress {checkTypes}
     */

    function $render(opt_data, opt_ijData, opt_ijData_deprecated) {
      opt_ijData = opt_ijData_deprecated || opt_ijData;
      /** @type {!goog.soy.data.SanitizedContent|string} */

      var label = soy.asserts.assertType(goog.isString(opt_data.label) || opt_data.label instanceof goog.soy.data.SanitizedContent, 'label', opt_data.label, '!goog.soy.data.SanitizedContent|string');
      /** @type {!goog.soy.data.SanitizedContent|string} */

      var name = soy.asserts.assertType(goog.isString(opt_data.name) || opt_data.name instanceof goog.soy.data.SanitizedContent, 'name', opt_data.name, '!goog.soy.data.SanitizedContent|string');
      /** @type {boolean} */

      var showLabel = soy.asserts.assertType(goog.isBoolean(opt_data.showLabel) || opt_data.showLabel === 1 || opt_data.showLabel === 0, 'showLabel', opt_data.showLabel, 'boolean');
      /** @type {!goog.soy.data.SanitizedContent|string} */

      var tip = soy.asserts.assertType(goog.isString(opt_data.tip) || opt_data.tip instanceof goog.soy.data.SanitizedContent, 'tip', opt_data.tip, '!goog.soy.data.SanitizedContent|string');
      /** @type {?} */

      opt_data.value;
      opt_data._handleFieldChanged;
      opt_data.predefinedValue;

      /** @type {boolean|null|undefined} */

      var required = soy.asserts.assertType(opt_data.required == null || goog.isBoolean(opt_data.required) || opt_data.required === 1 || opt_data.required === 0, 'required', opt_data.required, 'boolean|null|undefined');
      /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */

      var spritemap = soy.asserts.assertType(opt_data.spritemap == null || goog.isString(opt_data.spritemap) || opt_data.spritemap instanceof goog.soy.data.SanitizedContent, 'spritemap', opt_data.spritemap, '!goog.soy.data.SanitizedContent|null|string|undefined');

      var param14 = function param14() {
        $content(opt_data, null, opt_ijData);
      };

      $templateAlias1({
        contentRenderer: param14,
        label: label,
        name: name,
        required: required,
        showLabel: showLabel,
        spritemap: spritemap,
        tip: tip
      }, null, opt_ijData);
    }

    exports.render = $render;
    /**
     * @typedef {{
     *  label: (!goog.soy.data.SanitizedContent|string),
     *  name: (!goog.soy.data.SanitizedContent|string),
     *  showLabel: boolean,
     *  tip: (!goog.soy.data.SanitizedContent|string),
     *  value: (?),
     *  _handleFieldChanged: (*|null|undefined),
     *  predefinedValue: (*|null|undefined),
     *  required: (boolean|null|undefined),
     *  spritemap: (!goog.soy.data.SanitizedContent|null|string|undefined)
     * }}
     */

    $render.Params;

    if (goog.DEBUG) {
      $render.soyTemplateName = 'Slider.render';
    }
    /**
     * @param {{
     *  name: (!goog.soy.data.SanitizedContent|string),
     *  value: (?),
     *  _handleFieldChanged: (*|null|undefined),
     *  predefinedValue: (*|null|undefined)
     * }} opt_data
     * @param {Object<string, *>=} opt_ijData
     * @param {Object<string, *>=} opt_ijData_deprecated
     * @return {void}
     * @suppress {checkTypes}
     */

    function $content(opt_data, opt_ijData, opt_ijData_deprecated) {
      opt_ijData = opt_ijData_deprecated || opt_ijData;
      /** @type {!goog.soy.data.SanitizedContent|string} */

      var name = soy.asserts.assertType(goog.isString(opt_data.name) || opt_data.name instanceof goog.soy.data.SanitizedContent, 'name', opt_data.name, '!goog.soy.data.SanitizedContent|string');
      /** @type {?} */

      var value = opt_data.value;
      /** @type {*|null|undefined} */

      var _handleFieldChanged = opt_data._handleFieldChanged;
      /** @type {*|null|undefined} */

      var predefinedValue = opt_data.predefinedValue;

      incrementalDom.elementOpenStart('input');
      (function attributes__soy35() {
        incrementalDom.attr('class', 'ddm-field-slider form-control slider');
        incrementalDom.attr('data-oninput', _handleFieldChanged);
        incrementalDom.attr('id', 'myRange');
        incrementalDom.attr('max', '1');
        incrementalDom.attr('min', '100');
        incrementalDom.attr('name', name);
        incrementalDom.attr('type', 'range');

        if (value) {
          incrementalDom.attr('value', value);
        } else {
          incrementalDom.attr('value', predefinedValue);
        }
      })();
      incrementalDom.elementOpenEnd();
      incrementalDom.elementClose('input');
    }

    exports.content = $content;
    /**
     * @typedef {{
     *  name: (!goog.soy.data.SanitizedContent|string),
     *  value: (?),
     *  _handleFieldChanged: (*|null|undefined),
     *  predefinedValue: (*|null|undefined)
     * }}
     */

    $content.Params;

    if (goog.DEBUG) {
      $content.soyTemplateName = 'Slider.content';
    }

    exports.render.params = ["label", "name", "showLabel", "tip", "value", "_handleFieldChanged", "predefinedValue", "required", "spritemap"];
    exports.render.types = {
      "label": "string",
      "name": "string",
      "showLabel": "bool",
      "tip": "string",
      "value": "?",
      "_handleFieldChanged": "any",
      "predefinedValue": "any",
      "required": "bool",
      "spritemap": "string"
    };
    exports.content.params = ["name", "value", "_handleFieldChanged", "predefinedValue"];
    exports.content.types = {
      "name": "string",
      "value": "?",
      "_handleFieldChanged": "any",
      "predefinedValue": "any"
    };
    exports.templates = templates = exports;
    return exports;
  });

  var Slider =
  /*#__PURE__*/
  function (_Component) {
    _inherits(Slider, _Component);

    function Slider() {
      _classCallCheck(this, Slider);

      return _possibleConstructorReturn(this, _getPrototypeOf(Slider).apply(this, arguments));
    }

    return Slider;
  }(_metalComponent["default"]);

  exports.Slider = Slider;

  _metalSoy["default"].register(Slider, templates);

  var _default = templates;
  /* jshint ignore:end */

  exports["default"] = _default;
  //# sourceMappingURL=Slider.soy.js.map
});
//# sourceMappingURL=Slider.soy.js.map