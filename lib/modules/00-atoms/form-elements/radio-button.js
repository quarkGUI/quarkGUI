"use strict";
exports.__esModule = true;
var Style = require("../../../../src/modules/00-atoms/form-elements/radio-button.scss");
var RadioButton = (function () {
    function RadioButton(radioButton) {
        this.id = radioButton.id;
        this.name = radioButton.name;
        this.value = radioButton.value;
    }
    RadioButton.prototype.addListener = function (id) {
        document.addEventListener("module-lazy-loaded", function (e) {
            var iconElementIsDefined = document.getElementById('radio-toggle-' + id) !== undefined;
            var iconElementIsNotNull = document.getElementById('radio-toggle-' + id) !== null;
            var radioButtonElement = document.getElementById(id);
            if (iconElementIsDefined && iconElementIsNotNull) {
                var iconElement = document.getElementById('radio-toggle-' + id);
                iconElement.onclick = function () {
                    radioButtonElement.checked = radioButtonElement.checked ? false : true;
                };
            }
        }, false);
    };
    RadioButton.prototype.createModuleElement = function () {
        this.addListener(this.id);
        return "\n\t\t\t<input id=\"" + this.id + "\" name=\"" + this.name + "\" type=\"radio\" value=\"" + this.value + "\" class=\"" + Style.input + "\" />\n\t\t\t<span id=\"radio-toggle-" + this.id + "\" class=\"" + Style.radioIcon + "\"></span>\n\t\t";
    };
    return RadioButton;
}());
exports.RadioButton = RadioButton;
function getModule(radioButton) {
    return new RadioButton(radioButton).createModuleElement();
}
exports.getModule = getModule;
