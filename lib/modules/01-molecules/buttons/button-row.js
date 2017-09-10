"use strict";
exports.__esModule = true;
var Button = require("../../00-atoms/buttons/button");
var Style = require("../../../../src/modules/01-molecules/buttons/button-row.scss");
var ButtonRow = /** @class */ (function () {
    function ButtonRow(buttonRow) {
        this.id = "";
        this.buttons = [];
        this.buttonElements = [];
        this.id = buttonRow.id;
        this.buttons = buttonRow.buttons !== undefined ? buttonRow.buttons : [];
        this.buttonElements = buttonRow.buttonElements !== undefined ? buttonRow.buttonElements : [];
    }
    ButtonRow.prototype.createModuleElement = function () {
        var buttonHtmlElements = "";
        for (var _i = 0, _a = this.buttons; _i < _a.length; _i++) {
            var button = _a[_i];
            buttonHtmlElements += Button.getModule(button);
        }
        for (var _b = 0, _c = this.buttonElements; _b < _c.length; _b++) {
            var buttonElement = _c[_b];
            buttonHtmlElements += buttonElement;
        }
        return "<span id='" + this.id + "' class='" + Style.buttonRow + "'>" + buttonHtmlElements + "</span>";
    };
    return ButtonRow;
}());
exports.ButtonRow = ButtonRow;
function getModule(buttonRow) {
    return new ButtonRow(buttonRow).createModuleElement();
}
exports.getModule = getModule;
