var style = require('../../style/globalStyle.scss');

import * as Button from '../00-atoms/buttons/button';
import * as InputField from '../00-atoms/form-elements/input-field';
import * as SelectList from '../00-atoms/form-elements/select-list';
import * as Checkbox from '../00-atoms/form-elements/checkbox';
import * as RadioButton from '../00-atoms/form-elements/radio-button';
import * as DatePicker from '../00-atoms/form-elements/date-picker';

export default function(){

	return ` 
			<h2>Buttons</h2>

			<h3>Flat buttons</h3>
			${Button.getModule({
				content: "Default button",
				id: "button1"
			})}
			${Button.getModule({
				content: "Primary button",
				id: "button2",
				theme: "primary"
			})}
			${Button.getModule({
				content: "Info button",
				id: "button3",
				theme: "info"
			})}
			${Button.getModule({
				content: "Success button",
				id: "button4",
				theme: "success"
			})}
			${Button.getModule({
				content: "Warning button",
				id: "button5",
				theme: "warning"
			})}
			${Button.getModule({
				content: "Danger button",
				id: "button6",
				theme: "danger"
			})}


			<h3>Raised buttons</h3>
			${Button.getModule({
				content: "Default button",
				id: "button7",
				type: "raised"
			})}
			${Button.getModule({
				content: "Primary button",
				id: "button8",
				theme: "primary",
				type: "raised"
			})}
			${Button.getModule({
				content: "Info button",
				id: "button9",
				theme: "info",
				type: "raised"
			})}
			${Button.getModule({
				content: "Success button",
				id: "button10",
				theme: "success",
				type: "raised"
			})}
			${Button.getModule({
				content: "Warning button",
				id: "button11",
				theme: "warning",
				type: "raised"
			})}
			${Button.getModule({
				content: "Danger button",
				id: "button12",
				theme: "danger",
				type: "raised"
			})}

			<h3>Minimal buttons</h3>
			${Button.getModule({
				content: "Default button",
				id: "button13",
				type: "minimal"
			})}
			${Button.getModule({
				content: "Primary button",
				id: "button14",
				theme: "primary",
				type: "minimal"
			})}
			${Button.getModule({
				content: "Info button",
				id: "button15",
				theme: "info",
				type: "minimal"
			})}
			${Button.getModule({
				content: "Success button",
				id: "button16",
				theme: "success",
				type: "minimal"
			})}
			${Button.getModule({
				content: "Warning button",
				id: "button17",
				theme: "warning",
				type: "minimal"
			})}
			${Button.getModule({
				content: "Danger button",
				id: "button18",
				theme: "danger",
				type: "minimal"
			})}

		<h2>Form elements</h2>
		<h3>Input field</h3>
		<p>Standard input field</p>
		${InputField.getModule({
			id: 'atom-input1',
			name: 'atom-inputname1',
			type: 'text',
			placeholder: 'Placeholder text here'
		})}
		<p>Disabled input field</p>
		${InputField.getModule({
			id: 'atom-input1',
			name: 'atom-inputname1',
			type: 'text',
			placeholder: 'Placeholder text here',
			attributes: ['disabled']
		})}
		<p>Required input field</p>
		${InputField.getModule({
			id: 'atom-input1',
			name: 'atom-inputname1',
			type: 'text',
			placeholder: 'Placeholder text here',
			attributes: ['required']
		})}

		<h3>Checkbox</h3>
		${Checkbox.getModule({
			id: 'atom-checkbox1',
			name: 'atom-checkboxes',
			value: 'one'
		})}
		${Checkbox.getModule({
			id: 'atom-checkbox2',
			name: 'atom-checkboxes',
			value: 'two'
		})}

		<h3>Radio button</h3>
		${RadioButton.getModule({
			id: 'atom-radio1',
			name: 'atom-radio-buttons',
			value: 'one'
		})}
		${RadioButton.getModule({
			id: 'atom-radio2',
			name: 'atom-radio-buttons',
			value: 'two'
		})}

		<h3>Select list</h3>
		${SelectList.getModule({
			id: 'atom-select1',
			name: 'atom-selectname1',
			type: 'text',
			placeholder: 'Choose an option',
			options: [
				{
					name: 'first',
					value: 'first'
				},
				{
					name: 'second',
					value: 'second'
				},
				{
					name: 'third',
					value: 'third'
				},
				{
					name: 'fourth',
					value: 'fourth'
				},
				{
					name: 'fifth',
					value: 'fifth'
				}
			]
		})}

		${SelectList.getModule({
			id: 'atom-select2',
			name: 'atom-selectname2',
			type: 'text',
			placeholder: 'Type here',
			searchable: true,
			options: [
				{
					name: 'first',
					value: 'fist'
				},
				{
					name: 'second',
					value: 'second'
				},
				{
					name: 'third',
					value: 'third'
				},
				{
					name: 'fourth',
					value: 'fourth'
				},
				{
					name: 'fifth',
					value: 'fifth'
				}
			]
		})}
	`
}
