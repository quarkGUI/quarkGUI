import * as InputField from './input-field'
import * as Modal from '../messaging/modal'
import * as Button from '../../00-atoms/buttons/button'
const Style = require<any>("../../../../src/modules/01-molecules/form-elements/date-picker.scss");

export class DatePicker {
	id: string;
	name: string;
	type: string = "date";
	value: any = "";
	placeholder: string = "";
	label: string = "";
	activeDate: IDatePickerDate;
	selectedDate: IDatePickerDate;
	visibleDate: IDatePickerDate;
	selectedTime: IDatePickerTime;
	clockOptions: IClockOptions = {
		showHours: true,
		showMinutes: true,
		showSeconds: true
	};


	constructor(datePicker: IDatePicker) {
		this.id = datePicker.id;
		this.name = datePicker.name;
		if (datePicker.type !== undefined) this.type = datePicker.type;
		if (datePicker.value !== undefined) this.value = datePicker.value;
		if (datePicker.placeholder !== undefined) this.placeholder = datePicker.placeholder;
		if (datePicker.label !== undefined) this.label = datePicker.label;

		if (datePicker.clockOptions !== undefined) {
			this.clockOptions.showHours = datePicker.clockOptions.showHours !== undefined ? datePicker.clockOptions.showHours : true;
			this.clockOptions.showMinutes = datePicker.clockOptions.showMinutes!== undefined ? datePicker.clockOptions.showMinutes : true;
			this.clockOptions.showSeconds = datePicker.clockOptions.showSeconds !== undefined ? datePicker.clockOptions.showSeconds : true;
		}else{
			this.clockOptions = {
				showHours: true,
				showMinutes: true,
				showSeconds: true
			}
		}

		let activeDate = new Date();
		let selectedDate = new Date();
		let visibleDate = new Date();
		this.activeDate = {
			year: activeDate.getFullYear(),
			month: activeDate.getMonth() + 1,
			day: activeDate.getDate(),
			weekDay: activeDate.getDay()
		}
		this.selectedDate = this.value !== undefined && this.value !== '' ? this.getDateValue() : {
			year: selectedDate.getFullYear(),
			month: selectedDate.getMonth() + 1,
			day: selectedDate.getDate(),
			weekDay: selectedDate.getDay()
		}
		this.visibleDate = this.value !== undefined && this.value !== '' ? this.getDateValue() : {
			year: visibleDate.getFullYear(),
			month: visibleDate.getMonth() + 1,
			day: visibleDate.getDate(),
			weekDay: visibleDate.getDay()
		}
		this.selectedTime = this.value !== undefined && this.value !== '' ? this.getTimeValue() : {
			hours: 0,
			minutes: 0,
			seconds: 0
		}
	}


	private elementIsNotNullOrUndefinedById(id: string){
		return document.getElementById(id) !== undefined && document.getElementById(id) !== null;
	}

	private elementIsNotNullOrUndefinedByTagName(containerElement: HTMLElement, tagName: string){
		return containerElement.getElementsByTagName(tagName).length > 0;
	}

