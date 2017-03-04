"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const InputField = require("./input-field");
const Button = require("../buttons/button");
const Style = require("./date-picker.scss");
class DatePicker {
    constructor(datePicker) {
        this.type = "text";
        this.value = "";
        this.placeholder = "";
        this.labelElement = "";
        this.id = datePicker.id;
        this.name = datePicker.name;
        if (datePicker.type !== undefined)
            this.type = datePicker.type;
        if (datePicker.value !== undefined)
            this.value = datePicker.value;
        if (datePicker.placeholder !== undefined)
            this.placeholder = datePicker.placeholder;
        if (datePicker.labelElement !== undefined)
            this.labelElement = datePicker.labelElement;
        let activeDate = new Date();
        this.activeDate = {
            year: activeDate.getFullYear(),
            month: activeDate.getMonth() + 1,
            day: activeDate.getDate(),
            weekDay: activeDate.getDay()
        };
        this.selectedDate = {
            year: activeDate.getFullYear(),
            month: activeDate.getMonth() + 1,
            day: activeDate.getDate(),
            weekDay: activeDate.getDay()
        };
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
    addListener(datePicker, inputField, dropdownList) {
        document.addEventListener("module-lazy-loaded", function (e) {
            let datePickerElementIsDefined = datePicker.elementIsNotNullOrUndefinedById(datePicker.id);
            let inputFieldElementIsDefined = datePicker.elementIsNotNullOrUndefinedById(inputField.id);
            let dropdownListElementIsDefined = datePicker.elementIsNotNullOrUndefinedById(dropdownList.id);
            if (datePickerElementIsDefined && inputFieldElementIsDefined && dropdownListElementIsDefined) {
                let selectListElement = document.getElementById(datePicker.id);
                let inputFieldElement = document.getElementById(inputField.id);
                let dropdownListElement = document.getElementById(dropdownList.id);
                let labelElementIsDefined = datePicker.elementIsNotNullOrUndefinedByTagName(selectListElement, "LABEL");
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
                inputFieldElement.readOnly = true;
                inputFieldElement.addEventListener("keydown", function (e) {
                    e.preventDefault();
                    return false;
                });
                inputFieldElement.onfocus = function () {
                    selectListElement.classList.add("active");
                    dropdownListElement.classList.add("active");
                    dropdownListElement.classList.remove("transparent");
                    datePicker.updateDropdownListHeight(dropdownListElement);
                };
                inputFieldElement.onblur = function (event) {
                    /*selectListElement.classList.remove("active");
                    dropdownListElement.classList.add("transparent")
                    setTimeout(function(){
                        if (inputFieldElement !== document.activeElement){
                            dropdownListElement.classList.remove("active")
                            dropdownListElement.classList.remove("transparent")
                        }
                    }, 1000);*/
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
                    // Tab toggle buttons
                    let toggleTabCallendarElementList = dropdownListElement.getElementsByClassName(Style.toggleTabCallendar);
                    let toggleTabCallendarElement = toggleTabCallendarElementList.item(0);
                    toggleTabCallendarElement.addEventListener('click', function (e) {
                        dropdownListElement.classList.remove("active-tab-clock");
                        dropdownListElement.classList.add("active-tab-callendar");
                    });
                    let toggleTabClockElementList = dropdownListElement.getElementsByClassName(Style.toggleTabClock);
                    let toggleTabClockElement = toggleTabClockElementList.item(0);
                    toggleTabClockElement.addEventListener('click', function (e) {
                        dropdownListElement.classList.remove("active-tab-callendar");
                        dropdownListElement.classList.add("active-tab-clock");
                    });
                }
            }
        }, false);
    }
    createDateSelectorElement(activeDate) {
        let monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        let monthSelectorElement = `
		${Button.getModule({ type: "minimal", iconClass: "fa fa-chevron-left" })}
		<span>${monthNames[activeDate.month - 1]}</span>
		${Button.getModule({ type: "minimal", iconClass: "fa fa-chevron-right" })}
		`;
        let yearSelectorElement = `
		${Button.getModule({ type: "minimal", iconClass: "fa fa-chevron-left" })}
		<span>${activeDate.year}</span>
		${Button.getModule({ type: "minimal", iconClass: "fa fa-chevron-right" })}
		`;
        let dateSelectorElement = `<div class="${Style.monthSelector}">${monthSelectorElement}</div><div class="${Style.yearSelector}">${yearSelectorElement}</div>`;
        return dateSelectorElement;
    }
    createPreviewElement(selectedDate) {
        let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let dayNumbers = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th', '21st', '22nd', '23rd', '24th', '25th', '26th', '27th', '28th', '29th', '30th', '31st'];
        let dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let dateString = `${monthNames[selectedDate.month - 1]} - ${selectedDate.year}`;
        let dayNumberString = dayNumbers[selectedDate.day - 1];
        let dayNameString = dayNames[selectedDate.weekDay];
        let datePreviewElement = `
											<div class="${Style.preview}">
												<div class="${Style.previewDate}">${dateString}</div>
												<div class="${Style.previewDayNumber}">${dayNumberString}</div>
												<div class="${Style.previewDayName}">${dayNameString}</div>
												<div>12:04</div>
											</div>`;
        return datePreviewElement;
    }
    createTimeSelectorElement(activeDate) {
        let hourSelectorElement = `
		<div style="width: 50%">
			${Button.getModule({ type: "minimal", iconClass: "fa fa-chevron-up" })}
			${InputField.getModule({
            id: "dsjkl",
            name: "dsdf",
            type: "number"
        })}
			${Button.getModule({ type: "minimal", iconClass: "fa fa-chevron-down" })}
		</div>
		`;
        let minuteSelectorElement = `
		<div style="width: 50%">
			${Button.getModule({ type: "minimal", iconClass: "fa fa-chevron-up" })}
			${InputField.getModule({
            id: "dsddjkl",
            name: "ddddsdf",
            type: "number"
        })}
			${Button.getModule({ type: "minimal", iconClass: "fa fa-chevron-down" })}
		</div>
		`;
        let timeSelectorElement = `<div>${hourSelectorElement}${minuteSelectorElement}</div>`;
        return timeSelectorElement;
    }
    createDayNameElements() {
        let dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let dayNameElements = "";
        for (var dayNameIndex = 0; dayNameIndex < dayNames.length; dayNameIndex++) {
            dayNameElements += `<span class="${Style.dayName}">${dayNames[dayNameIndex]}</span>`;
        }
        return dayNameElements;
    }
    createMonthElement(selectedDate, activeDate) {
        let daysInMonth = new Date(selectedDate.year, selectedDate.month, 0).getDate();
        let firstDay = new Date(selectedDate.year, selectedDate.month - 1, 1).getDay();
        let dayElements = "";
        let days = [];
        for (var dayIndex = 1; dayIndex <= daysInMonth; dayIndex++) {
            days.push({
                number: dayIndex,
                selected: false,
                active: false
            });
        }
        if (selectedDate.year == activeDate.year && selectedDate.month == activeDate.month) {
            days[activeDate.day - 1].active = true;
        }
        for (var dummyDayIndex = 0; dummyDayIndex < firstDay; dummyDayIndex++) {
            dayElements += `<span class="${Style.day}"></span>`;
        }
        for (let day of days) {
            let activeClass = day.active ? "active" : "";
            let selectedClass = day.selected ? "selected" : "";
            dayElements += `<span class="${Style.day} ${activeClass} ${selectedClass}" data-value="${day.number}">${day.number}</span>`;
        }
        return dayElements;
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
        let previewElement = this.createPreviewElement(this.selectedDate);
        let dateSelectorElement = this.createDateSelectorElement(this.activeDate);
        let timeSelectorElement = this.createTimeSelectorElement(this.activeDate);
        let dayNameElements = this.createDayNameElements();
        let callendarElement = this.createMonthElement(this.activeDate, this.selectedDate);
        this.addListener(this, inputField, dropdownList);
        return `
		<div id="${this.id}" class="${Style.dropdownContainer}">
		${InputField.getModule(inputField)} ${this.labelElement}
		<div id="${dropdownList.id}" class="${Style.modalOverlay} active-tab-callendar">
			<div class="${Style.modalContainer}">
				<span class="${Style.toggleTab} ${Style.toggleTabCallendar}"></span>
				<span class="${Style.toggleTab} ${Style.toggleTabClock}"></span>
				<div class="clearfix"></div>
				${previewElement}
				<div class="${Style.callendar}">
					${dateSelectorElement}
					${dayNameElements}
					${callendarElement}
				</div>
				<div class="${Style.clock}">
					${timeSelectorElement}
				</div>
			</div>
		</div>
		</div>
		`;
    }
}
exports.DatePicker = DatePicker;
function getModule(datePicker) {
    return new DatePicker(datePicker).createModuleElement();
}
exports.getModule = getModule;
