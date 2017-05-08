"use strict";
exports.__esModule = true;
var ButtonRow = require("../../01-molecules/buttons/button-row");
var Style = require('../../../../src/modules/02-organisms/menus/list-menu.scss');
var ListMenu = (function () {
    function ListMenu(listMenu) {
        this.id = "";
        this.hover = false;
        if (listMenu.id !== undefined)
            this.id = listMenu.id;
        if (listMenu.listItems !== undefined)
            this.listItems = listMenu.listItems;
        if (listMenu.hover !== undefined)
            this.hover = listMenu.hover;
    }
    ListMenu.prototype.addListener = function (listItem) {
        document.addEventListener("module-lazy-loaded", function (e) {
            var expandButtonElement = document.getElementById(listItem.id + '-expand-button');
            var expandableContentElement = document.getElementById(listItem.id + '-expandable-content');
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
        });
    };
    ListMenu.prototype.createTitleElement = function (listItem) {
        var moduleLinkAttribute = (listItem.moduleLink !== undefined) ? "data-module-target=\"" + listItem.moduleLink + "\"" : '';
        var singleLineClass = (listItem.title !== undefined && listItem.subTitle == undefined) ? Style.singleLine : '';
        var subTitleElement = (listItem.subTitle !== undefined) ? "<small>" + listItem.subTitle + "</small>" : '';
        var iconElement = (listItem.iconClass !== undefined) ? "<span class=\"" + Style.listItemIcon + " " + listItem.iconClass + "\"></span>" : '';
        var titleElement = "";
        if (listItem.title !== undefined && listItem.link !== undefined) {
            titleElement = "<a href=\"" + listItem.link + "\" class=\"" + Style.listItemTitle + " " + singleLineClass + "\">" + iconElement + listItem.title + " " + subTitleElement + "</a>";
        }
        else if (listItem.title !== undefined && listItem.moduleLink !== undefined) {
            titleElement = "<a " + moduleLinkAttribute + " class=\"loadPage " + Style.listItemTitle + " " + singleLineClass + "\">" + iconElement + listItem.title + " " + subTitleElement + "</a>";
        }
        else if (listItem.title !== undefined) {
            titleElement = "<span class=\"" + Style.listItemTitle + " " + singleLineClass + "\" " + moduleLinkAttribute + ">" + iconElement + listItem.title + " " + subTitleElement + "</span>";
        }
        return titleElement;
    };
    ListMenu.prototype.createDragHandleElement = function (listItem) {
        var dragHandleElement = "";
        if (listItem.dragable !== undefined && listItem.dragable === true) {
        }
        return dragHandleElement;
    };
    ListMenu.prototype.createExpandButtonElement = function (listItem) {
        var expandButtonElement = "";
        if (listItem.expandable !== undefined && listItem.expandable === true) {
            expandButtonElement = "<span id=\"" + listItem.id + "-expand-button\" class=\"" + Style.listItemExpandButton + "\"></span>";
        }
        return expandButtonElement;
    };
    ListMenu.prototype.createButtonRowElement = function (listItem) {
        var buttonRowElement = "";
        var expandButton = this.createExpandButtonElement(listItem);
        if (listItem.buttonRow !== undefined) {
            buttonRowElement = "<span class=\"" + Style.listItemButtonRow + "\">" + ButtonRow.getModule(listItem.buttonRow) + expandButton + "</span>";
        }
        else if (listItem.expandable !== undefined && listItem.expandable == true) {
            buttonRowElement = "<span class=\"" + Style.listItemButtonRow + "\">" + expandButton + "</span>";
        }
        return buttonRowElement;
    };
    ListMenu.prototype.createExpandableContentElement = function (listItem) {
        var expandableContentElement = "";
        if (listItem.expandableContent !== undefined) {
            expandableContentElement = "<div id=\"" + listItem.id + "-expandable-content\" class=\"" + Style.listItemExpandableContent + "\">" + listItem.expandableContent + "</div>";
        }
        return expandableContentElement;
    };
    ListMenu.prototype.createModuleElement = function () {
        var listItemElements = "";
        if (this.listItems !== undefined) {
            for (var _i = 0, _a = this.listItems; _i < _a.length; _i++) {
                var listItem = _a[_i];
                var dragHandle = this.createDragHandleElement(listItem);
                var title = this.createTitleElement(listItem);
                var buttonRow = this.createButtonRowElement(listItem);
                var expandableContent = this.createExpandableContentElement(listItem);
                if (listItem.expandable) {
                    this.addListener(listItem);
                }
                listItemElements += "<li class=\"" + Style.listItem + "\">" + title + buttonRow + expandableContent + "</li>";
            }
        }
        var hoverClass = this.hover ? Style.hover : "";
        return "<ul id=\"" + this.id + "\" class=\"" + Style.listMenu + " " + hoverClass + "\">" + listItemElements + "</ul>";
    };
    return ListMenu;
}());
exports.ListMenu = ListMenu;
function getModule(listMenu) {
    return new ListMenu(listMenu).createModuleElement();
}
exports.getModule = getModule;
