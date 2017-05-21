"use strict";
exports.__esModule = true;
var Button = require("../../00-atoms/buttons/button");
var Style = require("../../../../src/modules/01-molecules/buttons/button-row.scss");
var ButtonRow = (function () {
    function ButtonRow(buttonRow) {
        this.id = "";
        this.id = buttonRow.id;
        this.buttons = buttonRow.buttons;
    }
    ButtonRow.prototype.createModuleElement = function () {
        var buttonElements = "";
        for (var _i = 0, _a = this.buttons; _i < _a.length; _i++) {
            var button = _a[_i];
            buttonElements += Button.getModule(button);
        }
        ;
        return "<span id='" + this.id + "' class='" + Style.buttonRow + "'>" + buttonElements + "</span>";
    };
    return ButtonRow;
}());
exports.ButtonRow = ButtonRow;
function getModule(buttonRow) {
    return new ButtonRow(buttonRow).createModuleElement();
}
exports.getModule = getModule;
