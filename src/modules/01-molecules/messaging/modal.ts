const Style = require<any>("./modal.scss");

export class Modal {
	id: string;
	title: string = "";
	content: string;
	constructor(modal: IModal) {
		this.id = modal.id;
		if (modal.title !== undefined) this.title = modal.title;
		this.content = modal.content;
	}

	public createModuleElement(){
		return `
			<div class="${Style.modalOverlay}">
				<div class="${Style.modal}">
					<div class="${Style.modalHeader}">${this.title}</div>
					<div class="${Style.modalContent}">${this.content}</div>
				</div>
			</div>
		`
	}
}

export interface IModal {
	id: string;
	title?: string;
	content: string;
}

export function getModule(modal: IModal){
	return new Modal(modal).createModuleElement();
}
