"use strict";
exports.__esModule = true;
var Dragula = require("dragula");
var Style = require("../../../../src/modules/01-molecules/lists/dragable-list.scss");
var DragableList = (function () {
    function DragableList(dragableList) {
        this.id = dragableList.id;
        this.listItems = dragableList.listItems;
    }
    DragableList.prototype.initDragula = function (containers) {
        var dragula = Dragula(containers, {});
        dragula.on('drop', function (element, container) {
        });
    };
    DragableList.prototype.addListener = function (thisInstance) {
        document.addEventListener('DOMContentLoaded', function () {
            var containers = [document.getElementById(thisInstance.id)];
            thisInstance.initDragula(containers);
        }, false);
        document.addEventListener("module-lazy-loaded", function (e) {
            var containers = [document.getElementById(thisInstance.id)];
            thisInstance.initDragula(containers);
        });
    };
    DragableList.prototype.createListElements = function (listItems) {
        var listItemElements = "";
        for (var _i = 0, listItems_1 = listItems; _i < listItems_1.length; _i++) {
            var listItem = listItems_1[_i];
            var listItemContent = listItem.content !== undefined ? listItem.content : '';
            listItemElements += "<div class='" + Style.listItem + "'>" + listItemContent + "</div>";
        }
        return listItemElements;
    };
    DragableList.prototype.createModuleElement = function () {
        this.addListener(this);
        var listElements = this.createListElements(this.listItems);
        return "<div id='" + this.id + "' class='" + Style.dragableList + "'>" + listElements + "</div>";
    };
    return DragableList;
}());
exports.DragableList = DragableList;
function getModule(dragableList) {
    return new DragableList(dragableList).createModuleElement();
}
exports.getModule = getModule;
