const Style = require<any>("../../../../src/modules/01-molecules/messaging/modal.scss");
import * as Button from '../../00-atoms/buttons/button'
import * as ButtonRow from '../../01-molecules/buttons/button-row'

export class Modal {
	id: string;
	triggerElement: string;
	modalElement: IModalElement;
	constructor(modal: IModal) {
		this.id = modal.id;
		this.triggerElement = modal.triggerElement;
		this.modalElement = modal.modalElement;
		if (modal.modalElement.title !== undefined) this.modalElement.title = modal.modalElement.title;
		this.modalElement.closeButtontext = modal.modalElement.closeButtontext !== undefined ? modal.modalElement.closeButtontext : 'Close';
		this.modalElement.scrollable = modal.modalElement.scrollable !== undefined ? modal.modalElement.scrollable : false;
		this.modalElement.fullscreen = modal.modalElement.fullscreen !== undefined ? modal.modalElement.fullscreen : false;
		this.modalElement.maxWidth = modal.modalElement.maxWidth !== undefined ? modal.modalElement.maxWidth : null;
		this.modalElement.footerButtons = modal.modalElement.footerButtons !== undefined ? modal.modalElement.footerButtons : null;
	}

	private addListener(triggerId:string, targetId:string, closeId:string){
		document.addEventListener('DOMContentLoaded', function() {
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

	private createTriggerElement(){
		return `<div class='${Style.triggerElementContainer}' id='${this.id}-trigger'>${this.triggerElement}</div>`;
	}

	private createFooterButtonsElement(){
		let closeButton:Button.IButton = {
			id: this.id + '-close',
			type: 'minimal',
			theme: 'primary',
			content: this.modalElement.closeButtontext
		};
		let footerButtons: ButtonRow.IButtonRow = {
			buttons: []
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
			if (modalElementObject.maxWidth !== null){
				modalElement.style.maxWidth = modalElementObject.maxWidth;
			}
		}, false);
	}

	public createModuleElement(){
		let triggerElement:string = this.createTriggerElement();
		let closeElement:string = this.createFooterButtonsElement();
		let modalHeaderElement:string = this.modalElement.title !== undefined ? `<div class='${Style.modalHeader}'>${this.modalElement.title}</div>` : '';
		let scrollableClass:string = this.modalElement.scrollable ? Style.scrollable : '';
		let fullscreenClass:string = this.modalElement.fullscreen ? Style.fullscreen : '';
		this.setMaxWidth();
		this.addListener(this.id + '-trigger', this.id, this.id + '-close');
		return `${triggerElement} <div id='${this.id}' class='${Style.modalOverlay} ${fullscreenClass}'><div id="${this.id}-modal" class='${Style.modal} ${scrollableClass}'><div class='${Style.modalContainer}'>${modalHeaderElement}<div class='${Style.modalContent}'>${this.modalElement.content}</div><div class='${Style.modalFooter}'>${closeElement}</div></div></div></div>`;
	}
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
	triggerElement: string,
	modalElement: IModalElement
	
}

export function getModule(modal: IModal){
	return new Modal(modal).createModuleElement();
}
