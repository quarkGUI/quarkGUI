const Style = require<any>("../../../../src/modules/00-atoms/form-elements/checkbox.scss");

export class Checkbox {
	id: string;
	name: string;
	value: string;
	attributes: string[];
	constructor(checkbox: ICheckbox) {
		this.id = checkbox.id;
		this.name = checkbox.name;
		this.value = checkbox.value;
		if (checkbox.attributes !== undefined) this.attributes = checkbox.attributes;
	}

	private addListener(id: string){
		document.addEventListener('DOMContentLoaded', function(e) {
			let iconElementIsDefined: boolean = document.getElementById('checkbox-toggle-' + id) !== undefined;
			let iconElementIsNotNull: boolean = document.getElementById('checkbox-toggle-' + id) !== null;
			let checkboxElement: HTMLInputElement = <HTMLInputElement> document.getElementById(id);
			if (iconElementIsDefined && iconElementIsNotNull){
				let iconElement: HTMLElement =  document.getElementById('checkbox-toggle-' + id);
				iconElement.onclick = () => {
					checkboxElement.checked = checkboxElement.checked ? false : true;
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
		return `<input id='${this.id}' name='${this.name}' type='checkbox' value='${this.value}' class='${Style.input}' /><span id='checkbox-toggle-${this.id}' ${htmlAtributes} class='${Style.checkboxIcon}'></span>`;
	}
}

export interface ICheckbox{
	id: string;
	name: string;
	value: string;
	attributes?: string[];
}


export function getModule(checkbox: ICheckbox){
	return new Checkbox(checkbox).createModuleElement();
}
