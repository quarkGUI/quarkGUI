"use strict";
exports.__esModule = true;
var Style = require("../../../../src/modules/00-atoms/media/image.scss");
var Image = (function () {
    function Image(image) {
        this.alt = "";
        this.src = image.src;
        if (image.alt !== undefined)
            this.alt = image.alt;
    }
    Image.prototype.createModuleElement = function () {
        return "<img class='" + Style.image + "' src='" + this.src + "' alt='" + this.alt + "' />";
    };
    return Image;
}());
exports.Image = Image;
function getModule(image) {
    return new Image(image).createModuleElement();
}
exports.getModule = getModule;
