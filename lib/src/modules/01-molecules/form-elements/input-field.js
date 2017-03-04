"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AtomInputField = require("../../00-atoms/form-elements/input-field");
const Style = require("./input-field.scss");
class InputField {
    constructor(inputField) {
        this.type = "text";
        this.value = "";
        this.placeholder = "";
        this.label = "";
        this.id = inputField.id;
        this.name = inputField.name;
        if (inputField.type !== undefined)
            this.type = inputField.type;
        if (inputField.value !== undefined)
            this.value = inputField.value;
        if (inputField.placeholder !== undefined)
            this.placeholder = inputField.placeholder;
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
