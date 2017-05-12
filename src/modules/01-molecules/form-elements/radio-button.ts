import * as AtomRadioButton from '../../00-atoms/form-elements/radio-button';
const Style = require<any>("../../../../src/modules/01-molecules/form-elements/radio-button.scss");

export class RadioButton extends AtomRadioButton.RadioButton{
	label: string = "";
	constructor(radioButton: IRadioButton) {
		super({id: radioButton.id, name: radioButton.name, value: radioButton.value});
		if(radioButton.label !== undefined) this.label = radioButton.label;
	}

	public createModuleElement() {
		let radioButton = {
			id: this.id,
			name: this.name,
			value: this.value
		};
		return `<div class='${Style.inputGroup}'>${AtomRadioButton.getModule(radioButton)}<label for='${this.id}' class='${Style.label}'>${this.label}</label></div>`;
	}
}

export interface IRadioButton extends AtomRadioButton.IRadioButton{
	label?: string;
}

export function getModule(radioButton: IRadioButton){
	return new RadioButton(radioButton).createModuleElement();
}
