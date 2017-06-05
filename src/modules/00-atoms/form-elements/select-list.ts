import * as InputField from './input-field'
const Style = require<any>("../../../../src/modules/00-atoms/form-elements/select-list.scss");

export class SelectList {
	id: string;
	name: string;
	searchable: boolean = false;
	type: string = "text";
	value: any = "";
	placeholder: string = "";
	labelElement: string = "";
	optionElements: string = "";
	attributes: string[];
	constructor(selectList: ISelectList) {
		this.id = selectList.id;
		this.name = selectList.name;
		if (selectList.searchable !== undefined) this.searchable = selectList.searchable;
		if (selectList.type !== undefined) this.type = selectList.type;
		if (selectList.value !== undefined) this.value = selectList.value;
		if (selectList.placeholder !== undefined) this.placeholder = selectList.placeholder;
		if (selectList.labelElement !== undefined) this.labelElement = selectList.labelElement;
		if (selectList.options !== undefined) this.optionElements = this.createOptionElements(selectList.options);
		if (selectList.attributes !== undefined) this.attributes = selectList.attributes;
	}

	private elementIsNotNullOrUndefinedById(id: string){
		return document.getElementById(id) !== undefined && document.getElementById(id) !== null;
	}

	private elementIsNotNullOrUndefinedByTagName(containerElement: HTMLElement, tagName: string){
		return containerElement.getElementsByTagName(tagName).length > 0;
	}

	private addListener(selectList: SelectList, inputField, dropdownList){
		document.addEventListener('DOMContentLoaded', function(e) {
			let selectListElementIsDefined: boolean = selectList.elementIsNotNullOrUndefinedById(selectList.id);
			let inputFieldElementIsDefined: boolean = selectList.elementIsNotNullOrUndefinedById(inputField.id);
			let dropdownListElementIsDefined: boolean = selectList.elementIsNotNullOrUndefinedById(dropdownList.id);

			
			if (selectListElementIsDefined && inputFieldElementIsDefined && dropdownListElementIsDefined){
				let selectListElement:HTMLElement = document.getElementById(selectList.id);
				let inputFieldElement:HTMLInputElement = <HTMLInputElement> document.getElementById(inputField.id);
				var dropdownListElement:HTMLElement = document.getElementById(dropdownList.id);

				let labelElementIsDefined: boolean = selectList.elementIsNotNullOrUndefinedByTagName(selectListElement, "LABEL");

				if (labelElementIsDefined){
					let labelElementList: NodeListOf<Element> = selectListElement.getElementsByTagName("LABEL");
					let labelElement: HTMLElement = <HTMLElement>labelElementList.item(0);
					labelElement.onclick = function(){
						if (inputFieldElementIsDefined){
							inputFieldElement.focus();
						}
					}
				}

				inputFieldElement.value ? inputFieldElement.classList.add("is-not-empty") : inputFieldElement.classList.remove("is-not-empty");
				if (selectList.searchable){
					inputFieldElement.addEventListener("keyup", function(e) {
						inputFieldElement.value.length ? inputFieldElement.classList.add("is-not-empty") : inputFieldElement.classList.remove("is-not-empty");
						var filter = inputFieldElement.value.toUpperCase();
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
					inputFieldElement.addEventListener("keydown", function(e) {
						e.preventDefault();
						return false;
					});
				}
				
				if (dropdownListElementIsDefined){
					dropdownListElement.addEventListener('click', function (e) {
						let target: any = e.target; // Clicked element
						while (target && target.parentNode !== dropdownListElement) {
							target = target.parentNode; // If the clicked element isn't a direct child
							if(!target) { return; } // If element doesn't exist
						}
						if (target.tagName === 'LI'){
							var optionValue = target.getAttribute("data-value");
							inputFieldElement.value = optionValue;
							inputFieldElement.classList.add("is-not-empty");
						}
					});
				}
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
			type: this.type,
			value: this.value,
			placeholder: this.placeholder,
			attributes: this.attributes
		}
		let dropdownList = {
			id: this.id + '-dropdownList'
		}
		let selectListIsReadOnly:boolean = this.attributes !== undefined && this.attributes.indexOf('readonly') > -1;
		let selectListIsDisabled:boolean = this.attributes !== undefined && this.attributes.indexOf('disabled') > -1;

		let readOnlyClass:string = selectListIsReadOnly ? Style.readOnly : '';
		let disabledClass:string = selectListIsDisabled ? Style.disabled : '';
		this.addListener(this, inputField, dropdownList);
		let selectListElement:string = '';
		if (selectListIsReadOnly || selectListIsDisabled){
			selectListElement = `<div id='${this.id}' class='overlay-element ${Style.dropdownContainer} ${readOnlyClass} ${disabledClass}'>${InputField.getModule(inputField)} ${this.labelElement}</div>`;
		}else{
			selectListElement = `<div id='${this.id}' class='overlay-element ${Style.dropdownContainer} ${readOnlyClass} ${disabledClass}'>${InputField.getModule(inputField)} ${this.labelElement}<div class='${Style.dropdownList}'><ul id='${dropdownList.id}'>${this.optionElements}</ul></div></div>`;
		}
		return selectListElement;
	}
}

export interface IOptions{
	name: string;
	value: any;
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
}

export function getModule(selectList: ISelectList){
	return new SelectList(selectList).createModuleElement();
}

