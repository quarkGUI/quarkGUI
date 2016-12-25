import Checkbox from '../../00-atoms/form-elements/checkbox'
var style = require('./checkbox.scss');

export default function(checkbox){

	var id 		= checkbox.id 		!== undefined ? checkbox.id 		: '';
	var name 	= checkbox.name		!== undefined ? checkbox.name 		: '';
	var label	= checkbox.label 	!== undefined ? checkbox.label 	: '';

	return `
		<div class="${style.inputGroup}">
			${Checkbox(checkbox)}
			<label for="${id}" class="${style.label}">${label}</label>
		</div>
	`;

};
