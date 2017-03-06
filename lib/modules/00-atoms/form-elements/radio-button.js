"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Style = require("../../../../src/modules/00-atoms/form-elements/radio-button.scss");
class RadioButton {
    constructor(radioButton) {
        this.id = radioButton.id;
        this.name = radioButton.name;
        this.value = radioButton.value;
    }
    addListener(id) {
        document.addEventListener("module-lazy-loaded", function (e) {
            let iconElementIsDefined = document.getElementById('radio-toggle-' + id) !== undefined;
            let iconElementIsNotNull = document.getElementById('radio-toggle-' + id) !== null;
            let radioButtonElement = document.getElementById(id);
            if (iconElementIsDefined && iconElementIsNotNull) {
                let iconElement = document.getElementById('radio-toggle-' + id);
                iconElement.onclick = () => {
                    radioButtonElement.checked = radioButtonElement.checked ? false : true;
                };
            }
        }, false);
    }
    createModuleElement() {
        this.addListener(this.id);
        return `
			<input id="${this.id}" name="${this.name}" type="radio" value="${this.value}" class="${Style.input}" />
			<span id="radio-toggle-${this.id}" class="${Style.radioIcon}"></span>
		`;
    }
}
exports.RadioButton = RadioButton;
function getModule(radioButton) {
    return new RadioButton(radioButton).createModuleElement();
}
exports.getModule = getModule;