	private addListener(inputField, modalId){
		let datePicker = this;
		document.addEventListener('DOMContentLoaded', function(e) {
			let datePickerElementIsDefined: boolean = datePicker.elementIsNotNullOrUndefinedById(datePicker.id);
			let inputFieldElementIsDefined: boolean = datePicker.elementIsNotNullOrUndefinedById(inputField.id);
			let modalElementIsDefined: boolean = datePicker.elementIsNotNullOrUndefinedById(modalId);

			if (inputFieldElementIsDefined && modalElementIsDefined){
				let inputFieldElement:HTMLInputElement = <HTMLInputElement> document.getElementById(inputField.id);
				let modalElement:HTMLElement = document.getElementById(modalId);

				let activeTabClass = datePicker.type == 'time' ? 'active-tab-clock' : 'active-tab-callendar';
				modalElement.classList.add(activeTabClass);


				inputFieldElement.value ? inputFieldElement.classList.add("is-not-empty") : inputFieldElement.classList.remove("is-not-empty");

				inputFieldElement.addEventListener("keydown", function(e) {
					e.preventDefault();
					return false;
				});
				

				inputFieldElement.onfocus = function(){
					modalElement.classList.add("active");
				};


				if (modalElementIsDefined){
					modalElement.addEventListener('click', function (e) {
						let target: any = e.target; // Clicked element
						while (target && target.parentNode !== modalElement) {
							target = target.parentNode; // If the clicked element isn't a direct child
							if(!target) { return; } // If element doesn't exist
						}
						if (target.className === 'SPAN'){
							var optionValue = target.getAttribute("data-value");
							inputFieldElement.value = optionValue;
							inputFieldElement.classList.add("is-not-empty");
						}
					});

					// Tab toggle buttons
					let toggleTabCallendarElementIsNotNull: boolean = document.getElementById(modalId + '-toggleTabCallendar') !== null;
					if (toggleTabCallendarElementIsNotNull){
						let toggleTabCallendarElement: HTMLElement = document.getElementById(modalId + '-toggleTabCallendar');
						toggleTabCallendarElement.addEventListener('click', function (e){
							modalElement.classList.remove("active-tab-clock");
							modalElement.classList.add("active-tab-callendar");
						});
					}
					let toggleTabClockElementIsNotNull: boolean = document.getElementById(modalId + '-toggleTabClock') !== null;
					if (toggleTabClockElementIsNotNull){
						let toggleTabClockElement: HTMLElement = document.getElementById(modalId + '-toggleTabClock');
						toggleTabClockElement.addEventListener('click', function (e){
							modalElement.classList.remove("active-tab-callendar");
							modalElement.classList.add("active-tab-clock");
						});
					}
				}

				if (datePicker.type == 'date' || datePicker.type == 'datetime'){
					datePicker.addDateSelectorListener();
				}
				if (datePicker.type == 'time' || datePicker.type == 'datetime'){
					datePicker.addTimeSelectorListener();
				}

				let submitValueButtonElement = document.getElementById(datePicker.id + '-datepicker-submit');
				submitValueButtonElement.addEventListener('click', function (e) {
					let dateValue = datePicker.setDateValue();
					if (datePicker.type == 'time'){
						dateValue = datePicker.setTimeValue();
					}
					else if (datePicker.type == 'datetime'){
						dateValue = datePicker.setDateTimeValue();
					}
					inputFieldElement.value = dateValue;
					modalElement.classList.remove("active");
					if (dateValue !== null && dateValue !== ''){
						inputFieldElement.classList.add("is-not-empty")
					}else{
						inputFieldElement.classList.remove("is-not-empty");
					}
				});
			}
		}, false);
	}


