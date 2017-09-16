import axios from 'axios';

const Style = require<any>("../../../../src/modules/00-atoms/buttons/button.scss");

export class Button {
	id: string = "";
	link: string = "#";
	iconClass: string = "";
	content: string = "";
	title: string;
	type?: string = "flat";
	theme?: string = "default";
	submit?: boolean = false;
	attributes: string[];
	formWrapper: IFormWrapper;
	ajaxOptions?: IAjaxOptions;
	vueBindings: IVueBindings;

	constructor(button: IButton) {
		this.id = button.id;
		if (button.id !== undefined) this.id = button.id;
		if (button.link !== undefined) this.link = button.link;
		if (button.iconClass !== undefined) this.iconClass = button.iconClass;
		if (button.content !== undefined ) this.content = button.content;
		if (button.title !== undefined ) this.title = button.title;
		if (button.type !== undefined) this.type = button.type;
		if (button.theme !== undefined) this.theme = button.theme;
		if (button.submit !== undefined) this.submit = button.submit;
		if (button.attributes !== undefined) this.attributes = button.attributes;
		if (button.ajaxOptions !== undefined){
			this.ajaxOptions = button.ajaxOptions;
			this.ajaxOptions.getDataFromElements = button.ajaxOptions.getDataFromElements !== undefined ? button.ajaxOptions.getDataFromElements : false;
		}

		if (button.formWrapper !== undefined){
			this.formWrapper = {
				formAction: button.formWrapper.formAction !== undefined ? button.formWrapper.formAction : '',
				formMethod: button.formWrapper.formMethod !== undefined ? button.formWrapper.formMethod : '',
				hiddenFields: button.formWrapper.hiddenFields !== undefined && button.formWrapper.hiddenFields.length ? button.formWrapper.hiddenFields : []
			};
		}

		if (button.vueBindings !== undefined) this.vueBindings = button.vueBindings;

	}

	private getVueBinding(attributeName){
		let vueBinding = false;
		if (this.vueBindings !== undefined){
			vueBinding = this.vueBindings[attributeName] !== undefined ? this.vueBindings[attributeName] : false;
		}
		return vueBinding;
	}

	private getFormWrapperVueBinding(attributeName){
		let vueBinding = false;
		if (this.formWrapper.vueBindings !== undefined){
			vueBinding = this.formWrapper.vueBindings[attributeName] !== undefined ? this.formWrapper.vueBindings[attributeName] : false;
		}
		return vueBinding;
	}

	private getFormWrapperHiddenFieldVueBinding(attributeName, hiddenField: IHiddenField){
		let vueBinding = false;
		if (hiddenField.vueBindings !== undefined){
			vueBinding = hiddenField.vueBindings[attributeName] !== undefined ? hiddenField.vueBindings[attributeName] : false;
		}
		return vueBinding;
	}

	private getThemeClass(theme: string){
		let themeClass = Style.buttonThemeDefault;
		if (theme == "primary")	themeClass = Style.buttonThemePrimary;
		if (theme == "info") 	themeClass = Style.buttonThemeInfo;
		if (theme == "success")	themeClass = Style.buttonThemeSuccess;
		if (theme == "warning")	themeClass = Style.buttonThemeWarning;
		if (theme == "danger") 	themeClass = Style.buttonThemeDanger;
		return themeClass;
	}

