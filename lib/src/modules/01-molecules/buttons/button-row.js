"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Button = require("../../00-atoms/buttons/button");
const Style = require("./button-row.scss");
class ButtonRow {
    constructor(buttonRow) {
        this.id = buttonRow.id;
        this.buttons = buttonRow.buttons;
    }
    createModuleElement() {
        let buttonElements = "";
        for (let button of this.buttons) {
            buttonElements += Button.getModule(button);
        }
        ;
        return ` 
			<span id="${this.id}" class="${Style.buttonRow}">${buttonElements}</span>
		`;
    }
}
exports.ButtonRow = ButtonRow;
function getModule(buttonRow) {
    return new ButtonRow(buttonRow).createModuleElement();
}
exports.getModule = getModule;
