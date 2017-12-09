import * as Button from '../../00-atoms/buttons/button'

const Style = require<any>("../../../../src/modules/01-molecules/buttons/button-row.scss");

export class ButtonRow{
	id: string = "";
	buttons: Button.IButton[] = [];
	buttonElements = [];
	buttonElementsFirst = false;
	constructor(buttonRow: IButtonRow) {
		this.id = buttonRow.id;
		this.buttons = buttonRow.buttons !== undefined ? buttonRow.buttons : [];
		this.buttonElements = buttonRow.buttonElements !== undefined ? buttonRow.buttonElements : [];
		this.buttonElementsFirst = buttonRow.buttonElementsFirst !== undefined ? buttonRow.buttonElementsFirst : false;
	}
	public createModuleElement(){
		let buttonsHtmlString: string = "";
		let buttonElementsHtmlString: string = "";
		let mergedButtonsString: string = "";
		for (let button of this.buttons){ 
			buttonsHtmlString += Button.getModule(button);
		}
		for (let buttonElement of this.buttonElements){ 
			buttonElementsHtmlString += buttonElement;
		}
		if (this.buttonElementsFirst) mergedButtonsString = `${buttonElementsHtmlString}${buttonsHtmlString}`;
		else mergedButtonsString = `${buttonsHtmlString}${buttonElementsHtmlString}`;
		
		return `<span id='${this.id}' class='${Style.buttonRow}'>${mergedButtonsString}</span>`;
	}
}

export interface IButtonRow{
	buttons?: Button.IButton[];
	buttonElements?: string[];
	buttonElementsFirst?: boolean;
	id?: string;
}

export function getModule(buttonRow: IButtonRow){
	return new ButtonRow(buttonRow).createModuleElement();
}
