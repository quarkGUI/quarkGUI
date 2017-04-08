"use strict";
exports.__esModule = true;
var PrimaryNavigation = require("../../01-molecules/navigation/primary-navigation");
var Image = require("../../00-atoms/media/image");
var Sidebar = require("./sidebar");
var Style = require('../../../../src/modules/02-organisms/global/header.scss');
var Header = (function () {
    function Header(header) {
        this.theme = "default";
        if (header.theme !== undefined)
            this.theme = header.theme;
        if (header.logo !== undefined)
            this.logo = header.logo;
        if (header.primaryNavigation !== undefined)
            this.primaryNavigation = header.primaryNavigation;
        if (header.sidebar !== undefined)
            this.sidebar = header.sidebar;
    }
    Header.prototype.addListener = function () {
        document.addEventListener('DOMContentLoaded', function () {
            var sidebarToggleElement = document.getElementById('sidebarToggle') !== undefined ? document.getElementById('sidebarToggle') : false;
        }, false);
    };
    Header.prototype.getThemeClass = function (theme) {
        var themeClass = Style.headerThemeDefault;
        if (theme == 'primary')
            themeClass = Style.headerThemePrimary;
        if (theme == 'dark')
            themeClass = Style.headerThemeDark;
        return themeClass;
    };
    Header.prototype.createModuleElement = function () {
        this.addListener();
        var themeClass = this.getThemeClass(this.theme);
        var logoImage = "";
        var logoUrl = "#";
        var sidebarElement = "";
        var primaryNavigationElement = "";
        if (this.logo !== undefined) {
            if (this.logo.image !== undefined)
                logoImage = Image.getModule(this.logo.image);
            if (this.logo.url !== undefined)
                logoUrl = this.logo.url;
        }
        if (this.sidebar !== undefined) {
            sidebarElement = "\n\t\t\t\t<div id=\"sidebarToggle\" class=\"overlay-element " + Style.sidenavToggle + "\">\n\t\t\t\t\t" + Sidebar.getModule(this.sidebar) + "\n\t\t\t\t</div>\n\t\t\t";
        }
        if (this.primaryNavigation !== undefined) {
            if (this.primaryNavigation.theme == undefined) {
                this.primaryNavigation.theme = this.theme;
            }
            this.primaryNavigation.id = this.id + '-primary-navigation';
            primaryNavigationElement = PrimaryNavigation.getModule(this.primaryNavigation);
        }
        return "\n\t\t\t<header class=\"" + Style.navbar + " " + themeClass + "\">\n\t\t\t\t" + sidebarElement + "\n\t\t\t\t<a href=\"" + logoUrl + "\" class=\"" + Style.logo + "\">\n\t\t\t\t\t" + logoImage + "\n\t\t\t\t</a>\n\t\t\t\t<span class=\"" + Style.menuDivider + "\"></span>\n\t\t\t\t" + primaryNavigationElement + "\n\t\t\t</header>\n\t\t";
    };
    return Header;
}());
exports.Header = Header;
function getModule(header) {
    return new Header(header).createModuleElement();
}
exports.getModule = getModule;
