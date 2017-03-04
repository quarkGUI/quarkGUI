"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ButtonRow = require("../../01-molecules/buttons/button-row");
const Style = require('./list-menu.scss');
class ListMenu {
    constructor(listMenu) {
        this.id = "";
        this.hover = false;
        if (listMenu.id !== undefined)
            this.id = listMenu.id;
        if (listMenu.listItems !== undefined)
            this.listItems = listMenu.listItems;
        if (listMenu.hover !== undefined)
            this.hover = listMenu.hover;
    }
    createTitleElement(listItem) {
        let moduleLinkAttribute = (listItem.moduleLink !== undefined) ? `data-module-target="${listItem.moduleLink}"` : '';
        let singleLineClass = (listItem.title !== undefined && listItem.subTitle == undefined) ? Style.singleLine : '';
        let subTitleElement = (listItem.subTitle !== undefined) ? `<small>${listItem.subTitle}</small>` : '';
        let titleElement = "";
        if (listItem.title !== undefined && listItem.link !== undefined) {
            titleElement = `<a href="${listItem.link}" class="${Style.listItemTitle} ${singleLineClass}">${listItem.title} ${subTitleElement}</a>`;
        }
        else if (listItem.title !== undefined && listItem.moduleLink !== undefined) {
            titleElement = `<a ${moduleLinkAttribute} class="loadPage ${Style.listItemTitle} ${singleLineClass}">${listItem.title} ${subTitleElement}</a>`;
        }
        else if (listItem.title !== undefined) {
            titleElement = `<span class="${Style.listItemTitle} ${singleLineClass}" ${moduleLinkAttribute}>${listItem.title} ${subTitleElement}</span>`;
        }
        return titleElement;
    }
    createButtonRowElement(listItem) {
        let buttonRowElement = "";
        if (listItem.buttonRow !== undefined) {
            buttonRowElement = `<span class="${Style.listItemButtonRow}">${ButtonRow.getModule(listItem.buttonRow)}</span>`;
        }
        return buttonRowElement;
    }
    createModuleElement() {
        var listItemElements = "";
        if (this.listItems !== undefined) {
            for (let listItem of this.listItems) {
                let title = this.createTitleElement(listItem);
                let buttonRow = this.createButtonRowElement(listItem);
                listItemElements += `<li class="${Style.listItem}">${title} ${buttonRow}</li>`;
            }
        }
        let hoverClass = this.hover ? Style.hover : "";
        return `<ul id="${this.id}" class="${Style.listMenu} ${hoverClass}">${listItemElements}</ul>`;
    }
}
exports.ListMenu = ListMenu;
function getModule(listMenu) {
    return new ListMenu(listMenu).createModuleElement();
}
exports.getModule = getModule;
