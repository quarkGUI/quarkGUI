"use strict";
exports.__esModule = true;
var Style = require("../../../../src/modules/00-atoms/form-elements/input-field.scss");
var InputField = (function () {
    function InputField(inputField) {
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
        if (inputField.attributes !== undefined)
            this.attributes = inputField.attributes;
    }
    InputField.prototype.addListener = function (id) {
        document.addEventListener('DOMContentLoaded', function (e) {
            var elementIsDefined = document.getElementById(id) !== undefined;
            var elementIsNotNull = document.getElementById(id) !== null;
            if (elementIsDefined && elementIsNotNull) {
                var element_1 = document.getElementById(id);
                element_1.value && element_1.value.length ? element_1.classList.add("is-not-empty") : element_1.classList.remove("is-not-empty");
                element_1.onkeyup = function () {
                    element_1.value && element_1.value.length ? element_1.classList.add("is-not-empty") : element_1.classList.remove("is-not-empty");
                };
            }
        }, false);
    };
    InputField.prototype.getHtmlAttributes = function (attributes) {
        var htmlAttributes = '';
        attributes.forEach(function (attribute, index) {
            htmlAttributes += attribute;
            if (index < attributes.length) {
                htmlAttributes += ' ';
            }
        });
        return htmlAttributes;
    };
    InputField.prototype.createModuleElement = function () {
        this.addListener(this.id);
        var htmlAtributes = this.attributes !== undefined && this.attributes.length ? this.getHtmlAttributes(this.attributes) : '';
        return "<input id='" + this.id + "' name='" + this.name + "' type='" + this.type + "' value='" + this.value + "' placeholder='" + this.placeholder + "' " + htmlAtributes + " class='" + Style.input + "' />";
    };
    return InputField;
}());
exports.InputField = InputField;
function getModule(inputField) {
    return new InputField(inputField).createModuleElement();
}
exports.getModule = getModule;
