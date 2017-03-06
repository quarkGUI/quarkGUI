"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Style = require("../../../../src/modules/01-molecules/navigation/list-navigation.scss");
class ListNavigation {
    constructor(listNavigation) {
        this.listItems = listNavigation.listItems;
    }
    createModuleElement() {
        let listItemElements = "";
        if (this.listItems.length) {
            for (let listItem of this.listItems) {
                listItemElements += `<li><a href="${listItem.link}">${listItem.name}</a></li>`;
            }
            ;
        }
        return `<ul class="${Style.listNavigation}">${listItemElements}</ul>`;
    }
}
exports.ListNavigation = ListNavigation;
function getModule(listNavigation) {
    return new ListNavigation(listNavigation).createModuleElement();
}
exports.getModule = getModule;
