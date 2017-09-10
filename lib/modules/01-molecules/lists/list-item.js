"use strict";
exports.__esModule = true;
var ButtonRow = require("../../01-molecules/buttons/button-row");
var Style = require('../../../../src/modules/01-molecules/lists/list-item.scss');
var ListItem = /** @class */ (function () {
    function ListItem(listItem) {
        this.hover = false;
        this.dragable = false;
        this.expandable = false;
        this.hiddenButtonRow = false;
        if (listItem.id !== undefined)
            this.id = listItem.id;
        if (listItem.title !== undefined)
            this.title = listItem.title;
        if (listItem.subTitle !== undefined)
            this.subTitle = listItem.subTitle;
        if (listItem.iconClass !== undefined)
            this.iconClass = listItem.iconClass;
        if (listItem.hover !== undefined)
            this.hover = listItem.hover;
        if (listItem.dragable !== undefined)
            this.dragable = listItem.dragable;
        if (listItem.expandable !== undefined)
            this.expandable = listItem.expandable;
        if (listItem.expandableContent !== undefined)
            this.expandableContent = listItem.expandableContent;
        if (listItem.buttonRow !== undefined)
            this.buttonRow = listItem.buttonRow;
        if (listItem.hiddenButtonRow !== undefined)
            this.hiddenButtonRow = listItem.hiddenButtonRow;
    }
    ListItem.prototype.addExpandableListener = function () {
        document.addEventListener('DOMContentLoaded', function () {
            var hasExpandButtonElement = document.getElementById(this.id + '-expand-button') !== null;
            var hasExpandableContentElement = document.getElementById(this.id + '-expandable-content') !== null;
            var expandButtonElement = document.getElementById(this.id + '-expand-button');
            var expandableContentElement = document.getElementById(this.id + '-expandable-content');
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
        }.bind(this));
    };
    ListItem.prototype.addButtonRowListener = function () {
        document.addEventListener('DOMContentLoaded', function () {
            var titleId = this.id + '-' + 'title';
            var buttonRowId = this.id + '-' + 'buttonrow';
            var buttonRowElement = document.getElementById(buttonRowId);
            var titleElement = document.getElementById(titleId);
            if (buttonRowElement !== null && titleElement !== null) {
                var buttonRowElementWidth = buttonRowElement.offsetWidth;
                titleElement.style.maxWidth = 'calc(100% - ' + buttonRowElementWidth + 'px)';
            }
        }.bind(this));
    };
    ListItem.prototype.createTitleElement = function () {
        var singleLineClass = (this.title !== undefined && this.subTitle == undefined) ? Style.singleLine : '';
        var subTitleElement = (this.subTitle !== undefined) ? "<small>" + this.subTitle + "</small>" : '';
        var iconElement = (this.iconClass !== undefined) ? "<span class='" + Style.listItemIcon + " " + this.iconClass + "'></span>" : '';
        var titleElement = "";
        if (this.title !== undefined && this.link !== undefined) {
            titleElement = "<a id='" + this.id + "-title' href='" + this.link + "' class='" + Style.listItemTitle + " " + singleLineClass + "'>" + iconElement + this.title + " " + subTitleElement + "</a>";
        }
        else if (this.title !== undefined) {
            titleElement = "<span id='" + this.id + "-title' class='" + Style.listItemTitle + " " + singleLineClass + "'>" + iconElement + this.title + " " + subTitleElement + "</span>";
        }
        return titleElement;
    };
    ListItem.prototype.createExpandButtonElement = function () {
        var expandButtonElement = "";
        if (this.expandable !== undefined && this.expandable === true) {
            expandButtonElement = "<span class='" + Style.listItemDivider + "'></span><span id='" + this.id + "-expand-button' class='" + Style.listItemExpandButton + "'></span>";
        }
        return expandButtonElement;
    };
    ListItem.prototype.createButtonRowElement = function () {
        var buttonRowElement = "";
        var expandButton = this.createExpandButtonElement();
        if (this.buttonRow !== undefined) {
            buttonRowElement = "<span id='" + this.id + "-buttonrow' class='" + Style.listItemButtonRow + "'>" + ButtonRow.getModule(this.buttonRow) + expandButton + "</span>";
        }
        else if (this.expandable !== undefined && this.expandable == true) {
            buttonRowElement = "<span id='" + this.id + "-buttonrow' class='" + Style.listItemButtonRow + "'>" + expandButton + "</span>";
        }
        return buttonRowElement;
    };
    ListItem.prototype.createExpandableContentElement = function () {
        var expandableContentElement = "";
        if (this.expandableContent !== undefined) {
            expandableContentElement = "<div id='" + this.id + "-expandable-content' class='" + Style.listItemExpandableContent + "'>" + this.expandableContent + "</div>";
        }
        return expandableContentElement;
    };
    ListItem.prototype.createModuleElement = function () {
        var listItemElements = "";
        var title = this.createTitleElement();
        var buttonRow = this.createButtonRowElement();
        var expandableContent = this.createExpandableContentElement();
        if (this.expandable) {
            this.addExpandableListener();
        }
        if (this.buttonRow !== undefined) {
            this.addButtonRowListener();
        }
        var hiddenButtonRowClass = this.hiddenButtonRow !== undefined && this.hiddenButtonRow ? Style.hiddenButtonRow : '';
        var hoverClass = this.hover ? Style.hover : "";
        return "<div class='" + Style.listItem + " " + hoverClass + " " + hiddenButtonRowClass + "'>" + title + buttonRow + expandableContent + "</div>";
    };
    return ListItem;
}());
exports.ListItem = ListItem;
function getModule(listItem) {
    return new ListItem(listItem).createModuleElement();
}
exports.getModule = getModule;
