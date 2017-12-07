const Style = require<any>("../../../../src/modules/01-molecules/messaging/modal.scss");
import * as Button from '../../00-atoms/buttons/button'
import * as ButtonRow from '../../01-molecules/buttons/button-row'

export let counter = 0;
export let eventListeners:string[] = [];

export class Modal {
	id: string;
	triggerElement: string;
	modalElement: IModalElement;
	vueBindings: IVueBindings;
	constructor(modal: IModal) {
		counter += 1;
		this.id = 'quark-modal-' + counter;
		this.triggerElement = modal.triggerElement;
		this.modalElement = modal.modalElement;
		if (modal.modalElement.title !== undefined) this.modalElement.title = modal.modalElement.title;
		this.modalElement.closeButtontext = modal.modalElement.closeButtontext !== undefined ? modal.modalElement.closeButtontext : 'Close';
		this.modalElement.scrollable = modal.modalElement.scrollable !== undefined ? modal.modalElement.scrollable : false;
		this.modalElement.fullscreen = modal.modalElement.fullscreen !== undefined ? modal.modalElement.fullscreen : false;
		this.modalElement.maxWidth = modal.modalElement.maxWidth !== undefined ? modal.modalElement.maxWidth : null;
		this.modalElement.footerButtons = modal.modalElement.footerButtons !== undefined ? modal.modalElement.footerButtons : null;
		if (modal.vueBindings !== undefined) this.vueBindings = modal.vueBindings;
	}

	private getVueBinding(attributeName){
		let vueBinding = false;
		if (this.vueBindings !== undefined){
			vueBinding = this.vueBindings[attributeName] !== undefined ? this.vueBindings[attributeName] : false;
		}
		return vueBinding;
	}

	public initModal(targetId){
		document.addEventListener('DOMContentLoaded', function() {

				//let targetId:string = this.getVueBinding('id') ? '' + this.getVueBinding('id') : this.id;
				let triggerId:string = targetId + '-trigger';
				let closeId:string = targetId + '-close';

				let elementsIsDefined: boolean = document.getElementById(triggerId) !== undefined && document.getElementById(targetId) !== undefined && document.getElementById(closeId) !== undefined;
				let elementsIsNotNull: boolean = document.getElementById(triggerId) !== null && document.getElementById(targetId) !== null && document.getElementById(closeId) !== null;
				if (elementsIsDefined && elementsIsNotNull){
					let triggerElement:HTMLElement = document.getElementById(triggerId);
					let targetElement:HTMLElement = document.getElementById(targetId);
					let closeElement:HTMLElement = document.getElementById(closeId);


					triggerElement.onclick = function(){
						if (triggerElement.classList.contains('active')){
							triggerElement.classList.remove('active');
							targetElement.classList.remove('active');
						}else{
							triggerElement.classList.add('active');
							targetElement.classList.add('active');
						}
					}
					targetElement.onclick = function(event:any){
						let targetClassListIsDefined:boolean = event.target.classList !== undefined;
						if (targetClassListIsDefined){
							let targetClassList:DOMTokenList = event.target.classList;
							if (targetClassList.contains(Style.modalOverlay)){
								triggerElement.classList.remove('active');
								targetElement.classList.remove('active');
							}
						}
					}
					closeElement.onclick = function(event:any){
						triggerElement.classList.remove('active');
						targetElement.classList.remove('active');
					}
				}
			}, false);
	}

	private initAllModals(){
		let self = this;
		document.addEventListener('quarkLazyLoaded', function (){
			let self = this;
			let targetElements = document.getElementsByClassName(Style.modalOverlay);
			for (var i = 0; i < targetElements.length; i++) {

				let targetId = targetElements[i].id;

				let triggerId:string = targetId + '-trigger';
				let closeId:string = targetId + '-close';

				let elementsIsDefined: boolean = document.getElementById(triggerId) !== undefined && document.getElementById(targetId) !== undefined && document.getElementById(closeId) !== undefined;
				let elementsIsNotNull: boolean = document.getElementById(triggerId) !== null && document.getElementById(targetId) !== null && document.getElementById(closeId) !== null;
				if (elementsIsDefined && elementsIsNotNull){
					let triggerElement:HTMLElement = document.getElementById(triggerId);
					let targetElement:HTMLElement = document.getElementById(targetId);
					let closeElement:HTMLElement = document.getElementById(closeId);


					triggerElement.onclick = function(){
						if (triggerElement.classList.contains('active')){
							triggerElement.classList.remove('active');
							targetElement.classList.remove('active');
						}else{
							triggerElement.classList.add('active');
							targetElement.classList.add('active');
						}
					}

					targetElement.onclick = function(event:any){
						let targetClassListIsDefined:boolean = event.target.classList !== undefined;
						if (targetClassListIsDefined){
							let targetClassList:DOMTokenList = event.target.classList;
							if (targetClassList.contains(Style.modalOverlay)){
								triggerElement.classList.remove('active');
								targetElement.classList.remove('active');
							}
						}
					}
					closeElement.onclick = function(event:any){
						triggerElement.classList.remove('active');
						targetElement.classList.remove('active');
					}
				}
			}
		}, false);
	}


