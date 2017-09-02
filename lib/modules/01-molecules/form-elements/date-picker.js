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
        this.clockOptions = {
            showHours: true,
            showMinutes: true,
            showSeconds: true,
            interactive: false,
            required: true
        };
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
        if (datePicker.attributes !== undefined)
            this.attributes = datePicker.attributes;
        if (datePicker.clockOptions !== undefined) {
            this.clockOptions.showHours = datePicker.clockOptions.showHours !== undefined ? datePicker.clockOptions.showHours : true;
            this.clockOptions.showMinutes = datePicker.clockOptions.showMinutes !== undefined ? datePicker.clockOptions.showMinutes : true;
            this.clockOptions.showSeconds = datePicker.clockOptions.showSeconds !== undefined ? datePicker.clockOptions.showSeconds : true;
            this.clockOptions.interactive = datePicker.clockOptions.interactive !== undefined ? datePicker.clockOptions.interactive : false;
            this.clockOptions.required = datePicker.clockOptions.required !== undefined ? datePicker.clockOptions.required : true;
        }
        else {
            this.clockOptions = {
                showHours: true,
                showMinutes: true,
                showSeconds: true,
                interactive: false,
                required: true
            };
        }
        var activeDate = new Date();
        var selectedDate = new Date();
        var visibleDate = new Date();
        this.activeDate = {
            year: activeDate.getFullYear(),
            month: activeDate.getMonth() + 1,
            day: activeDate.getDate(),
            weekDay: activeDate.getDay()
        };
        this.selectedDate = this.value !== undefined && this.value !== '' ? this.getDateValue() : null;
        this.visibleDate = this.value !== undefined && this.value !== '' ? this.getDateValue() : {
            year: visibleDate.getFullYear(),
            month: visibleDate.getMonth() + 1,
            day: visibleDate.getDate(),
            weekDay: visibleDate.getDay()
        };
        this.selectedTime = this.value !== undefined && this.value !== '' ? this.getTimeValue() : null;
        this.visibleTime = this.value !== undefined && this.value !== '' ? this.getTimeValue() : {
            hours: 0,
            minutes: 0,
            seconds: 0
        };
    }
    DatePicker.prototype.elementIsNotNullOrUndefinedById = function (id) {
        return document.getElementById(id) !== undefined && document.getElementById(id) !== null;
    };
    DatePicker.prototype.addListener = function (inputField, modalId) {
        var datePicker = this;
        document.addEventListener('DOMContentLoaded', function (e) {
            var datePickerElementIsDefined = datePicker.elementIsNotNullOrUndefinedById(datePicker.id);
            var inputFieldElementIsDefined = datePicker.elementIsNotNullOrUndefinedById(inputField.id);
            var dummyInputFieldElementIsDefined = datePicker.elementIsNotNullOrUndefinedById(datePicker.id + '-dummyInput');
            var dummyInputFieldValueElementIsDefined = datePicker.elementIsNotNullOrUndefinedById(datePicker.id + '-dummyInputValue');
            var modalElementIsDefined = datePicker.elementIsNotNullOrUndefinedById(modalId);
            if (inputFieldElementIsDefined && modalElementIsDefined && dummyInputFieldElementIsDefined && dummyInputFieldValueElementIsDefined) {
                var inputFieldElement_1 = document.getElementById(inputField.id);
                var dummyInputFieldElement = document.getElementById(datePicker.id + '-dummyInput');
                var dummyInputFieldValueElement_1 = document.getElementById(datePicker.id + '-dummyInputValue');
                var modalElement_1 = document.getElementById(modalId);
                var activeTabClass = datePicker.type == 'time' ? 'active-tab-clock' : 'active-tab-callendar';
                modalElement_1.classList.add(activeTabClass);
                inputFieldElement_1.value ? inputFieldElement_1.classList.add("is-not-empty") : inputFieldElement_1.classList.remove("is-not-empty");
                dummyInputFieldValueElement_1.innerHTML = inputFieldElement_1.value;
                inputFieldElement_1.addEventListener("keydown", function (e) {
                    e.preventDefault();
                    return false;
                });
                dummyInputFieldElement.onclick = function () {
                    modalElement_1.classList.add("active");
                };
                if (modalElementIsDefined) {
                    if (datePicker.type == 'datetime' && !datePicker.clockOptions.required) {
                        datePicker.initSelectedTime();
                    }
                    datePicker.updateSubmitButtonState();
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
                            dummyInputFieldValueElement_1.innerHTML = inputFieldElement_1.value;
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
                if (datePicker.type == 'date' || datePicker.type == 'datetime') {
                    datePicker.addDateSelectorListener();
                }
                if (datePicker.type == 'time' || datePicker.type == 'datetime') {
                    datePicker.addTimeSelectorListener();
                }
                var submitValueButtonElement = document.getElementById(datePicker.id + '-datepicker-submit');
                submitValueButtonElement.addEventListener('click', function (e) {
                    var dateValue = '';
                    if (datePicker.type == 'date') {
                        dateValue = datePicker.setDateValue();
                    }
                    else if (datePicker.type == 'time') {
                        dateValue = datePicker.setTimeValue();
                    }
                    else if (datePicker.type == 'datetime') {
                        dateValue = datePicker.setDateTimeValue();
                    }
                    inputFieldElement_1.value = dateValue;
                    dummyInputFieldValueElement_1.innerHTML = inputFieldElement_1.value;
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
    DatePicker.prototype.addDisabledOrReadOnlyListener = function (inputField) {
        var datePicker = this;
        document.addEventListener('DOMContentLoaded', function (e) {
            var inputFieldElementIsDefined = datePicker.elementIsNotNullOrUndefinedById(inputField.id);
            var dummyInputFieldValueElementIsDefined = datePicker.elementIsNotNullOrUndefinedById(datePicker.id + '-dummyInputValue');
            if (inputFieldElementIsDefined && dummyInputFieldValueElementIsDefined) {
                var inputFieldElement = document.getElementById(inputField.id);
                var dummyInputFieldValueElement = document.getElementById(datePicker.id + '-dummyInputValue');
                inputFieldElement.value ? inputFieldElement.classList.add("is-not-empty") : inputFieldElement.classList.remove("is-not-empty");
                dummyInputFieldValueElement.innerHTML = inputFieldElement.value;
            }
        });
    };
    DatePicker.prototype.addDateSelectorListener = function () {
        var datePicker = this;
        /* Callendar listener */
        var callendarElement = document.getElementById(datePicker.id + '-datepicker-modal-callendar');
        callendarElement.addEventListener('click', function (e) {
            var target = e.target;
            if (target.classList.contains(Style.day)) {
                datePicker.selectedDate = {
                    day: target.dataset.day,
                    weekDay: target.dataset.weekDay,
                    month: target.dataset.month,
                    year: target.dataset.year
                };
                var previewElement = document.getElementById(datePicker.id + '-preview');
                var callendarMonthElement_1 = document.getElementById(datePicker.id + '-callendar-month');
                previewElement.innerHTML = datePicker.createPreviewElement();
                callendarMonthElement_1.innerHTML = datePicker.createMonthElement();
            }
        });
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
            callendarMonthElement.innerHTML = datePicker.createMonthElement();
            callendarDateSelectorElement.innerHTML = datePicker.createDateSelectorElement();
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
            callendarMonthElement.innerHTML = datePicker.createMonthElement();
            callendarDateSelectorElement.innerHTML = datePicker.createDateSelectorElement();
            datePicker.addDateSelectorListener();
        });
        callendarYearPrevElement.addEventListener('click', function (e) {
            datePicker.visibleDate.year--;
            callendarMonthElement.innerHTML = datePicker.createMonthElement();
            callendarDateSelectorElement.innerHTML = datePicker.createDateSelectorElement();
            datePicker.addDateSelectorListener();
        });
        callendarYearNextElement.addEventListener('click', function (e) {
            datePicker.visibleDate.year++;
            callendarMonthElement.innerHTML = datePicker.createMonthElement();
            callendarDateSelectorElement.innerHTML = datePicker.createDateSelectorElement();
            datePicker.addDateSelectorListener();
        });
    };
    DatePicker.prototype.initSelectedTime = function () {
        if (this.selectedTime == null) {
            this.selectedTime = {
                hours: 0,
                minutes: 0,
                seconds: 0
            };
        }
    };
    DatePicker.prototype.addTimeSelectorListener = function () {
        var datePicker = this;
        var clockTimeSelectorElement = document.getElementById(datePicker.id + '-clock-time-selector');
        var previewElement = document.getElementById(datePicker.id + '-preview');
        if (datePicker.clockOptions.showHours) {
            var clockHoursInputElement = document.getElementById(datePicker.id + '-clock-hours-input');
            var clockHoursUpElement = document.getElementById(datePicker.id + '-clock-hours-up');
            var clockHoursDownElement = document.getElementById(datePicker.id + '-clock-hours-down');
            clockHoursInputElement.value ? clockHoursInputElement.classList.add("is-not-empty") : clockHoursInputElement.classList.remove("is-not-empty");
            // Selector for hours
            clockHoursInputElement.addEventListener('blur', function (e) {
                datePicker.initSelectedTime();
                var value;
                if (Number(this.value) < 0) {
                    value = 0;
                }
                else if (Number(this.value) > 23) {
                    value = 23;
                }
                else {
                    value = Number(this.value);
                }
                datePicker.selectedTime.hours = value;
                clockTimeSelectorElement.innerHTML = datePicker.createTimeSelectorElement();
                previewElement.innerHTML = datePicker.createPreviewElement();
                datePicker.addTimeSelectorListener();
            });
            clockHoursUpElement.addEventListener('click', function (e) {
                datePicker.initSelectedTime();
                if (datePicker.selectedTime.hours < 23) {
                    datePicker.selectedTime.hours++;
                }
                else {
                    datePicker.selectedTime.hours = 0;
                }
                clockTimeSelectorElement.innerHTML = datePicker.createTimeSelectorElement();
                previewElement.innerHTML = datePicker.createPreviewElement();
                datePicker.addTimeSelectorListener();
            });
            clockHoursDownElement.addEventListener('click', function (e) {
                datePicker.initSelectedTime();
                if (datePicker.selectedTime.hours > 0) {
                    datePicker.selectedTime.hours--;
                }
                else {
                    datePicker.selectedTime.hours = 23;
                }
                clockTimeSelectorElement.innerHTML = datePicker.createTimeSelectorElement();
                previewElement.innerHTML = datePicker.createPreviewElement();
                datePicker.addTimeSelectorListener();
            });
        }
        if (datePicker.clockOptions.showMinutes) {
            var clockMinutesInputElement = document.getElementById(datePicker.id + '-clock-minutes-input');
            var clockMinutesUpElement = document.getElementById(datePicker.id + '-clock-minutes-up');
            var clockMinutesDownElement = document.getElementById(datePicker.id + '-clock-minutes-down');
            clockMinutesInputElement.value ? clockMinutesInputElement.classList.add("is-not-empty") : clockMinutesInputElement.classList.remove("is-not-empty");
            // Selector for minutes
            clockMinutesInputElement.addEventListener('blur', function (e) {
                datePicker.initSelectedTime();
                var value;
                if (Number(this.value) < 0) {
                    value = 0;
                }
                else if (Number(this.value) > 59) {
                    value = 59;
                }
                else {
                    value = Number(this.value);
                }
                datePicker.selectedTime.minutes = value;
                clockTimeSelectorElement.innerHTML = datePicker.createTimeSelectorElement();
                previewElement.innerHTML = datePicker.createPreviewElement();
                datePicker.addTimeSelectorListener();
            });
            clockMinutesUpElement.addEventListener('click', function (e) {
                datePicker.initSelectedTime();
                if (datePicker.selectedTime.minutes < 59) {
                    datePicker.selectedTime.minutes++;
                }
                else {
                    datePicker.selectedTime.minutes = 0;
                    if (datePicker.clockOptions.interactive) {
                        if (datePicker.selectedTime.hours < 23) {
                            datePicker.selectedTime.hours++;
                        }
                        else {
                            datePicker.selectedTime.hours = 0;
                        }
                    }
                }
                clockTimeSelectorElement.innerHTML = datePicker.createTimeSelectorElement();
                previewElement.innerHTML = datePicker.createPreviewElement();
                datePicker.addTimeSelectorListener();
            });
            clockMinutesDownElement.addEventListener('click', function (e) {
                datePicker.initSelectedTime();
                if (datePicker.selectedTime.minutes > 0) {
                    datePicker.selectedTime.minutes--;
                }
                else {
                    datePicker.selectedTime.minutes = 59;
                    if (datePicker.clockOptions.interactive) {
                        if (datePicker.selectedTime.hours > 0) {
                            datePicker.selectedTime.hours--;
                        }
                        else {
                            datePicker.selectedTime.hours = 23;
                        }
                    }
                }
                clockTimeSelectorElement.innerHTML = datePicker.createTimeSelectorElement();
                previewElement.innerHTML = datePicker.createPreviewElement();
                datePicker.addTimeSelectorListener();
            });
        }
        if (datePicker.clockOptions.showSeconds) {
            var clockSecondsInputElement = document.getElementById(datePicker.id + '-clock-seconds-input');
            var clockSecondsUpElement = document.getElementById(datePicker.id + '-clock-seconds-up');
            var clockSecondsDownElement = document.getElementById(datePicker.id + '-clock-seconds-down');
            clockSecondsInputElement.value ? clockSecondsInputElement.classList.add("is-not-empty") : clockSecondsInputElement.classList.remove("is-not-empty");
            // Selector for seconds
            clockSecondsInputElement.addEventListener('blur', function (e) {
                datePicker.initSelectedTime();
                var value;
                if (Number(this.value) < 0) {
                    value = 0;
                }
                else if (Number(this.value) > 59) {
                    value = 59;
                }
                else {
                    value = Number(this.value);
                }
                datePicker.selectedTime.seconds = value;
                clockTimeSelectorElement.innerHTML = datePicker.createTimeSelectorElement();
                previewElement.innerHTML = datePicker.createPreviewElement();
                datePicker.addTimeSelectorListener();
            });
            clockSecondsUpElement.addEventListener('click', function (e) {
                datePicker.initSelectedTime();
                if (datePicker.selectedTime.seconds < 59) {
                    datePicker.selectedTime.seconds++;
                }
                else {
                    datePicker.selectedTime.seconds = 0;
                    if (datePicker.clockOptions.interactive) {
                        if (datePicker.selectedTime.minutes < 59) {
                            datePicker.selectedTime.minutes++;
                        }
                        else {
                            datePicker.selectedTime.minutes = 0;
                            if (datePicker.selectedTime.hours < 23) {
                                datePicker.selectedTime.hours++;
                            }
                            else {
                                datePicker.selectedTime.hours = 0;
                            }
                        }
                    }
                }
                clockTimeSelectorElement.innerHTML = datePicker.createTimeSelectorElement();
                previewElement.innerHTML = datePicker.createPreviewElement();
                datePicker.addTimeSelectorListener();
            });
            clockSecondsDownElement.addEventListener('click', function (e) {
                datePicker.initSelectedTime();
                if (datePicker.selectedTime.seconds > 0) {
                    datePicker.selectedTime.seconds--;
                }
                else {
                    datePicker.selectedTime.seconds = 59;
                    if (datePicker.clockOptions.interactive) {
                        if (datePicker.selectedTime.minutes > 0) {
                            datePicker.selectedTime.minutes--;
                        }
                        else {
                            datePicker.selectedTime.minutes = 59;
                            if (datePicker.selectedTime.hours > 0) {
                                datePicker.selectedTime.hours--;
                            }
                            else {
                                datePicker.selectedTime.hours = 23;
                            }
                        }
                    }
                }
                clockTimeSelectorElement.innerHTML = datePicker.createTimeSelectorElement();
                previewElement.innerHTML = datePicker.createPreviewElement();
                datePicker.addTimeSelectorListener();
            });
        }
    };
    DatePicker.prototype.createDateSelectorElement = function () {
        var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var monthSelectorElement = Button.getModule({ id: this.id + '-callendar-month-prev', type: "minimal", iconClass: "fa fa-chevron-left" }) + "<span>" + monthNames[this.visibleDate.month - 1] + "</span>" + Button.getModule({ id: this.id + '-callendar-month-next', type: "minimal", iconClass: "fa fa-chevron-right" });
        var yearSelectorElement = Button.getModule({ id: this.id + '-callendar-year-prev', type: "minimal", iconClass: "fa fa-chevron-left" }) + "<span>" + this.visibleDate.year + "</span>" + Button.getModule({ id: this.id + '-callendar-year-next', type: "minimal", iconClass: "fa fa-chevron-right" });
        var dateSelectorElement = "<div class='" + Style.monthSelector + "'>" + monthSelectorElement + "</div><div class='" + Style.yearSelector + "'>" + yearSelectorElement + "</div>";
        return dateSelectorElement;
    };
    DatePicker.prototype.datePickerValueIsValid = function () {
        var datePickerValueIsValid = false;
        if (this.type == 'date') {
            datePickerValueIsValid = this.selectedDate !== null;
        }
        else if (this.type == 'time') {
            datePickerValueIsValid = this.selectedTime !== null;
        }
        else if (this.type == 'datetime') {
            datePickerValueIsValid = this.selectedDate !== null && this.selectedTime !== null;
        }
        return datePickerValueIsValid;
    };
    DatePicker.prototype.getDatePreviewElementInfoMessage = function () {
        var datePreviewElementInfoMessage = '';
        if (this.type == 'date') {
            datePreviewElementInfoMessage = 'Select a date';
        }
        else if (this.type == 'time') {
            datePreviewElementInfoMessage = 'Select a time';
        }
        else if (this.type == 'datetime') {
            if (this.selectedDate !== null) {
                datePreviewElementInfoMessage = 'Select a time';
            }
            else if (this.selectedTime !== null) {
                datePreviewElementInfoMessage = 'Select a date';
            }
            else {
                datePreviewElementInfoMessage = 'Select a date and time';
            }
        }
        return "<div class=\"" + Style.previewInfoMessage + "\">" + datePreviewElementInfoMessage + "</div>";
    };
    DatePicker.prototype.createPreviewElement = function () {
        var dateElement = '';
        if (this.selectedDate !== null) {
            if (this.type == 'date' || this.type == 'datetime') {
                var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                var dayNumbers = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th', '21st', '22nd', '23rd', '24th', '25th', '26th', '27th', '28th', '29th', '30th', '31st'];
                var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                var dateString = monthNames[this.selectedDate.month - 1] + " - " + this.selectedDate.year;
                var dayNumberString = dayNumbers[this.selectedDate.day - 1];
                var dayNameString = dayNames[this.selectedDate.weekDay];
                dateElement = "<div class='" + Style.previewDate + "'>" + dateString + "</div><div class='" + Style.previewDayNumber + "'>" + dayNumberString + "</div><div class='" + Style.previewDayName + "'>" + dayNameString + "</div>";
            }
        }
        var clockElement = '';
        if (this.selectedTime !== null) {
            if (this.type == 'time' || this.type == 'datetime') {
                var clockHoursValue = this.selectedTime.hours > 9 ? this.selectedTime.hours.toString() : '0' + this.selectedTime.hours.toString();
                var clockHoursElement = this.clockOptions.showHours ? "<span>" + clockHoursValue + "</span>" : '';
                var clockMinutesValue = this.selectedTime.minutes > 9 ? this.selectedTime.minutes.toString() : '0' + this.selectedTime.minutes.toString();
                var clockMinutesElement = this.clockOptions.showMinutes ? "<span>" + clockMinutesValue + "</span>" : '';
                var clockSecondsValue = this.selectedTime.seconds > 9 ? this.selectedTime.seconds.toString() : '0' + this.selectedTime.seconds.toString();
                var clockSecondsElement = this.clockOptions.showSeconds ? "<span>" + clockSecondsValue + "</span>" : '';
                var clockClass = this.type == 'time' ? "" + Style.bigClock : '';
                clockElement = "<div class='" + Style.previewClock + " " + clockClass + "'>" + clockHoursElement + clockMinutesElement + clockSecondsElement + "</div>";
            }
        }
        var datePreviewElement = '';
        if (this.datePickerValueIsValid()) {
            datePreviewElement = "" + dateElement + clockElement;
        }
        else {
            datePreviewElement = this.getDatePreviewElementInfoMessage();
        }
        this.updateSubmitButtonState();
        return datePreviewElement;
    };
    DatePicker.prototype.getTimeSelectorSizeClass = function () {
        var timeSelectorsCount = 0;
        if (this.clockOptions.showHours)
            timeSelectorsCount++;
        if (this.clockOptions.showMinutes)
            timeSelectorsCount++;
        if (this.clockOptions.showSeconds)
            timeSelectorsCount++;
        var sizeClass = 'size-1-' + timeSelectorsCount;
        return Style[sizeClass];
    };
    DatePicker.prototype.createTimeSelectorElement = function () {
        var hoursSelectorElement = '';
        var minutesSelectorElement = '';
        var secondsSelectorElement = '';
        if (this.clockOptions.showHours) {
            var toggleButtonUp = "<div class='" + Style.toggleButton + "'>" + Button.getModule({ id: this.id + '-clock-hours-up', type: "minimal", iconClass: "fa fa-chevron-up" }) + "</div>";
            var toggleButtonDown = "<div class='" + Style.toggleButton + "'>" + Button.getModule({ id: this.id + '-clock-hours-down', type: "minimal", iconClass: "fa fa-chevron-down" }) + "</div>";
            var inputFieldElement = InputField.getModule({
                id: this.id + '-clock-hours-input',
                name: this.id + '-clock-hours-input',
                value: this.selectedTime !== null ? '' + this.selectedTime.hours : '',
                type: 'number',
                attributes: ['min="0"', 'max="23"'],
                label: 'Hours'
            });
            hoursSelectorElement = "<div class='" + Style.hoursSelector + " " + this.getTimeSelectorSizeClass() + "'>" + toggleButtonUp + inputFieldElement + toggleButtonDown + "</div>";
        }
        if (this.clockOptions.showMinutes) {
            var toggleButtonUp = "<div class='" + Style.toggleButton + "'>" + Button.getModule({ id: this.id + '-clock-minutes-up', type: "minimal", iconClass: "fa fa-chevron-up" }) + "</div>";
            var toggleButtonDown = "<div class='" + Style.toggleButton + "'>" + Button.getModule({ id: this.id + '-clock-minutes-down', type: "minimal", iconClass: "fa fa-chevron-down" }) + "</div>";
            var inputFieldElement = InputField.getModule({
                id: this.id + '-clock-minutes-input',
                name: this.id + '-clock-minutes-input',
                value: this.selectedTime !== null ? '' + this.selectedTime.minutes : '',
                type: 'number',
                attributes: ['min="0"', 'max="59"'],
                label: 'Minutes'
            });
            minutesSelectorElement = "<div class='" + Style.minutesSelector + " " + this.getTimeSelectorSizeClass() + "'>" + toggleButtonUp + inputFieldElement + toggleButtonDown + "</div>";
        }
        if (this.clockOptions.showSeconds) {
            var toggleButtonUp = "<div class='" + Style.toggleButton + "'>" + Button.getModule({ id: this.id + '-clock-seconds-up', type: "minimal", iconClass: "fa fa-chevron-up" }) + "</div>";
            var toggleButtonDown = "<div class='" + Style.toggleButton + "'>" + Button.getModule({ id: this.id + '-clock-seconds-down', type: "minimal", iconClass: "fa fa-chevron-down" }) + "</div>";
            var inputFieldElement = InputField.getModule({
                id: this.id + '-clock-seconds-input',
                name: this.id + '-clock-seconds-input',
                value: this.selectedTime !== null ? '' + this.selectedTime.seconds : '',
                type: 'number',
                attributes: ['min="0"', 'max="59"'],
                label: 'Seconds'
            });
            secondsSelectorElement = "<div class='" + Style.secondsSelector + " " + this.getTimeSelectorSizeClass() + "'>" + toggleButtonUp + inputFieldElement + toggleButtonDown + "</div>";
        }
        var timeSelectorElement = "<div>" + hoursSelectorElement + minutesSelectorElement + secondsSelectorElement + "<div class='" + Style.clearfix + "'></div></div>";
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
    DatePicker.prototype.createMonthElement = function () {
        var daysInMonth = new Date(this.visibleDate.year, this.visibleDate.month, 0).getDate();
        var firstDay = new Date(this.visibleDate.year, this.visibleDate.month - 1, 1).getDay();
        var dayElements = "";
        var days = [];
        for (var dayIndex = 1; dayIndex <= daysInMonth; dayIndex++) {
            days.push({
                number: dayIndex,
                selected: false,
                active: false
            });
        }
        if (this.selectedDate !== null && this.selectedDate.year == this.visibleDate.year && this.selectedDate.month == this.visibleDate.month) {
            days[this.selectedDate.day - 1].selected = true;
        }
        if (this.activeDate.year == this.visibleDate.year && this.activeDate.month == this.visibleDate.month) {
            days[this.activeDate.day - 1].active = true;
        }
        for (var dummyDayIndex = 0; dummyDayIndex < firstDay; dummyDayIndex++) {
            dayElements += "<span class='" + Style.day + "'></span>";
        }
        for (var _i = 0, days_1 = days; _i < days_1.length; _i++) {
            var day = days_1[_i];
            var weekDay = (day.number - 1 + firstDay) % 7;
            var activeClass = day.active ? "active" : "";
            var selectedClass = day.selected ? "selected" : "";
            dayElements += "<span class='" + Style.day + " " + activeClass + " " + selectedClass + "' data-day='" + day.number + "' data-week-day='" + weekDay + "' data-month='" + this.visibleDate.month + "' data-year='" + this.visibleDate.year + "'>" + day.number + "</span>";
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
    DatePicker.prototype.getTimeValue = function () {
        var dateStringValue = new Date(this.value);
        var dateValue = {
            hours: dateStringValue.getHours(),
            minutes: dateStringValue.getMinutes(),
            seconds: dateStringValue.getSeconds()
        };
        return dateValue;
    };
    DatePicker.prototype.setTimeValue = function () {
        if (!this.clockOptions.showHours)
            this.selectedTime.hours = 0;
        if (!this.clockOptions.showMinutes)
            this.selectedTime.minutes = 0;
        if (!this.clockOptions.showSeconds)
            this.selectedTime.seconds = 0;
        var hours = this.selectedTime.hours > 9 ? this.selectedTime.hours : '0' + this.selectedTime.hours;
        var minutes = this.selectedTime.minutes > 9 ? this.selectedTime.minutes : '0' + this.selectedTime.minutes;
        var seconds = this.selectedTime.seconds > 9 ? this.selectedTime.seconds : '0' + this.selectedTime.seconds;
        return hours + ":" + minutes + ":" + seconds;
    };
    DatePicker.prototype.setDateTimeValue = function () {
        return this.setDateValue() + " " + this.setTimeValue();
    };
    DatePicker.prototype.updateSubmitButtonState = function () {
        var submitButtonElement = document.getElementById(this.id + '-datepicker-submit');
        var disabledSubmitButtonElement = document.getElementById(this.id + '-datepicker-submit-disabled');
        var submitButtonsIsNotNull = submitButtonElement !== null && disabledSubmitButtonElement !== null;
        if (submitButtonsIsNotNull) {
            if (this.datePickerValueIsValid()) {
                submitButtonElement.style.display = 'inline-block';
                disabledSubmitButtonElement.style.display = 'none';
            }
            else {
                submitButtonElement.style.display = 'none';
                disabledSubmitButtonElement.style.display = 'inline-block';
            }
        }
    };
    DatePicker.prototype.createModuleElement = function () {
        var datePickerIsReadOnly = this.attributes !== undefined && this.attributes.indexOf('readonly') > -1;
        var datePickerIsDisabled = this.attributes !== undefined && this.attributes.indexOf('disabled') > -1;
        var datePickerElement = '';
        var inputField = {
            id: this.id + '-input',
            name: this.name,
            type: 'hidden',
            value: this.value,
            placeholder: this.placeholder,
            attributes: this.attributes,
            label: this.label
        };
        var inputFieldElement = InputField.getModule(inputField);
        var dummyInputFieldElement = "<div id='" + this.id + "-dummyInput' class='" + Style.dummyInputField + "'><span id='" + this.id + "-dummyInputValue' class='" + Style.dummyInputFieldValue + "'></span></div>";
        if (datePickerIsReadOnly || datePickerIsDisabled) {
            var readOnlyClass = datePickerIsReadOnly ? Style.readOnly : '';
            var disabledClass = datePickerIsDisabled ? Style.disabled : '';
            datePickerElement = "<div class='" + Style.datePicker + " " + readOnlyClass + " " + disabledClass + "'><div class='" + Style.inputField + "'>" + dummyInputFieldElement + inputFieldElement + "</div></div>";
            this.addDisabledOrReadOnlyListener(inputField);
        }
        else {
            var buttonElement = Button.getModule({
                id: 'datepicker-trigger1',
                iconClass: 'fa fa-calendar',
                type: 'minimal'
            });
            var modalId = this.id + '-datepicker-modal';
            var previewElement = this.createPreviewElement();
            previewElement = "<div id='" + this.id + "-preview' class='" + Style.preview + "'>" + previewElement + "</div>";
            var callendarElement = '';
            if (this.type == 'date' || this.type == 'datetime') {
                var dateSelectorElement = this.createDateSelectorElement();
                dateSelectorElement = "<div id='" + this.id + "-callendar-date-selector'>" + dateSelectorElement + "</div>";
                var dayNameElements = this.createDayNameElements();
                var monthElement = this.createMonthElement();
                monthElement = "<div id='" + this.id + "-callendar-month'>" + monthElement + "</div>";
                callendarElement = "<div id='" + modalId + "-callendar' class='" + Style.callendar + "'>" + dateSelectorElement + dayNameElements + monthElement + "</div>";
            }
            var timeSelectorElement = '';
            if (this.type == 'time' || this.type == 'datetime') {
                timeSelectorElement = this.createTimeSelectorElement();
                timeSelectorElement = "<div id='" + this.id + "-clock-time-selector' class='" + Style.clock + "'>" + timeSelectorElement + "</div>";
            }
            var toggleTabElements = this.type == 'datetime' ? "<span id='" + modalId + "-toggleTabCallendar' class='" + Style.toggleTab + " " + Style.toggleTabCallendar + "'></span><span id='" + modalId + "-toggleTabClock' class='" + Style.toggleTab + " " + Style.toggleTabClock + "'></span><div class='clearfix'></div>" : '';
            var modalContentElement = "" + toggleTabElements + previewElement + callendarElement + timeSelectorElement;
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
                                { id: this.id + '-datepicker-submit', type: 'minimal', theme: 'primary', content: 'ok' },
                                { id: this.id + '-datepicker-submit-disabled', type: 'minimal', theme: 'primary', content: 'ok', attributes: ['disabled'] }
                            ]
                        }
                    }
                }
            };
            var modalElement = Modal.getModule(modalObject);
            this.addListener(inputField, modalObject.id);
            datePickerElement = "<div class='" + Style.datePicker + "'><div class='" + Style.inputField + "'>" + dummyInputFieldElement + inputFieldElement + "</div><div class='" + Style.modal + "'>" + modalElement + "</div></div>";
        }
        return datePickerElement;
    };
    return DatePicker;
}());
exports.DatePicker = DatePicker;
function getModule(datePicker) {
    return new DatePicker(datePicker).createModuleElement();
}
exports.getModule = getModule;
