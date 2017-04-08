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
    ListMenu.prototype.createTitleElement = function (listItem) {
        var moduleLinkAttribute = (listItem.moduleLink !== undefined) ? "data-module-target=\"" + listItem.moduleLink + "\"" : '';
        var singleLineClass = (listItem.title !== undefined && listItem.subTitle == undefined) ? Style.singleLine : '';
        var subTitleElement = (listItem.subTitle !== undefined) ? "<small>" + listItem.subTitle + "</small>" : '';
        var titleElement = "";
        if (listItem.title !== undefined && listItem.link !== undefined) {
            titleElement = "<a href=\"" + listItem.link + "\" class=\"" + Style.listItemTitle + " " + singleLineClass + "\">" + listItem.title + " " + subTitleElement + "</a>";
        }
        else if (listItem.title !== undefined && listItem.moduleLink !== undefined) {
            titleElement = "<a " + moduleLinkAttribute + " class=\"loadPage " + Style.listItemTitle + " " + singleLineClass + "\">" + listItem.title + " " + subTitleElement + "</a>";
        }
        else if (listItem.title !== undefined) {
            titleElement = "<span class=\"" + Style.listItemTitle + " " + singleLineClass + "\" " + moduleLinkAttribute + ">" + listItem.title + " " + subTitleElement + "</span>";
        }
        return titleElement;
    };
    ListMenu.prototype.createButtonRowElement = function (listItem) {
        var buttonRowElement = "";
        if (listItem.buttonRow !== undefined) {
            buttonRowElement = "<span class=\"" + Style.listItemButtonRow + "\">" + ButtonRow.getModule(listItem.buttonRow) + "</span>";
        }
        return buttonRowElement;
    };
    ListMenu.prototype.createModuleElement = function () {
        var listItemElements = "";
        if (this.listItems !== undefined) {
            for (var _i = 0, _a = this.listItems; _i < _a.length; _i++) {
                var listItem = _a[_i];
                var title = this.createTitleElement(listItem);
                var buttonRow = this.createButtonRowElement(listItem);
                listItemElements += "<li class=\"" + Style.listItem + "\">" + title + " " + buttonRow + "</li>";
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
