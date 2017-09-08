"use strict";
exports.__esModule = true;
var GridItem = require("../../00-atoms/sections/grid-item");
var Style = require("../../../../src/modules/01-molecules/sections/grid.scss");
var Grid = /** @class */ (function () {
    function Grid(grid) {
        this.gridItems = grid.gridItems;
    }
    Grid.prototype.createModuleElement = function () {
        var gridItemElements = "";
        for (var _i = 0, _a = this.gridItems; _i < _a.length; _i++) {
            var gridItem = _a[_i];
            gridItemElements += GridItem.getModule(gridItem);
        }
        ;
        return "<div class='" + Style.row + "'>" + gridItemElements + "<div class='" + Style.clearFix + "'></div></div>";
    };
    return Grid;
}());
exports.Grid = Grid;
function getModule(grid) {
    return new Grid(grid).createModuleElement();
}
exports.getModule = getModule;
