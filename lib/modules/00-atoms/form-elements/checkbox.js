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
    }
    Checkbox.prototype.addListener = function (id) {
        document.addEventListener('DOMContentLoaded', function (e) {
            var iconElementIsDefined = document.getElementById('checkbox-toggle-' + id) !== undefined;
            var iconElementIsNotNull = document.getElementById('checkbox-toggle-' + id) !== null;
            var checkboxElement = document.getElementById(id);
            if (iconElementIsDefined && iconElementIsNotNull) {
                var iconElement = document.getElementById('checkbox-toggle-' + id);
                iconElement.onclick = function () {
                    checkboxElement.checked = checkboxElement.checked ? false : true;
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
        this.addListener(this.id);
        var htmlAtributes = this.attributes !== undefined && this.attributes.length ? this.getHtmlAttributes(this.attributes) : '';
        return "<input id='" + this.id + "' name='" + this.name + "' type='checkbox' value='" + this.value + "' class='" + Style.input + "' /><span id='checkbox-toggle-" + this.id + "' " + htmlAtributes + " class='" + Style.checkboxIcon + "'></span>";
    };
    return Checkbox;
}());
exports.Checkbox = Checkbox;
function getModule(checkbox) {
    return new Checkbox(checkbox).createModuleElement();
}
exports.getModule = getModule;
