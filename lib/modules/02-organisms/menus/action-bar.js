"use strict";
exports.__esModule = true;
var ActionButton = require("../../00-atoms/buttons/action-button");
var ActionBarMenu = require("../../01-molecules/menus/action-bar-menu");
var ActionBar = /** @class */ (function () {
    function ActionBar(actionBar) {
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
    ActionBar.prototype.createModuleElement = function () {
        var actionButtonElement = ActionButton.getModule(this.actionButton);
        var actionBarMenuElement = ActionBarMenu.getModule(this.actionBarMenu);
        return actionButtonElement + " " + actionBarMenuElement;
    };
    return ActionBar;
}());
exports.ActionBar = ActionBar;
function getModule(actionBar) {
    return new ActionBar(actionBar).createModuleElement();
}
exports.getModule = getModule;
