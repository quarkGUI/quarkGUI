"use strict";
exports.__esModule = true;
var Style = require("../../../../src/modules/03-global/colors/color-palette.scss");
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
        var colorPaletteNormalState = "<div class='" + Style.normalState + "'><div class='" + Style.color + "'><span class='" + Style.colorCode + "'></span></div></div>";
        var colorPaletteHoverState = "<div class='" + Style.hoverState + "'><div class='" + Style.color + "'><span class='" + Style.colorCode + "'></span></div></div>";
        var colorPaletteActiveState = "<div class='" + Style.activeState + "'><div class='" + Style.color + "'><span class='" + Style.colorCode + "'></span></div></div>";
        var colorPaletteAllStates = "" + colorPaletteNormalState + colorPaletteHoverState + colorPaletteActiveState;
        return "<div class='" + Style.colorPalette + " " + colorClass + "'>" + colorPaletteAllStates + "</div>";
    };
    return ColorPalette;
}());
exports.ColorPalette = ColorPalette;
function getModule(colorPalette) {
    return new ColorPalette(colorPalette).createModuleElement();
}
exports.getModule = getModule;
