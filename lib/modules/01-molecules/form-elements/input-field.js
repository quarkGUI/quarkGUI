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
var AtomInputField = require("../../00-atoms/form-elements/input-field");
var Style = require("../../../../src/modules/01-molecules/form-elements/input-field.scss");
var InputField = (function (_super) {
    __extends(InputField, _super);
    function InputField(inputField) {
        var _this = _super.call(this, { id: inputField.id, name: inputField.name }) || this;
        _this.label = "";
        if (inputField.type !== undefined)
            _this.type = inputField.type;
        if (inputField.value !== undefined)
            _this.value = inputField.value;
        if (inputField.placeholder !== undefined)
            _this.placeholder = inputField.placeholder;
        if (inputField.label !== undefined)
            _this.label = inputField.label;
        return _this;
    }
    InputField.prototype.createModuleElement = function () {
        var inputField = {
            id: this.id,
            name: this.name,
            type: this.type,
            value: this.value,
            placeholder: this.placeholder
        };
        return "\n\t\t\t<div class=\"" + Style.inputGroup + "\">\n\t\t\t\t" + AtomInputField.getModule(inputField) + "\n\t\t\t\t<label for=\"" + this.id + "\" class=\"" + Style.label + "\">" + this.label + "</label>\n\t\t\t</div>\n\t\t";
    };
    return InputField;
}(AtomInputField.InputField));
exports.InputField = InputField;
function getModule(inputField) {
    return new InputField(inputField).createModuleElement();
}
exports.getModule = getModule;
