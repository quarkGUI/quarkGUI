"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Style = require("./action-button.scss");
class ActionButton {
    constructor(actionButton) {
        this.themeClass = Style.buttonThemeDefault;
        this.id = actionButton.id;
        if (actionButton.iconClass !== undefined)
            this.icon = `<span class="${Style.icon} ${actionButton.iconClass}"></span>`;
        if (actionButton.theme !== undefined)
            this.themeClass = this.getThemeClass(actionButton.theme);
    }
    getThemeClass(theme) {
        let themeClass = '';
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
    }
    addListener(id) {
        document.addEventListener("module-lazy-loaded", function (e) {
            let elementIsDefined = document.getElementById(id) !== undefined;
            let elementIsNotNull = document.getElementById(id) !== null;
            if (elementIsDefined && elementIsNotNull) {
                let element = document.getElementById(id);
                element.onclick = function () {
                    if (element.classList.contains('active')) {
                        element.classList.remove("active");
                        document.body.classList.remove('action-menu-active');
                    }
                    else {
                        element.classList.add("active");
                        document.body.classList.add('action-menu-active');
                    }
                };
            }
        }, false);
    }
    createModuleElement() {
        this.addListener(this.id);
        return `
			<div id="${this.id}" class="${Style.button} ${this.themeClass} ${this.themeClass}">${this.icon}</div>
		`;
    }
}
exports.ActionButton = ActionButton;
function getModule(actionButton) {
    return new ActionButton(actionButton).createModuleElement();
}
exports.getModule = getModule;
