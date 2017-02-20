import * as AtomInputField from '../../00-atoms/form-elements/input-field'
const Style = require<any>("./input-field.scss");

class InputField {
	id: string;
	name: string;
	type: string = "text";
	value: any = "";
	placeholder: string = "";
	label: string = "";
	constructor(inputField: IInputField) {
		this.id = inputField.id;
		this.name = inputField.name;
		if (inputField.type !== undefined) this.type = inputField.type;
		if (inputField.value !== undefined) this.value = inputField.value;
		if (inputField.placeholder !== undefined) this.placeholder = inputField.placeholder;
		if (inputField.label !== undefined) this.label = inputField.label;
	}


	public createModuleElement() {
		let inputField = {
			id: this.id,
			name: this.name,
			type: this.type,
			value: this.value,
			placeholder: this.placeholder
		}
		return `
			<div class="${Style.inputGroup}">
				${AtomInputField.getModule(inputField)}
				<label for="${this.id}" class="${Style.label}">${this.label}</label>
			</div>
		`
	}
}

interface IInputField{
	id: string;
	name: string;
	type?: string;
	value?: any;
	placeholder?: string;
	label?: string;
}

export function getModule(inputField: IInputField){
	return new InputField(inputField).createModuleElement();
}
