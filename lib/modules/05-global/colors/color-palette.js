"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Style = require("../../../../src/modules/05-global/colors/color-palette.scss");
class ColorPalette {
    constructor(colorPalette) {
        this.color = colorPalette.color;
    }
    getColorClass(color) {
        let colorClass = Style.defaultColor;
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
    }
    createModuleElement() {
        let colorClass = this.getColorClass(this.color);
        return `
			<div class="${Style.colorPalette} ${colorClass}">
				<div class="${Style.normalState}">
					<div class="${Style.color}">
						<span class="${Style.colorCode}"></span>
					</div>
				</div>
				<div class="${Style.hoverState}">
					<div class="${Style.color}">
						<span class="${Style.colorCode}"></span>
					</div>
				</div>
				<div class="${Style.activeState}">
					<div class="${Style.color}">
						<span class="${Style.colorCode}"></span>
					</div>
				</div>
			</div>
		`;
    }
}
exports.ColorPalette = ColorPalette;
function getModule(colorPalette) {
    return new ColorPalette(colorPalette).createModuleElement();
}
exports.getModule = getModule;
