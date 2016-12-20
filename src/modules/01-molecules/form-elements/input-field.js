import InputField from '../../00-atoms/form-elements/input-field'
var style = require('./input-field.scss');

export default function(inputField){

	var id 		= inputField.id 	!== undefined ? inputField.id 		: '';
	var label	= inputField.label 	!== undefined ? inputField.label 	: '';

	return `
		<div class="${style.inputGroup}">
			${InputField(inputField)}
			<label for="${id}" class="${style.label}">${label}</label>
		</div>
	`;

};
