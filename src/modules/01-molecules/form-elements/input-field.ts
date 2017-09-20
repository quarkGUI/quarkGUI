import * as AtomInputField from '../../00-atoms/form-elements/input-field'
const Style = require<any>("../../../../src/modules/01-molecules/form-elements/input-field.scss");

export class InputField extends AtomInputField.InputField{
	label: string = "";
	constructor(inputField: IInputField) {
		super({id: inputField.id, name: inputField.name});
		if (inputField.type !== undefined) this.type = inputField.type;
		if (inputField.value !== undefined) this.value = inputField.value;
		if (inputField.placeholder !== undefined) this.placeholder = inputField.placeholder;
		if (inputField.attributes !== undefined) this.attributes = inputField.attributes;
		if (inputField.label !== undefined) this.label = inputField.label;
		if (inputField.vueBindings !== undefined) this.vueBindings = inputField.vueBindings;
	}


	public createModuleElement() {
		let inputField = {
			id: this.id,
			name: this.name,
			type: this.type,
			value: this.value,
			placeholder: this.placeholder,
			attributes: this.attributes,
			vueBindings: this.vueBindings
		}
		return `<div class='${Style.inputGroup}'>${AtomInputField.getModule(inputField)}<label for='${this.id}' class='${Style.label}'>${this.label}</label></div>`;
	}
}

export interface IInputField extends AtomInputField.IInputField{
	label?: string;
}

export function getModule(inputField: IInputField){
	return new InputField(inputField).createModuleElement();
}
