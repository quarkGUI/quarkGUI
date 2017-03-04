"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Style = require("./input-field.scss");
class InputField {
    constructor(inputField) {
        this.type = "text";
        this.value = "";
        this.placeholder = "";
        this.id = inputField.id;
        this.name = inputField.name;
        if (inputField.type !== undefined)
            this.type = inputField.type;
        if (inputField.value !== undefined)
            this.value = inputField.value;
        if (inputField.placeholder !== undefined)
            this.placeholder = inputField.placeholder;
    }
    addListener(id) {
        document.addEventListener("module-lazy-loaded", function (e) {
            let elementIsDefined = document.getElementById(id) !== undefined;
            let elementIsNotNull = document.getElementById(id) !== null;
            if (elementIsDefined && elementIsNotNull) {
                let element = document.getElementById(id);
                element.value && element.value.length ? element.classList.add("is-not-empty") : element.classList.remove("is-not-empty");
                element.onkeyup = function () {
                    element.value && element.value.length ? element.classList.add("is-not-empty") : element.classList.remove("is-not-empty");
                };
            }
        }, false);
    }
    createModuleElement() {
        this.addListener(this.id);
        return `
			<input 	id="${this.id}" name="${this.name}" type="${this.type}" value="${this.value}" placeholder="${this.placeholder}" class="${Style.input}" />
		`;
    }
}
exports.InputField = InputField;
function getModule(inputField) {
    return new InputField(inputField).createModuleElement();
}
exports.getModule = getModule;
