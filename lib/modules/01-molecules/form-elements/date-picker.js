"use strict";
exports.__esModule = true;
var InputField = require("./input-field");
var Modal = require("../messaging/modal");
var Button = require("../../00-atoms/buttons/button");
var Style = require("../../../../src/modules/01-molecules/form-elements/date-picker.scss");
var DatePicker = (function () {
    function DatePicker(datePicker) {
        this.type = "date";
        this.value = "";
        this.placeholder = "";
        this.label = "";
        this.id = datePicker.id;
        this.name = datePicker.name;
        if (datePicker.type !== undefined)
            this.type = datePicker.type;
        if (datePicker.value !== undefined)
            this.value = datePicker.value;
        if (datePicker.placeholder !== undefined)
            this.placeholder = datePicker.placeholder;
        if (datePicker.label !== undefined)
            this.label = datePicker.label;
        var activeDate = new Date();
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
    DatePicker.prototype.updateDropdownListHeight = function (dropdownListElement) {
        var dropdownElementHeight = dropdownListElement.offsetHeight;
        dropdownListElement.style.marginBottom = 0 - dropdownElementHeight + 'px';
    };
    DatePicker.prototype.elementIsNotNullOrUndefinedById = function (id) {
        return document.getElementById(id) !== undefined && document.getElementById(id) !== null;
    };
    DatePicker.prototype.elementIsNotNullOrUndefinedByTagName = function (containerElement, tagName) {
        return containerElement.getElementsByTagName(tagName).length > 0;
    };
    DatePicker.prototype.addListener = function (inputField, modalId) {
        var datePicker = this;
        document.addEventListener('DOMContentLoaded', function (e) {
            var datePickerElementIsDefined = datePicker.elementIsNotNullOrUndefinedById(datePicker.id);
            var inputFieldElementIsDefined = datePicker.elementIsNotNullOrUndefinedById(inputField.id);
            var modalElementIsDefined = datePicker.elementIsNotNullOrUndefinedById(modalId);
            if (inputFieldElementIsDefined && modalElementIsDefined) {
                var inputFieldElement_1 = document.getElementById(inputField.id);
                var modalElement_1 = document.getElementById(modalId);
                var activeTabClass = datePicker.type == 'time' ? 'active-tab-clock' : 'active-tab-callendar';
                modalElement_1.classList.add(activeTabClass);
                inputFieldElement_1.value ? inputFieldElement_1.classList.add("is-not-empty") : inputFieldElement_1.classList.remove("is-not-empty");
                //inputFieldElement.readOnly = true;
                inputFieldElement_1.addEventListener("keydown", function (e) {
                    e.preventDefault();
                    return false;
                });
                inputFieldElement_1.onfocus = function () {
                    modalElement_1.classList.add("active");
                    modalElement_1.classList.remove("transparent");
                };
                if (modalElementIsDefined) {
                    modalElement_1.addEventListener('click', function (e) {
                        var target = e.target; // Clicked element
                        while (target && target.parentNode !== modalElement_1) {
                            target = target.parentNode; // If the clicked element isn't a direct child
                            if (!target) {
                                return;
                            } // If element doesn't exist
                        }
                        if (target.tagName === 'LI') {
                            var optionValue = target.getAttribute("data-value");
                            inputFieldElement_1.value = optionValue;
                            inputFieldElement_1.classList.add("is-not-empty");
                        }
                    });
                    // Tab toggle buttons
                    var toggleTabCallendarElementIsNotNull = document.getElementById(modalId + '-toggleTabCallendar') !== null;
                    if (toggleTabCallendarElementIsNotNull) {
                        var toggleTabCallendarElement = document.getElementById(modalId + '-toggleTabCallendar');
                        toggleTabCallendarElement.addEventListener('click', function (e) {
                            modalElement_1.classList.remove("active-tab-clock");
                            modalElement_1.classList.add("active-tab-callendar");
                        });
                    }
                    var toggleTabClockElementIsNotNull = document.getElementById(modalId + '-toggleTabClock') !== null;
                    if (toggleTabClockElementIsNotNull) {
                        var toggleTabClockElement = document.getElementById(modalId + '-toggleTabClock');
                        toggleTabClockElement.addEventListener('click', function (e) {
                            modalElement_1.classList.remove("active-tab-callendar");
                            modalElement_1.classList.add("active-tab-clock");
                        });
                    }
                }
            }
        }, false);
    };
    DatePicker.prototype.createDateSelectorElement = function (activeDate) {
        var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var monthSelectorElement = "\n\t\t" + Button.getModule({ type: "minimal", iconClass: "fa fa-chevron-left" }) + "\n\t\t<span>" + monthNames[activeDate.month - 1] + "</span>\n\t\t" + Button.getModule({ type: "minimal", iconClass: "fa fa-chevron-right" }) + "\n\t\t";
        var yearSelectorElement = "\n\t\t" + Button.getModule({ type: "minimal", iconClass: "fa fa-chevron-left" }) + "\n\t\t<span>" + activeDate.year + "</span>\n\t\t" + Button.getModule({ type: "minimal", iconClass: "fa fa-chevron-right" }) + "\n\t\t";
        var dateSelectorElement = "<div class='" + Style.monthSelector + "'>" + monthSelectorElement + "</div><div class='" + Style.yearSelector + "'>" + yearSelectorElement + "</div>";
        return dateSelectorElement;
    };
    DatePicker.prototype.createPreviewElement = function (selectedDate) {
        var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var dayNumbers = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th', '21st', '22nd', '23rd', '24th', '25th', '26th', '27th', '28th', '29th', '30th', '31st'];
        var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var dateString = monthNames[selectedDate.month - 1] + " - " + selectedDate.year;
        var dayNumberString = dayNumbers[selectedDate.day - 1];
        var dayNameString = dayNames[selectedDate.weekDay];
        var datePreviewElement = "\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"" + Style.preview + "\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"" + Style.previewDate + "\">" + dateString + "</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"" + Style.previewDayNumber + "\">" + dayNumberString + "</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"" + Style.previewDayName + "\">" + dayNameString + "</div>\n\t\t\t\t\t\t\t\t\t\t\t\t<div>12:04</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>";
        return datePreviewElement;
    };
    DatePicker.prototype.createTimeSelectorElement = function (activeDate) {
        var hourSelectorElement = "\n\t\t<div style=\"width: 50%\">\n\t\t\t" + Button.getModule({ type: "minimal", iconClass: "fa fa-chevron-up" }) + "\n\t\t\t" + InputField.getModule({
            id: "dsjkl",
            name: "dsdf",
            type: "number"
        }) + "\n\t\t\t" + Button.getModule({ type: "minimal", iconClass: "fa fa-chevron-down" }) + "\n\t\t</div>\n\t\t";
        var minuteSelectorElement = "\n\t\t<div style=\"width: 50%\">\n\t\t\t" + Button.getModule({ type: "minimal", iconClass: "fa fa-chevron-up" }) + "\n\t\t\t" + InputField.getModule({
            id: "dsddjkl",
            name: "ddddsdf",
            type: "number"
        }) + "\n\t\t\t" + Button.getModule({ type: "minimal", iconClass: "fa fa-chevron-down" }) + "\n\t\t</div>\n\t\t";
        var timeSelectorElement = "<div>" + hourSelectorElement + minuteSelectorElement + "</div>";
        return timeSelectorElement;
    };
    DatePicker.prototype.createDayNameElements = function () {
        var dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        var dayNameElements = "";
        for (var dayNameIndex = 0; dayNameIndex < dayNames.length; dayNameIndex++) {
            dayNameElements += "<span class=\"" + Style.dayName + "\">" + dayNames[dayNameIndex] + "</span>";
        }
        return dayNameElements;
    };
    DatePicker.prototype.createMonthElement = function (selectedDate, activeDate) {
        var daysInMonth = new Date(selectedDate.year, selectedDate.month, 0).getDate();
        var firstDay = new Date(selectedDate.year, selectedDate.month - 1, 1).getDay();
        var dayElements = "";
        var days = [];
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
            dayElements += "<span class=\"" + Style.day + "\"></span>";
        }
        for (var _i = 0, days_1 = days; _i < days_1.length; _i++) {
            var day = days_1[_i];
            var activeClass = day.active ? "active" : "";
            var selectedClass = day.selected ? "selected" : "";
            dayElements += "<span class=\"" + Style.day + " " + activeClass + " " + selectedClass + "\" data-value=\"" + day.number + "\">" + day.number + "</span>";
        }
        return dayElements;
    };
    DatePicker.prototype.createModuleElement = function () {
        var inputField = {
            id: this.id + '-input',
            name: this.name,
            type: 'text',
            value: this.value,
            placeholder: this.placeholder,
            label: this.label
        };
        var dropdownList = {
            id: this.id + '-dropdownList'
        };
        var buttonElement = Button.getModule({
            id: 'datepicker-trigger1',
            iconClass: 'fa fa-calendar',
            type: 'minimal'
        });
        var inputFieldElement = InputField.getModule(inputField);
        var previewElement = this.createPreviewElement(this.selectedDate);
        var dateSelectorElement = this.createDateSelectorElement(this.activeDate);
        var timeSelectorElement = this.createTimeSelectorElement(this.activeDate);
        var dayNameElements = this.createDayNameElements();
        var callendarElement = this.createMonthElement(this.activeDate, this.selectedDate);
        var modalId = this.id + '-datepicker-modal';
        var toggleTabElements = this.type == 'datetime' ? "<span id=\"" + modalId + "-toggleTabCallendar\" class=\"" + Style.toggleTab + " " + Style.toggleTabCallendar + "\"></span><span id=\"" + modalId + "-toggleTabClock\" class=\"" + Style.toggleTab + " " + Style.toggleTabClock + "\"></span><div class=\"clearfix\"></div>" : '';
        var modalContentElement = "\n\t\t\t\t" + toggleTabElements + "\n\t\t\t\t\n\t\t\t\t" + previewElement + "\n\t\t\t\t<div class=\"" + Style.callendar + "\">\n\t\t\t\t\t" + dateSelectorElement + "\n\t\t\t\t\t" + dayNameElements + "\n\t\t\t\t\t" + callendarElement + "\n\t\t\t\t</div>\n\t\t\t\t<div class=\"" + Style.clock + "\">\n\t\t\t\t\t" + timeSelectorElement + "\n\t\t\t\t</div>\n\t\t";
        var modalObject = {
            id: modalId,
            triggerElement: buttonElement,
            modalElement: {
                content: modalContentElement,
                maxWidth: '430px'
            }
        };
        var modalElement = Modal.getModule(modalObject);
        this.addListener(inputField, modalObject.id);
        return "<div class=\"" + Style.datePicker + "\"><div class=\"" + Style.inputField + "\">" + inputFieldElement + "</div><div class=\"" + Style.modal + "\">" + modalElement + "</div></div>";
    };
    return DatePicker;
}());
exports.DatePicker = DatePicker;
function getModule(datePicker) {
    return new DatePicker(datePicker).createModuleElement();
}
exports.getModule = getModule;
