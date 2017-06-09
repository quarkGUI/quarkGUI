"use strict";
exports.__esModule = true;
var Style = require("../../../../src/modules/01-molecules/messaging/modal.scss");
var Button = require("../../00-atoms/buttons/button");
var Modal = (function () {
    function Modal(modal) {
        this.id = modal.id;
        this.triggerElement = modal.triggerElement;
        this.modalElement = modal.modalElement;
        if (modal.modalElement.title !== undefined)
            this.modalElement.title = modal.modalElement.title;
        this.modalElement.closeButtontext = modal.modalElement.closeButtontext !== undefined ? modal.modalElement.closeButtontext : 'Close';
        this.modalElement.scrollable = modal.modalElement.scrollable !== undefined ? modal.modalElement.scrollable : false;
        this.modalElement.fullscreen = modal.modalElement.fullscreen !== undefined ? modal.modalElement.fullscreen : false;
        this.modalElement.maxWidth = modal.modalElement.maxWidth !== undefined ? modal.modalElement.maxWidth : null;
    }
    Modal.prototype.addListener = function (triggerId, targetId, closeId) {
        document.addEventListener('DOMContentLoaded', function () {
            var elementsIsDefined = document.getElementById(triggerId) !== undefined && document.getElementById(targetId) !== undefined && document.getElementById(closeId) !== undefined;
            var elementsIsNotNull = document.getElementById(triggerId) !== null && document.getElementById(targetId) !== null && document.getElementById(closeId) !== null;
            if (elementsIsDefined && elementsIsNotNull) {
                var triggerElement_1 = document.getElementById(triggerId);
                var targetElement_1 = document.getElementById(targetId);
                var closeElement = document.getElementById(closeId);
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
                closeElement.onclick = function (event) {
                    triggerElement_1.classList.remove('active');
                    targetElement_1.classList.remove('active');
                };
            }
        }, false);
    };
    Modal.prototype.createTriggerElement = function () {
        return "<div class='" + Style.triggerElementContainer + "' id='" + this.id + "-trigger'>" + this.triggerElement + "</div>";
    };
    Modal.prototype.createCloseElement = function () {
        var closeButtonElement = Button.getModule({
            id: this.id + '-close',
            type: 'minimal',
            content: this.modalElement.closeButtontext
        });
        return "<div class='" + Style.footerButtons + "'>" + closeButtonElement + "</div>";
    };
    Modal.prototype.setMaxWidth = function () {
        var modalElementId = this.id + '-modal';
        var modalElementObject = this.modalElement;
        document.addEventListener('DOMContentLoaded', function () {
            var modalElement = document.getElementById(modalElementId);
            if (modalElementObject.maxWidth !== null) {
                modalElement.style.maxWidth = modalElementObject.maxWidth;
            }
        }, false);
    };
    Modal.prototype.createModuleElement = function () {
        var triggerElement = this.createTriggerElement();
        var closeElement = this.createCloseElement();
        var modalHeaderElement = this.modalElement.title !== undefined ? "<div class='" + Style.modalHeader + "'>" + this.modalElement.title + "</div>" : '';
        var scrollableClass = this.modalElement.scrollable ? Style.scrollable : '';
        var fullscreenClass = this.modalElement.fullscreen ? Style.fullscreen : '';
        this.setMaxWidth();
        this.addListener(this.id + '-trigger', this.id, this.id + '-close');
        return triggerElement + " <div id='" + this.id + "' class='" + Style.modalOverlay + " " + fullscreenClass + "'><div id=\"" + this.id + "-modal\" class='" + Style.modal + " " + scrollableClass + "'><div class='" + Style.modalContainer + "'>" + modalHeaderElement + "<div class='" + Style.modalContent + "'>" + this.modalElement.content + "</div><div class='" + Style.modalFooter + "'>" + closeElement + "</div></div></div></div>";
    };
    return Modal;
}());
exports.Modal = Modal;
function getModule(modal) {
    return new Modal(modal).createModuleElement();
}
exports.getModule = getModule;
