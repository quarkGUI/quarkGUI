"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GridItem = require("../../00-atoms/sections/grid-item");
const Style = require("../../../../src/modules/01-molecules/sections/grid.scss");
class Grid {
    constructor(grid) {
        this.gridItems = grid.gridItems;
    }
    createModuleElement() {
        let gridItemElements = "";
        for (let gridItem of this.gridItems) {
            gridItemElements += GridItem.getModule(gridItem);
        }
        ;
        return ` 
			<div class="${Style.row}">${gridItemElements}<div class="${Style.clearFix}"></div></div>
		`;
    }
}
exports.Grid = Grid;
function getModule(grid) {
    return new Grid(grid).createModuleElement();
}
exports.getModule = getModule;
