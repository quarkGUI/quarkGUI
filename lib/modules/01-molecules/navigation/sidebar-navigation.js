"use strict";
exports.__esModule = true;
var Style = require('../../../../src/modules/01-molecules/navigation/sidebar-navigation.scss');
var SidebarNavigation = /** @class */ (function () {
    function SidebarNavigation(sidebarNavigation) {
        this.listItems = sidebarNavigation.listItems;
    }
    SidebarNavigation.prototype.createListItemElements = function (listItems) {
        var listItemElements = "";
        for (var _i = 0, _a = this.listItems; _i < _a.length; _i++) {
            var listItem = _a[_i];
            var id = listItem.id !== undefined ? "id='" + listItem.id + "'" : '';
            var hasModuleLink = listItem.moduleLink !== undefined;
            var hasLink = listItem.link !== undefined;
            var hasIcon = listItem.iconClass !== undefined;
            var linkAttribute = '';
            var iconElement = '';
            if (hasModuleLink) {
                linkAttribute = "data-module-target='" + listItem.moduleLink + "'";
            }
            else if (hasLink) {
                linkAttribute = "href='" + listItem.link + "'";
            }
            if (hasIcon) {
                iconElement = "<span class='" + listItem.iconClass + " " + Style.listItemIcon + "'></span>";
            }
            listItemElements += "<li><a class='loadPage' " + id + " " + linkAttribute + ">" + iconElement + listItem.name + "</a></li>";
        }
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
