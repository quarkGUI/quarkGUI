"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Style = require("../../../../src/modules/01-molecules/messaging/modal.scss");
class Modal {
    constructor(modal) {
        this.title = "";
        this.id = modal.id;
        if (modal.title !== undefined)
            this.title = modal.title;
        this.content = modal.content;
    }
    createModuleElement() {
        return `
			<div class="${Style.modalOverlay}">
				<div class="${Style.modal}">
					<div class="${Style.modalHeader}">${this.title}</div>
					<div class="${Style.modalContent}">${this.content}</div>
				</div>
			</div>
		`;
    }
}
exports.Modal = Modal;
function getModule(modal) {
    return new Modal(modal).createModuleElement();
}
exports.getModule = getModule;
