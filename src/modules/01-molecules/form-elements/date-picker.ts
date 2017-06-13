import * as AtomInputField from '../../00-atoms/form-elements/input-field'
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


	constructor(datePicker: IDatePicker) {
		this.id = datePicker.id;
		this.name = datePicker.name;
		if (datePicker.type !== undefined) this.type = datePicker.type;
		if (datePicker.value !== undefined) this.value = datePicker.value;
		if (datePicker.placeholder !== undefined) this.placeholder = datePicker.placeholder;
		if (datePicker.label !== undefined) this.label = datePicker.label;
		let activeDate = new Date();
		let selectedDate = new Date();
		let visibleDate = new Date();
		let selectedTime = new Date();
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
			hours: selectedTime.getHours(),
			minutes: visibleDate.getMinutes(),
			seconds: visibleDate.getSeconds()
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


				/* Callendar listener */
				let callendarElement:HTMLElement = document.getElementById(modalId + '-callendar');
				callendarElement.addEventListener('click', function (e) {
					let target:any = e.target;
					if (target.classList.contains(Style.day)){
						datePicker.selectedDate = {
							day: target.dataset.day,
							weekDay: target.dataset.weekDay,
							month: target.dataset.month,
							year: target.dataset.year
						};

						let callendarPreviewElement:HTMLElement = document.getElementById(datePicker.id + '-callendar-preview');
						let callendarMonthElement:HTMLElement = document.getElementById(datePicker.id + '-callendar-month');
						callendarPreviewElement.outerHTML = datePicker.createPreviewElement(datePicker.selectedDate);
						callendarMonthElement.innerHTML = datePicker.createMonthElement(datePicker.selectedDate, datePicker.activeDate, datePicker.visibleDate);


					}
				});

				datePicker.addDateSelectorListener();
				datePicker.addTimeSelectorListener();

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
		callendarMonthElement.innerHTML = datePicker.createMonthElement(datePicker.selectedDate, datePicker.activeDate, datePicker.visibleDate);
		callendarDateSelectorElement.innerHTML = datePicker.createDateSelectorElement(datePicker.visibleDate);
		datePicker.addDateSelectorListener();
	});
	callendarMonthNextElement.addEventListener('click', function (e) {
		if (datePicker.visibleDate.month < 12){
			datePicker.visibleDate.month++;
		}else{
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
}

private addTimeSelectorListener(){
	let datePicker = this;

	let clockHoursInputElement:HTMLInputElement = <HTMLInputElement> document.getElementById(datePicker.id + '-clock-hours-input');
	let clockHoursUpElement:HTMLElement = document.getElementById(datePicker.id + '-clock-hours-up');
	let clockHoursDownElement:HTMLElement = document.getElementById(datePicker.id + '-clock-hours-down');
	
	let clockMinutesInputElement:HTMLInputElement = <HTMLInputElement> document.getElementById(datePicker.id + '-clock-minutes-input');
	let clockMinutesUpElement:HTMLElement = document.getElementById(datePicker.id + '-clock-minutes-up');
	let clockMinutesDownElement:HTMLElement = document.getElementById(datePicker.id + '-clock-minutes-down');
	
	let clockSecondsInputElement:HTMLInputElement = <HTMLInputElement> document.getElementById(datePicker.id + '-clock-seconds-input');
	let clockSecondsUpElement:HTMLElement = document.getElementById(datePicker.id + '-clock-seconds-up');
	let clockSecondsDownElement:HTMLElement = document.getElementById(datePicker.id + '-clock-seconds-down');

	let clockTimeSelectorElement:HTMLElement = document.getElementById(datePicker.id + '-clock-time-selector');

	clockHoursInputElement.value ? clockHoursInputElement.classList.add("is-not-empty") : clockHoursInputElement.classList.remove("is-not-empty");
	clockMinutesInputElement.value ? clockMinutesInputElement.classList.add("is-not-empty") : clockMinutesInputElement.classList.remove("is-not-empty");
	clockSecondsInputElement.value ? clockSecondsInputElement.classList.add("is-not-empty") : clockSecondsInputElement.classList.remove("is-not-empty");


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
		clockTimeSelectorElement.innerHTML = datePicker.createTimeSelectorElement(datePicker.selectedTime);
		datePicker.addTimeSelectorListener();
	});
	clockHoursUpElement.addEventListener('click', function (e) {
		if (datePicker.selectedTime.hours < 23){
			datePicker.selectedTime.hours++;
		}else{
			datePicker.selectedTime.hours = 0;
		}
		clockTimeSelectorElement.innerHTML = datePicker.createTimeSelectorElement(datePicker.selectedTime);
		datePicker.addTimeSelectorListener();
	});
	clockHoursDownElement.addEventListener('click', function (e) {
		if (datePicker.selectedTime.hours > 0){
			datePicker.selectedTime.hours--;
		}else{
			datePicker.selectedTime.hours = 23;
		}
		clockTimeSelectorElement.innerHTML = datePicker.createTimeSelectorElement(datePicker.selectedTime);
		datePicker.addTimeSelectorListener();
	});


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
		clockTimeSelectorElement.innerHTML = datePicker.createTimeSelectorElement(datePicker.selectedTime);
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
		clockTimeSelectorElement.innerHTML = datePicker.createTimeSelectorElement(datePicker.selectedTime);
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
		clockTimeSelectorElement.innerHTML = datePicker.createTimeSelectorElement(datePicker.selectedTime);
		datePicker.addTimeSelectorListener();
	});


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
		clockTimeSelectorElement.innerHTML = datePicker.createTimeSelectorElement(datePicker.selectedTime);
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
		clockTimeSelectorElement.innerHTML = datePicker.createTimeSelectorElement(datePicker.selectedTime);
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
		clockTimeSelectorElement.innerHTML = datePicker.createTimeSelectorElement(datePicker.selectedTime);
		datePicker.addTimeSelectorListener();
	});
}

