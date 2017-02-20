import Button from '../../00-atoms/buttons/button'

var style = require('./button-row.scss');

function createButtonElements(buttons){
	var buttonElements = "";
	buttons.forEach(function(button){
		buttonElements += `${Button(button)}`;
	});
	return buttonElements;
}

export default function(buttonRow){
	var id = buttonRow.id !== undefined ? buttonRow.id : '';

	var buttonElements = '';
	//if (buttonRow.buttons !== undefined) buttonElements = createButtonElements(buttonRow.buttons);

	return `
		<span id="${id}" class="${style.buttonRow}">
			${buttonElements}
		</span>
	`

}