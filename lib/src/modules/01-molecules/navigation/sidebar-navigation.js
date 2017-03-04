"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Style = require('./sidebar-navigation.scss');
class SidebarNavigation {
    constructor(sidebarNavigation) {
        this.listItems = sidebarNavigation.listItems;
    }
    createListItemElements(listItems) {
        let listItemElements = "";
        for (let listItem of this.listItems) {
            let id = listItem.id !== undefined ? `id="${listItem.id}"` : '';
            let moduleLink = listItem.moduleLink !== undefined ? `data-module-target="${listItem.moduleLink}"` : '';
            listItemElements += `<li><a class="loadPage" ${id} ${listItem.link} ${moduleLink}>${listItem.name}</a></li>`;
        }
        return listItemElements;
    }
    createModuleElement() {
        let listItemElements = this.createListItemElements(this.listItems);
        return `<ul class="${Style.list}">${listItemElements}</ul>`;
    }
}
exports.SidebarNavigation = SidebarNavigation;
function getModule(sidebarNavigation) {
    return new SidebarNavigation(sidebarNavigation).createModuleElement();
}
exports.getModule = getModule;
