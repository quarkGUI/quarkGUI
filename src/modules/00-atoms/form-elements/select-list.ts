import * as InputField from './input-field'
const Style = require<any>("../../../../src/modules/00-atoms/form-elements/select-list.scss");

export class SelectList {
	id: string;
	name: string;
	searchable?: boolean = false;
	type?: string = "text";
	value?: any = "";
	placeholder?: string = "";
	labelElement?: string = "";
	options?: IOptions[];
	attributes?: string[];
	vueBindings?: IVueBindings;
	constructor(selectList: ISelectList) {
		this.id = selectList.id;
		this.name = selectList.name;
		if (selectList.searchable !== undefined) this.searchable = selectList.searchable;
		if (selectList.type !== undefined) this.type = selectList.type;
		if (selectList.value !== undefined) this.value = selectList.value;
		if (selectList.placeholder !== undefined) this.placeholder = selectList.placeholder;
		if (selectList.labelElement !== undefined) this.labelElement = selectList.labelElement;
		if (selectList.options !== undefined) this.options = selectList.options;
		if (selectList.attributes !== undefined) this.attributes = selectList.attributes;
		if (selectList.vueBindings !== undefined) this.vueBindings = selectList.vueBindings;
	}

	private elementIsNotNullOrUndefinedById(id: string){
		return document.getElementById(id) !== undefined && document.getElementById(id) !== null;
	}

	private elementIsNotNullOrUndefinedByTagName(containerElement: HTMLElement, tagName: string){
		return containerElement.getElementsByTagName(tagName).length > 0;
	}

	private getVueBinding(attributeName){
		let vueBinding = false;
		if (this.vueBindings !== undefined){
			vueBinding = this.vueBindings[attributeName] !== undefined ? this.vueBindings[attributeName] : false;
		}
		return vueBinding;
	}

