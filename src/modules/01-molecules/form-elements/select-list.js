import SelectList from '../../00-atoms/form-elements/select-list'
var style = require('./select-list.scss');

export default function(selectList){

	var id 		= selectList.id 	!== undefined ? selectList.id 		: '';
	var label	= selectList.label 	!== undefined ? selectList.label 	: false;

	if (label) selectList.labelElement = `<label for="${id}" class="${style.label}">${label}</label>`;

	return `
		<div class="${style.inputGroup}">
			${SelectList.getModule(selectList)}
		</div>
	`;

};
