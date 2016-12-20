var style = require('./input-field.scss');

export default function(inputField){

	var id 			= inputField.id 			!== undefined ? inputField.id 			: '';
	var name 		= inputField.name 			!== undefined ? inputField.name 		: '';
	var type		= inputField.type 			!== undefined ? inputField.type 		: '';
	var value		= inputField.value 			!== undefined ? inputField.value 		: '';
	var placeholder	= inputField.placeholder 	!== undefined ? inputField.placeholder	: '';

	document.addEventListener('DOMContentLoaded', function() {
		var element = document.getElementById(id) !== undefined ? document.getElementById(id) : false;
		if (element){
			element.value ? element.classList.add("is-not-empty") : element.classList.remove("is-not-empty");
			element.onkeyup = function(){
				element.value.length ? element.classList.add("is-not-empty") : element.classList.remove("is-not-empty");				
			};
		}
	}, false);

	return `
		<input 	id="${id}" name="${name}" type="${type}" value="${value}" placeholder="${placeholder}" class="${style.input}" />
	`;

}