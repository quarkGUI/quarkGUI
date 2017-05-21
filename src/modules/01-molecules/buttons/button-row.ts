import * as Button from '../../00-atoms/buttons/button'

const Style = require<any>("../../../../src/modules/01-molecules/buttons/button-row.scss");

export class ButtonRow{
	id: string = "";
	buttons: Button.IButton[];
	constructor(buttonRow: IButtonRow) {
		this.id = buttonRow.id;
		this.buttons = buttonRow.buttons;
	}
	public createModuleElement(){
		let buttonElements: string = "";
		for (let button of this.buttons){ 
			buttonElements += Button.getModule(button)
		};
		return `<span id='${this.id}' class='${Style.buttonRow}'>${buttonElements}</span>`;
	}
}

export interface IButtonRow{
	buttons: Button.IButton[];
	id?: string;
}

export function getModule(buttonRow: IButtonRow){
	return new ButtonRow(buttonRow).createModuleElement();
}
