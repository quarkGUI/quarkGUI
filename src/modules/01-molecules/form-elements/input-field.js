import InputField from '../../00-atoms/form-elements/input-field'
var style = require('./input-field.scss');

const element = `
	<div class="${style.inputGroup}">
		${InputField}
		<label for="" class="${style.label}">Label</label>
	</div>
`;
export default function(inputField){

	return `
		<div class="${style.inputGroup}">
			${InputField(inputField)}
			<label for="${inputField.id}" class="${style.label}">${inputField.label}</label>
		</div>
	`

};