private createDateSelectorElement(visibleDate){
	let monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	let monthSelectorElement: string = `
	${Button.getModule({id: this.id + '-callendar-month-prev', type: "minimal", iconClass: "fa fa-chevron-left"})}
	<span>${monthNames[visibleDate.month - 1]}</span>
	${Button.getModule({id: this.id + '-callendar-month-next', type: "minimal", iconClass: "fa fa-chevron-right"})}
	`;
	let yearSelectorElement: string = `
	${Button.getModule({id: this.id + '-callendar-year-prev', type: "minimal", iconClass: "fa fa-chevron-left"})}
	<span>${visibleDate.year}</span>
	${Button.getModule({id: this.id + '-callendar-year-next', type: "minimal", iconClass: "fa fa-chevron-right"})}
	`;
	let dateSelectorElement: string = `<div class='${Style.monthSelector}'>${monthSelectorElement}</div><div class='${Style.yearSelector}'>${yearSelectorElement}</div>`;
	return dateSelectorElement;
}

private createPreviewElement(selectedDate){
	let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	let dayNumbers = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th', '21st', '22nd', '23rd', '24th', '25th', '26th', '27th', '28th', '29th', '30th', '31st'];
	let dayNames: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
	let dateString: string = `${monthNames[selectedDate.month - 1]} - ${selectedDate.year}`;
	let dayNumberString: string = dayNumbers[selectedDate.day - 1];
	let dayNameString: string = dayNames[selectedDate.weekDay];
	let datePreviewElement: string = `
	<div id='${this.id}-callendar-preview' class='${Style.preview}'>
	<div class='${Style.previewDate}'>${dateString}</div>
	<div class='${Style.previewDayNumber}'>${dayNumberString}</div>
	<div class='${Style.previewDayName}'>${dayNameString}</div>
	<div>12:04</div>
	</div>`;

	return datePreviewElement;
}

