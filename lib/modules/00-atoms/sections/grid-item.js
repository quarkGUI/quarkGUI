"use strict";
exports.__esModule = true;
var Style = require("../../../../src/modules/00-atoms/sections/grid-item.scss");
var GridItem = /** @class */ (function () {
    function GridItem(gridItem) {
        this.content = "";
        this.sizes = {
            phone: "",
            tablet: "",
            tabletLandscape: "",
            screen: ""
        };
        if (gridItem.content !== undefined)
            this.content = gridItem.content;
        if (gridItem.sizes !== undefined) {
            if (gridItem.sizes.phone !== undefined)
                this.sizes.phone = "col-xs-" + gridItem.sizes.phone;
            if (gridItem.sizes.tablet !== undefined)
                this.sizes.tablet = "col-sm-" + gridItem.sizes.tablet;
            if (gridItem.sizes.tabletLandscape !== undefined)
                this.sizes.tabletLandscape = "col-md-" + gridItem.sizes.tabletLandscape;
            if (gridItem.sizes.screen !== undefined)
                this.sizes.screen = "col-lg-" + gridItem.sizes.screen;
        }
    }
    GridItem.prototype.createModuleElement = function () {
        return "<div class='" + this.sizes.phone + " " + this.sizes.tablet + " " + this.sizes.tabletLandscape + " " + this.sizes.screen + "'>" + this.content + "</div>";
    };
    return GridItem;
}());
exports.GridItem = GridItem;
function getModule(gridItem) {
    return new GridItem(gridItem).createModuleElement();
}
exports.getModule = getModule;
