"use strict";
exports.__esModule = true;
var Style = require("../../../../src/modules/00-atoms/form-elements/checkbox.scss");
var Checkbox = /** @class */ (function () {
    function Checkbox(checkbox) {
        this.id = checkbox.id;
        this.name = checkbox.name;
        this.value = checkbox.value;
        if (checkbox.attributes !== undefined)
            this.attributes = checkbox.attributes;
        if (checkbox.vueBindings !== undefined)
            this.vueBindings = checkbox.vueBindings;
    }
    Checkbox.prototype.getVueBinding = function (attributeName) {
        var vueBinding = false;
        if (this.vueBindings !== undefined) {
            vueBinding = this.vueBindings[attributeName] !== undefined ? this.vueBindings[attributeName] : false;
        }
        return vueBinding;
    };
    Checkbox.prototype.addListener = function (id) {
        document.addEventListener('DOMContentLoaded', function (e) {
            var iconElementIsDefined = document.getElementById('checkbox-toggle-' + id) !== undefined;
            var iconElementIsNotNull = document.getElementById('checkbox-toggle-' + id) !== null;
            var checkboxElement = document.getElementById(id);
            if (iconElementIsDefined && iconElementIsNotNull) {
                var iconElement = document.getElementById('checkbox-toggle-' + id);
                iconElement.onclick = function () {
                    checkboxElement.checked = checkboxElement.checked ? false : true;
                    var event = document.createEvent('Event');
                    event.initEvent('click', true, true);
                    checkboxElement.dispatchEvent(event);
                };
            }
        }, false);
    };
    Checkbox.prototype.getHtmlAttributes = function (attributes) {
        var htmlAttributes = '';
        attributes.forEach(function (attribute, index) {
            htmlAttributes += attribute;
            if (index < attributes.length) {
                htmlAttributes += ' ';
            }
        });
        return htmlAttributes;
    };
    Checkbox.prototype.createModuleElement = function () {
        var hasId = this.id !== undefined || this.getVueBinding('id');
        var hasName = this.name !== undefined || this.getVueBinding('name');
        var hasValue = this.value !== undefined;
        var hasVueValue = this.getVueBinding('value');
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
        var valueAttribute = '';
        if (hasValue) {
            valueAttribute = "value='" + this.value + "'";
        }
        var vueValueAttribute = '';
        if (hasVueValue) {
            var value = this.getVueBinding('value');
            vueValueAttribute = "v-model='" + value + "'";
        }
        this.addListener(this.id);
        var htmlAtributes = this.attributes !== undefined && this.attributes.length ? this.getHtmlAttributes(this.attributes) : '';
        return "<input " + idAttribute + " " + nameAttribute + " type='checkbox' " + valueAttribute + " " + vueValueAttribute + " class='" + Style.input + "' /><span id='checkbox-toggle-" + this.id + "' " + htmlAtributes + " class='" + Style.checkboxIcon + "'></span>";
    };
    return Checkbox;
}());
exports.Checkbox = Checkbox;
function getModule(checkbox) {
    return new Checkbox(checkbox).createModuleElement();
}
exports.getModule = getModule;
