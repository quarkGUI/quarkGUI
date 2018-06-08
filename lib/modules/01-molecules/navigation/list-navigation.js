"use strict";
exports.__esModule = true;
var Style = require("../../../../src/modules/01-molecules/navigation/list-navigation.scss");
var ListNavigation = /** @class */ (function () {
    function ListNavigation(listNavigation) {
        this.listItems = listNavigation.listItems;
    }
    ListNavigation.prototype.createModuleElement = function () {
        var listItemElements = '';
        if (this.listItems.length) {
            for (var _i = 0, _a = this.listItems; _i < _a.length; _i++) {
                var listItem = _a[_i];
                var hasIconElement = listItem.iconElement !== undefined;
                var hasIconClass = listItem.iconClass !== undefined;
                var isVueRouterLink = listItem.vueRouterLink !== undefined ? listItem.vueRouterLink : false;
                var icon = '';
                var link = listItem.link !== undefined ? listItem.link : '';
                if (hasIconElement) {
                    icon = listItem.iconElement;
                }
                else if (hasIconClass) {
                    icon = "<span class='" + listItem.iconClass + " " + Style.listItemIcon + "'></span>";
                }
                if (isVueRouterLink) {
                    listItemElements += "<li><router-link v-bind:to='" + link + "'>" + icon + listItem.name + "</router-link></li>";
                }
                else {
                    listItemElements += "<li><a href='" + link + "'>" + icon + listItem.name + "</a></li>";
                }
            }
        }
        return "<ul class='" + Style.listNavigation + "'>" + listItemElements + "</ul>";
    };
    return ListNavigation;
}());
exports.ListNavigation = ListNavigation;
function getModule(listNavigation) {
    return new ListNavigation(listNavigation).createModuleElement();
}
exports.getModule = getModule;
