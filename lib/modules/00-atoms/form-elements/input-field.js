"use strict";
exports.__esModule = true;
var Style = require("../../../../src/modules/00-atoms/form-elements/input-field.scss");
exports.eventListeners = [];
var InputField = /** @class */ (function () {
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
        if (inputField.vueBindings !== undefined)
            this.vueBindings = inputField.vueBindings;
    }
    InputField.prototype.getVueBinding = function (attributeName) {
        var vueBinding = false;
        if (this.vueBindings !== undefined) {
            vueBinding = this.vueBindings[attributeName] !== undefined ? this.vueBindings[attributeName] : false;
        }
        return vueBinding;
    };
    InputField.prototype.initFunction = function (id) {
        var elementIsDefined = document.getElementById(id) !== undefined;
        var elementIsNotNull = document.getElementById(id) !== null;
        if (elementIsDefined && elementIsNotNull) {
            var element_1 = document.getElementById(id);
            element_1.value && element_1.value.length ? element_1.classList.add("is-not-empty") : element_1.classList.remove("is-not-empty");
            element_1.onkeyup = function () {
                element_1.value && element_1.value.length ? element_1.classList.add("is-not-empty") : element_1.classList.remove("is-not-empty");
            };
        }
    };
    InputField.prototype.addListener = function () {
        var self = this;
        document.addEventListener('DOMContentLoaded', function () {
            self.initFunction();
        }, false);
        if (!exports.eventListeners.includes('quarkLazyLoaded')) {
            document.addEventListener('quarkLazyLoaded', function () {
                var targetElements = document.getElementsByClassName(Style.input);
                for (var i = 0; i < targetElements.length; i++) {
                    self.initFunction(targetElements[i].id);
                }
            }, false);
            exports.eventListeners.push('quarkLazyLoaded');
        }
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
        var hasId = this.id !== undefined || this.getVueBinding('id');
        var hasName = this.name !== undefined || this.getVueBinding('name');
        var hasType = this.type !== undefined;
        var hasValue = this.value !== undefined || this.getVueBinding('value');
        var hasPlaceholder = this.placeholder !== undefined || this.getVueBinding('placeholder');
        var idAttribute = '';
        if (hasId) {
            if (this.getVueBinding('id')) {
                var id = this.getVueBinding('id');
                idAttribute = "v-bind:id='" + id + "'";
            }
            else {
                idAttribute = "id='" + this.id + "'";
            }
        }
        var nameAttribute = '';
        if (hasName) {
            if (this.getVueBinding('name')) {
                var name_1 = this.getVueBinding('name');
                nameAttribute = "v-bind:name='" + name_1 + "'";
            }
            else {
                nameAttribute = "name='" + this.name + "'";
            }
        }
        var typeAttribute = '';
        if (hasType) {
            typeAttribute = "type='" + this.type + "'";
        }
        var valueAttribute = '';
        if (hasValue) {
            if (this.getVueBinding('value')) {
                var value = this.getVueBinding('value');
                valueAttribute = "v-model='" + value + "'";
            }
            else {
                valueAttribute = "value='" + this.value + "'";
            }
        }
        var placeholderAttribute = '';
        if (hasPlaceholder) {
            if (this.getVueBinding('placeholder')) {
                var placeholder = this.getVueBinding('placeholder');
                placeholderAttribute = "v-bind:placeholder='" + placeholder + "'";
            }
            else {
                placeholderAttribute = "placeholder='" + this.placeholder + "'";
            }
        }
        this.addListener();
        var htmlAtributes = this.attributes !== undefined && this.attributes.length ? this.getHtmlAttributes(this.attributes) : '';
        return "<input " + idAttribute + " " + nameAttribute + " " + typeAttribute + " " + valueAttribute + " " + placeholderAttribute + " " + htmlAtributes + " class='" + Style.input + "' />";
    };
    return InputField;
}());
exports.InputField = InputField;
function getModule(inputField) {
    return new InputField(inputField).createModuleElement();
}
exports.getModule = getModule;
