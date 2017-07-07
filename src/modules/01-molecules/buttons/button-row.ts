import * as Button from '../../00-atoms/buttons/button'

const Style = require<any>("../../../../src/modules/01-molecules/buttons/button-row.scss");

export class ButtonRow{
	id: string = "";
	buttons: Button.IButton[];
	buttonElements = [];
	constructor(buttonRow: IButtonRow) {
		this.id = buttonRow.id;
		this.buttons = buttonRow.buttons;
		this.buttonElements = buttonRow.buttonElements !== undefined ? buttonRow.buttonElements : [];
	}
	public createModuleElement(){
		let buttonHtmlElements: string = "";
		for (let button of this.buttons){ 
			buttonHtmlElements += Button.getModule(button);
		}
		for (let buttonElement of this.buttonElements){ 
			buttonHtmlElements += buttonElement;
		}
		return `<span id='${this.id}' class='${Style.buttonRow}'>${buttonHtmlElements}</span>`;
	}
}

export interface IButtonRow{
	buttons: Button.IButton[];
	buttonElements?: string[];
	id?: string;
}

export function getModule(buttonRow: IButtonRow){
	return new ButtonRow(buttonRow).createModuleElement();
}
