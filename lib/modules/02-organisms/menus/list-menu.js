"use strict";
exports.__esModule = true;
var Dragula = require("dragula");
var ButtonRow = require("../../01-molecules/buttons/button-row");
var Style = require('../../../../src/modules/02-organisms/menus/list-menu.scss');
var ListMenu = (function () {
    function ListMenu(listMenu) {
        this.id = "";
        this.raised = false;
        this.hover = false;
        this.dragable = false;
        this.id = listMenu.id;
        if (listMenu.listItems !== undefined)
            this.listItems = listMenu.listItems;
        if (listMenu.raised !== undefined)
            this.raised = listMenu.raised;
        if (listMenu.hover !== undefined)
            this.hover = listMenu.hover;
        if (listMenu.dragable !== undefined)
            this.dragable = listMenu.dragable;
    }
    ListMenu.prototype.initDragula = function (containers) {
        var dragula = Dragula(containers, {});
        dragula.on('drop', function (element, container) {
        });
    };
    ListMenu.prototype.addDragulaListener = function (thisInstance) {
        document.addEventListener('DOMContentLoaded', function () {
            var containers = [document.getElementById(thisInstance.id)];
            thisInstance.initDragula(containers);
        }, false);
    };
    ListMenu.prototype.addListener = function (listItem) {
        document.addEventListener('DOMContentLoaded', function () {
            var hasExpandButtonElement = document.getElementById(listItem.id + '-expand-button') !== null;
            var hasExpandableContentElement = document.getElementById(listItem.id + '-expandable-content') !== null;
            var expandButtonElement = document.getElementById(listItem.id + '-expand-button');
            var expandableContentElement = document.getElementById(listItem.id + '-expandable-content');
            if (hasExpandButtonElement && hasExpandableContentElement) {
                expandButtonElement.onclick = function () {
                    var isExpanded = expandButtonElement.classList.contains('active');
                    if (isExpanded) {
                        expandButtonElement.classList.remove("active");
                        expandableContentElement.classList.remove("active");
                    }
                    else {
                        expandButtonElement.classList.add("active");
                        expandableContentElement.classList.add("active");
                    }
                };
            }
        });
    };
    ListMenu.prototype.getTypeClass = function (raised) {
        var typeClass = '';
        if (raised)
            typeClass = Style.listMenuTypeRaised;
        return typeClass;
    };
    ListMenu.prototype.createTitleElement = function (listItem) {
        var moduleLinkAttribute = (listItem.moduleLink !== undefined) ? "data-module-target='" + listItem.moduleLink + "'" : '';
        var singleLineClass = (listItem.title !== undefined && listItem.subTitle == undefined) ? Style.singleLine : '';
        var subTitleElement = (listItem.subTitle !== undefined) ? "<small>" + listItem.subTitle + "</small>" : '';
        var iconElement = (listItem.iconClass !== undefined) ? "<span class='" + Style.listItemIcon + " " + listItem.iconClass + "'></span>" : '';
        var titleElement = "";
        if (listItem.title !== undefined && listItem.link !== undefined) {
            titleElement = "<a href='" + listItem.link + "' class='" + Style.listItemTitle + " " + singleLineClass + "'>" + iconElement + listItem.title + " " + subTitleElement + "</a>";
        }
        else if (listItem.title !== undefined && listItem.moduleLink !== undefined) {
            titleElement = "<a " + moduleLinkAttribute + " class='loadPage " + Style.listItemTitle + " " + singleLineClass + "'>" + iconElement + listItem.title + " " + subTitleElement + "</a>";
        }
        else if (listItem.title !== undefined) {
            titleElement = "<span class='" + Style.listItemTitle + " " + singleLineClass + "' " + moduleLinkAttribute + ">" + iconElement + listItem.title + " " + subTitleElement + "</span>";
        }
        return titleElement;
    };
    ListMenu.prototype.createExpandButtonElement = function (listItem) {
        var expandButtonElement = "";
        if (listItem.expandable !== undefined && listItem.expandable === true) {
            expandButtonElement = "<span class='" + Style.listItemDivider + "'></span><span id='" + listItem.id + "-expand-button' class='" + Style.listItemExpandButton + "'></span>";
        }
        return expandButtonElement;
    };
    ListMenu.prototype.createButtonRowElement = function (listItem) {
        var buttonRowElement = "";
        var expandButton = this.createExpandButtonElement(listItem);
        if (listItem.buttonRow !== undefined) {
            buttonRowElement = "<span class='" + Style.listItemButtonRow + "'>" + ButtonRow.getModule(listItem.buttonRow) + expandButton + "</span>";
        }
        else if (listItem.expandable !== undefined && listItem.expandable == true) {
            buttonRowElement = "<span class='" + Style.listItemButtonRow + "'>" + expandButton + "</span>";
        }
        return buttonRowElement;
    };
    ListMenu.prototype.createExpandableContentElement = function (listItem) {
        var expandableContentElement = "";
        if (listItem.expandableContent !== undefined) {
            expandableContentElement = "<div id='" + listItem.id + "-expandable-content' class='" + Style.listItemExpandableContent + "'>" + listItem.expandableContent + "</div>";
        }
        return expandableContentElement;
    };
    ListMenu.prototype.createModuleElement = function () {
        var dragableClass = '';
        if (this.dragable) {
            this.addDragulaListener(this);
            dragableClass = Style.dragable;
        }
        var listItemElements = "";
        if (this.listItems !== undefined) {
            for (var _i = 0, _a = this.listItems; _i < _a.length; _i++) {
                var listItem = _a[_i];
                var title = this.createTitleElement(listItem);
                var buttonRow = this.createButtonRowElement(listItem);
                var expandableContent = this.createExpandableContentElement(listItem);
                if (listItem.expandable) {
                    this.addListener(listItem);
                }
                var hiddenButtonRowClass = listItem.hiddenButtonRow !== undefined && listItem.hiddenButtonRow ? Style.hiddenButtonRow : '';
                listItemElements += "<div class='" + Style.listItem + " " + dragableClass + " " + hiddenButtonRowClass + "'>" + title + buttonRow + expandableContent + "</div>";
            }
        }
        var typeClass = (this.raised !== undefined) ? this.getTypeClass(this.raised) : '';
        var hoverClass = this.hover ? Style.hover : "";
        return "<div id='" + this.id + "' class='" + Style.listMenu + " " + typeClass + " " + hoverClass + "'>" + listItemElements + "</div>";
    };
    return ListMenu;
}());
exports.ListMenu = ListMenu;
function getModule(listMenu) {
    return new ListMenu(listMenu).createModuleElement();
}
exports.getModule = getModule;