	private getTypeClass(type: string){
		let typeClass = Style.buttonTypeFlat;
		if (type == "raised") typeClass = Style.buttonTypeRaised;
		if (type == "minimal") typeClass = Style.buttonTypeMinimal;
		return typeClass;
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

	private addHiddenFields(){
		let hiddenFieldsElement = '';
		if (this.formWrapper.hiddenFields !== undefined && this.formWrapper.hiddenFields.length){
			this.formWrapper.hiddenFields.forEach(function (hiddenField){

				let nameAttribute = '';
				if (this.getFormWrapperHiddenFieldVueBinding('name', hiddenField)){
					let name = this.getFormWrapperVueBinding('name', hiddenField);
					nameAttribute = `v-bind:name='${name}'`;
				} else{
					nameAttribute = `name='${hiddenField.name}'`;
				}

				let valueAttribute = '';
				if (this.getFormWrapperHiddenFieldVueBinding('value', hiddenField)){
					let value = this.getFormWrapperVueBinding('value', hiddenField);
					valueAttribute = `v-bind:value='${value}'`;
				} else{
					valueAttribute = `value='${hiddenField.value}'`;
				}

				hiddenFieldsElement += `<input type='hidden' ${nameAttribute} ${valueAttribute} />`;
			}.bind(this));
		}
		return hiddenFieldsElement;
	}

	private addFormWrapper(moduleElement:string){
		let hiddenFields:string = this.addHiddenFields();
		
		let formActionAttribute = '';
		if (this.getFormWrapperVueBinding('formAction')){
			let formAction = this.getFormWrapperVueBinding('formAction');
			formActionAttribute = `v-bind:action='${formAction}'`;
		} else{
			formActionAttribute = `action='${this.formWrapper.formAction}'`;
		}

		let formMethodAttribute = '';
		if (this.getFormWrapperVueBinding('formMethod')){
			let formMethod = this.getFormWrapperVueBinding('formMethod');
			formMethodAttribute = `v-bind:method='${formMethod}'`;
		} else{
			formMethodAttribute = `method='${this.formWrapper.formMethod}'`;
		}

		return `<form ${formActionAttribute} ${formMethodAttribute} class='${Style.formWrapper}'>${hiddenFields}${moduleElement}</form>`;
	}

	private addAjaxListener(){
		let button = this;
		document.addEventListener('DOMContentLoaded', function() {
			if (button.ajaxOptions !== undefined){
				
				if (button.id !== undefined){
					let buttonElement:HTMLElement = document.getElementById(button.id);
					
					buttonElement.onclick = function(){
						if (button.ajaxOptions.csrfToken !== undefined){
							axios.defaults.headers.common['X-CSRF-TOKEN'] = button.ajaxOptions.csrfToken;
						}
						if (button.ajaxOptions.method == 'post' || button.ajaxOptions.method == 'put'){
							let ajaxData = button.ajaxOptions.data !== undefined ? button.ajaxOptions.data : {};

							if (button.ajaxOptions.getDataFromElements && button.ajaxOptions.dataFromElements !== undefined){
								button.ajaxOptions.dataFromElements.forEach(function (dataFromElement){
									let inputElement:HTMLInputElement = <HTMLInputElement> document.getElementById(dataFromElement.elementId);
									if (inputElement !== null){
										ajaxData[dataFromElement.name] = inputElement.value;
									}
								});
							}

							axios({
								method: button.ajaxOptions.method,
								url: button.ajaxOptions.url,
								data: ajaxData
							});
						}
					}
				}else {
					console.log("Button with ajaxOptions should have an id attribute");
				}
			}
		});
	}

	public createModuleElement() {
		let themeClass = this.getThemeClass(this.theme)
		let typeClass = (this.type !== undefined) ? this.getTypeClass(this.type) : Style.buttonTypeFlat;

		let hasTitle: boolean = this.title !== undefined || this.getVueBinding('title');
		let hasContent: boolean = this.content !== undefined || this.getVueBinding('content');
		let hasLink: boolean = this.link !== undefined || this.getVueBinding('link');
		let hasIconClass: boolean = this.iconClass !== undefined || this.getVueBinding('iconClass');

		let isSubmitButton:boolean = this.submit !== undefined && this.submit === true;
		let htmlAtributes: string = this.attributes !== undefined && this.attributes.length ? this.getHtmlAttributes(this.attributes) : '';
		let moduleElement:string = '';

		let titleAttribute: string = '';
		if (hasTitle){
			if (this.getVueBinding('title')){
				let title = this.getVueBinding('title');
				titleAttribute = `v-bind:title='${title}'`;
			}else{
				titleAttribute = `title='${this.iconClass}'`;
			}
		}

		let content: any = '';
		if (hasContent){
			if (this.getVueBinding('content')){
				content = "{{ " + this.getVueBinding('content') + " }}";
			}else{
				content = this.content;
			}
		}

		let hrefAttribute: string = '';
		if (hasLink){
			if (this.getVueBinding('link')){
				let link = this.getVueBinding('link');
				hrefAttribute = `v-bind:href='${link}'`;
			}else{
				hrefAttribute = `href='${this.link}'`;
			}
		}

		let iconElement: string = '';
		if (hasIconClass){
			let iconClassAttribute = '';
			if (this.getVueBinding('iconClass')){
				let iconClass = this.getVueBinding('iconClass');
				iconClassAttribute = `class='${Style.icon}' v-bind:class='${iconClass}'`;
			}else{
				iconClassAttribute = `class='${Style.icon} ${this.iconClass}'`;
			}
			iconElement = `<span ${iconClassAttribute}></span>`;
		}

		
		if (isSubmitButton){
			moduleElement = `<button type='submit' id='${this.id}' ${htmlAtributes} class='${Style.button} ${typeClass} ${themeClass}'>${iconElement} ${content}</button>`;
		}else{
			moduleElement = `<a id='${this.id}' ${titleAttribute} ${hrefAttribute} ${htmlAtributes} class='${Style.button} ${typeClass} ${themeClass}'>${iconElement} ${content}</a>`;
		}

		if (this.formWrapper !== undefined){
			moduleElement = this.addFormWrapper(moduleElement);
		}

		this.addAjaxListener();

		return moduleElement;
	}
}

export interface IHiddenFieldVueBindings {
	name: string;
	value: string;
}

export interface IHiddenField {
	name?: string;
	value?: string;
	vueBindings?: IHiddenFieldVueBindings;
}

export interface IFormWrapperVueBindings {
	formAction?: string;
	formMethod?: string;
}

export interface IFormWrapper {
	formAction?: string;
	formMethod?: string;
	hiddenFields?: IHiddenField[];
	vueBindings?: IFormWrapperVueBindings;
}

export interface IDataFromElement {
	name: string;
	elementId: string;
}

export interface IAjaxOptions {
	method: string;
	url: string;
	data?: object;
	csrfToken?: string;
	getDataFromElements?: boolean;
	dataFromElements?: IDataFromElement[];
}

export interface IVueBindings{
	title?: string;
	content?: string;
	link?: string;
	iconClass?: string;
}

export interface IButton {
	id?: string; 
	type?: string; 
	theme?: string;
	link ?: string; 
	iconClass?: string; 
	content?: string;
	title?: string;
	submit?: boolean;
	attributes?: string[];
	formWrapper?: IFormWrapper;
	ajaxOptions?: IAjaxOptions;
	vueBindings?: IVueBindings;
}

export function getModule(button: IButton){
	return new Button(button).createModuleElement();
}
