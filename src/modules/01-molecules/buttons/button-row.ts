import * as Button from '../../00-atoms/buttons/button'

const Style = require<any>("./button-row.scss");

class ButtonRow {
	id: string;
	buttons: IButton[];
	constructor(buttonRow: IButtonRow) {
		this.id = buttonRow.id;
		this.buttons = buttonRow.buttons;
	}
	public createModuleElement(){
		let buttonElements: string = "";
		for (let button of this.buttons){ 
			buttonElements += Button.getModule(button)
		};
		return ` 
			<span id="${this.id}" class="${Style.buttonRow}">${buttonElements}</span>
		`
	}
}

interface IButton {
	id: string; 
	type?: string; 
	theme?: string;
	link ?: string; 
	iconClass?: string; 
	content?: string;
}

interface IButtonRow{
	id: string;
	buttons: IButton[];
}

export function getModule(buttonRow: IButtonRow){
	return new ButtonRow(buttonRow).createModuleElement();
}
