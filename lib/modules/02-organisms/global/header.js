"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PrimaryNavigation = require("../../01-molecules/navigation/primary-navigation");
const Image = require("../../00-atoms/media/image");
const Sidebar = require("./sidebar");
const Style = require('../../../../src/modules/02-organisms/global/header.scss');
class Header {
    constructor(header) {
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
    AddListener() {
        document.addEventListener('DOMContentLoaded', function () {
            let sidebarToggleElement = document.getElementById('sidebarToggle') !== undefined ? document.getElementById('sidebarToggle') : false;
        }, false);
    }
    getThemeClass(theme) {
        let themeClass = Style.headerThemeDefault;
        if (theme == 'primary')
            themeClass = Style.headerThemePrimary;
        if (theme == 'dark')
            themeClass = Style.headerThemeDark;
        return themeClass;
    }
    createModuleElement() {
        let themeClass = this.getThemeClass(this.theme);
        let logoImage = "";
        let logoUrl = "#";
        let sidebarElement = "";
        let primaryNavigationElement = "";
        if (this.logo !== undefined) {
            if (this.logo.image !== undefined)
                logoImage = Image.getModule(this.logo.image);
            if (this.logo.url !== undefined)
                logoUrl = this.logo.url;
        }
        if (this.sidebar !== undefined) {
            sidebarElement = `
				<div id="sidebarToggle" class="overlay-element ${Style.sidenavToggle}">
					${Sidebar.getModule(this.sidebar)}
				</div>
			`;
        }
        if (this.primaryNavigation !== undefined) {
            if (this.primaryNavigation.theme == undefined) {
                this.primaryNavigation.theme = this.theme;
            }
            this.primaryNavigation.id = this.id + '-primary-navigation';
            primaryNavigationElement = PrimaryNavigation.getModule(this.primaryNavigation);
        }
        return `
			<header class="${Style.navbar} ${themeClass}">
				${sidebarElement}
				<a href="${logoUrl}" class="${Style.logo}">
					${logoImage}
				</a>
				<span class="${Style.menuDivider}"></span>
				${primaryNavigationElement}
			</header>
		`;
    }
}
exports.Header = Header;
function getModule(header) {
    return new Header(header).createModuleElement();
}
exports.getModule = getModule;
