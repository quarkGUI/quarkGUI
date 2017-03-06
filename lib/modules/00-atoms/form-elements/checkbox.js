"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Style = require("../../../../src/modules/00-atoms/form-elements/checkbox.scss");
class Checkbox {
    constructor(checkbox) {
        this.id = checkbox.id;
        this.name = checkbox.name;
        this.value = checkbox.value;
    }
    addListener(id) {
        document.addEventListener("module-lazy-loaded", function (e) {
            let iconElementIsDefined = document.getElementById('checkbox-toggle-' + id) !== undefined;
            let iconElementIsNotNull = document.getElementById('checkbox-toggle-' + id) !== null;
            let checkboxElement = document.getElementById(id);
            if (iconElementIsDefined && iconElementIsNotNull) {
                let iconElement = document.getElementById('checkbox-toggle-' + id);
                iconElement.onclick = () => {
                    checkboxElement.checked = checkboxElement.checked ? false : true;
                };
            }
        }, false);
    }
    createModuleElement() {
        this.addListener(this.id);
        return `
			<input id="${this.id}" name="${this.name}" type="checkbox" value="${this.value}" class="${Style.input}" />
			<span id="checkbox-toggle-${this.id}" class="${Style.checkboxIcon}"></span>
		`;
    }
}
exports.Checkbox = Checkbox;
function getModule(checkbox) {
    return new Checkbox(checkbox).createModuleElement();
}
exports.getModule = getModule;
