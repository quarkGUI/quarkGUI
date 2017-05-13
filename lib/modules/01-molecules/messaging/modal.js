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
        return "<div id='" + this.id + "' class='" + Style.modalOverlay + "'><div class='" + Style.modal + "'><div class='" + Style.modalHeader + "'>" + this.title + "</div><div class='" + Style.modalContent + "'>" + this.content + "</div></div></div>";
    };
    return Modal;
}());
exports.Modal = Modal;
function getModule(modal) {
    return new Modal(modal).createModuleElement();
}
exports.getModule = getModule;
