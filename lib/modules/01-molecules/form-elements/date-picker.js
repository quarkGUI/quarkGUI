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
        var selectedDate = new Date();
        var visibleDate = new Date();
        this.activeDate = {
            year: activeDate.getFullYear(),
            month: activeDate.getMonth() + 1,
            day: activeDate.getDate(),
            weekDay: activeDate.getDay()
        };
        this.selectedDate = this.value !== undefined && this.value !== '' ? this.getDateValue() : {
            year: selectedDate.getFullYear(),
            month: selectedDate.getMonth() + 1,
            day: selectedDate.getDate(),
            weekDay: selectedDate.getDay()
        };
        this.visibleDate = this.value !== undefined && this.value !== '' ? this.getDateValue() : {
            year: visibleDate.getFullYear(),
            month: visibleDate.getMonth() + 1,
            day: visibleDate.getDate(),
            weekDay: visibleDate.getDay()
        };
    }
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
                inputFieldElement_1.addEventListener("keydown", function (e) {
                    e.preventDefault();
                    return false;
                });
                inputFieldElement_1.onfocus = function () {
                    modalElement_1.classList.add("active");
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
                        if (target.className === 'SPAN') {
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
                /* Callendar listener */
                var callendarElement = document.getElementById(modalId + '-callendar');
                callendarElement.addEventListener('click', function (e) {
                    var target = e.target;
                    if (target.classList.contains(Style.day)) {
                        datePicker.selectedDate = {
                            day: target.dataset.day,
                            weekDay: target.dataset.weekDay,
                            month: target.dataset.month,
                            year: target.dataset.year
                        };
                        var callendarPreviewElement = document.getElementById(datePicker.id + '-callendar-preview');
                        var callendarMonthElement = document.getElementById(datePicker.id + '-callendar-month');
                        callendarPreviewElement.outerHTML = datePicker.createPreviewElement(datePicker.selectedDate);
                        callendarMonthElement.innerHTML = datePicker.createMonthElement(datePicker.selectedDate, datePicker.activeDate, datePicker.visibleDate);
                    }
                });
                datePicker.addDateSelectorListener();
                var submitValueButtonElement = document.getElementById(datePicker.id + '-datepicker-submit');
                submitValueButtonElement.addEventListener('click', function (e) {
                    var dateValue = datePicker.setDateValue();
                    inputFieldElement_1.value = dateValue;
                    modalElement_1.classList.remove("active");
                    if (dateValue !== null && dateValue !== '') {
                        inputFieldElement_1.classList.add("is-not-empty");
                    }
                    else {
                        inputFieldElement_1.classList.remove("is-not-empty");
                    }
                });
            }
        }, false);
    };
    DatePicker.prototype.addDateSelectorListener = function () {
        var datePicker = this;
        var callendarMonthPrevElement = document.getElementById(datePicker.id + '-callendar-month-prev');
        var callendarMonthNextElement = document.getElementById(datePicker.id + '-callendar-month-next');
        var callendarYearPrevElement = document.getElementById(datePicker.id + '-callendar-year-prev');
        var callendarYearNextElement = document.getElementById(datePicker.id + '-callendar-year-next');
        var callendarMonthElement = document.getElementById(datePicker.id + '-callendar-month');
        var callendarDateSelectorElement = document.getElementById(datePicker.id + '-callendar-date-selector');
        callendarMonthPrevElement.addEventListener('click', function (e) {
            if (datePicker.visibleDate.month > 1) {
                datePicker.visibleDate.month--;
            }
            else {
                datePicker.visibleDate.month = 12;
                datePicker.visibleDate.year--;
            }
            callendarMonthElement.innerHTML = datePicker.createMonthElement(datePicker.selectedDate, datePicker.activeDate, datePicker.visibleDate);
            callendarDateSelectorElement.innerHTML = datePicker.createDateSelectorElement(datePicker.visibleDate);
            datePicker.addDateSelectorListener();
        });
        callendarMonthNextElement.addEventListener('click', function (e) {
            if (datePicker.visibleDate.month < 12) {
                datePicker.visibleDate.month++;
            }
            else {
                datePicker.visibleDate.month = 1;
                datePicker.visibleDate.year++;
            }
            callendarMonthElement.innerHTML = datePicker.createMonthElement(datePicker.selectedDate, datePicker.activeDate, datePicker.visibleDate);
            callendarDateSelectorElement.innerHTML = datePicker.createDateSelectorElement(datePicker.visibleDate);
            datePicker.addDateSelectorListener();
        });
        callendarYearPrevElement.addEventListener('click', function (e) {
            datePicker.visibleDate.year--;
            callendarMonthElement.innerHTML = datePicker.createMonthElement(datePicker.selectedDate, datePicker.activeDate, datePicker.visibleDate);
            callendarDateSelectorElement.innerHTML = datePicker.createDateSelectorElement(datePicker.visibleDate);
            datePicker.addDateSelectorListener();
        });
        callendarYearNextElement.addEventListener('click', function (e) {
            datePicker.visibleDate.year++;
            callendarMonthElement.innerHTML = datePicker.createMonthElement(datePicker.selectedDate, datePicker.activeDate, datePicker.visibleDate);
            callendarDateSelectorElement.innerHTML = datePicker.createDateSelectorElement(datePicker.visibleDate);
            datePicker.addDateSelectorListener();
        });
    };
    DatePicker.prototype.createDateSelectorElement = function (visibleDate) {
        var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var monthSelectorElement = "\n\t" + Button.getModule({ id: this.id + '-callendar-month-prev', type: "minimal", iconClass: "fa fa-chevron-left" }) + "\n\t<span>" + monthNames[visibleDate.month - 1] + "</span>\n\t" + Button.getModule({ id: this.id + '-callendar-month-next', type: "minimal", iconClass: "fa fa-chevron-right" }) + "\n\t";
        var yearSelectorElement = "\n\t" + Button.getModule({ id: this.id + '-callendar-year-prev', type: "minimal", iconClass: "fa fa-chevron-left" }) + "\n\t<span>" + visibleDate.year + "</span>\n\t" + Button.getModule({ id: this.id + '-callendar-year-next', type: "minimal", iconClass: "fa fa-chevron-right" }) + "\n\t";
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
        var datePreviewElement = "\n\t<div id='" + this.id + "-callendar-preview' class='" + Style.preview + "'>\n\t<div class='" + Style.previewDate + "'>" + dateString + "</div>\n\t<div class='" + Style.previewDayNumber + "'>" + dayNumberString + "</div>\n\t<div class='" + Style.previewDayName + "'>" + dayNameString + "</div>\n\t<div>12:04</div>\n\t</div>";
        return datePreviewElement;
    };
    DatePicker.prototype.createTimeSelectorElement = function (activeDate) {
        var hourSelectorElement = "\n\t<div style=\"width: 50%\">\n\t" + Button.getModule({ type: "minimal", iconClass: "fa fa-chevron-up" }) + "\n\t" + InputField.getModule({
            id: "dsjkl",
            name: "dsdf",
            type: "number"
        }) + "\n\t" + Button.getModule({ type: "minimal", iconClass: "fa fa-chevron-down" }) + "\n\t</div>\n\t";
        var minuteSelectorElement = "\n\t<div style=\"width: 50%\">\n\t" + Button.getModule({ type: "minimal", iconClass: "fa fa-chevron-up" }) + "\n\t" + InputField.getModule({
            id: "dsddjkl",
            name: "ddddsdf",
            type: "number"
        }) + "\n\t" + Button.getModule({ type: "minimal", iconClass: "fa fa-chevron-down" }) + "\n\t</div>\n\t";
        var timeSelectorElement = "<div>" + hourSelectorElement + minuteSelectorElement + "</div>";
        return timeSelectorElement;
    };
    DatePicker.prototype.createDayNameElements = function () {
        var dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        var dayNameElements = "";
        for (var dayNameIndex = 0; dayNameIndex < dayNames.length; dayNameIndex++) {
            dayNameElements += "<span class='" + Style.dayName + "'>" + dayNames[dayNameIndex] + "</span>";
        }
        return dayNameElements;
    };
    DatePicker.prototype.createMonthElement = function (selectedDate, activeDate, visibleDate) {
        var daysInMonth = new Date(visibleDate.year, visibleDate.month, 0).getDate();
        var firstDay = new Date(visibleDate.year, visibleDate.month - 1, 1).getDay();
        var dayElements = "";
        var days = [];
        for (var dayIndex = 1; dayIndex <= daysInMonth; dayIndex++) {
            days.push({
                number: dayIndex,
                selected: false,
                active: false
            });
        }
        if (selectedDate.year == visibleDate.year && selectedDate.month == visibleDate.month) {
            days[selectedDate.day - 1].selected = true;
        }
        if (activeDate.year == visibleDate.year && activeDate.month == visibleDate.month) {
            days[activeDate.day - 1].active = true;
        }
        for (var dummyDayIndex = 0; dummyDayIndex < firstDay; dummyDayIndex++) {
            dayElements += "<span class='" + Style.day + "'></span>";
        }
        for (var _i = 0, days_1 = days; _i < days_1.length; _i++) {
            var day = days_1[_i];
            var weekDay = (day.number - 1 + firstDay) % 7;
            var activeClass = day.active ? "active" : "";
            var selectedClass = day.selected ? "selected" : "";
            dayElements += "<span class='" + Style.day + " " + activeClass + " " + selectedClass + "' data-day='" + day.number + "' data-week-day='" + weekDay + "' data-month='" + visibleDate.month + "' data-year='" + visibleDate.year + "'>" + day.number + "</span>";
        }
        return dayElements;
    };
    DatePicker.prototype.getDateValue = function () {
        var dateStringValue = new Date(this.value);
        var dateValue = {
            day: dateStringValue.getDate(),
            month: dateStringValue.getMonth() + 1,
            year: dateStringValue.getFullYear(),
            weekDay: dateStringValue.getDay()
        };
        return dateValue;
    };
    DatePicker.prototype.setDateValue = function () {
        var day = this.selectedDate.day > 9 ? this.selectedDate.day : '0' + this.selectedDate.day;
        var month = this.selectedDate.month > 9 ? this.selectedDate.month : '0' + this.selectedDate.month;
        var year = this.selectedDate.year;
        return year + "-" + month + "-" + day;
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
        var previewElement = this.createPreviewElement(this.visibleDate);
        var dateSelectorElement = this.createDateSelectorElement(this.visibleDate);
        var timeSelectorElement = this.createTimeSelectorElement(this.visibleDate);
        var dayNameElements = this.createDayNameElements();
        var callendarElement = this.createMonthElement(this.selectedDate, this.activeDate, this.visibleDate);
        var modalId = this.id + '-datepicker-modal';
        var toggleTabElements = this.type == 'datetime' ? "<span id='" + modalId + "-toggleTabCallendar' class='" + Style.toggleTab + " " + Style.toggleTabCallendar + "'></span><span id='" + modalId + "-toggleTabClock' class='" + Style.toggleTab + " " + Style.toggleTabClock + "'></span><div class='clearfix'></div>" : '';
        var modalContentElement = "" + toggleTabElements + previewElement + "\n\t<div id='" + modalId + "-callendar' class='" + Style.callendar + "'>\n\t<div id='" + this.id + "-callendar-date-selector'>" + dateSelectorElement + "</div>\n\t" + dayNameElements + "\n\t<div id='" + this.id + "-callendar-month'>" + callendarElement + "</div>\n\t</div>\n\t<div class='" + Style.clock + "'>\n\t" + timeSelectorElement + "\n\t</div>";
        var modalObject = {
            id: modalId,
            triggerElement: buttonElement,
            modalElement: {
                content: modalContentElement,
                maxWidth: '326px',
                closeButtontext: 'cancel',
                footerButtons: {
                    buttonRow: {
                        buttons: [
                            { id: this.id + '-datepicker-submit', type: 'minimal', theme: 'primary', content: 'ok' }
                        ]
                    }
                }
            }
        };
        var modalElement = Modal.getModule(modalObject);
        this.addListener(inputField, modalObject.id);
        return "<div class='" + Style.datePicker + "'><div class='" + Style.inputField + "'>" + inputFieldElement + "</div><div class='" + Style.modal + "'>" + modalElement + "</div></div>";
    };
    return DatePicker;
}());
exports.DatePicker = DatePicker;
function getModule(datePicker) {
    return new DatePicker(datePicker).createModuleElement();
}
exports.getModule = getModule;
