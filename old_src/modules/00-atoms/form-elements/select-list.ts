import * as InputField from './input-field'
const Style = require<any>("../../../../src/modules/00-atoms/form-elements/select-list.scss");

export let eventListeners:string[] = [];

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
	inputField: InputField.IInputField;
	searchInputField: InputField.IInputField;
	dropdownList: {id: string};
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

	private initFunction(id?: string){
		let selectListId = id != undefined ? id : this.id;
		let inputFieldId = id != undefined ? id + '-input' : this.inputField.id;
		let searchInputFieldId = id != undefined ? id + '-search' : this.searchInputField.id;

		let selectListElementIsDefined: boolean = this.elementIsNotNullOrUndefinedById(selectListId);
		let inputFieldElementIsDefined: boolean = this.elementIsNotNullOrUndefinedById(inputFieldId);
		let searchInputFieldElementIsDefined: boolean = this.elementIsNotNullOrUndefinedById(searchInputFieldId);

		if (selectListElementIsDefined && inputFieldElementIsDefined){
			let selectListElement:HTMLElement = document.getElementById(selectListId);
			let inputFieldElement:HTMLInputElement = <HTMLInputElement> document.getElementById(inputFieldId);
			let searchInputFieldElement:HTMLInputElement = <HTMLInputElement> document.getElementById(searchInputFieldId);

			let dropdownListElements:NodeListOf<Element> = selectListElement.getElementsByClassName(Style.dropdownList);
			let dropdownListElementIsDefined: boolean = dropdownListElements.length > 0;
			if (dropdownListElementIsDefined){

				var dropdownListElement:Element = dropdownListElements[0];


				let labelElementIsDefined: boolean = this.elementIsNotNullOrUndefinedByTagName(selectListElement, "LABEL");

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
				if (this.searchable){
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
					if (selectListElement.id == selectListId){
						let target: any = e.target; 
						while (target && target.parentNode !== dropdownListElement) {
							target = target.parentNode; 
							if(!target) { return; } 
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

		}
	}

	private addListener(){
		let self = this;
		document.addEventListener('DOMContentLoaded', function(e) {
			self.initFunction();
		}, false);
		if (!eventListeners.includes('quarkLazyLoaded')){
			document.addEventListener('quarkLazyLoaded', function(){
				let targetElements = document.getElementsByClassName(Style.dropdownContainer);
				for (var i = 0; i < targetElements.length; i++){
					self.initFunction(targetElements[i].id);
				}
			}, false);
			eventListeners.push('quarkLazyLoaded');

		}
	}

	private createOptionElements(options: IOptions[]){
		let optionElements: string = "";
		for (let option of options){
			optionElements += `<li data-value='${option.value}'>${option.name}</li>`;
		}
		return optionElements;
	}
	public createModuleElement() {
		this.inputField = {
			name: this.name,
			type: 'hidden',
			value: this.value,
			placeholder: this.placeholder,
			attributes: this.attributes
		}
		if (this.getVueBinding('id')){
			let idBinding = this.getVueBinding('id');
			this.inputField.vueBindings = {id: `${idBinding} + \"-input\"`};
		}else{
			this.inputField.id = this.id + '-input';
		}

		this.searchInputField = {
			name: this.name + '-search',
			type: 'text',
			value: '',
			placeholder: this.placeholder,
			attributes: this.attributes
		}
		if (this.getVueBinding('id')){
			let idBinding = this.getVueBinding('id');
			this.searchInputField.vueBindings = {id: `${idBinding} + \"-search\"`};
		}else{
			this.searchInputField.id = this.id + '-search';
		}

		this.dropdownList = {
			id: this.id + '-dropdownList'
		}
		if (this.vueBindings !== undefined){
			if (this.vueBindings.value !== undefined){
				this.inputField.vueBindings = this.inputField.vueBindings !== undefined ? this.inputField.vueBindings : {};
				this.inputField.vueBindings.value = this.vueBindings.value;
			}
		}


		let selectListIsReadOnly:boolean = this.attributes !== undefined && this.attributes.indexOf('readonly') > -1;
		let selectListIsDisabled:boolean = this.attributes !== undefined && this.attributes.indexOf('disabled') > -1;

		let hasId: boolean = this.id !== undefined || this.getVueBinding('id');
		let containerIdAttribute: string = '';
		if (hasId){
			if (this.getVueBinding('id')){
				let id = this.getVueBinding('id');
				containerIdAttribute = `v-bind:id='${id}'`;
			}else{
				containerIdAttribute = `id='${this.id}'`;
			}
		}

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
		this.addListener();
		let selectListElement:string = '';
		if (selectListIsReadOnly || selectListIsDisabled){
			selectListElement = `<div ${containerIdAttribute} class='overlay-element ${Style.dropdownContainer} ${readOnlyClass} ${disabledClass}'>${InputField.getModule(this.inputField)} ${InputField.getModule(this.searchInputField)} ${this.labelElement}</div>`;
		}else{
			selectListElement = `<div ${containerIdAttribute} class='overlay-element ${Style.dropdownContainer} ${readOnlyClass} ${disabledClass}'>${InputField.getModule(this.inputField)} ${InputField.getModule(this.searchInputField)} ${this.labelElement}<div class='${Style.dropdownListContainer}'><ul class='${Style.dropdownList}' id='${this.dropdownList.id}'>${optionElements}</ul></div></div>`;
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
	id?: string;
}

export interface ISelectList{
	id?: string;
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

