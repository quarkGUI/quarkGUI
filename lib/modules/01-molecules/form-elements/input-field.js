"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AtomInputField = require("../../00-atoms/form-elements/input-field");
const Style = require("../../../../src/modules/01-molecules/form-elements/input-field.scss");
class InputField extends AtomInputField.InputField {
    constructor(inputField) {
        super({ id: inputField.id, name: inputField.name });
        this.label = "";
        if (inputField.type !== undefined)
            super.type = inputField.type;
        if (inputField.value !== undefined)
            super.value = inputField.value;
        if (inputField.placeholder !== undefined)
            super.placeholder = inputField.placeholder;
        if (inputField.label !== undefined)
            this.label = inputField.label;
    }
    createModuleElement() {
        let inputField = {
            id: this.id,
            name: this.name,
            type: this.type,
            value: this.value,
            placeholder: this.placeholder
        };
        return `
			<div class="${Style.inputGroup}">
				${AtomInputField.getModule(inputField)}
				<label for="${this.id}" class="${Style.label}">${this.label}</label>
			</div>
		`;
    }
}
exports.InputField = InputField;
function getModule(inputField) {
    return new InputField(inputField).createModuleElement();
}
exports.getModule = getModule;
