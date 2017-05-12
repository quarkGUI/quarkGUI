"use strict";
exports.__esModule = true;
var Style = require("../../../../src/modules/00-atoms/form-elements/checkbox.scss");
var Checkbox = (function () {
    function Checkbox(checkbox) {
        this.id = checkbox.id;
        this.name = checkbox.name;
        this.value = checkbox.value;
    }
    Checkbox.prototype.addListener = function (id) {
        document.addEventListener("module-lazy-loaded", function (e) {
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
    Checkbox.prototype.createModuleElement = function () {
        this.addListener(this.id);
        return "<input id='" + this.id + "' name='" + this.name + "' type='checkbox' value='" + this.value + "' class='" + Style.input + "' /><span id='checkbox-toggle-" + this.id + "' class='" + Style.checkboxIcon + "'></span>";
    };
    return Checkbox;
}());
exports.Checkbox = Checkbox;
function getModule(checkbox) {
    return new Checkbox(checkbox).createModuleElement();
}
exports.getModule = getModule;
