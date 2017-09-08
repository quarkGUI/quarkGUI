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
var AtomSelectList = require("../../00-atoms/form-elements/select-list");
var Style = require("../../../../src/modules/01-molecules/form-elements/select-list.scss");
var SelectList = /** @class */ (function (_super) {
    __extends(SelectList, _super);
    function SelectList(selectList) {
        var _this = _super.call(this, { id: selectList.id, name: selectList.name }) || this;
        if (selectList.searchable !== undefined)
            _this.searchable = selectList.searchable;
        if (selectList.type !== undefined)
            _this.type = selectList.type;
        if (selectList.value !== undefined)
            _this.value = selectList.value;
        if (selectList.placeholder !== undefined)
            _this.placeholder = selectList.placeholder;
        if (selectList.label !== undefined)
            _this.label = selectList.label;
        if (selectList.options !== undefined)
            _this.options = selectList.options;
        if (selectList.attributes !== undefined)
            _this.attributes = selectList.attributes;
        return _this;
    }
    SelectList.prototype.createModuleElement = function () {
        var selectList = {
            id: this.id,
            name: this.name,
            searchable: this.searchable,
            type: this.type,
            value: this.value,
            placeholder: this.placeholder,
            options: this.options,
            attributes: this.attributes
        };
        if (this.label !== undefined)
            selectList.labelElement = "<label for='" + this.id + "' class='" + Style.label + "'>" + this.label + "</label>";
        return "<div class=\"" + Style.inputGroup + "\">" + AtomSelectList.getModule(selectList) + "</div>";
    };
    return SelectList;
}(AtomSelectList.SelectList));
exports.SelectList = SelectList;
function getModule(selectList) {
    return new SelectList(selectList).createModuleElement();
}
exports.getModule = getModule;
