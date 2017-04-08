"use strict";
exports.__esModule = true;
var Style = require("../../../../src/modules/01-molecules/messaging/modal.scss");
var Modal = (function () {
    function Modal(modal) {
        this.title = "";
        this.id = modal.id;
        if (modal.title !== undefined)
            this.title = modal.title;
        this.content = modal.content;
    }
    Modal.prototype.createModuleElement = function () {
        return "\n\t\t\t<div class=\"" + Style.modalOverlay + "\">\n\t\t\t\t<div class=\"" + Style.modal + "\">\n\t\t\t\t\t<div class=\"" + Style.modalHeader + "\">" + this.title + "</div>\n\t\t\t\t\t<div class=\"" + Style.modalContent + "\">" + this.content + "</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t";
    };
    return Modal;
}());
exports.Modal = Modal;
function getModule(modal) {
    return new Modal(modal).createModuleElement();
}
exports.getModule = getModule;
