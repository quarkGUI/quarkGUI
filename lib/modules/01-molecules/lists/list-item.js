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
        if (listItem.link !== undefined)
            this.link = listItem.link;
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
        if (listItem.vueBindings !== undefined)
            this.vueBindings = listItem.vueBindings;
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
    ListItem.prototype.getVueBinding = function (attributeName) {
        var vueBinding = false;
        if (this.vueBindings !== undefined) {
            vueBinding = this.vueBindings[attributeName] !== undefined ? this.vueBindings[attributeName] : false;
        }
        return vueBinding;
    };
    ListItem.prototype.createTitleElement = function () {
        var hasTitle = this.title !== undefined || this.getVueBinding('title');
        var hasSubTitle = this.subTitle !== undefined || this.getVueBinding('subTitle');
        var hasLink = this.link !== undefined || this.getVueBinding('link');
        var hasIconClass = this.iconClass !== undefined || this.getVueBinding('iconClass');
        var singleLineClass = (hasTitle && !hasSubTitle) ? Style.singleLine : '';
        var subTitleElement = '';
        if (hasSubTitle) {
            var subTitle = this.getVueBinding('subTitle') ? "{{ " + this.getVueBinding('subTitle') + " }}" : this.subTitle;
            subTitleElement = "<small>" + subTitle + "</small>";
        }
        var iconElement = '';
        if (hasIconClass) {
            var iconClassAttribute = '';
            if (this.getVueBinding('iconClass')) {
                var iconClass = this.getVueBinding('iconClass');
                iconClassAttribute = "class='" + Style.listItemIcon + "' v-bind:class='" + iconClass + "'";
            }
            else {
                iconClassAttribute = "class='" + Style.listItemIcon + " " + this.iconClass + "'";
            }
            iconElement = "<span " + iconClassAttribute + "></span>";
        }
        var titleElement = "";
        if (hasTitle) {
            var title = this.getVueBinding('title') ? "{{ " + this.getVueBinding('title') + " }}" : this.title;
            if (hasLink) {
                var linkAttribute = '';
                if (this.getVueBinding('link')) {
                    var link = this.getVueBinding('link');
                    linkAttribute = "v-bind:href='" + link + "'";
                }
                else {
                    linkAttribute = "href='" + this.link + "'";
                }
                titleElement = "<a id='" + this.id + "-title' " + linkAttribute + " class='" + Style.listItemTitle + " " + singleLineClass + "'>" + iconElement + title + " " + subTitleElement + "</a>";
            }
            else {
                titleElement = "<span id='" + this.id + "-title' class='" + Style.listItemTitle + " " + singleLineClass + "'>" + iconElement + title + " " + subTitleElement + "</span>";
            }
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
