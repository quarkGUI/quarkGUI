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
        if (header.primaryNavigationLeft !== undefined)
            this.primaryNavigationLeft = header.primaryNavigationLeft;
        if (header.primaryNavigationRight !== undefined)
            this.primaryNavigationRight = header.primaryNavigationRight;
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
        if (this.logo !== undefined) {
            if (this.logo.image !== undefined)
                logoImage = Image.getModule(this.logo.image);
            if (this.logo.url !== undefined)
                logoUrl = this.logo.url;
        }
        if (this.sidebar !== undefined) {
            sidebarElement = "<div id='sidebarToggle' class='overlay-element " + Style.sidenavToggle + "'>" + Sidebar.getModule(this.sidebar) + "</div>";
        }
        var primaryNavigationLeftElement = "";
        if (this.primaryNavigationLeft !== undefined) {
            if (this.primaryNavigationLeft.theme == undefined) {
                this.primaryNavigationLeft.theme = this.theme;
            }
            this.primaryNavigationLeft.id = this.id + '-primary-navigation-left';
            primaryNavigationLeftElement = PrimaryNavigation.getModule(this.primaryNavigationLeft);
        }
        var primaryNavigationRightElement = "";
        if (this.primaryNavigationRight !== undefined) {
            if (this.primaryNavigationRight.theme == undefined) {
                this.primaryNavigationRight.theme = this.theme;
            }
            this.primaryNavigationRight.id = this.id + '-primary-navigation-right';
            primaryNavigationRightElement = PrimaryNavigation.getModule(this.primaryNavigationRight);
        }
        return "<header class='" + Style.navbar + " " + themeClass + "'>" + sidebarElement + "<a href='" + logoUrl + "' class='" + Style.logo + "'>" + logoImage + "</a><span class='" + Style.menuDivider + "'></span><div class='" + Style.primaryNavigationLeft + "'>" + primaryNavigationLeftElement + "</div><div class='" + Style.primaryNavigationRight + "'>" + primaryNavigationRightElement + "</div></header>";
    };
    return Header;
}());
exports.Header = Header;
function getModule(header) {
    return new Header(header).createModuleElement();
}
exports.getModule = getModule;
