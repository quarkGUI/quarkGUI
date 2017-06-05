const Style = require<any>("../../../../src/modules/01-molecules/messaging/modal.scss");
import * as Button from '../../00-atoms/buttons/button'

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

	private createCloseElement(){
		let closeButtonElement:string = Button.getModule({
			id: this.id + '-close',
			type: 'minimal',
			content: this.modalElement.closeButtontext
		});
		return `<div class='${Style.footerButtons}'>${closeButtonElement}</div>`;
	}

	public createModuleElement(){
		let triggerElement:string = this.createTriggerElement();
		let closeElement:string = this.createCloseElement();
		let scrollableClass:string = this.modalElement.scrollable ? Style.scrollable : '';
		this.addListener(this.id + '-trigger', this.id, this.id + '-close');
		return `${triggerElement} <div id='${this.id}' class='${Style.modalOverlay}'><div class='${Style.modal} ${scrollableClass}'><div class='${Style.modalContainer}'><div class='${Style.modalHeader}'>${this.modalElement.title}</div><div class='${Style.modalContent}'>${this.modalElement.content}</div><div class='${Style.modalFooter}'>${closeElement}</div></div></div></div>`;
	}
}

export interface IModalElement {
	content: string;
	closeButtontext?: string;
	title?: string;
	scrollable?: boolean;
}

export interface IModal {
	id: string;
	triggerElement: string,
	modalElement: IModalElement
	
}

export function getModule(modal: IModal){
	return new Modal(modal).createModuleElement();
}
