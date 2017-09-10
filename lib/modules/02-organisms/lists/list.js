"use strict";
exports.__esModule = true;
var Dragula = require("dragula");
var ListItem = require("../../01-molecules/lists/list-item");
var Style = require('../../../../src/modules/02-organisms/lists/list.scss');
var List = /** @class */ (function () {
    function List(list) {
        this.id = "";
        this.raised = false;
        this.hover = false;
        this.dragable = false;
        this.id = list.id;
        if (list.listItems !== undefined)
            this.listItems = list.listItems;
        if (list.raised !== undefined)
            this.raised = list.raised;
        if (list.hover !== undefined)
            this.hover = list.hover;
        if (list.dragable !== undefined)
            this.dragable = list.dragable;
    }
    List.prototype.initDragula = function (containers) {
        var dragula = Dragula(containers, {});
        dragula.on('drop', function (element, container) {
        });
    };
    List.prototype.addDragulaListener = function (thisInstance) {
        document.addEventListener('DOMContentLoaded', function () {
            var containers = [document.getElementById(thisInstance.id)];
            thisInstance.initDragula(containers);
        }, false);
    };
    List.prototype.getTypeClass = function (raised) {
        var typeClass = '';
        if (raised)
            typeClass = Style.listMenuTypeRaised;
        return typeClass;
    };
    List.prototype.createModuleElement = function () {
        var dragableClass = '';
        if (this.dragable) {
            this.addDragulaListener(this);
            dragableClass = Style.dragable;
        }
        var listItemElements = "";
        if (this.listItems !== undefined) {
            var listItemIndex = 0;
            for (var _i = 0, _a = this.listItems; _i < _a.length; _i++) {
                var listItem = _a[_i];
                listItem.id = this.id + '-' + listItemIndex;
                listItem.hover = this.hover !== undefined ? this.hover : false;
                listItem.dragable = this.dragable !== undefined ? this.dragable : false;
                var listItemElement = ListItem.getModule(listItem);
                listItemElements += listItemElement;
                listItemIndex++;
            }
        }
        var typeClass = (this.raised !== undefined) ? this.getTypeClass(this.raised) : '';
        var hoverClass = this.hover ? Style.hover : "";
        return "<div id='" + this.id + "' class='" + Style.listMenu + " " + typeClass + " " + hoverClass + "'>" + listItemElements + "</div>";
    };
    return List;
}());
exports.List = List;
function getModule(list) {
    return new List(list).createModuleElement();
}
exports.getModule = getModule;
