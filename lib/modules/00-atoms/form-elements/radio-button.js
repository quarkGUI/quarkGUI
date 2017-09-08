"use strict";
exports.__esModule = true;
var Style = require("../../../../src/modules/00-atoms/form-elements/radio-button.scss");
var RadioButton = /** @class */ (function () {
    function RadioButton(radioButton) {
        this.id = radioButton.id;
        this.name = radioButton.name;
        this.value = radioButton.value;
        if (radioButton.attributes !== undefined)
            this.attributes = radioButton.attributes;
    }
    RadioButton.prototype.addListener = function (id) {
        document.addEventListener('DOMContentLoaded', function (e) {
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
    RadioButton.prototype.getHtmlAttributes = function (attributes) {
        var htmlAttributes = '';
        attributes.forEach(function (attribute, index) {
            htmlAttributes += attribute;
            if (index < attributes.length) {
                htmlAttributes += ' ';
            }
        });
        return htmlAttributes;
    };
    RadioButton.prototype.createModuleElement = function () {
        this.addListener(this.id);
        var htmlAtributes = this.attributes !== undefined && this.attributes.length ? this.getHtmlAttributes(this.attributes) : '';
        return "<input id='" + this.id + "' name='" + this.name + "' type='radio' value='" + this.value + "' " + htmlAtributes + " class='" + Style.input + "' /><span id='radio-toggle-" + this.id + "' class='" + Style.radioIcon + "'></span>";
    };
    return RadioButton;
}());
exports.RadioButton = RadioButton;
function getModule(radioButton) {
    return new RadioButton(radioButton).createModuleElement();
}
exports.getModule = getModule;
