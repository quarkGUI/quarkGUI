"use strict";
exports.__esModule = true;
var SidebarNavigation = require("../../01-molecules/navigation/sidebar-navigation");
var Image = require("../../00-atoms/media/image");
var Style = require('../../../../src/modules/02-organisms/global/sidebar.scss');
var Sidebar = (function () {
    function Sidebar(sidebar) {
        if (sidebar.sidebarNavigation !== undefined)
            this.sidebarNavigation = sidebar.sidebarNavigation;
        if (sidebar.logo !== undefined)
            this.logo = sidebar.logo;
    }
    Sidebar.prototype.createModuleElement = function () {
        var logoImage = "";
        var logoUrl = "#";
        var SidebarNavigationElement = SidebarNavigation.getModule(this.sidebarNavigation);
        if (this.logo !== undefined) {
            if (this.logo.image !== undefined)
                logoImage = Image.getModule(this.logo.image);
            if (this.logo.url !== undefined)
                logoUrl = this.logo.url;
        }
        return "\n\t\t\t<aside class=\"" + Style.sidebar + "\">\n\t\t\t\t<div class=\"" + Style.sidebarOverlay + "\"></div>\n\t\t\t\t<div class=\"" + Style.sidebarContent + "\">\n\t\t\t\t\t<a href=\"" + logoUrl + "\" class=\"" + Style.logo + "\">\n\t\t\t\t\t\t" + logoImage + "\n\t\t\t\t\t</a>\n\t\t\t\t\t" + SidebarNavigationElement + "\n\t\t\t\t</div>\n\t\t\t</aside>\n\t\t";
    };
    return Sidebar;
}());
exports.Sidebar = Sidebar;
function getModule(sidebar) {
    return new Sidebar(sidebar).createModuleElement();
}
exports.getModule = getModule;
