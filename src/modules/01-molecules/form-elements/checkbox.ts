import * as AtomCheckbox from '../../00-atoms/form-elements/checkbox'
const Style = require<any>("./checkbox.scss");

export class Checkbox {
	id: string;
	name: string;
	value: string;
	label: string = "";
	constructor(checkbox: ICheckbox) {
		this.id = checkbox.id;
		this.name = checkbox.name;
		this.value = checkbox.value;
		if(checkbox.label !== undefined) this.label = checkbox.label;
	}

	public createModuleElement() {
		let checkbox = {
			id: this.id,
			name: this.name,
			value: this.value
		};
		return `
			<div class="${Style.inputGroup}">
				${AtomCheckbox.getModule(checkbox)}
				<label for="${this.id}" class="${Style.label}">${this.label}</label>
			</div>
		`;
	}
}

export interface ICheckbox{
	id: string;
	name: string;
	value: string;
	label?: string;
}

export function getModule(checkbox: ICheckbox){
	return new Checkbox(checkbox).createModuleElement();
}
