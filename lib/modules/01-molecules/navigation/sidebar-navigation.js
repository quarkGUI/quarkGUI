"use strict";
exports.__esModule = true;
var ListNavigation = require("./list-navigation");
var Style = require('../../../../src/modules/01-molecules/navigation/sidebar-navigation.scss');
var SidebarNavigation = /** @class */ (function () {
    function SidebarNavigation(sidebarNavigation) {
        this.listItems = sidebarNavigation.listItems;
    }
    SidebarNavigation.prototype.createListItemElements = function (listItems) {
        var listItemElements = "";
        listItemElements = ListNavigation.getModule({ listItems: listItems });
        return listItemElements;
    };
    SidebarNavigation.prototype.createModuleElement = function () {
        var listItemElements = this.createListItemElements(this.listItems);
        return "<ul class='" + Style.list + "'>" + listItemElements + "</ul>";
    };
    return SidebarNavigation;
}());
exports.SidebarNavigation = SidebarNavigation;
function getModule(sidebarNavigation) {
    return new SidebarNavigation(sidebarNavigation).createModuleElement();
}
exports.getModule = getModule;
