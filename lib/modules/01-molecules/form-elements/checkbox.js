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
var Checkbox = /** @class */ (function (_super) {
    __extends(Checkbox, _super);
    function Checkbox(checkbox) {
        var _this = _super.call(this, { id: checkbox.id, name: checkbox.name, value: checkbox.value }) || this;
        _this.label = "";
        if (checkbox.label !== undefined)
            _this.label = checkbox.label;
        if (checkbox.attributes !== undefined)
            _this.attributes = checkbox.attributes;
        if (checkbox.vueBindings !== undefined)
            _this.vueBindings = checkbox.vueBindings;
        return _this;
    }
    Checkbox.prototype.createModuleElement = function () {
        var checkbox = {
            id: this.id,
            name: this.name,
            value: this.value,
            attributes: this.attributes,
            vueBindings: this.vueBindings
        };
        return "<div class='" + Style.inputGroup + "'>" + AtomCheckbox.getModule(checkbox) + "<label for='" + this.id + "' class='" + Style.label + "'>" + this.label + "</label></div>";
    };
    return Checkbox;
}(AtomCheckbox.Checkbox));
exports.Checkbox = Checkbox;
function getModule(checkbox) {
    return new Checkbox(checkbox).createModuleElement();
}
exports.getModule = getModule;
