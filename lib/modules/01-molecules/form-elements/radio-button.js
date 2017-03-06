"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AtomRadioButton = require("../../00-atoms/form-elements/radio-button");
const Style = require("../../../../src/modules/01-molecules/form-elements/radio-button.scss");
class RadioButton extends AtomRadioButton.RadioButton {
    constructor(radioButton) {
        super({ id: radioButton.id, name: radioButton.name, value: radioButton.value });
        this.label = "";
        if (radioButton.label !== undefined)
            this.label = radioButton.label;
    }
    createModuleElement() {
        let radioButton = {
            id: this.id,
            name: this.name,
            value: this.value
        };
        return `
		<div class="${Style.inputGroup}">
		${AtomRadioButton.getModule(radioButton)}
		<label for="${this.id}" class="${Style.label}">${this.label}</label>
		</div>
		`;
    }
}
exports.RadioButton = RadioButton;
function getModule(radioButton) {
    return new RadioButton(radioButton).createModuleElement();
}
exports.getModule = getModule;
