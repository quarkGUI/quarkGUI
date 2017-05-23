"use strict";
exports.__esModule = true;
var Style = require("../../../../src/modules/01-molecules/navigation/list-navigation.scss");
var ListNavigation = (function () {
    function ListNavigation(listNavigation) {
        this.listItems = listNavigation.listItems;
    }
    ListNavigation.prototype.createModuleElement = function () {
        var listItemElements = '';
        if (this.listItems.length) {
            for (var _i = 0, _a = this.listItems; _i < _a.length; _i++) {
                var listItem = _a[_i];
                var hasIcon = listItem.iconClass !== undefined;
                var icon = '';
                if (hasIcon) {
                    icon = "<span class='" + listItem.iconClass + "'></span>";
                }
                listItemElements += "<li><a href='" + listItem.link + "'>" + icon + listItem.name + "</a></li>";
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
