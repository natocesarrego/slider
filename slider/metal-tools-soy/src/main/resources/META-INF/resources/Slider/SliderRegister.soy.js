// This file was automatically generated from SliderRegister.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace SliderRegister.
 * @hassoydeltemplate {PageRenderer.RegisterFieldType.idom}
 * @public
 */

goog.module('SliderRegister.incrementaldom');

goog.require('soy');
var soyIdom = goog.require('soy.idom');
var $import1 = goog.require('Slider.incrementaldom');
var $templateAlias1 = $import1.render;


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
