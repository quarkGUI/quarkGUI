const Style = require<any>("../../../../src/modules/00-atoms/sections/grid-item.scss");

export class GridItem {
	content: string = "";
	sizes: ISizeClasses = {
		phone: "",
		tablet: "",
		tabletLandscape: "",
		screen: ""
	}
	constructor(gridItem: IGridItem) {
		if (gridItem.content !== undefined) this.content = gridItem.content;
		if (gridItem.sizes !== undefined){
			if (gridItem.sizes.phone !== undefined) this.sizes.phone = "col-xs-" + gridItem.sizes.phone;
			if (gridItem.sizes.tablet !== undefined) this.sizes.tablet = "col-sm-" + gridItem.sizes.tablet;
			if (gridItem.sizes.tabletLandscape !== undefined) this.sizes.tabletLandscape = "col-md-" + gridItem.sizes.tabletLandscape;
			if (gridItem.sizes.screen !== undefined) this.sizes.screen = "col-lg-" + gridItem.sizes.screen;
		}
	}
	public createModuleElement(){
		return `
			<div class="${this.sizes.phone} ${this.sizes.tablet} ${this.sizes.tabletLandscape} ${this.sizes.screen}">
				${this.content}
			</div>
		`
	}
}

export interface ISizeClasses{
	phone?: string;
	tablet?: string;
	tabletLandscape?: string;
	screen?: string;
}

export interface ISizes{
	phone?: number;
	tablet?: number;
	tabletLandscape?: number;
	screen?: number;
}

export interface IGridItem{
	content: string;
	sizes: ISizes;
}

export function getModule(gridItem: IGridItem){
	return new GridItem(gridItem).createModuleElement();
}