	private addListener(selectList: SelectList, inputField, searchInputField, dropdownList){
		document.addEventListener('DOMContentLoaded', function(e) {
			let selectListElementIsDefined: boolean = selectList.elementIsNotNullOrUndefinedById(selectList.id);
			let inputFieldElementIsDefined: boolean = selectList.elementIsNotNullOrUndefinedById(inputField.id);
			let searchInputFieldElementIsDefined: boolean = selectList.elementIsNotNullOrUndefinedById(searchInputField.id);
			let dropdownListElementIsDefined: boolean = selectList.elementIsNotNullOrUndefinedById(dropdownList.id);

			
			if (selectListElementIsDefined && inputFieldElementIsDefined && dropdownListElementIsDefined){
				let selectListElement:HTMLElement = document.getElementById(selectList.id);
				let inputFieldElement:HTMLInputElement = <HTMLInputElement> document.getElementById(inputField.id);
				let searchInputFieldElement:HTMLInputElement = <HTMLInputElement> document.getElementById(searchInputField.id);
				var dropdownListElement:HTMLElement = document.getElementById(dropdownList.id);

				let labelElementIsDefined: boolean = selectList.elementIsNotNullOrUndefinedByTagName(selectListElement, "LABEL");

				if (labelElementIsDefined){
					let labelElementList: NodeListOf<Element> = selectListElement.getElementsByTagName("LABEL");
					let labelElement: HTMLElement = <HTMLElement>labelElementList.item(0);
					labelElement.onclick = function(){
						if (searchInputFieldElementIsDefined){
							searchInputFieldElement.focus();
						}
					}
				}

				inputFieldElement.value ? searchInputFieldElement.classList.add("is-not-empty") : searchInputFieldElement.classList.remove("is-not-empty");
				if (selectList.searchable){
					searchInputFieldElement.addEventListener("keyup", function(e) {
						searchInputFieldElement.value.length ? searchInputFieldElement.classList.add("is-not-empty") : searchInputFieldElement.classList.remove("is-not-empty");
						var filter = searchInputFieldElement.value.toUpperCase();
						var listItems = dropdownListElement.getElementsByTagName('li');
						for (var i = 0; i < listItems.length; i++) {
							if (listItems[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
								listItems[i].style.display = "";
							} else {
								listItems[i].style.display = "none";
							}
						}
					});
				}else{
					searchInputFieldElement.addEventListener("keydown", function(e) {
						e.preventDefault();
						return false;
					});
				}
				
				dropdownListElement.addEventListener('click', function (e) {
					let target: any = e.target; // Clicked element
					while (target && target.parentNode !== dropdownListElement) {
						target = target.parentNode; // If the clicked element isn't a direct child
						if(!target) { return; } // If element doesn't exist
					}
					if (target.tagName === 'LI'){
						let optionValue = target.getAttribute("data-value");
						let optionName = target.innerHTML;
						inputFieldElement.value = optionValue;
						searchInputFieldElement.value = optionName;
						searchInputFieldElement.classList.add("is-not-empty");

						var event = document.createEvent('Event');
						event.initEvent('input', true, true);
						inputFieldElement.dispatchEvent(event);
					}
				});

				selectListElement.addEventListener('click', function (e) {
					let target: any = e.target; // Clicked element
					if (target.tagName !== 'LI' && target.tagName !== 'INPUT' && target.tagName !== 'LABEL'){
						setTimeout( function(){
							selectListElement.classList.remove("active");
						}, 1 );
					}
				});
				
			}
		}, false);
	}

	private createOptionElements(options: IOptions[]){
		let optionElements: string = "";
		for (let option of options){
			optionElements += `<li data-value='${option.value}'>${option.name}</li>`;
		}
		return optionElements;
	}
	public createModuleElement() {
		let inputField: InputField.IInputField = {
			id: this.id + '-input',
			name: this.name,
			type: 'hidden',
			value: this.value,
			placeholder: this.placeholder,
			attributes: this.attributes
		}
		let searchInputField: InputField.IInputField = {
			id: this.id + '-search',
			name: this.name + '-search',
			type: 'text',
			value: '',
			placeholder: this.placeholder,
			attributes: this.attributes
		}
		if (this.vueBindings !== undefined){
			if (this.vueBindings.value !== undefined){
				inputField.vueBindings = inputField.vueBindings !== undefined ? inputField.vueBindings : {};
				inputField.vueBindings.value = this.vueBindings.value;
			}
		}

		let dropdownList = {
			id: this.id + '-dropdownList'
		}
		let selectListIsReadOnly:boolean = this.attributes !== undefined && this.attributes.indexOf('readonly') > -1;
		let selectListIsDisabled:boolean = this.attributes !== undefined && this.attributes.indexOf('disabled') > -1;

		let hasOptions: boolean = this.options !== undefined || this.getVueBinding('options');
		let optionElements = '';
		if (hasOptions){
			if (this.getVueBinding('options')){
				let options = this.getVueBinding('options');
				optionElements = `<li v-for="option in ${options}" v-bind:data-value="option.value">{{option.name}}</li>`;
			}else{
				optionElements = this.createOptionElements(this.options);
			}
		}
		

		let readOnlyClass:string = selectListIsReadOnly ? Style.readOnly : '';
		let disabledClass:string = selectListIsDisabled ? Style.disabled : '';
		this.addListener(this, inputField, searchInputField, dropdownList);
		let selectListElement:string = '';
		if (selectListIsReadOnly || selectListIsDisabled){
			selectListElement = `<div id='${this.id}' class='overlay-element ${Style.dropdownContainer} ${readOnlyClass} ${disabledClass}'>${InputField.getModule(inputField)} ${InputField.getModule(searchInputField)} ${this.labelElement}</div>`;
		}else{
			selectListElement = `<div id='${this.id}' class='overlay-element ${Style.dropdownContainer} ${readOnlyClass} ${disabledClass}'>${InputField.getModule(inputField)} ${InputField.getModule(searchInputField)} ${this.labelElement}<div class='${Style.dropdownList}'><ul id='${dropdownList.id}'>${optionElements}</ul></div></div>`;
		}
		return selectListElement;
	}
}

export interface IOptions{
	name: string;
	value: any;
}

export interface IVueBindings{
	options?: string;
	value?: any;
}

export interface ISelectList{
	id: string;
	name: string;
	searchable?: boolean;
	type?: string;
	value?: any;
	placeholder?: string;
	labelElement?: string;
	options?: IOptions[];
	attributes?: string[];
	vueBindings?: IVueBindings;
}

export function getModule(selectList: ISelectList){
	return new SelectList(selectList).createModuleElement();
}

