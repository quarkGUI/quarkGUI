"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const SidebarNavigation = require("../../01-molecules/navigation/sidebar-navigation");
const Image = require("../../00-atoms/media/image");
const Style = require('./sidebar.scss');
class Sidebar {
    constructor(sidebar) {
        if (sidebar.sidebarNavigation !== undefined)
            this.sidebarNavigation = sidebar.sidebarNavigation;
        if (sidebar.logo !== undefined)
            this.logo = sidebar.logo;
    }
    createModuleElement() {
        let logoImage = "";
        let logoUrl = "#";
        let SidebarNavigationElement = SidebarNavigation.getModule(this.sidebarNavigation);
        if (this.logo !== undefined) {
            if (this.logo.image !== undefined)
                logoImage = Image.getModule(this.logo.image);
            if (this.logo.url !== undefined)
                logoUrl = this.logo.url;
        }
        return `
			<aside class="${Style.sidebar}">
				<div class="${Style.sidebarOverlay}"></div>
				<div class="${Style.sidebarContent}">
					<a href="${logoUrl}" class="${Style.logo}">
						${logoImage}
					</a>
					${SidebarNavigationElement}
				</div>
			</aside>
		`;
    }
}
exports.Sidebar = Sidebar;
function getModule(sidebar) {
    return new Sidebar(sidebar).createModuleElement();
}
exports.getModule = getModule;
