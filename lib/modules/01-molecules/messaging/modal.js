"use strict";
exports.__esModule = true;
var Style = require("../../../../src/modules/01-molecules/messaging/modal.scss");
var ButtonRow = require("../../01-molecules/buttons/button-row");
exports.counter = 0;
exports.eventListeners = [];
var Modal = /** @class */ (function () {
    function Modal(modal) {
        exports.counter += 1;
        this.id = 'quark-modal-' + exports.counter;
        this.triggerElement = modal.triggerElement;
        this.modalElement = modal.modalElement;
        if (modal.modalElement.title !== undefined)
            this.modalElement.title = modal.modalElement.title;
        this.modalElement.closeButtontext = modal.modalElement.closeButtontext !== undefined ? modal.modalElement.closeButtontext : 'Close';
        this.modalElement.scrollable = modal.modalElement.scrollable !== undefined ? modal.modalElement.scrollable : false;
        this.modalElement.fullscreen = modal.modalElement.fullscreen !== undefined ? modal.modalElement.fullscreen : false;
        this.modalElement.maxWidth = modal.modalElement.maxWidth !== undefined ? modal.modalElement.maxWidth : null;
        this.modalElement.footerButtons = modal.modalElement.footerButtons !== undefined ? modal.modalElement.footerButtons : null;
        if (modal.vueBindings !== undefined)
            this.vueBindings = modal.vueBindings;
    }
    Modal.prototype.getVueBinding = function (attributeName) {
        var vueBinding = false;
        if (this.vueBindings !== undefined) {
            vueBinding = this.vueBindings[attributeName] !== undefined ? this.vueBindings[attributeName] : false;
        }
        return vueBinding;
    };
    Modal.prototype.initModal = function (targetId) {
        document.addEventListener('DOMContentLoaded', function () {
            //let targetId:string = this.getVueBinding('id') ? '' + this.getVueBinding('id') : this.id;
            var triggerId = targetId + '-trigger';
            var closeId = targetId + '-close';
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
    Modal.prototype.initAllModals = function () {
        var self = this;
        document.addEventListener('quarkLazyLoaded', function () {
            var self = this;
            var targetElements = document.getElementsByClassName(Style.modalOverlay);
            var _loop_1 = function () {
                var targetId = targetElements[i].id;
                var triggerId = targetId + '-trigger';
                var closeId = targetId + '-close';
                var elementsIsDefined = document.getElementById(triggerId) !== undefined && document.getElementById(targetId) !== undefined && document.getElementById(closeId) !== undefined;
                var elementsIsNotNull = document.getElementById(triggerId) !== null && document.getElementById(targetId) !== null && document.getElementById(closeId) !== null;
                if (elementsIsDefined && elementsIsNotNull) {
                    var triggerElement_2 = document.getElementById(triggerId);
                    var targetElement_2 = document.getElementById(targetId);
                    var closeElement = document.getElementById(closeId);
                    triggerElement_2.onclick = function () {
                        if (triggerElement_2.classList.contains('active')) {
                            triggerElement_2.classList.remove('active');
                            targetElement_2.classList.remove('active');
                        }
                        else {
                            triggerElement_2.classList.add('active');
                            targetElement_2.classList.add('active');
                        }
                    };
                    targetElement_2.onclick = function (event) {
                        var targetClassListIsDefined = event.target.classList !== undefined;
                        if (targetClassListIsDefined) {
                            var targetClassList = event.target.classList;
                            if (targetClassList.contains(Style.modalOverlay)) {
                                triggerElement_2.classList.remove('active');
                                targetElement_2.classList.remove('active');
                            }
                        }
                    };
                    closeElement.onclick = function (event) {
                        triggerElement_2.classList.remove('active');
                        targetElement_2.classList.remove('active');
                    };
                }
            };
            for (var i = 0; i < targetElements.length; i++) {
                _loop_1();
            }
        }, false);
    };
    Modal.prototype.addListener = function () {
        var self = this;
        this.initModal(this.id);
        if (!exports.eventListeners.includes('quarkLazyLoaded')) {
            this.initAllModals();
            exports.eventListeners.push('quarkLazyLoaded');
        }
    };
    Modal.prototype.createTriggerElement = function (triggerIdAttribute) {
        return "<div class='" + Style.triggerElementContainer + "' " + triggerIdAttribute + ">" + this.triggerElement + "</div>";
    };
    Modal.prototype.createFooterButtonsElement = function () {
        var closeButton = {
            type: 'minimal',
            theme: 'primary',
            content: this.modalElement.closeButtontext
        };
        if (this.getVueBinding('id')) {
            var idBinding = this.getVueBinding('id');
            closeButton.vueBindings = { id: idBinding + " + \"-close\"" };
        }
        else {
            closeButton.id = this.id + '-close';
        }
        var footerButtons = {
            buttons: [closeButton]
        };
        if (this.modalElement.footerButtons !== null) {
            footerButtons = this.modalElement.footerButtons.buttonRow;
            var beforeCloseButton = this.modalElement.footerButtons.beforeCloseButton !== undefined ? this.modalElement.footerButtons.beforeCloseButton : false;
            if (beforeCloseButton) {
                footerButtons.buttons.push(closeButton);
            }
            else {
                footerButtons.buttons.unshift(closeButton);
            }
        }
        var footerButtonsElement = ButtonRow.getModule(footerButtons);
        return "<div class='" + Style.footerButtons + "'>" + footerButtonsElement + "</div>";
    };
    Modal.prototype.setMaxWidth = function () {
        var modalElementId = this.id + '-modal';
        var modalElementObject = this.modalElement;
        document.addEventListener('DOMContentLoaded', function () {
            var modalElement = document.getElementById(modalElementId);
            if (modalElementObject.maxWidth !== null && modalElement !== null) {
                modalElement.style.maxWidth = modalElementObject.maxWidth;
            }
        }, false);
    };
    Modal.prototype.createModuleElement = function () {
        var hasId = this.id !== undefined || this.getVueBinding('id');
        var overlayIdAttribute = '';
        var modalIdAttribute = '';
        var triggerIdAttribute = '';
        if (hasId) {
            if (this.getVueBinding('id')) {
                var id = this.getVueBinding('id');
                overlayIdAttribute = "v-bind:id='" + id + "'";
                modalIdAttribute = "v-bind:id='" + id + " + \"-modal\"'";
                triggerIdAttribute = "v-bind:id='" + id + " + \"-trigger\"'";
            }
            else {
                overlayIdAttribute = "id='" + this.id + "'";
                modalIdAttribute = "id='" + this.id + "-modal'";
                triggerIdAttribute = "id='" + this.id + "-trigger'";
            }
        }
        var triggerElement = this.createTriggerElement(triggerIdAttribute);
        var closeElement = this.createFooterButtonsElement();
        var modalHeaderElement = this.modalElement.title !== undefined ? "<div class='" + Style.modalHeader + "'>" + this.modalElement.title + "</div>" : '';
        var scrollableClass = this.modalElement.scrollable ? Style.scrollable : '';
        var fullscreenClass = this.modalElement.fullscreen ? Style.fullscreen : '';
        this.setMaxWidth();
        this.addListener();
        return triggerElement + " <div " + overlayIdAttribute + " class='" + Style.modalOverlay + " " + fullscreenClass + "'><div " + modalIdAttribute + " class='" + Style.modal + " " + scrollableClass + "'><div class='" + Style.modalContainer + "'>" + modalHeaderElement + "<div class='" + Style.modalContent + "'>" + this.modalElement.content + "</div><div class='" + Style.modalFooter + "'>" + closeElement + "</div></div></div></div>";
    };
    return Modal;
}());
exports.Modal = Modal;
function getModule(modal) {
    return new Modal(modal).createModuleElement();
}
exports.getModule = getModule;
