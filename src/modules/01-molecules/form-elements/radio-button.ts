import * as AtomRadioButton from '../../00-atoms/form-elements/radio-button';
const Style = require<any>("./radio-button.scss");

class RadioButton {
	id: string;
	name: string;
	value: string;
	label: string = "";
	constructor(radioButton: IRadioButton) {
		this.id = radioButton.id;
		this.name = radioButton.name;
		this.value = radioButton.value;
		if(radioButton.label !== undefined) this.label = radioButton.label;
	}

	public createModuleElement() {
		let radioButton = {
			id: this.id,
			name: this.name,
			value: this.value
		};
		return `
			<div class="${Style.inputGroup}">
				${AtomRadioButton.getModule(radioButton)}
				<label for="${this.id}" class="${Style.label}">${this.label}</label>
			</div>
		`;
	}
}

interface IRadioButton{
	id: string;
	name: string;
	value: string;
	label?: string;
}

export function getModule(radioButton: IRadioButton){
	return new RadioButton(radioButton).createModuleElement();
}
