var style = require('./checkbox.scss');

export default function(inputField){

	var id 			= inputField.id 			!== undefined ? inputField.id 			: '';
	var name 		= inputField.name 			!== undefined ? inputField.name 		: '';
	var value		= inputField.value 			!== undefined ? inputField.value 		: '';

	document.addEventListener("module-lazy-loaded", function(e) {
		if (id !== ''){
			var iconElement = document.getElementById('checkbox-toggle-' + id) !== undefined ? document.getElementById('checkbox-toggle-' + id) : false;
			var checkboxElement = document.getElementById(id);
			if (iconElement){
				iconElement.onclick = function(){
					checkboxElement.checked = checkboxElement.checked ? false : true;		
				};
			}
		}
	}, false);

	return `
		<input id="${id}" name="${name}" type="checkbox" value="${value}" class="${style.input}" />
		<span id="checkbox-toggle-${id}" class="${style.checkboxIcon}"></span>
	`;

}