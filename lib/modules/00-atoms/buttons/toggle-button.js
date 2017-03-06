"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Style = require("../../../../src/modules/00-atoms/buttons/toggle-button.scss");
class ToggleButton {
    constructor(toggleButton) {
        this.toggleType = "";
        this.title = "";
        this.themeClass = Style.buttonThemeDefault;
        this.id = toggleButton.id;
        this.targetClass = toggleButton.targetClass;
        if (toggleButton.toggleType !== undefined)
            this.toggleType = toggleButton.toggleType;
        if (toggleButton.title !== undefined)
            this.title = toggleButton.title;
        if (toggleButton.theme !== undefined)
            this.themeClass = this.getThemeClass(toggleButton.theme);
        if (toggleButton.iconClass !== undefined)
            this.icon = `<span class="${Style.icon} ${toggleButton.iconClass}"></span>`;
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
    addListener(id, targetClass) {
        document.addEventListener("module-lazy-loaded", function (e) {
            let elementIsDefined = document.getElementById(id) !== undefined;
            let elementIsNotNull = document.getElementById(id) !== null;
            if (elementIsDefined && elementIsNotNull) {
                let element = document.getElementById(id);
                element.onclick = function () {
                    let targetElements = document.getElementsByClassName(targetClass);
                    if (targetElements.length > 0) {
                        let targetElementsArray = [].slice.call(targetElements);
                        if (element.classList.contains('active')) {
                            element.classList.remove('active');
                            for (let targetElement of targetElementsArray) {
                                targetElement.classList.remove('active');
                            }
                        }
                        else {
                            element.classList.add('active');
                            for (let targetElement of targetElementsArray) {
                                targetElement.classList.add('active');
                            }
                        }
                    }
                };
            }
        }, false);
    }
    createModuleElement() {
        this.addListener(this.id, this.targetClass);
        return ` 
		<button id="${this.id}" data-toggle-type="${this.toggleType}" title="${this.title}" value="${this.targetClass}" class="${Style.button} ${this.themeClass}"> 
			${this.icon}
		</button>
		`;
    }
}
exports.ToggleButton = ToggleButton;
function getModule(toggleButton) {
    return new ToggleButton(toggleButton).createModuleElement();
}
exports.getModule = getModule;
