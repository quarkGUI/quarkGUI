"use strict";
exports.__esModule = true;
var ToggleButton = require("../../00-atoms/buttons/toggle-button");
var Style = require("../../../../src/modules/01-molecules/menus/action-bar-menu.scss");
var ActionBarMenu = (function () {
    function ActionBarMenu(actionBarMenu) {
        this.theme = "";
        this.toggleButtons = [];
        this.id = actionBarMenu.id;
        if (actionBarMenu.theme !== undefined)
            this.theme = actionBarMenu.theme;
        if (actionBarMenu.toggleButtons !== undefined)
            this.toggleButtons = actionBarMenu.toggleButtons;
    }
    ActionBarMenu.prototype.getThemeClass = function (theme) {
        var themeClass = Style.actionBarThemeDefault;
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
    };
    ActionBarMenu.prototype.createModuleElement = function () {
        var themeClass = this.getThemeClass(this.theme);
        var toggleButtonElements = "";
        if (this.toggleButtons.length) {
            for (var _i = 0, _a = this.toggleButtons; _i < _a.length; _i++) {
                var toggleButton = _a[_i];
                toggleButtonElements += ToggleButton.getModule(toggleButton);
            }
            ;
        }
        return "<ul id=\"" + this.id + "\" class=\"" + Style.actionBar + " " + themeClass + "\">" + toggleButtonElements + "</ul>";
    };
    return ActionBarMenu;
}());
exports.ActionBarMenu = ActionBarMenu;
function getModule(actionBarMenu) {
    return new ActionBarMenu(actionBarMenu).createModuleElement();
}
exports.getModule = getModule;
