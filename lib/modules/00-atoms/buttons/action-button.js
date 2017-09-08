"use strict";
exports.__esModule = true;
var Style = require("../../../../src/modules/00-atoms/buttons/action-button.scss");
var ActionButton = /** @class */ (function () {
    function ActionButton(actionButton) {
        this.themeClass = Style.buttonThemeDefault;
        this.id = actionButton.id;
        if (actionButton.iconClass !== undefined)
            this.icon = "<span class='" + Style.icon + " " + actionButton.iconClass + "'></span>";
        if (actionButton.theme !== undefined)
            this.themeClass = this.getThemeClass(actionButton.theme);
    }
    ActionButton.prototype.getThemeClass = function (theme) {
        var themeClass = '';
        if (theme == 'primary')
            themeClass = Style.buttonThemePrimary;
        if (theme == 'info')
            themeClass = Style.buttonThemeInfo;
        if (theme == 'success')
            themeClass = Style.buttonThemeSuccess;
        if (theme == 'warning')
            themeClass = Style.buttonThemeWarning;
        if (theme == 'danger')
            themeClass = Style.buttonThemeDanger;
        return themeClass;
    };
    ActionButton.prototype.addListener = function (id) {
        document.addEventListener('DOMContentLoaded', function (e) {
            var elementIsDefined = document.getElementById(id) !== undefined;
            var elementIsNotNull = document.getElementById(id) !== null;
            if (elementIsDefined && elementIsNotNull) {
                var element_1 = document.getElementById(id);
                element_1.onclick = function () {
                    if (element_1.classList.contains('active')) {
                        element_1.classList.remove("active");
                        document.body.classList.remove('action-menu-active');
                    }
                    else {
                        element_1.classList.add("active");
                        document.body.classList.add('action-menu-active');
                    }
                };
            }
        }, false);
    };
    ActionButton.prototype.createModuleElement = function () {
        this.addListener(this.id);
        return "<div id='" + this.id + "' class='" + Style.button + " " + this.themeClass + " " + this.themeClass + "'>" + this.icon + "</div>";
    };
    return ActionButton;
}());
exports.ActionButton = ActionButton;
function getModule(actionButton) {
    return new ActionButton(actionButton).createModuleElement();
}
exports.getModule = getModule;
