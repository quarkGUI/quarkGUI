"use strict";
exports.__esModule = true;
var Style = require("../../../../src/modules/00-atoms/buttons/button.scss");
var Button = (function () {
    function Button(button) {
        this.id = "";
        this.link = "#";
        this.icon = "";
        this.content = "";
        this.type = "flat";
        this.theme = "default";
        this.id = button.id;
        if (button.id !== undefined)
            this.id = button.id;
        if (button.link !== undefined)
            this.link = button.link;
        if (button.iconClass !== undefined)
            this.icon = "<span class='" + Style.icon + " " + button.iconClass + "'></span>";
        if (button.content !== undefined)
            this.content = button.content;
        if (button.type !== undefined)
            this.type = button.type;
        if (button.theme !== undefined)
            this.theme = button.theme;
    }
    Button.prototype.getThemeClass = function (theme) {
        var themeClass = Style.buttonThemeDefault;
        if (theme == "primary")
            themeClass = Style.buttonThemePrimary;
        if (theme == "info")
            themeClass = Style.buttonThemeInfo;
        if (theme == "success")
            themeClass = Style.buttonThemeSuccess;
        if (theme == "warning")
            themeClass = Style.buttonThemeWarning;
        if (theme == "danger")
            themeClass = Style.buttonThemeDanger;
        return themeClass;
    };
    Button.prototype.getTypeClass = function (type) {
        var typeClass = Style.buttonTypeFlat;
        if (type == "raised")
            typeClass = Style.buttonTypeRaised;
        if (type == "minimal")
            typeClass = Style.buttonTypeMinimal;
        return typeClass;
    };
    Button.prototype.createModuleElement = function () {
        var themeClass = this.getThemeClass(this.theme);
        var typeClass = (this.type !== undefined) ? this.getTypeClass(this.type) : Style.buttonTypeFlat;
        return "<a id='" + this.id + "'' href='" + this.link + "'' class='" + Style.button + " " + typeClass + " " + themeClass + "'>" + this.icon + " " + this.content + "</a>";
    };
    return Button;
}());
exports.Button = Button;
function getModule(button) {
    return new Button(button).createModuleElement();
}
exports.getModule = getModule;
