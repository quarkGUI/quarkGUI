var style = require('../../style/globalStyle.scss');

import InputField from '../01-molecules/form-elements/input-field';
import Checkbox from '../01-molecules/form-elements/checkbox';
import RadioButton from '../01-molecules/form-elements/radio-button';

export default function(){

	return ` 
		<h3>Form elements</h3>
		<h4>Input field</h4>
		${InputField({
			id: 'molecule-input1',
			name: 'molecule-inputname1',
			type: 'text',
			placeholder: 'Placeholder text here',
			label: 'Input 1'
		})}

		<h4>Checkbox</h4>
		${Checkbox({
			id: 'molecule-checkbox1',
			name: 'molecule-checkboxes',
			value: 'one',
			label: 'Checkbox 1'
		})}

		${Checkbox({
			id: 'molecule-checkbox2',
			name: 'molecule-checkboxes',
			value: 'two',
			label: 'Checkbox 2'
		})}

		<h4>Radio button</h4>
		${RadioButton({
			id: 'molecule-radio1',
			name: 'molecule-radio-buttons',
			value: 'one',
			label: 'Radio button 1'
		})}
		${RadioButton({
			id: 'molecule-radio2',
			name: 'molecule-radio-buttons',
			value: 'two',
			label: 'Radio button 2'
		})}
`
	
}