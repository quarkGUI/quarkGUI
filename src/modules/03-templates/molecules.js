var style = require('../../style/globalStyle.scss');

import InputField from '../01-molecules/form-elements/input-field';
import Checkbox from '../01-molecules/form-elements/checkbox';
import RadioButton from '../01-molecules/form-elements/radio-button';
import SelectList from '../01-molecules/form-elements/select-list';
import ButtonRow from '../01-molecules/buttons/button-row';
import DragableList from '../01-molecules/lists/dragable-list';

export default function(){

	return ` 
		<h3>Buttons</h3>
		<h4>Button row</h4>
		${ButtonRow({
			id: 'button-row1',
			buttons: [
				{
					id: 'buttonrow-button1',
					content: '',
					iconClass: 'fa fa-home'
				},
				{
					id: 'buttonrow-button1',
					content: 'Home'
				},
				{
					id: 'buttonrow-button1',
					content: 'Home',
					iconClass: 'fa fa-home'
				}
			]
		})}

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

		<h4>Select list</h4>
		${SelectList({
			id: 'molecule-select1',
			name: 'molecule-selectname1',
			type: 'text',
			placeholder: 'Placeholder text here',
			label: 'Label for select list',
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


		<h3>Lists</h3>
		<h4>Dragable list</h4>
		${DragableList({
			id: 'dragable-list1',
			listItems: [
				{ content: `first list item content` },
				{ content: `second list item content` },
				{ content: `third list item content` }
			]
		})}
`
	
}