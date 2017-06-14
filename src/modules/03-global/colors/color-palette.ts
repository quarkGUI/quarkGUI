const Style = require<any>("../../../../src/modules/03-global/colors/color-palette.scss");

export class ColorPalette {
	color: string;

	constructor(colorPalette: IColorPalette) {
		this.color = colorPalette.color;
	}

	private getColorClass(color: string){
		let colorClass = Style.defaultColor
		if (color == 'primary')	colorClass = Style.primaryColor;
		if (color == 'info') 	colorClass = Style.infoColor;
		if (color == 'success')	colorClass = Style.successColor;
		if (color == 'warning')	colorClass = Style.warningColor;
		if (color == 'danger') 	colorClass = Style.dangerColor;
		return colorClass;
	}

	public createModuleElement() {
		let colorClass = this.getColorClass(this.color);
		let colorPaletteNormalState = `<div class='${Style.normalState}'><div class='${Style.color}'><span class='${Style.colorCode}'></span></div></div>`;
		let colorPaletteHoverState = `<div class='${Style.hoverState}'><div class='${Style.color}'><span class='${Style.colorCode}'></span></div></div>`;
		let colorPaletteActiveState = `<div class='${Style.activeState}'><div class='${Style.color}'><span class='${Style.colorCode}'></span></div></div>`;
		let colorPaletteAllStates = `${colorPaletteNormalState}${colorPaletteHoverState}${colorPaletteActiveState}`;
		return `<div class='${Style.colorPalette} ${colorClass}'>${colorPaletteAllStates}</div>`;
	}
}

export interface IColorPalette {
	color: string;
}

export function getModule(colorPalette: IColorPalette){
	return new ColorPalette(colorPalette).createModuleElement();
}
