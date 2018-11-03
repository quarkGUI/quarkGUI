const Style = require<any>("../../../../src/modules/00-atoms/form-elements/checkbox.scss");

export class Checkbox {
	id: string;
	name: string;
	value: string;
	attributes: string[];
	vueBindings: IVueBindings;
	constructor(checkbox: ICheckbox) {
		this.id = checkbox.id;
		this.name = checkbox.name;
		this.value = checkbox.value;
		if (checkbox.attributes !== undefined) this.attributes = checkbox.attributes;
		if (checkbox.vueBindings !== undefined) this.vueBindings = checkbox.vueBindings;

	}

	private getVueBinding(attributeName){
		let vueBinding = false;
		if (this.vueBindings !== undefined){
			vueBinding = this.vueBindings[attributeName] !== undefined ? this.vueBindings[attributeName] : false;
		}
		return vueBinding;
	}

	private addListener(id: string){
		document.addEventListener('DOMContentLoaded', function(e) {
			let iconElementIsDefined: boolean = document.getElementById('checkbox-toggle-' + id) !== undefined;
			let iconElementIsNotNull: boolean = document.getElementById('checkbox-toggle-' + id) !== null;
			let checkboxElement: HTMLInputElement = <HTMLInputElement> document.getElementById(id);
			if (iconElementIsDefined && iconElementIsNotNull){
				let iconElement: HTMLElement =  document.getElementById('checkbox-toggle-' + id);
				iconElement.onclick = () => {
					
					if (!checkboxElement.disabled && !checkboxElement.readOnly){
						checkboxElement.checked = checkboxElement.checked ? false : true;

						var event = document.createEvent('Event');
						event.initEvent('click', true, true);
						checkboxElement.dispatchEvent(event);
					}

				};
				if (checkboxElement.readOnly){
					checkboxElement.onclick = () => { return false };
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
		let checkboxIsReadOnly:boolean = this.attributes !== undefined && this.attributes.indexOf('readonly') > -1;
		let checkboxIsDisabled:boolean = this.attributes !== undefined && this.attributes.indexOf('disabled') > -1;
		let checkboxIsChecked:boolean = this.attributes !== undefined && this.attributes.indexOf('checked') > -1;

		let hasId: boolean = this.id !== undefined || this.getVueBinding('id');
		let hasName: boolean = this.name !== undefined || this.getVueBinding('name');
		let hasValue: boolean = this.value !== undefined;
		let hasVueValue: boolean = this.getVueBinding('value');

		let idAttribute = '';
		if (hasId){
			if (this.getVueBinding('id')){
				let id = this.getVueBinding('id');
				idAttribute = `v-bind:id='${id}'`;
			}else{
				idAttribute = `id='${this.id}'`;
			}
		}

		let nameAttribute = '';
		if (hasName){
			if (this.getVueBinding('name')){
				let name = this.getVueBinding('name');
				nameAttribute = `v-bind:name='${name}'`;
			}else{
				nameAttribute = `name='${this.name}'`;
			}
		}

		let valueAttribute = '';
		if (hasValue){
			valueAttribute = `value='${this.value}'`;
		}

		let vueValueAttribute = '';
		if (hasVueValue){
			let value = this.getVueBinding('value');
			vueValueAttribute = `v-model='${value}'`;
		}

		let readOnlyAttribute:string = checkboxIsReadOnly ? 'readonly' : '';
		let disabledAttribute:string = checkboxIsDisabled ? 'disabled' : '';
		let readOnlyClass:string = checkboxIsReadOnly ? Style.readOnly : '';
		let disabledClass:string = checkboxIsDisabled ? Style.disabled : '';
		let checkedAttribute:string = checkboxIsChecked ? 'checked' : '';

		this.addListener(this.id);
		let htmlAtributes: string = this.attributes !== undefined && this.attributes.length ? this.getHtmlAttributes(this.attributes) : '';
		return `<input ${idAttribute} ${nameAttribute} type='checkbox' ${readOnlyAttribute} ${disabledAttribute} ${checkedAttribute} ${valueAttribute} ${vueValueAttribute} class='${Style.input} ${readOnlyAttribute} ${disabledAttribute}' /><span id='checkbox-toggle-${this.id}' ${htmlAtributes} class='${Style.checkboxIcon}'></span>`;
	}
}

export interface IVueBindings{
	id?: string;
	name?: string;
	value?: string;
}

export interface ICheckbox{
	id: string;
	name: string;
	value: string;
	attributes?: string[];
	vueBindings?: IVueBindings;
}


export function getModule(checkbox: ICheckbox){
	return new Checkbox(checkbox).createModuleElement();
}
