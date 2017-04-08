"use strict";
exports.__esModule = true;
var Style = require("../../../../src/modules/00-atoms/buttons/toggle-button.scss");
var ToggleButton = (function () {
    function ToggleButton(toggleButton) {
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
            this.icon = "<span class=\"" + Style.icon + " " + toggleButton.iconClass + "\"></span>";
    }
    ToggleButton.prototype.getThemeClass = function (theme) {
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
    ToggleButton.prototype.addListener = function (id, targetClass) {
        document.addEventListener("module-lazy-loaded", function (e) {
            var elementIsDefined = document.getElementById(id) !== undefined;
            var elementIsNotNull = document.getElementById(id) !== null;
            if (elementIsDefined && elementIsNotNull) {
                var element_1 = document.getElementById(id);
                element_1.onclick = function () {
                    var targetElements = document.getElementsByClassName(targetClass);
                    if (targetElements.length > 0) {
                        var targetElementsArray = [].slice.call(targetElements);
                        if (element_1.classList.contains('active')) {
                            element_1.classList.remove('active');
                            for (var _i = 0, targetElementsArray_1 = targetElementsArray; _i < targetElementsArray_1.length; _i++) {
                                var targetElement = targetElementsArray_1[_i];
                                targetElement.classList.remove('active');
                            }
                        }
                        else {
                            element_1.classList.add('active');
                            for (var _a = 0, targetElementsArray_2 = targetElementsArray; _a < targetElementsArray_2.length; _a++) {
                                var targetElement = targetElementsArray_2[_a];
                                targetElement.classList.add('active');
                            }
                        }
                    }
                };
            }
        }, false);
    };
    ToggleButton.prototype.createModuleElement = function () {
        this.addListener(this.id, this.targetClass);
        return " \n\t\t<button id=\"" + this.id + "\" data-toggle-type=\"" + this.toggleType + "\" title=\"" + this.title + "\" value=\"" + this.targetClass + "\" class=\"" + Style.button + " " + this.themeClass + "\"> \n\t\t\t" + this.icon + "\n\t\t</button>\n\t\t";
    };
    return ToggleButton;
}());
exports.ToggleButton = ToggleButton;
function getModule(toggleButton) {
    return new ToggleButton(toggleButton).createModuleElement();
}
exports.getModule = getModule;
