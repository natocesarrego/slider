import 'dynamic-data-mapping-form-field-type/FieldBase/FieldBase.es';
import './SliderRegister.soy.js';
import templates from './Slider.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';
import {Config} from 'metal-state';

/**
 * Slider Component
 */
class Slider extends Component {

    dispatchEvent(event, name, value) {
        this.emit(name, {
            fieldInstance: this,
            originalEvent: event,
            value
        });
    }

    _handleFieldChanged(event) {
        const {value} = event.target;

        this.setState(
            {
                value
            },
            () => this.dispatchEvent(event, 'fieldEdited', value)
        );
    }
}

Slider.STATE = {

    label: Config.string(),

    name: Config.string().required(),

    predefinedValue: Config.oneOfType([Config.number(), Config.string()]),

    required: Config.bool().value(false),

    showLabel: Config.bool().value(true),

    spritemap: Config.string(),

    value: Config.string().value('')
}

// Register component
Soy.register(Slider, templates);

export default Slider;
