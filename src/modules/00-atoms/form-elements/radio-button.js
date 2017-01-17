var style = require('./radio-button.scss');

export default function(inputField){

	var id 			= inputField.id 			!== undefined ? inputField.id 			: '';
	var name 		= inputField.name 			!== undefined ? inputField.name 		: '';
	var value		= inputField.value 			!== undefined ? inputField.value 		: '';

	document.addEventListener('DOMContentLoaded', function() {
		if (id !== ''){
			var iconElement = document.getElementById('radio-toggle-' + id);
			var radioElement = document.getElementById(id);
			iconElement.onclick = function(){
				radioElement.checked = radioElement.checked ? false : true;		
			};
		}
	}, false);

	return `
		<input id="${id}" name="${name}" type="radio" value="${value}" class="${style.input}" />
		<span id="radio-toggle-${id}" class="${style.radioIcon}"></span>
	`;

}