private createTimeSelectorElement(selectedTime){
	let hourSelectorElement: string = `
	<div style="width: 33%">
	${Button.getModule({id: this.id + '-clock-hours-up', type: "minimal", iconClass: "fa fa-chevron-up"})}
	${AtomInputField.getModule({
		id: this.id + '-clock-hours-input',
		name: this.id + '-clock-hours-input',
		value: '' + this.selectedTime.hours,
		type: 'number',
		attributes: ['min="0"', 'max="23"']
	})}
	<span>${this.selectedTime.hours}</span>
	${Button.getModule({id: this.id + '-clock-hours-down', type: "minimal", iconClass: "fa fa-chevron-down"})}
	</div>
	`;

	let minuteSelectorElement: string = `
	<div style="width: 33%">
	${Button.getModule({id: this.id + '-clock-minutes-up', type: "minimal", iconClass: "fa fa-chevron-up"})}
	${AtomInputField.getModule({
		id: this.id + '-clock-minutes-input',
		name: this.id + '-clock-minutes-input',
		value: '' + this.selectedTime.minutes,
		type: 'number',
		attributes: ['min="0"', 'max="59"']
	})}
	<span>${this.selectedTime.minutes}</span>
	${Button.getModule({id: this.id + '-clock-minutes-down', type: "minimal", iconClass: "fa fa-chevron-down"})}
	</div>
	`;

	let secondsSelectorElement: string = `
	<div style="width: 33%">
	${Button.getModule({id: this.id + '-clock-seconds-up', type: "minimal", iconClass: "fa fa-chevron-up"})}
	${AtomInputField.getModule({
		id: this.id + '-clock-seconds-input',
		name: this.id + '-clock-seconds-input',
		value: '' + this.selectedTime.seconds,
		type: 'number',
		attributes: ['min="0"', 'max="59"']
	})}
	<span>${this.selectedTime.seconds}</span>
	${Button.getModule({id: this.id + '-clock-seconds-down', type: "minimal", iconClass: "fa fa-chevron-down"})}
	</div>
	`;

	let timeSelectorElement: string = `<div>${hourSelectorElement}${minuteSelectorElement}${secondsSelectorElement}</div>`;
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

private createMonthElement(selectedDate, activeDate, visibleDate){
	let daysInMonth: number = new Date(visibleDate.year, visibleDate.month, 0).getDate();
	let firstDay: number = new Date(visibleDate.year, visibleDate.month - 1, 1).getDay();

	let dayElements: string = "";
	let days: any[] = [];

	for (let dayIndex = 1; dayIndex <= daysInMonth; dayIndex++){
		days.push({
			number: dayIndex,
			selected: false,
			active: false
		});
	}

	if (selectedDate.year == visibleDate.year && selectedDate.month == visibleDate.month){
		days[selectedDate.day - 1].selected = true;
	}

	if (activeDate.year == visibleDate.year && activeDate.month == visibleDate.month){
		days[activeDate.day - 1].active = true;
	}

	for (let dummyDayIndex = 0; dummyDayIndex < firstDay; dummyDayIndex++){
		dayElements += `<span class='${Style.day}'></span>`;
	}

	for (let day of days){
		let weekDay = (day.number - 1 + firstDay) % 7;
		let activeClass: string = day.active ? "active" : "";
		let selectedClass: string = day.selected ? "selected" : "";
		dayElements += `<span class='${Style.day} ${activeClass} ${selectedClass}' data-day='${day.number}' data-week-day='${weekDay}' data-month='${visibleDate.month}' data-year='${visibleDate.year}'>${day.number}</span>`;
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
	return `${hours}-${minutes}-${seconds}`;
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



	let previewElement = this.createPreviewElement(this.visibleDate);
	let dateSelectorElement = this.createDateSelectorElement(this.visibleDate);
	let timeSelectorElement = this.createTimeSelectorElement(this.visibleDate);
	let dayNameElements = this.createDayNameElements();
	let callendarElement = this.createMonthElement(this.selectedDate, this.activeDate, this.visibleDate);

	let modalId = this.id + '-datepicker-modal';

	let toggleTabElements = this.type == 'datetime' ? `<span id='${modalId}-toggleTabCallendar' class='${Style.toggleTab} ${Style.toggleTabCallendar}'></span><span id='${modalId}-toggleTabClock' class='${Style.toggleTab} ${Style.toggleTabClock}'></span><div class='clearfix'></div>` : '';


	let modalContentElement = `${toggleTabElements}${previewElement}
	<div id='${modalId}-callendar' class='${Style.callendar}'>
	<div id='${this.id}-callendar-date-selector'>${dateSelectorElement}</div>
	${dayNameElements}
	<div id='${this.id}-callendar-month'>${callendarElement}</div>
	</div>
	<div id='${this.id}-clock-time-selector' class='${Style.clock}'>${timeSelectorElement}</div>`;

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
}

export function getModule(datePicker: IDatePicker){
	return new DatePicker(datePicker).createModuleElement();
}