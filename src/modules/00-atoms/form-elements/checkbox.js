var style = require('./checkbox.scss');

export default function(inputField){

	var id 			= inputField.id 			!== undefined ? inputField.id 			: '';
	var name 		= inputField.name 			!== undefined ? inputField.name 		: '';
	var value		= inputField.value 			!== undefined ? inputField.value 		: '';

	return `
		<input id="${id}" name="${name}" type="checkbox" value="${value}" class="${style.input}" />
	`;

}