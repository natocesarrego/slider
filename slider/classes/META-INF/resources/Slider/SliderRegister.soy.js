"use strict";

Liferay.Loader.define("dynamic-data-mapping-form-field-type-slider@1.0.0/Slider/SliderRegister.soy", ['module', 'exports', 'require', 'frontend-js-metal-web$metal-component', 'frontend-js-metal-web$metal-soy'], function (module, exports, require) {
  var define = undefined;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = exports.templates = void 0;

  var _metalComponent = _interopRequireDefault(require("frontend-js-metal-web$metal-component"));

  var _metalSoy = _interopRequireDefault(require("frontend-js-metal-web$metal-soy"));

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { "default": obj };
  }

  /* jshint ignore:start */
  var templates;
  exports.templates = templates;
  goog.loadModule(function (exports) {
    var soy = goog.require('soy');

    goog.require('soydata');

    // This file was automatically generated from SliderRegister.soy.
    // Please don't edit this file by hand.

    /**
     * @fileoverview Templates in namespace SliderRegister.
     * @hassoydeltemplate {PageRenderer.RegisterFieldType.idom}
     * @public
     */

    goog.module('SliderRegister.incrementaldom');

    goog.require('soy');

    goog.require('soy.idom');

    var $templateAlias1 = _metalSoy["default"].getTemplate('Slider.incrementaldom', 'render');
    /**
     * @param {Object<string, *>=} opt_data
     * @param {Object<string, *>=} opt_ijData
     * @param {Object<string, *>=} opt_ijData_deprecated
     * @return {void}
     * @suppress {checkTypes}
     */

    function __deltemplate_s90_abd9a753(opt_data, opt_ijData, opt_ijData_deprecated) {
      opt_ijData = opt_ijData_deprecated || opt_ijData;
      opt_data = opt_data || {};
      $templateAlias1(opt_data, null, opt_ijData);
    }

    exports.__deltemplate_s90_abd9a753 = __deltemplate_s90_abd9a753;

    if (goog.DEBUG) {
      __deltemplate_s90_abd9a753.soyTemplateName = 'SliderRegister.__deltemplate_s90_abd9a753';
    }

    soy.$$registerDelegateFn(soy.$$getDelTemplateId('PageRenderer.RegisterFieldType.idom'), 'slider', 0, __deltemplate_s90_abd9a753);
    exports.templates = templates = exports;
    return exports;
  });
  var _default = templates;
  /* jshint ignore:end */

  exports["default"] = _default;
  //# sourceMappingURL=SliderRegister.soy.js.map
});
//# sourceMappingURL=SliderRegister.soy.js.map