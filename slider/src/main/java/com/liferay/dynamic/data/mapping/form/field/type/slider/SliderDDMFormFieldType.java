package com.liferay.dynamic.data.mapping.form.field.type.slider;

import com.liferay.dynamic.data.mapping.form.field.type.BaseDDMFormFieldType;
import com.liferay.dynamic.data.mapping.form.field.type.DDMFormFieldType;

import org.osgi.service.component.annotations.Component;

/**
 * @author renato
 */
@Component(
	immediate = true,
	property = {
		"ddm.form.field.type.description=slider-description",
		"ddm.form.field.type.display.order:Integer=10",
		"ddm.form.field.type.group=customized",
		"ddm.form.field.type.icon=control-panel",
		"ddm.form.field.type.label=slider-label",
		"ddm.form.field.type.name=slider"
	},
	service = DDMFormFieldType.class
)
public class SliderDDMFormFieldType extends BaseDDMFormFieldType {

	@Override
	public String getModuleName() {
		return "dynamic-data-mapping-form-field-type-slider/Slider/Slider.es";
	}

	@Override
	public String getName() {
		return "slider";
	}

}