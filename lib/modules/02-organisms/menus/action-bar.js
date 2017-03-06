"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ActionButton = require("../../00-atoms/buttons/action-button");
const ActionBarMenu = require("../../01-molecules/menus/action-bar-menu");
class ActionBar {
    constructor(actionBar) {
        this.theme = "default";
        if (actionBar.theme !== undefined)
            this.theme = actionBar.theme;
        this.actionButton = actionBar.actionButton;
        this.actionBarMenu = actionBar.actionBarMenu;
        if (actionBar.actionButton.theme == undefined)
            actionBar.actionButton.theme = this.theme;
        if (actionBar.actionBarMenu.theme == undefined)
            actionBar.actionBarMenu.theme = this.theme;
    }
    createModuleElement() {
        let actionButtonElement = ActionButton.getModule(this.actionButton);
        let actionBarMenuElement = ActionBarMenu.getModule(this.actionBarMenu);
        return `${actionButtonElement} ${actionBarMenuElement}`;
    }
}
exports.ActionBar = ActionBar;
function getModule(actionBar) {
    return new ActionBar(actionBar).createModuleElement();
}
exports.getModule = getModule;
