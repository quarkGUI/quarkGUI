var style = require('../../style/globalStyle.scss');

import InputField from '../00-atoms/form-elements/input-field';
import SelectList from '../00-atoms/form-elements/select-list';
import Button from '../00-atoms/buttons/button';
import Checkbox from '../00-atoms/form-elements/checkbox';
import RadioButton from '../00-atoms/form-elements/radio-button';

export default function(){

	return ` 
			<h3>Buttons</h3>

			<h4>Flat buttons</h4>
			${Button({
				id: 'button1',
				type: 'flat',
				theme: '',
				content: 'Default button'
			})}

			${Button({
				id: 'button1',
				type: 'flat',
				theme: 'primary',
				content: 'Primary button'
			})}

			${Button({
				id: 'button1',
				type: 'flat',
				theme: 'info',
				content: 'Info button'
			})}

			${Button({
				id: 'button1',
				type: 'flat',
				theme: 'success',
				content: 'Success button'
			})}

			${Button({
				id: 'button1',
				type: 'flat',
				theme: 'warning',
				content: 'Warning button'
			})}

			${Button({
				id: 'button1',
				type: 'flat',
				theme: 'danger',
				content: 'Danger button'
			})}

			<h4>Raised buttons</h4>
			${Button({
				id: 'button1',
				type: 'raised',
				theme: '',
				content: 'Default button'
			})}

			${Button({
				id: 'button1',
				type: 'raised',
				theme: 'primary',
				content: 'Primary button'
			})}

			${Button({
				id: 'button1',
				type: 'raised',
				theme: 'info',
				content: 'Info button'
			})}

			${Button({
				id: 'button1',
				type: 'raised',
				theme: 'success',
				content: 'Success button'
			})}

			${Button({
				id: 'button1',
				type: 'raised',
				theme: 'warning',
				content: 'Warning button'
			})}

			${Button({
				id: 'button1',
				type: 'raised',
				theme: 'danger',
				content: 'Danger button'
			})}

		<h3 id="atoms-form-elements">Form elements</h3>
		<h4>Input field</h4>
		${InputField({
			id: 'atom-input1',
			name: 'atom-inputname1',
			type: 'text',
			placeholder: 'Placeholder text here'
		})}

		<h4>Checkbox</h4>
		${Checkbox({
			id: 'atom-checkbox1',
			name: 'atom-checkboxes',
			value: 'one'
		})}
		${Checkbox({
			id: 'atom-checkbox2',
			name: 'atom-checkboxes',
			value: 'two'
		})}

		<h4>Radio button</h4>
		${RadioButton({
			id: 'atom-radio1',
			name: 'atom-radio-buttons',
			value: 'one'
		})}
		${RadioButton({
			id: 'atom-radio2',
			name: 'atom-radio-buttons',
			value: 'two'
		})}

		<h4>Select list</h4>
		${SelectList({
			id: 'atom-select1',
			name: 'atom-selectname1',
			type: 'text',
			placeholder: 'Placeholder text here',
			options: [
				{
					name: 'first',
					value: 'first'
				},
				{
					name: 'second',
					value: 'second'
				}
			]
		})}
`
	
}