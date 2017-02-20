import * as GridItem from '../../00-atoms/sections/grid-item';

const Style = require<any>("./grid.scss");

class Grid {
	gridItems: IGridItem[];
	constructor(grid: IGrid) {
		this.gridItems = grid.gridItems;
	}
	public createModuleElement(){
		let gridItemElements: string = "";
		for (let gridItem of this.gridItems){ 
			gridItemElements += GridItem.getModule(gridItem)
		};
		return ` 
			<div class="${Style.row}">${gridItemElements}<div class="${Style.clearFix}"></div></div>
		`
	}
}

interface ISizes{
	phone?: number;
	tablet?: number;
	tabletLandscape?: number;
	screen?: number;
}

interface IGridItem{
	content: string;
	sizes: ISizes;
}

interface IGrid{
	gridItems: IGridItem[];
}

export function getModule(grid: IGrid){
	return new Grid(grid).createModuleElement();
}
