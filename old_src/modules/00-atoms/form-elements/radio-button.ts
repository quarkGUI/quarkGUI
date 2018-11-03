const Style = require<any>("../../../../src/modules/00-atoms/form-elements/radio-button.scss");

export class RadioButton {
	id: string;
	name: string;
	value: string;
	attributes: string[];
	constructor(radioButton: IRadioButton) {
		this.id = radioButton.id;
		this.name = radioButton.name;
		this.value = radioButton.value;
		if (radioButton.attributes !== undefined) this.attributes = radioButton.attributes;
	}

	private addListener(id: string){
		document.addEventListener('DOMContentLoaded', function(e) {
			let iconElementIsDefined: boolean = document.getElementById('radio-toggle-' + id) !== undefined;
			let iconElementIsNotNull: boolean = document.getElementById('radio-toggle-' + id) !== null;
			let radioButtonElement: HTMLInputElement = <HTMLInputElement> document.getElementById(id);
			if (iconElementIsDefined && iconElementIsNotNull){
				let iconElement: HTMLElement =  document.getElementById('radio-toggle-' + id);
				iconElement.onclick = () => {
					
					if (!radioButtonElement.disabled && !radioButtonElement.readOnly){
						radioButtonElement.checked = radioButtonElement.checked ? false : true;

						var event = document.createEvent('Event');
						event.initEvent('click', true, true);
						radioButtonElement.dispatchEvent(event);
					}

				};
				if (radioButtonElement.readOnly){
					radioButtonElement.onclick = () => { return false };
				}
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
		let radioButtonIsReadOnly:boolean = this.attributes !== undefined && this.attributes.indexOf('readonly') > -1;
		let radioButtonIsDisabled:boolean = this.attributes !== undefined && this.attributes.indexOf('disabled') > -1;
		let radioButtonIsChecked:boolean = this.attributes !== undefined && this.attributes.indexOf('checked') > -1;

		let readOnlyAttribute:string = radioButtonIsReadOnly ? 'readonly' : '';
		let disabledAttribute:string = radioButtonIsDisabled ? 'disabled' : '';
		let readOnlyClass:string = radioButtonIsReadOnly ? Style.readOnly : '';
		let disabledClass:string = radioButtonIsDisabled ? Style.disabled : '';
		let checkedAttribute:string = radioButtonIsChecked ? 'checked' : '';

		this.addListener(this.id);
		let htmlAtributes: string = this.attributes !== undefined && this.attributes.length ? this.getHtmlAttributes(this.attributes) : '';
		return `<input id='${this.id}' name='${this.name}' type='radio' ${readOnlyAttribute} ${disabledAttribute} ${checkedAttribute} value='${this.value}' ${htmlAtributes} class='${Style.input} ${readOnlyAttribute} ${disabledAttribute}' /><span id='radio-toggle-${this.id}' class='${Style.radioIcon}'></span>`;
	}
}


export interface IRadioButton{
	id: string;
	name: string;
	value: string;
	attributes?: string[];
}


export function getModule(radioButton: IRadioButton){
	return new RadioButton(radioButton).createModuleElement();
}
