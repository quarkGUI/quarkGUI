"use strict";
exports.__esModule = true;
var InputField = require("./input-field");
var Style = require("../../../../src/modules/00-atoms/form-elements/select-list.scss");
exports.eventListeners = [];
var SelectList = /** @class */ (function () {
    function SelectList(selectList) {
        this.searchable = false;
        this.type = "text";
        this.value = "";
        this.placeholder = "";
        this.labelElement = "";
        this.id = selectList.id;
        this.name = selectList.name;
        if (selectList.searchable !== undefined)
            this.searchable = selectList.searchable;
        if (selectList.type !== undefined)
            this.type = selectList.type;
        if (selectList.value !== undefined)
            this.value = selectList.value;
        if (selectList.placeholder !== undefined)
            this.placeholder = selectList.placeholder;
        if (selectList.labelElement !== undefined)
            this.labelElement = selectList.labelElement;
        if (selectList.options !== undefined)
            this.options = selectList.options;
        if (selectList.attributes !== undefined)
            this.attributes = selectList.attributes;
        if (selectList.vueBindings !== undefined)
            this.vueBindings = selectList.vueBindings;
    }
    SelectList.prototype.elementIsNotNullOrUndefinedById = function (id) {
        return document.getElementById(id) !== undefined && document.getElementById(id) !== null;
    };
    SelectList.prototype.elementIsNotNullOrUndefinedByTagName = function (containerElement, tagName) {
        return containerElement.getElementsByTagName(tagName).length > 0;
    };
    SelectList.prototype.getVueBinding = function (attributeName) {
        var vueBinding = false;
        if (this.vueBindings !== undefined) {
            vueBinding = this.vueBindings[attributeName] !== undefined ? this.vueBindings[attributeName] : false;
        }
        return vueBinding;
    };
    SelectList.prototype.initFunction = function (id) {
        var selectListId = id != undefined ? id : this.id;
        var inputFieldId = id != undefined ? id + '-input' : this.inputField.id;
        var searchInputFieldId = id != undefined ? id + '-search' : this.searchInputField.id;
        var selectListElementIsDefined = this.elementIsNotNullOrUndefinedById(selectListId);
        var inputFieldElementIsDefined = this.elementIsNotNullOrUndefinedById(inputFieldId);
        var searchInputFieldElementIsDefined = this.elementIsNotNullOrUndefinedById(searchInputFieldId);
        if (selectListElementIsDefined && inputFieldElementIsDefined) {
            var selectListElement_1 = document.getElementById(selectListId);
            var inputFieldElement_1 = document.getElementById(inputFieldId);
            var searchInputFieldElement_1 = document.getElementById(searchInputFieldId);
            var dropdownListElements = selectListElement_1.getElementsByClassName(Style.dropdownList);
            var dropdownListElementIsDefined = dropdownListElements.length > 0;
            if (dropdownListElementIsDefined) {
                var dropdownListElement = dropdownListElements[0];
                var labelElementIsDefined = this.elementIsNotNullOrUndefinedByTagName(selectListElement_1, "LABEL");
                if (labelElementIsDefined) {
                    var labelElementList = selectListElement_1.getElementsByTagName("LABEL");
                    var labelElement = labelElementList.item(0);
                    labelElement.onclick = function () {
                        if (searchInputFieldElementIsDefined) {
                            searchInputFieldElement_1.focus();
                        }
                    };
                }
                inputFieldElement_1.value ? searchInputFieldElement_1.classList.add("is-not-empty") : searchInputFieldElement_1.classList.remove("is-not-empty");
                if (this.searchable) {
                    searchInputFieldElement_1.addEventListener("keyup", function (e) {
                        searchInputFieldElement_1.value.length ? searchInputFieldElement_1.classList.add("is-not-empty") : searchInputFieldElement_1.classList.remove("is-not-empty");
                        var filter = searchInputFieldElement_1.value.toUpperCase();
                        var listItems = dropdownListElement.getElementsByTagName('li');
                        for (var i = 0; i < listItems.length; i++) {
                            if (listItems[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
                                listItems[i].style.display = "";
                            }
                            else {
                                listItems[i].style.display = "none";
                            }
                        }
                    });
                }
                else {
                    searchInputFieldElement_1.addEventListener("keydown", function (e) {
                        e.preventDefault();
                        return false;
                    });
                }
                dropdownListElement.addEventListener('click', function (e) {
                    if (selectListElement_1.id == selectListId) {
                        var target = e.target;
                        while (target && target.parentNode !== dropdownListElement) {
                            target = target.parentNode;
                            if (!target) {
                                return;
                            }
                        }
                        if (target.tagName === 'LI') {
                            var optionValue = target.getAttribute("data-value");
                            var optionName = target.innerHTML;
                            inputFieldElement_1.value = optionValue;
                            searchInputFieldElement_1.value = optionName;
                            searchInputFieldElement_1.classList.add("is-not-empty");
                            var event = document.createEvent('Event');
                            event.initEvent('input', true, true);
                            inputFieldElement_1.dispatchEvent(event);
                        }
                    }
                });
                selectListElement_1.addEventListener('click', function (e) {
                    var target = e.target; // Clicked element
                    if (target.tagName !== 'LI' && target.tagName !== 'INPUT' && target.tagName !== 'LABEL') {
                        setTimeout(function () {
                            selectListElement_1.classList.remove("active");
                        }, 1);
                    }
                });
            }
        }
    };
    SelectList.prototype.addListener = function () {
        var self = this;
        document.addEventListener('DOMContentLoaded', function (e) {
            self.initFunction();
        }, false);
        if (!exports.eventListeners.includes('quarkLazyLoaded')) {
            document.addEventListener('quarkLazyLoaded', function () {
                var targetElements = document.getElementsByClassName(Style.dropdownContainer);
                for (var i = 0; i < targetElements.length; i++) {
                    self.initFunction(targetElements[i].id);
                }
            }, false);
            exports.eventListeners.push('quarkLazyLoaded');
        }
    };
    SelectList.prototype.createOptionElements = function (options) {
        var optionElements = "";
        for (var _i = 0, options_1 = options; _i < options_1.length; _i++) {
            var option = options_1[_i];
            optionElements += "<li data-value='" + option.value + "'>" + option.name + "</li>";
        }
        return optionElements;
    };
    SelectList.prototype.createModuleElement = function () {
        this.inputField = {
            name: this.name,
            type: 'hidden',
            value: this.value,
            placeholder: this.placeholder,
            attributes: this.attributes
        };
        if (this.getVueBinding('id')) {
            var idBinding = this.getVueBinding('id');
            this.inputField.vueBindings = { id: idBinding + " + \"-input\"" };
        }
        else {
            this.inputField.id = this.id + '-input';
        }
        this.searchInputField = {
            name: this.name + '-search',
            type: 'text',
            value: '',
            placeholder: this.placeholder,
            attributes: this.attributes
        };
        if (this.getVueBinding('id')) {
            var idBinding = this.getVueBinding('id');
            this.searchInputField.vueBindings = { id: idBinding + " + \"-search\"" };
        }
        else {
            this.searchInputField.id = this.id + '-search';
        }
        this.dropdownList = {
            id: this.id + '-dropdownList'
        };
        if (this.vueBindings !== undefined) {
            if (this.vueBindings.value !== undefined) {
                this.inputField.vueBindings = this.inputField.vueBindings !== undefined ? this.inputField.vueBindings : {};
                this.inputField.vueBindings.value = this.vueBindings.value;
            }
        }
        var selectListIsReadOnly = this.attributes !== undefined && this.attributes.indexOf('readonly') > -1;
        var selectListIsDisabled = this.attributes !== undefined && this.attributes.indexOf('disabled') > -1;
        var hasId = this.id !== undefined || this.getVueBinding('id');
        var containerIdAttribute = '';
        if (hasId) {
            if (this.getVueBinding('id')) {
                var id = this.getVueBinding('id');
                containerIdAttribute = "v-bind:id='" + id + "'";
            }
            else {
                containerIdAttribute = "id='" + this.id + "'";
            }
        }
        var hasOptions = this.options !== undefined || this.getVueBinding('options');
        var optionElements = '';
        if (hasOptions) {
            if (this.getVueBinding('options')) {
                var options = this.getVueBinding('options');
                optionElements = "<li v-for=\"option in " + options + "\" v-bind:data-value=\"option.value\">{{option.name}}</li>";
            }
            else {
                optionElements = this.createOptionElements(this.options);
            }
        }
        var readOnlyClass = selectListIsReadOnly ? Style.readOnly : '';
        var disabledClass = selectListIsDisabled ? Style.disabled : '';
        this.addListener();
        var selectListElement = '';
        if (selectListIsReadOnly || selectListIsDisabled) {
            selectListElement = "<div " + containerIdAttribute + " class='overlay-element " + Style.dropdownContainer + " " + readOnlyClass + " " + disabledClass + "'>" + InputField.getModule(this.inputField) + " " + InputField.getModule(this.searchInputField) + " " + this.labelElement + "</div>";
        }
        else {
            selectListElement = "<div " + containerIdAttribute + " class='overlay-element " + Style.dropdownContainer + " " + readOnlyClass + " " + disabledClass + "'>" + InputField.getModule(this.inputField) + " " + InputField.getModule(this.searchInputField) + " " + this.labelElement + "<div class='" + Style.dropdownListContainer + "'><ul class='" + Style.dropdownList + "' id='" + this.dropdownList.id + "'>" + optionElements + "</ul></div></div>";
        }
        return selectListElement;
    };
    return SelectList;
}());
exports.SelectList = SelectList;
function getModule(selectList) {
    return new SelectList(selectList).createModuleElement();
}
exports.getModule = getModule;
