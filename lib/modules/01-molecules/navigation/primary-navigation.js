"use strict";
exports.__esModule = true;
var ListNavigation = require("./list-navigation");
var Style = require('../../../../src/modules/01-molecules/navigation/primary-navigation.scss');
var PrimaryNavigation = /** @class */ (function () {
    function PrimaryNavigation(primaryNavigation) {
        this.id = "";
        this.theme = "default";
        this.listItems = [];
        if (primaryNavigation.id !== undefined)
            this.id = primaryNavigation.id;
        if (primaryNavigation.theme !== undefined)
            this.theme = primaryNavigation.theme;
        if (primaryNavigation.listItems !== undefined)
            this.listItems = primaryNavigation.listItems;
    }
    PrimaryNavigation.prototype.getThemeClass = function (theme) {
        var themeClass = Style.listThemeDefault;
        if (theme == 'primary')
            themeClass = Style.listThemePrimary;
        if (theme == 'dark')
            themeClass = Style.listThemeDark;
        return themeClass;
    };
    PrimaryNavigation.prototype.getResponsiveClass = function (listItem) {
        var responsiveClass = "";
        if (listItem.responsive !== undefined) {
            var showIcon = listItem.responsive.showIcon !== undefined && listItem.responsive.showIcon;
            var responsiveIconClass = showIcon ? Style.showIconOnPhone : "";
            var showText = listItem.responsive.showText !== undefined && listItem.responsive.showText;
            var responsiveTextClass = showText ? Style.showTextOnPhone : "";
            responsiveClass = responsiveIconClass + " " + responsiveTextClass;
        }
        return "" + responsiveClass;
    };
    PrimaryNavigation.prototype.createIconElement = function (listItem) {
        var iconElement = '';
        if (listItem.iconClass !== undefined) {
            iconElement = "<span class='" + Style.listItemIcon + " " + listItem.iconClass + "'></span>";
        }
        return iconElement;
    };
    PrimaryNavigation.prototype.createNameElement = function (listItem) {
        var nameElement = '';
        if (listItem.name !== undefined) {
            nameElement = "" + listItem.name;
        }
        return nameElement;
    };
    PrimaryNavigation.prototype.createListElements = function (listItems) {
        var listElements = "";
        if (this.listItems.length) {
            for (var _i = 0, _a = this.listItems; _i < _a.length; _i++) {
                var listItem = _a[_i];
                var dropdownContent = '';
                var dropdownClass = '';
                var iconElement = this.createIconElement(listItem);
                var nameElement = this.createNameElement(listItem);
                var listElement = '';
                var responsiveClass = this.getResponsiveClass(listItem);
                var hasDropdown = listItem.dropdownContent !== undefined;
                if (hasDropdown) {
                    dropdownContent = "<div class='" + Style.dropdownContent + "'><span class='" + Style.arrow + "'></span>" + ListNavigation.getModule(listItem.dropdownContent) + "</div>";
                    dropdownClass = "" + Style.hasDropdown;
                    listElement = "<li class='overlay-element " + responsiveClass + " " + dropdownClass + "'>" + iconElement + "<span class='" + Style.dropdownTitle + "'>" + nameElement + "</span>" + dropdownContent + "</li>";
                }
                else {
                    listElement = "<li class='" + responsiveClass + "'><a href='" + listItem.link + "'>" + iconElement + "<span class='" + Style.linkTitle + "'>" + nameElement + "</span></a></li>";
                }
                listElements += listElement;
            }
        }
        return listElements;
    };
    PrimaryNavigation.prototype.addListener = function () {
        document.addEventListener('DOMContentLoaded', function () {
            var navigationElements = document.getElementsByClassName(Style.hasDropdown) !== undefined ? document.getElementsByClassName(Style.hasDropdown) : false;
            if (navigationElements) {
                for (var i = 0; i < navigationElements.length; i++) {
                    var navigationElement = navigationElements[i];
                    var dropdownElements = navigationElement.getElementsByClassName(Style.dropdownContent);
                    var dropdownElement = dropdownElements[0];
                    var allreadyCalculated = dropdownElement.classList.contains("calculated");
                    if (!allreadyCalculated) {
                        var navigationElementWidth = navigationElements[i].offsetWidth;
                        var dropdownElementWidth = dropdownElements[0].offsetWidth;
                        var dropdownElementHeight = dropdownElements[0].offsetHeight;
                        var widthDif = dropdownElementWidth - navigationElementWidth;
                        var dropdownElementCenterOffset = widthDif / 2;
                        var windowWidth = window.innerWidth;
                        var dropdownElementOffsetLeft = dropdownElements[0].offsetLeft;
                        var dropdownElementOffsetRigth = dropdownElementWidth + dropdownElementOffsetLeft;
                        var dropdownElementHorizontalOverflow = dropdownElementOffsetRigth - windowWidth - dropdownElementCenterOffset;
                        if (dropdownElementHorizontalOverflow > 0) {
                            dropdownElementCenterOffset = dropdownElementCenterOffset + dropdownElementHorizontalOverflow;
                            // Get arrow element
                            var dropdownArrowElements = dropdownElement.getElementsByClassName(Style.arrow);
                            var dropdownArrowElement = dropdownArrowElements[0];
                            // Compensate for margin left on container element and add 5px (half of arrow width)
                            var arrowMarginLeft = dropdownElementHorizontalOverflow - 5;
                            dropdownArrowElement.style.marginLeft = arrowMarginLeft + "px";
                        }
                        dropdownElement.style.marginLeft = dropdownElementCenterOffset * -1 + 'px';
                        dropdownElement.classList.add("calculated");
                    }
                }
            }
        }, false);
    };
    PrimaryNavigation.prototype.createModuleElement = function () {
        this.addListener();
        var listItemElements = this.createListElements(this.listItems);
        var themeClass = this.getThemeClass(this.theme);
        return "<ul id='" + this.id + "' class='" + Style.list + " " + themeClass + "'>" + listItemElements + "</ul>";
    };
    return PrimaryNavigation;
}());
exports.PrimaryNavigation = PrimaryNavigation;
function getModule(primaryNavigation) {
    return new PrimaryNavigation(primaryNavigation).createModuleElement();
}
exports.getModule = getModule;
