"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ToggleButton = require("../../00-atoms/buttons/toggle-button");
const Style = require("../../../../src/modules/01-molecules/menus/action-bar-menu.scss");
class ActionBarMenu {
    constructor(actionBarMenu) {
        this.theme = "";
        this.toggleButtons = [];
        this.id = actionBarMenu.id;
        if (actionBarMenu.theme !== undefined)
            this.theme = actionBarMenu.theme;
        if (actionBarMenu.toggleButtons !== undefined)
            this.toggleButtons = actionBarMenu.toggleButtons;
    }
    getThemeClass(theme) {
        let themeClass = Style.actionBarThemeDefault;
        if (theme == 'primary')
            themeClass = Style.actionBarThemePrimary;
        if (theme == 'info')
            themeClass = Style.actionBarThemeInfo;
        if (theme == 'success')
            themeClass = Style.actionBarThemeSuccess;
        if (theme == 'warning')
            themeClass = Style.actionBarThemeWarning;
        if (theme == 'danger')
            themeClass = Style.actionBarThemeDanger;
        return themeClass;
    }
    createModuleElement() {
        let themeClass = this.getThemeClass(this.theme);
        let toggleButtonElements = "";
        if (this.toggleButtons.length) {
            for (let toggleButton of this.toggleButtons) {
                toggleButtonElements += ToggleButton.getModule(toggleButton);
            }
            ;
        }
        return `<ul id="${this.id}" class="${Style.actionBar} ${themeClass}">${toggleButtonElements}</ul>`;
    }
}
exports.ActionBarMenu = ActionBarMenu;
function getModule(actionBarMenu) {
    return new ActionBarMenu(actionBarMenu).createModuleElement();
}
exports.getModule = getModule;
