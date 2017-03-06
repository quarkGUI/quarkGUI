"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Style = require("../../../../src/modules/00-atoms/media/image.scss");
class Image {
    constructor(image) {
        this.alt = "";
        this.src = image.src;
        if (image.alt !== undefined)
            this.alt = image.alt;
    }
    createModuleElement() {
        return `<img class="${Style.image}" src="${this.src}" alt="${this.alt}" />`;
    }
}
exports.Image = Image;
function getModule(image) {
    return new Image(image).createModuleElement();
}
exports.getModule = getModule;
