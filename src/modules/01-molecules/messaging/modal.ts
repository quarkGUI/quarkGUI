const Style = require<any>("../../../../src/modules/01-molecules/messaging/modal.scss");

export class Modal {
	id: string;
	triggerElement: string;
	modalElement: IModalElement;
	constructor(modal: IModal) {
		this.id = modal.id;
		this.triggerElement = modal.triggerElement;
		this.modalElement = modal.modalElement;
		if (modal.modalElement.title !== undefined) this.modalElement.title = modal.modalElement.title;
	}

	private addListener(triggerId:string, targetId:string){
		document.addEventListener('DOMContentLoaded', function() {
			let elementsIsDefined: boolean = document.getElementById(triggerId) !== undefined && document.getElementById(targetId) !== undefined;
			let elementsIsNotNull: boolean = document.getElementById(triggerId) !== null && document.getElementById(targetId) !== null;
			if (elementsIsDefined && elementsIsNotNull){
				let triggerElement:HTMLElement = document.getElementById(triggerId);
				let targetElement:HTMLElement = document.getElementById(targetId);

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
			}
		}, false);
	}

	private createTriggerElement(){
		return `<div id='${this.id}-trigger'>${this.triggerElement}</div>`;
	}

	public createModuleElement(){
		this.triggerElement = this.createTriggerElement();
		this.addListener(this.id + '-trigger', this.id);
		return `${this.triggerElement} <div id='${this.id}' class='${Style.modalOverlay}'><div class='${Style.modal}'><div class='${Style.modalHeader}'>${this.modalElement.title}</div><div class='${Style.modalContent}'>${this.modalElement.content}</div></div></div>`;
	}
}

export interface IModalElement {
	content: string;
	title?: string;
}

export interface IModal {
	id: string;
	triggerElement: string,
	modalElement: IModalElement
	
}

export function getModule(modal: IModal){
	return new Modal(modal).createModuleElement();
}
