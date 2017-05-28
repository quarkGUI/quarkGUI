"use strict";
exports.__esModule = true;
var Style = require("../../../../src/modules/01-molecules/messaging/modal.scss");
var Modal = (function () {
    function Modal(modal) {
        this.id = modal.id;
        this.triggerElement = modal.triggerElement;
        this.modalElement = modal.modalElement;
        if (modal.modalElement.title !== undefined)
            this.modalElement.title = modal.modalElement.title;
    }
    Modal.prototype.addListener = function (triggerId, targetId) {
        document.addEventListener('DOMContentLoaded', function () {
            var elementsIsDefined = document.getElementById(triggerId) !== undefined && document.getElementById(targetId) !== undefined;
            var elementsIsNotNull = document.getElementById(triggerId) !== null && document.getElementById(targetId) !== null;
            if (elementsIsDefined && elementsIsNotNull) {
                var triggerElement_1 = document.getElementById(triggerId);
                var targetElement_1 = document.getElementById(targetId);
                triggerElement_1.onclick = function () {
                    if (triggerElement_1.classList.contains('active')) {
                        triggerElement_1.classList.remove('active');
                        targetElement_1.classList.remove('active');
                    }
                    else {
                        triggerElement_1.classList.add('active');
                        targetElement_1.classList.add('active');
                    }
                };
                targetElement_1.onclick = function (event) {
                    var targetClassListIsDefined = event.target.classList !== undefined;
                    if (targetClassListIsDefined) {
                        var targetClassList = event.target.classList;
                        if (targetClassList.contains(Style.modalOverlay)) {
                            triggerElement_1.classList.remove('active');
                            targetElement_1.classList.remove('active');
                        }
                    }
                };
            }
        }, false);
    };
    Modal.prototype.createTriggerElement = function () {
        return "<div id='" + this.id + "-trigger'>" + this.triggerElement + "</div>";
    };
    Modal.prototype.createModuleElement = function () {
        this.triggerElement = this.createTriggerElement();
        this.addListener(this.id + '-trigger', this.id);
        return this.triggerElement + " <div id='" + this.id + "' class='" + Style.modalOverlay + "'><div class='" + Style.modal + "'><div class='" + Style.modalHeader + "'>" + this.modalElement.title + "</div><div class='" + Style.modalContent + "'>" + this.modalElement.content + "</div></div></div>";
    };
    return Modal;
}());
exports.Modal = Modal;
function getModule(modal) {
    return new Modal(modal).createModuleElement();
}
exports.getModule = getModule;
