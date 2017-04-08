"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var AtomRadioButton = require("../../00-atoms/form-elements/radio-button");
var Style = require("../../../../src/modules/01-molecules/form-elements/radio-button.scss");
var RadioButton = (function (_super) {
    __extends(RadioButton, _super);
    function RadioButton(radioButton) {
        var _this = _super.call(this, { id: radioButton.id, name: radioButton.name, value: radioButton.value }) || this;
        _this.label = "";
        if (radioButton.label !== undefined)
            _this.label = radioButton.label;
        return _this;
    }
    RadioButton.prototype.createModuleElement = function () {
        var radioButton = {
            id: this.id,
            name: this.name,
            value: this.value
        };
        return "\n\t\t<div class=\"" + Style.inputGroup + "\">\n\t\t" + AtomRadioButton.getModule(radioButton) + "\n\t\t<label for=\"" + this.id + "\" class=\"" + Style.label + "\">" + this.label + "</label>\n\t\t</div>\n\t\t";
    };
    return RadioButton;
}(AtomRadioButton.RadioButton));
exports.RadioButton = RadioButton;
function getModule(radioButton) {
    return new RadioButton(radioButton).createModuleElement();
}
exports.getModule = getModule;
