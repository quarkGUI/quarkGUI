import RadioButton from '../../00-atoms/form-elements/radio-button'
var style = require('./radio-button.scss');

export default function(radioButton){

	var id 		= radioButton.id 	!== undefined ? radioButton.id 		: '';
	var name 	= radioButton.name	!== undefined ? radioButton.name 	: '';
	var label	= radioButton.label !== undefined ? radioButton.label 	: '';

	return `
		<div class="${style.inputGroup}">
			${RadioButton(radioButton)}
			<label for="${id}" class="${style.label}">${label}</label>
		</div>
	`;

};