	private addDateSelectorListener(){
		let datePicker = this;

		/* Callendar listener */
		let callendarElement:HTMLElement = document.getElementById(datePicker.id + '-datepicker-modal-callendar');
		callendarElement.addEventListener('click', function (e) {
			let target:any = e.target;
			if (target.classList.contains(Style.day)){
				datePicker.selectedDate = {
					day: target.dataset.day,
					weekDay: target.dataset.weekDay,
					month: target.dataset.month,
					year: target.dataset.year
				};

				let previewElement:HTMLElement = document.getElementById(datePicker.id + '-preview');
				let callendarMonthElement:HTMLElement = document.getElementById(datePicker.id + '-callendar-month');
				previewElement.innerHTML = datePicker.createPreviewElement();
				callendarMonthElement.innerHTML = datePicker.createMonthElement();
			}
		});


		let callendarMonthPrevElement:HTMLElement = document.getElementById(datePicker.id + '-callendar-month-prev');
		let callendarMonthNextElement:HTMLElement = document.getElementById(datePicker.id + '-callendar-month-next');
		let callendarYearPrevElement:HTMLElement = document.getElementById(datePicker.id + '-callendar-year-prev');
		let callendarYearNextElement:HTMLElement = document.getElementById(datePicker.id + '-callendar-year-next');

		let callendarMonthElement:HTMLElement = document.getElementById(datePicker.id + '-callendar-month');
		let callendarDateSelectorElement:HTMLElement = document.getElementById(datePicker.id + '-callendar-date-selector');

		callendarMonthPrevElement.addEventListener('click', function (e) {
			if (datePicker.visibleDate.month > 1){
				datePicker.visibleDate.month--;
			}else{
				datePicker.visibleDate.month = 12;
				datePicker.visibleDate.year--;
			}
			callendarMonthElement.innerHTML = datePicker.createMonthElement();
			callendarDateSelectorElement.innerHTML = datePicker.createDateSelectorElement();
			datePicker.addDateSelectorListener();
		});
		callendarMonthNextElement.addEventListener('click', function (e) {
			if (datePicker.visibleDate.month < 12){
				datePicker.visibleDate.month++;
			}else{
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
	}

	private addTimeSelectorListener(){
		let datePicker = this;

		let clockTimeSelectorElement:HTMLElement = document.getElementById(datePicker.id + '-clock-time-selector');
		let previewElement:HTMLElement = document.getElementById(datePicker.id + '-preview');

		if (datePicker.clockOptions.showHours){
			let clockHoursInputElement:HTMLInputElement = <HTMLInputElement> document.getElementById(datePicker.id + '-clock-hours-input');
			let clockHoursUpElement:HTMLElement = document.getElementById(datePicker.id + '-clock-hours-up');
			let clockHoursDownElement:HTMLElement = document.getElementById(datePicker.id + '-clock-hours-down');

			clockHoursInputElement.value ? clockHoursInputElement.classList.add("is-not-empty") : clockHoursInputElement.classList.remove("is-not-empty");

			// Selector for hours
			clockHoursInputElement.addEventListener('blur', function (e) {
				let value:number;
				if (Number(this.value) < 0){
					value = 0;
				}else if (Number(this.value) > 23){
					value = 23;
				}else{
					value = Number(this.value);
				}
				datePicker.selectedTime.hours = value;
				clockTimeSelectorElement.innerHTML = datePicker.createTimeSelectorElement();
				previewElement.innerHTML = datePicker.createPreviewElement();
				datePicker.addTimeSelectorListener();
			});
			clockHoursUpElement.addEventListener('click', function (e) {
				if (datePicker.selectedTime.hours < 23){
					datePicker.selectedTime.hours++;
				}else{
					datePicker.selectedTime.hours = 0;
				}
				clockTimeSelectorElement.innerHTML = datePicker.createTimeSelectorElement();
				previewElement.innerHTML = datePicker.createPreviewElement();
				datePicker.addTimeSelectorListener();
			});
			clockHoursDownElement.addEventListener('click', function (e) {
				if (datePicker.selectedTime.hours > 0){
					datePicker.selectedTime.hours--;
				}else{
					datePicker.selectedTime.hours = 23;
				}
				clockTimeSelectorElement.innerHTML = datePicker.createTimeSelectorElement();
				previewElement.innerHTML = datePicker.createPreviewElement();
				datePicker.addTimeSelectorListener();
			});
		}

		if (datePicker.clockOptions.showMinutes){
			let clockMinutesInputElement:HTMLInputElement = <HTMLInputElement> document.getElementById(datePicker.id + '-clock-minutes-input');
			let clockMinutesUpElement:HTMLElement = document.getElementById(datePicker.id + '-clock-minutes-up');
			let clockMinutesDownElement:HTMLElement = document.getElementById(datePicker.id + '-clock-minutes-down');

			clockMinutesInputElement.value ? clockMinutesInputElement.classList.add("is-not-empty") : clockMinutesInputElement.classList.remove("is-not-empty");

			// Selector for minutes
			clockMinutesInputElement.addEventListener('blur', function (e) {
				let value:number;
				if (Number(this.value) < 0){
					value = 0;
				}else if (Number(this.value) > 59){
					value = 59;
				}else{
					value = Number(this.value);
				}
				datePicker.selectedTime.minutes = value;
				clockTimeSelectorElement.innerHTML = datePicker.createTimeSelectorElement();
				previewElement.innerHTML = datePicker.createPreviewElement();
				datePicker.addTimeSelectorListener();
			});
			clockMinutesUpElement.addEventListener('click', function (e) {
				if (datePicker.selectedTime.minutes < 59){
					datePicker.selectedTime.minutes++;
				}else{
					datePicker.selectedTime.minutes = 0;
					if (datePicker.selectedTime.hours < 23){
						datePicker.selectedTime.hours++;
					}else{
						datePicker.selectedTime.hours = 0;
					}
				}
				clockTimeSelectorElement.innerHTML = datePicker.createTimeSelectorElement();
				previewElement.innerHTML = datePicker.createPreviewElement();
				datePicker.addTimeSelectorListener();
			});
			clockMinutesDownElement.addEventListener('click', function (e) {
				if (datePicker.selectedTime.minutes > 0){
					datePicker.selectedTime.minutes--;
				}else{
					datePicker.selectedTime.minutes = 59;
					if (datePicker.selectedTime.hours > 0){
						datePicker.selectedTime.hours--;
					}else{
						datePicker.selectedTime.hours = 23;
					}
				}
				clockTimeSelectorElement.innerHTML = datePicker.createTimeSelectorElement();
				previewElement.innerHTML = datePicker.createPreviewElement();
				datePicker.addTimeSelectorListener();
			});
		}


		if (datePicker.clockOptions.showSeconds){
			let clockSecondsInputElement:HTMLInputElement = <HTMLInputElement> document.getElementById(datePicker.id + '-clock-seconds-input');
			let clockSecondsUpElement:HTMLElement = document.getElementById(datePicker.id + '-clock-seconds-up');
			let clockSecondsDownElement:HTMLElement = document.getElementById(datePicker.id + '-clock-seconds-down');

			clockSecondsInputElement.value ? clockSecondsInputElement.classList.add("is-not-empty") : clockSecondsInputElement.classList.remove("is-not-empty");

			// Selector for seconds
			clockSecondsInputElement.addEventListener('blur', function (e) {
				let value:number;
				if (Number(this.value) < 0){
					value = 0;
				}else if (Number(this.value) > 59){
					value = 59;
				}else{
					value = Number(this.value);
				}
				datePicker.selectedTime.seconds = value;
				clockTimeSelectorElement.innerHTML = datePicker.createTimeSelectorElement();
				previewElement.innerHTML = datePicker.createPreviewElement();
				datePicker.addTimeSelectorListener();
			});
			clockSecondsUpElement.addEventListener('click', function (e) {
				if (datePicker.selectedTime.seconds < 59){
					datePicker.selectedTime.seconds++;
				}else{
					datePicker.selectedTime.seconds = 0;
					if (datePicker.selectedTime.minutes < 59){
						datePicker.selectedTime.minutes++;
					}else{
						datePicker.selectedTime.minutes = 0;
						if (datePicker.selectedTime.hours < 23){
							datePicker.selectedTime.hours++;
						}else{
							datePicker.selectedTime.hours = 0;
						}
					}
				}
				clockTimeSelectorElement.innerHTML = datePicker.createTimeSelectorElement();
				previewElement.innerHTML = datePicker.createPreviewElement();
				datePicker.addTimeSelectorListener();
			});
			clockSecondsDownElement.addEventListener('click', function (e) {
				if (datePicker.selectedTime.seconds > 0){
					datePicker.selectedTime.seconds--;
				}else{
					datePicker.selectedTime.seconds = 59;
					if (datePicker.selectedTime.minutes > 0){
						datePicker.selectedTime.minutes--;
					}else{
						datePicker.selectedTime.minutes = 59;
						if (datePicker.selectedTime.hours > 0){
							datePicker.selectedTime.hours--;
						}else{
							datePicker.selectedTime.hours = 23;
						}
					}
				}
				clockTimeSelectorElement.innerHTML = datePicker.createTimeSelectorElement();
				previewElement.innerHTML = datePicker.createPreviewElement();
				datePicker.addTimeSelectorListener();
			});
		}
	}

	private createDateSelectorElement(){
		let monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		let monthSelectorElement: string = `${Button.getModule({id: this.id + '-callendar-month-prev', type: "minimal", iconClass: "fa fa-chevron-left"})}<span>${monthNames[this.visibleDate.month - 1]}</span>${Button.getModule({id: this.id + '-callendar-month-next', type: "minimal", iconClass: "fa fa-chevron-right"})}`;
		let yearSelectorElement: string = `${Button.getModule({id: this.id + '-callendar-year-prev', type: "minimal", iconClass: "fa fa-chevron-left"})}<span>${this.visibleDate.year}</span>${Button.getModule({id: this.id + '-callendar-year-next', type: "minimal", iconClass: "fa fa-chevron-right"})}`;
		let dateSelectorElement: string = `<div class='${Style.monthSelector}'>${monthSelectorElement}</div><div class='${Style.yearSelector}'>${yearSelectorElement}</div>`;
		return dateSelectorElement;
	}

	private createPreviewElement(){
		let dateElement = '';
		if (this.type == 'date' || this.type == 'datetime'){
			let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
			let dayNumbers = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th', '21st', '22nd', '23rd', '24th', '25th', '26th', '27th', '28th', '29th', '30th', '31st'];
			let dayNames: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
			let dateString: string = `${monthNames[this.selectedDate.month - 1]} - ${this.selectedDate.year}`;
			let dayNumberString: string = dayNumbers[this.selectedDate.day - 1];
			let dayNameString: string = dayNames[this.selectedDate.weekDay];

			dateElement = `<div class='${Style.previewDate}'>${dateString}</div><div class='${Style.previewDayNumber}'>${dayNumberString}</div><div class='${Style.previewDayName}'>${dayNameString}</div>`;
		}

		let clockElement = '';
		if (this.type == 'time' || this.type == 'datetime'){
			let clockHoursValue: string = this.selectedTime.hours > 9 ? this.selectedTime.hours.toString() : '0' + this.selectedTime.hours.toString();
			let clockHoursElement: string = this.clockOptions.showHours ? `<span>${clockHoursValue}</span>` : '';

			let clockMinutesValue: string = this.selectedTime.minutes > 9 ? this.selectedTime.minutes.toString() : '0' + this.selectedTime.minutes.toString();
			let clockMinutesElement: string = this.clockOptions.showMinutes ? `<span>${clockMinutesValue}</span>` : '';

			let clockSecondsValue: string = this.selectedTime.seconds > 9 ? this.selectedTime.seconds.toString() : '0' + this.selectedTime.seconds.toString();
			let clockSecondsElement: string = this.clockOptions.showSeconds ? `<span>${clockSecondsValue}</span>` : '';

			let clockClass:string = this.type == 'time' ? `${Style.bigClock}` : '';

			clockElement = `<div class='${Style.previewClock} ${clockClass}'>${clockHoursElement}${clockMinutesElement}${clockSecondsElement}</div>`;
		}


		let datePreviewElement: string = `${dateElement}${clockElement}`;

		return datePreviewElement;
	}

	private createTimeSelectorElement(){
		let hoursSelectorElement: string = '';
		let minutesSelectorElement: string =  '';
		let secondsSelectorElement: string =  '';

		if (this.clockOptions.showHours){
			let toggleButtonUp = `<div class='${Style.toggleButton}'>${Button.getModule({id: this.id + '-clock-hours-up', type: "minimal", iconClass: "fa fa-chevron-up"})}</div>`;
			let toggleButtonDown = `<div class='${Style.toggleButton}'>${Button.getModule({id: this.id + '-clock-hours-down', type: "minimal", iconClass: "fa fa-chevron-down"})}</div>`;
			let inputFieldElement = InputField.getModule({
				id: this.id + '-clock-hours-input',
				name: this.id + '-clock-hours-input',
				value: '' + this.selectedTime.hours,
				type: 'number',
				attributes: ['min="0"', 'max="23"'],
				label: 'Hours'
			});

			hoursSelectorElement = `<div class='${Style.hoursSelector}'>${toggleButtonUp}${inputFieldElement}${toggleButtonDown}</div>`;
		}

		if (this.clockOptions.showMinutes){
			let toggleButtonUp = `<div class='${Style.toggleButton}'>${Button.getModule({id: this.id + '-clock-minutes-up', type: "minimal", iconClass: "fa fa-chevron-up"})}</div>`;
			let toggleButtonDown = `<div class='${Style.toggleButton}'>${Button.getModule({id: this.id + '-clock-minutes-down', type: "minimal", iconClass: "fa fa-chevron-down"})}</div>`;
			let inputFieldElement = InputField.getModule({
				id: this.id + '-clock-minutes-input',
				name: this.id + '-clock-minutes-input',
				value: '' + this.selectedTime.minutes,
				type: 'number',
				attributes: ['min="0"', 'max="59"'],
				label: 'Minutes'
			});
			minutesSelectorElement = `<div class='${Style.minutesSelector}'>${toggleButtonUp}${inputFieldElement}${toggleButtonDown}</div>`;
		}

		if (this.clockOptions.showSeconds){
			let toggleButtonUp = `<div class='${Style.toggleButton}'>${Button.getModule({id: this.id + '-clock-seconds-up', type: "minimal", iconClass: "fa fa-chevron-up"})}</div>`;
			let toggleButtonDown = `<div class='${Style.toggleButton}'>${Button.getModule({id: this.id + '-clock-seconds-down', type: "minimal", iconClass: "fa fa-chevron-down"})}</div>`;
			let inputFieldElement = InputField.getModule({
				id: this.id + '-clock-seconds-input',
				name: this.id + '-clock-seconds-input',
				value: '' + this.selectedTime.seconds,
				type: 'number',
				attributes: ['min="0"', 'max="59"'],
				label: 'Seconds'
			});
			secondsSelectorElement = `<div class='${Style.secondsSelector}'>${toggleButtonUp}${inputFieldElement}${toggleButtonDown}</div>`;
		}

		let timeSelectorElement: string = `<div>${hoursSelectorElement}${minutesSelectorElement}${secondsSelectorElement}<div class='${Style.clearfix}'></div></div>`;
		return timeSelectorElement;
	}

	private createDayNameElements(){
		let dayNames: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
		let dayNameElements: string = "";
		for (var dayNameIndex = 0; dayNameIndex < dayNames.length; dayNameIndex++){
			dayNameElements += `<span class='${Style.dayName}'>${dayNames[dayNameIndex]}</span>`;
		}
		return dayNameElements;
	}

	private createMonthElement(){
		let daysInMonth: number = new Date(this.visibleDate.year, this.visibleDate.month, 0).getDate();
		let firstDay: number = new Date(this.visibleDate.year, this.visibleDate.month - 1, 1).getDay();

		let dayElements: string = "";
		let days: any[] = [];

		for (let dayIndex = 1; dayIndex <= daysInMonth; dayIndex++){
			days.push({
				number: dayIndex,
				selected: false,
				active: false
			});
		}

		if (this.selectedDate.year == this.visibleDate.year && this.selectedDate.month == this.visibleDate.month){
			days[this.selectedDate.day - 1].selected = true;
		}

		if (this.activeDate.year == this.visibleDate.year && this.activeDate.month == this.visibleDate.month){
			days[this.activeDate.day - 1].active = true;
		}

		for (let dummyDayIndex = 0; dummyDayIndex < firstDay; dummyDayIndex++){
			dayElements += `<span class='${Style.day}'></span>`;
		}

		for (let day of days){
			let weekDay = (day.number - 1 + firstDay) % 7;
			let activeClass: string = day.active ? "active" : "";
			let selectedClass: string = day.selected ? "selected" : "";
			dayElements += `<span class='${Style.day} ${activeClass} ${selectedClass}' data-day='${day.number}' data-week-day='${weekDay}' data-month='${this.visibleDate.month}' data-year='${this.visibleDate.year}'>${day.number}</span>`;
		}

		return dayElements;
	}

	private getDateValue() {
		let dateStringValue = new Date(this.value);

		let dateValue: IDatePickerDate = {
			day: dateStringValue.getDate(),
			month: dateStringValue.getMonth() + 1,
			year: dateStringValue.getFullYear(),
			weekDay: dateStringValue.getDay()
		};
		return dateValue;
	}

	private setDateValue() {
		let day = this.selectedDate.day > 9 ? this.selectedDate.day : '0' + this.selectedDate.day;
		let month = this.selectedDate.month > 9 ? this.selectedDate.month : '0' + this.selectedDate.month;
		let year = this.selectedDate.year;
		return `${year}-${month}-${day}`;
	}

	private getTimeValue() {
		let dateStringValue = new Date(this.value);

		let dateValue: IDatePickerTime = {
			hours: dateStringValue.getHours(),
			minutes: dateStringValue.getMinutes(),
			seconds: dateStringValue.getSeconds()
		};
		return dateValue;
	}

	private setTimeValue() {
		let hours = this.selectedTime.hours > 9 ? this.selectedTime.hours : '0' + this.selectedTime.hours;
		let minutes = this.selectedTime.minutes > 9 ? this.selectedTime.minutes : '0' + this.selectedTime.minutes;
		let seconds = this.selectedTime.seconds > 9 ? this.selectedTime.seconds : '0' + this.selectedTime.seconds;
		return `${hours}:${minutes}:${seconds}`;
	}

	private setDateTimeValue() {
		return `${this.setDateValue()} ${this.setTimeValue()}`;
	}

	public createModuleElement() {
		let inputField = {
			id: this.id + '-input',
			name: this.name,
			type: 'text',
			value: this.value,
			placeholder: this.placeholder,
			label: this.label
		}
		let dropdownList = {
			id: this.id + '-dropdownList'
		}

		let buttonElement = Button.getModule({
			id: 'datepicker-trigger1',
			iconClass: 'fa fa-calendar',
			type: 'minimal'
		})

		let inputFieldElement = InputField.getModule(inputField);

		let modalId:string = this.id + '-datepicker-modal';

		let previewElement = this.createPreviewElement();
		previewElement = `<div id='${this.id}-preview' class='${Style.preview}'>${previewElement}</div>`;

		let callendarElement:string = '';
		if (this.type == 'date' || this.type == 'datetime'){
			let dateSelectorElement:string = this.createDateSelectorElement();
			dateSelectorElement = `<div id='${this.id}-callendar-date-selector'>${dateSelectorElement}</div>`;

			let dayNameElements = this.createDayNameElements();

			let monthElement = this.createMonthElement();
			monthElement = `<div id='${this.id}-callendar-month'>${monthElement}</div>`;

			callendarElement = `<div id='${modalId}-callendar' class='${Style.callendar}'>${dateSelectorElement}${dayNameElements}${monthElement}</div>`;
		}


		let timeSelectorElement:string = '';
		if (this.type == 'time' || this.type == 'datetime'){
			timeSelectorElement = this.createTimeSelectorElement();
			timeSelectorElement = `<div id='${this.id}-clock-time-selector' class='${Style.clock}'>${timeSelectorElement}</div>`;
		}


		let toggleTabElements:string = this.type == 'datetime' ? `<span id='${modalId}-toggleTabCallendar' class='${Style.toggleTab} ${Style.toggleTabCallendar}'></span><span id='${modalId}-toggleTabClock' class='${Style.toggleTab} ${Style.toggleTabClock}'></span><div class='clearfix'></div>` : '';

		let modalContentElement = `${toggleTabElements}${previewElement}${callendarElement}${timeSelectorElement}`;

		let modalObject = {
			id: modalId,
			triggerElement: buttonElement,
			modalElement: {
				content: modalContentElement,
				maxWidth: '326px',
				closeButtontext: 'cancel',
				footerButtons: {
					buttonRow: {
						buttons: [
						{id: this.id + '-datepicker-submit', type: 'minimal', theme: 'primary', content: 'ok'}
						]
					}
				}
			}
		};

		let modalElement = Modal.getModule(modalObject);

		this.addListener(inputField, modalObject.id);

		return `<div class='${Style.datePicker}'><div class='${Style.inputField}'>${inputFieldElement}</div><div class='${Style.modal}'>${modalElement}</div></div>`;
	}
}

export interface IClockOptions{
	showHours?: boolean,
	showMinutes?: boolean,
	showSeconds?: boolean
}

export interface IDatePickerTime{
	hours?: number,
	minutes?: number,
	seconds?: number,
}

export interface IDatePickerDate{
	year: number,
	month: number,
	day: number,
	weekDay?: number
}

export interface IDatePicker{
	id: string;
	name: string;
	type?: string;
	value?: any;
	placeholder?: string;
	label?: string;
	clockOptions?: IClockOptions;
}

export function getModule(datePicker: IDatePicker){
	return new DatePicker(datePicker).createModuleElement();
}