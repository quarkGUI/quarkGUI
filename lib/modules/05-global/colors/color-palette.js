"use strict";
exports.__esModule = true;
var Style = require("../../../../src/modules/05-global/colors/color-palette.scss");
var ColorPalette = (function () {
    function ColorPalette(colorPalette) {
        this.color = colorPalette.color;
    }
    ColorPalette.prototype.getColorClass = function (color) {
        var colorClass = Style.defaultColor;
        if (color == 'primary')
            colorClass = Style.primaryColor;
        if (color == 'info')
            colorClass = Style.infoColor;
        if (color == 'success')
            colorClass = Style.successColor;
        if (color == 'warning')
            colorClass = Style.warningColor;
        if (color == 'danger')
            colorClass = Style.dangerColor;
        return colorClass;
    };
    ColorPalette.prototype.createModuleElement = function () {
        var colorClass = this.getColorClass(this.color);
        return "\n\t\t\t<div class=\"" + Style.colorPalette + " " + colorClass + "\">\n\t\t\t\t<div class=\"" + Style.normalState + "\">\n\t\t\t\t\t<div class=\"" + Style.color + "\">\n\t\t\t\t\t\t<span class=\"" + Style.colorCode + "\"></span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"" + Style.hoverState + "\">\n\t\t\t\t\t<div class=\"" + Style.color + "\">\n\t\t\t\t\t\t<span class=\"" + Style.colorCode + "\"></span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"" + Style.activeState + "\">\n\t\t\t\t\t<div class=\"" + Style.color + "\">\n\t\t\t\t\t\t<span class=\"" + Style.colorCode + "\"></span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t";
    };
    return ColorPalette;
}());
exports.ColorPalette = ColorPalette;
function getModule(colorPalette) {
    return new ColorPalette(colorPalette).createModuleElement();
}
exports.getModule = getModule;
