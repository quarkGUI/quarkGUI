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
var AtomCheckbox = require("../../00-atoms/form-elements/checkbox");
var Style = require("../../../../src/modules/01-molecules/form-elements/checkbox.scss");
var Checkbox = (function (_super) {
    __extends(Checkbox, _super);
    function Checkbox(checkbox) {
        var _this = _super.call(this, { id: checkbox.id, name: checkbox.name, value: checkbox.value }) || this;
        _this.label = "";
        if (checkbox.label !== undefined)
            _this.label = checkbox.label;
        return _this;
    }
    Checkbox.prototype.createModuleElement = function () {
        var checkbox = {
            id: this.id,
            name: this.name,
            value: this.value
        };
        return "\n\t\t\t<div class=\"" + Style.inputGroup + "\">\n\t\t\t\t" + AtomCheckbox.getModule(checkbox) + "\n\t\t\t\t<label for=\"" + this.id + "\" class=\"" + Style.label + "\">" + this.label + "</label>\n\t\t\t</div>\n\t\t";
    };
    return Checkbox;
}(AtomCheckbox.Checkbox));
exports.Checkbox = Checkbox;
function getModule(checkbox) {
    return new Checkbox(checkbox).createModuleElement();
}
exports.getModule = getModule;
