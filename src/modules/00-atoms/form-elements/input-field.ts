const Style = require<any>("../../../../src/modules/00-atoms/form-elements/input-field.scss");

export class InputField {
	id: string;
	name: string;
	type: string = "text";
	value: any = "";
	placeholder: string = "";
	attributes: string[];
	constructor(inputField: IInputField) {
		this.id = inputField.id;
		this.name = inputField.name;
		if (inputField.type !== undefined) this.type = inputField.type;
		if (inputField.value !== undefined) this.value = inputField.value;
		if (inputField.placeholder !== undefined) this.placeholder = inputField.placeholder;
		if (inputField.attributes !== undefined) this.attributes = inputField.attributes;
	}

	private addListener(id: string){
		document.addEventListener('DOMContentLoaded', function(e) {
			let elementIsDefined: boolean = document.getElementById(id) !== undefined;
			let elementIsNotNull: boolean = document.getElementById(id) !== null;
			if (elementIsDefined && elementIsNotNull){
				let element: HTMLInputElement = <HTMLInputElement> document.getElementById(id);
				element.value && element.value.length ? element.classList.add("is-not-empty") : element.classList.remove("is-not-empty");
				element.onkeyup = function(){
					element.value && element.value.length ? element.classList.add("is-not-empty") : element.classList.remove("is-not-empty");				
				};
			}
		}, false);
	}

	private getHtmlAttributes(attributes: string[]){
		let htmlAttributes: string = '';
		attributes.forEach(function(attribute, index){
			htmlAttributes += attribute;
			if (index < attributes.length){
				htmlAttributes += ' ';
			}
		});
		return htmlAttributes;
	}

	public createModuleElement() {
		this.addListener(this.id);
		let htmlAtributes: string = this.attributes !== undefined && this.attributes.length ? this.getHtmlAttributes(this.attributes) : '';
		return `<input id='${this.id}' name='${this.name}' type='${this.type}' value='${this.value}' placeholder='${this.placeholder}' ${htmlAtributes} class='${Style.input}' />`;
	}
}

export interface IInputField{
	id: string;
	name: string;
	type?: string;
	value?: any;
	placeholder?: string;
	attributes?: string[];
}

export function getModule(inputField: IInputField){
	return new InputField(inputField).createModuleElement();
}
