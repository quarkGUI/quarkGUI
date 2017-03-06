"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const InputField = require("./input-field");
const Style = require("../../../../src/modules/00-atoms/form-elements/select-list.scss");
class SelectList {
    constructor(selectList) {
        this.searchable = false;
        this.type = "text";
        this.value = "";
        this.placeholder = "";
        this.labelElement = "";
        this.optionElements = "";
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
            this.optionElements = this.createOptionElements(selectList.options);
    }
    updateDropdownListHeight(dropdownListElement) {
        var dropdownElementHeight = dropdownListElement.offsetHeight;
        dropdownListElement.style.marginBottom = 0 - dropdownElementHeight + 'px';
    }
    elementIsNotNullOrUndefinedById(id) {
        return document.getElementById(id) !== undefined && document.getElementById(id) !== null;
    }
    elementIsNotNullOrUndefinedByTagName(containerElement, tagName) {
        return containerElement.getElementsByTagName(tagName).length > 0;
    }
    addListener(selectList, inputField, dropdownList) {
        document.addEventListener("module-lazy-loaded", function (e) {
            let selectListElementIsDefined = selectList.elementIsNotNullOrUndefinedById(selectList.id);
            let inputFieldElementIsDefined = selectList.elementIsNotNullOrUndefinedById(inputField.id);
            let dropdownListElementIsDefined = selectList.elementIsNotNullOrUndefinedById(dropdownList.id);
            if (selectListElementIsDefined && inputFieldElementIsDefined && dropdownListElementIsDefined) {
                let selectListElement = document.getElementById(selectList.id);
                let inputFieldElement = document.getElementById(inputField.id);
                var dropdownListElement = document.getElementById(dropdownList.id);
                let labelElementIsDefined = selectList.elementIsNotNullOrUndefinedByTagName(selectListElement, "LABEL");
                if (labelElementIsDefined) {
                    let labelElementList = selectListElement.getElementsByTagName("LABEL");
                    let labelElement = labelElementList.item(0);
                    labelElement.onclick = function () {
                        if (inputFieldElementIsDefined) {
                            inputFieldElement.focus();
                        }
                    };
                }
                inputFieldElement.value ? inputFieldElement.classList.add("is-not-empty") : inputFieldElement.classList.remove("is-not-empty");
                if (selectList.searchable) {
                    inputFieldElement.addEventListener("keyup", function (e) {
                        inputFieldElement.value.length ? inputFieldElement.classList.add("is-not-empty") : inputFieldElement.classList.remove("is-not-empty");
                        var filter = inputFieldElement.value.toUpperCase();
                        var listItems = dropdownListElement.getElementsByTagName('li');
                        for (var i = 0; i < listItems.length; i++) {
                            if (listItems[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
                                listItems[i].style.display = "";
                            }
                            else {
                                listItems[i].style.display = "none";
                            }
                        }
                        selectList.updateDropdownListHeight(dropdownListElement);
                    });
                }
                else {
                    inputFieldElement.readOnly = true;
                    inputFieldElement.addEventListener("keydown", function (e) {
                        e.preventDefault();
                        return false;
                    });
                }
                inputFieldElement.onfocus = function () {
                    selectListElement.classList.add("active");
                    dropdownListElement.classList.add("active");
                    dropdownListElement.classList.remove("transparent");
                    selectList.updateDropdownListHeight(dropdownListElement);
                };
                inputFieldElement.onblur = function (event) {
                    selectListElement.classList.remove("active");
                    dropdownListElement.classList.add("transparent");
                    setTimeout(function () {
                        if (inputFieldElement !== document.activeElement) {
                            dropdownListElement.classList.remove("active");
                            dropdownListElement.classList.remove("transparent");
                        }
                    }, 1000);
                };
                if (dropdownListElementIsDefined) {
                    dropdownListElement.addEventListener('click', function (e) {
                        let target = e.target; // Clicked element
                        while (target && target.parentNode !== dropdownListElement) {
                            target = target.parentNode; // If the clicked element isn't a direct child
                            if (!target) {
                                return;
                            } // If element doesn't exist
                        }
                        if (target.tagName === 'LI') {
                            var optionValue = target.getAttribute("data-value");
                            inputFieldElement.value = optionValue;
                            inputFieldElement.classList.add("is-not-empty");
                        }
                    });
                }
            }
        }, false);
    }
    createOptionElements(options) {
        let optionElements = "";
        for (let option of options) {
            optionElements += `<li data-value="${option.value}">${option.name}</li>`;
        }
        return optionElements;
    }
    createModuleElement() {
        let inputField = {
            id: this.id + '-input',
            name: this.name,
            type: this.type,
            value: this.value,
            placeholder: this.placeholder
        };
        let dropdownList = {
            id: this.id + '-dropdownList'
        };
        this.addListener(this, inputField, dropdownList);
        return `
			<div id="${this.id}" class="${Style.dropdownContainer}">
				${InputField.getModule(inputField)} ${this.labelElement}
				<ul id="${dropdownList.id}" class="${Style.dropdownList}">
					${this.optionElements}
				</ul>
			</div>
		`;
    }
}
exports.SelectList = SelectList;
function getModule(selectList) {
    return new SelectList(selectList).createModuleElement();
}
exports.getModule = getModule;
