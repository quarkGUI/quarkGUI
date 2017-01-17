var style = require('./checkbox.scss');

export default function(inputField){

	var id 			= inputField.id 			!== undefined ? inputField.id 			: '';
	var name 		= inputField.name 			!== undefined ? inputField.name 		: '';
	var value		= inputField.value 			!== undefined ? inputField.value 		: '';

	document.addEventListener('DOMContentLoaded', function() {
		if (id !== ''){
			var iconElement = document.getElementById('checkbox-toggle-' + id);
			var checkboxElement = document.getElementById(id);
			iconElement.onclick = function(){
				checkboxElement.checked = checkboxElement.checked ? false : true;		
			};
		}
	}, false);

	return `
		<input id="${id}" name="${name}" type="checkbox" value="${value}" class="${style.input}" />
		<span id="checkbox-toggle-${id}" class="${style.checkboxIcon}"></span>
	`;

}