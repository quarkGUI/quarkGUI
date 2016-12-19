var style = require('./input-field.scss');

const element = `<input type="text" class="${style.input}" placeholder="hoy hoy" />`;

export default function(inputField){

	return `
		<input id="${inputField.id}" name="${inputField.name}" type="${inputField.type}" class="${style.input}" placeholder="${inputField.placeholder}" />
	`

}