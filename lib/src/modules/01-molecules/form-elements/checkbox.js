"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AtomCheckbox = require("../../00-atoms/form-elements/checkbox");
const Style = require("./checkbox.scss");
class Checkbox {
    constructor(checkbox) {
        this.label = "";
        this.id = checkbox.id;
        this.name = checkbox.name;
        this.value = checkbox.value;
        if (checkbox.label !== undefined)
            this.label = checkbox.label;
    }
    createModuleElement() {
        let checkbox = {
            id: this.id,
            name: this.name,
            value: this.value
        };
        return `
			<div class="${Style.inputGroup}">
				${AtomCheckbox.getModule(checkbox)}
				<label for="${this.id}" class="${Style.label}">${this.label}</label>
			</div>
		`;
    }
}
exports.Checkbox = Checkbox;
function getModule(checkbox) {
    return new Checkbox(checkbox).createModuleElement();
}
exports.getModule = getModule;