	private addListener(){
		let self = this;
		this.initModal(this.id);

		if (!eventListeners.includes('quarkLazyLoaded')){
			this.initAllModals();
			eventListeners.push('quarkLazyLoaded');
		}
	}

	private createTriggerElement(triggerIdAttribute){
		return `<div class='${Style.triggerElementContainer}' ${triggerIdAttribute}>${this.triggerElement}</div>`;
	}

	private createFooterButtonsElement(){
		let closeButton:Button.IButton = {
			type: 'minimal',
			theme: 'primary',
			content: this.modalElement.closeButtontext
		};
		if (this.getVueBinding('id')){
			let idBinding = this.getVueBinding('id');
			closeButton.vueBindings = {id: `${idBinding} + \"-close\"`};
		}else{
			closeButton.id = this.id + '-close';
		}

		let footerButtons: ButtonRow.IButtonRow = {
			buttons: [closeButton]
		}
		if (this.modalElement.footerButtons !== null){
			footerButtons = this.modalElement.footerButtons.buttonRow;
			let beforeCloseButton:boolean = this.modalElement.footerButtons.beforeCloseButton !== undefined ? this.modalElement.footerButtons.beforeCloseButton : false;
			if (beforeCloseButton){
				footerButtons.buttons.push(closeButton);
			}else{
				footerButtons.buttons.unshift(closeButton);
			}
		}
		let footerButtonsElement:string = ButtonRow.getModule(footerButtons);
		return `<div class='${Style.footerButtons}'>${footerButtonsElement}</div>`;
	}

	private setMaxWidth(){
		let modalElementId = this.id + '-modal';
		let modalElementObject = this.modalElement;
		document.addEventListener('DOMContentLoaded', function() {
			let modalElement:HTMLElement = document.getElementById(modalElementId);
			if (modalElementObject.maxWidth !== null && modalElement !== null){
				modalElement.style.maxWidth = modalElementObject.maxWidth;
			}
		}, false);
	}

	public createModuleElement(){
		let hasId: boolean = this.id !== undefined || this.getVueBinding('id');

		let overlayIdAttribute: string = '';
		let modalIdAttribute: string = '';
		let triggerIdAttribute: string = '';
		if (hasId){
			if (this.getVueBinding('id')){
				let id = this.getVueBinding('id');
				overlayIdAttribute = `v-bind:id='${id}'`;
				modalIdAttribute = `v-bind:id='${id} + "-modal"'`;
				triggerIdAttribute = `v-bind:id='${id} + "-trigger"'`;
			}else{
				overlayIdAttribute = `id='${this.id}'`;
				modalIdAttribute = `id='${this.id}-modal'`;
				triggerIdAttribute = `id='${this.id}-trigger'`;
			}
		}

		let triggerElement:string = this.createTriggerElement(triggerIdAttribute);
		let closeElement:string = this.createFooterButtonsElement();
		let modalHeaderElement:string = this.modalElement.title !== undefined ? `<div class='${Style.modalHeader}'>${this.modalElement.title}</div>` : '';
		let scrollableClass:string = this.modalElement.scrollable ? Style.scrollable : '';
		let fullscreenClass:string = this.modalElement.fullscreen ? Style.fullscreen : '';
		this.setMaxWidth();
		this.addListener();
		return `${triggerElement} <div ${overlayIdAttribute} class='${Style.modalOverlay} ${fullscreenClass}'><div ${modalIdAttribute} class='${Style.modal} ${scrollableClass}'><div class='${Style.modalContainer}'>${modalHeaderElement}<div class='${Style.modalContent}'>${this.modalElement.content}</div><div class='${Style.modalFooter}'>${closeElement}</div></div></div></div>`;
	}
}

export interface IVueBindings{
	id?: string;
}

export interface IFooterButtons {
	buttonRow: ButtonRow.IButtonRow;
	beforeCloseButton?: boolean;
}

export interface IModalElement {
	content: string;
	closeButtontext?: string;
	title?: string;
	scrollable?: boolean;
	fullscreen?: boolean;
	maxWidth?: string;
	footerButtons?: IFooterButtons;
}

export interface IModal {
	id: string;
	triggerElement: string;
	modalElement: IModalElement;
	vueBindings?: IVueBindings;
}

export function getModule(modal: IModal){
	return new Modal(modal).createModuleElement();
}

