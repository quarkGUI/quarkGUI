"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ListNavigation = require("./list-navigation");
const Style = require('../../../../src/modules/01-molecules/navigation/primary-navigation.scss');
class PrimaryNavigation {
    constructor(primaryNavigation) {
        this.id = "";
        this.theme = "default";
        this.listItems = [];
        if (primaryNavigation.id !== undefined)
            this.id = primaryNavigation.id;
        if (primaryNavigation.theme !== undefined)
            this.theme = primaryNavigation.theme;
        if (primaryNavigation.listItems !== undefined)
            this.listItems = primaryNavigation.listItems;
    }
    getThemeClass(theme) {
        let themeClass = Style.listThemeDefault;
        if (theme == 'primary')
            themeClass = Style.listThemePrimary;
        if (theme == 'dark')
            themeClass = Style.listThemeDark;
        return themeClass;
    }
    createListElements(listItems) {
        let listElements = "";
        if (this.listItems.length) {
            for (let listItem of this.listItems) {
                let dropdownContent = '';
                let dropdownClass = '';
                let listElement = '';
                let hasDropdown = listItem.dropdownContent !== undefined;
                if (hasDropdown) {
                    dropdownContent = `<div class="${Style.dropdownContent}">${ListNavigation.getModule(listItem.dropdownContent)}<div>`;
                    dropdownClass = `${Style.hasDropdown}`;
                    listElement = ` <li class="overlay-element ${dropdownClass}">
										<span class="${Style.dropdownTitle}">${listItem.name}</span>
										${dropdownContent}
									</li>`;
                }
                else {
                    listElement = `<li><a href="${listItem.link}">${listItem.name}</a></li>`;
                }
                listElements += listElement;
            }
        }
        return listElements;
    }
    addListener() {
        document.addEventListener('DOMContentLoaded', function () {
            let navigationElements = document.getElementsByClassName(Style.hasDropdown) !== undefined ? document.getElementsByClassName(Style.hasDropdown) : false;
            if (navigationElements) {
                for (var i = 0; i < navigationElements.length; i++) {
                    let navigationElement = navigationElements[i];
                    let dropdownElements = navigationElement.getElementsByClassName(Style.dropdownContent);
                    let dropdownElement = dropdownElements[0];
                    let navigationElementWidth = navigationElements[i].offsetWidth;
                    let dropdownElementWidth = dropdownElements[0].offsetWidth;
                    let dropdownElementHeight = dropdownElements[0].offsetHeight;
                    let widthDif = navigationElementWidth - dropdownElementWidth;
                    dropdownElement.style.marginLeft = widthDif / 2 + 'px';
                }
            }
        }, false);
    }
    createModuleElement() {
        this.addListener();
        let listItemElements = this.createListElements(this.listItems);
        let themeClass = this.getThemeClass(this.theme);
        return `<ul id="${this.id}"" class="${Style.list} ${themeClass}">${listItemElements}</ul>`;
    }
}
exports.PrimaryNavigation = PrimaryNavigation;
function getModule(primaryNavigation) {
    return new PrimaryNavigation(primaryNavigation).createModuleElement();
}
exports.getModule = getModule;
