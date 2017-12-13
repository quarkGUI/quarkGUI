const Style = require<any>("../../../../src/modules/00-atoms/form-elements/input-field.scss");

export let eventListeners:string[] = [];

export class InputField {
	id: string;
	name: string;
	type: string = "text";
	value: any = "";
	placeholder: string = "";
	attributes: string[];
	vueBindings: IVueBindings;
	constructor(inputField: IInputField) {
		this.id = inputField.id;
		this.name = inputField.name;
		if (inputField.type !== undefined) this.type = inputField.type;
		if (inputField.value !== undefined) this.value = inputField.value;
		if (inputField.placeholder !== undefined) this.placeholder = inputField.placeholder;
		if (inputField.attributes !== undefined) this.attributes = inputField.attributes;
		if (inputField.vueBindings !== undefined) this.vueBindings = inputField.vueBindings;

	}

	private getVueBinding(attributeName){
		let vueBinding = false;
		if (this.vueBindings !== undefined){
			vueBinding = this.vueBindings[attributeName] !== undefined ? this.vueBindings[attributeName] : false;
		}
		return vueBinding;
	}

	private initFunction (id?: string) {
		let elementIsDefined: boolean = document.getElementById(id) !== undefined;
		let elementIsNotNull: boolean = document.getElementById(id) !== null;
		if (elementIsDefined && elementIsNotNull){
			let element: HTMLInputElement = <HTMLInputElement> document.getElementById(id);
			element.value && element.value.length ? element.classList.add("is-not-empty") : element.classList.remove("is-not-empty");
			element.onkeyup = function(){
				element.value && element.value.length ? element.classList.add("is-not-empty") : element.classList.remove("is-not-empty");				
			};
		}
	}

	private addListener(){
		let self = this;
		document.addEventListener('DOMContentLoaded', function(){
			self.initFunction()
		}, false);
		if (!eventListeners.includes('quarkLazyLoaded')){
			document.addEventListener('quarkLazyLoaded', function(){
				let targetElements = document.getElementsByClassName(Style.input);
				for (var i = 0; i < targetElements.length; i++){
					self.initFunction(targetElements[i].id);
				}
			}, false);
			eventListeners.push('quarkLazyLoaded');
		}
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
		let hasId: boolean = this.id !== undefined || this.getVueBinding('id');
		let hasName: boolean = this.name !== undefined || this.getVueBinding('name');
		let hasType: boolean = this.type !== undefined;
		let hasValue: boolean = this.value !== undefined || this.getVueBinding('value');
		let hasPlaceholder: boolean = this.placeholder !== undefined || this.getVueBinding('placeholder');

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

		let typeAttribute = '';
		if (hasType){
			typeAttribute = `type='${this.type}'`;
		}

		let valueAttribute = '';
		if (hasValue){
			if (this.getVueBinding('value')){
				let value = this.getVueBinding('value');
				valueAttribute = `v-model='${value}'`;
			}else{
				valueAttribute = `value='${this.value}'`;
			}
		}

		let placeholderAttribute = '';
		if (hasPlaceholder){
			if (this.getVueBinding('placeholder')){
				let placeholder = this.getVueBinding('placeholder');
				placeholderAttribute = `v-bind:placeholder='${placeholder}'`;
			}else{
				placeholderAttribute = `placeholder='${this.placeholder}'`;
			}
		}
		
		this.addListener();

		let htmlAtributes: string = this.attributes !== undefined && this.attributes.length ? this.getHtmlAttributes(this.attributes) : '';
		return `<input ${idAttribute} ${nameAttribute} ${typeAttribute} ${valueAttribute} ${placeholderAttribute} ${htmlAtributes} class='${Style.input}' />`;
	}
}

export interface IVueBindings{
	id?: string;
	name?: string;
	value?: string;
	placeholder?: string;
}

export interface IInputField{
	id?: string;
	name: string;
	type?: string;
	value?: any;
	placeholder?: string;
	attributes?: string[];
	vueBindings?: IVueBindings;
}

export function getModule(inputField: IInputField){
	return new InputField(inputField).createModuleElement();
}
