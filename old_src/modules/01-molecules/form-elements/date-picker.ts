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
	visibleTime: IDatePickerTime;
	attributes: string[];
	clockOptions: IClockOptions = {
		showHours: true,
		showMinutes: true,
		showSeconds: true,
		interactive: false,
		required: true
	};
	inputField: InputField.IInputField;
	modal: Modal.IModal;
	dummyInputField: {
		id: string
	};
	dummyInputFieldValue: {
		id: string
	}


	constructor(datePicker: IDatePicker) {
		this.id = datePicker.id;
		this.name = datePicker.name;
		if (datePicker.type !== undefined) this.type = datePicker.type;
		if (datePicker.value !== undefined) this.value = datePicker.value;
		if (datePicker.placeholder !== undefined) this.placeholder = datePicker.placeholder;
		if (datePicker.label !== undefined) this.label = datePicker.label;
		if (datePicker.attributes !== undefined) this.attributes = datePicker.attributes;

		if (datePicker.clockOptions !== undefined) {
			this.clockOptions.showHours = datePicker.clockOptions.showHours !== undefined ? datePicker.clockOptions.showHours : true;
			this.clockOptions.showMinutes = datePicker.clockOptions.showMinutes!== undefined ? datePicker.clockOptions.showMinutes : true;
			this.clockOptions.showSeconds = datePicker.clockOptions.showSeconds !== undefined ? datePicker.clockOptions.showSeconds : true;
			this.clockOptions.interactive = datePicker.clockOptions.interactive !== undefined ? datePicker.clockOptions.interactive : false;
			this.clockOptions.required = datePicker.clockOptions.required !== undefined ? datePicker.clockOptions.required : true;
		}else{
			this.clockOptions = {
				showHours: true,
				showMinutes: true,
				showSeconds: true,
				interactive: false,
				required: true
			}
		}

		this.dummyInputField = {id: ''};
		this.dummyInputFieldValue = {id: ''};
		this.modal = {
			id: '',
			triggerElement: '',
			modalElement: {
				content: ''
			}
		};

		let activeDate = new Date();
		let selectedDate = new Date();
		let visibleDate = new Date();
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


	private elementIsNotNullOrUndefinedById(id: string){
		return document.getElementById(id) !== undefined && document.getElementById(id) !== null;
	}

	private initFunction(id?: string){

		let datePickerId = id != undefined ? id : this.id;
		let modalId = id != undefined ? id + '-datepicker-modal' : this.modal.id;
		let inputFieldId = id != undefined ? this.id + '-input' : this.inputField.id;
		let dummyInputFieldId = id != undefined ? this.id + '-dummyInput' : this.dummyInputField.id;
		let dummyInputFieldValueId = id != undefined ? this.id + '-dummyInputValue' : this.dummyInputFieldValue.id;



		let datePickerElementIsDefined: boolean = this.elementIsNotNullOrUndefinedById(datePickerId);
		let inputFieldElementIsDefined: boolean = this.elementIsNotNullOrUndefinedById(inputFieldId);
		let dummyInputFieldElementIsDefined: boolean = this.elementIsNotNullOrUndefinedById(dummyInputFieldId);
		let dummyInputFieldValueElementIsDefined: boolean = this.elementIsNotNullOrUndefinedById(dummyInputFieldValueId);

		let modalElementIsDefined: boolean = this.elementIsNotNullOrUndefinedById(modalId);

		if (inputFieldElementIsDefined && modalElementIsDefined && dummyInputFieldElementIsDefined && dummyInputFieldValueElementIsDefined){
			let inputFieldElement:HTMLInputElement = <HTMLInputElement> document.getElementById(inputFieldId);
			let dummyInputFieldElement:HTMLInputElement = <HTMLInputElement> document.getElementById(dummyInputFieldId);
			let dummyInputFieldValueElement:HTMLInputElement = <HTMLInputElement> document.getElementById(dummyInputFieldValueId);
			let modalElement:HTMLElement = document.getElementById(modalId);

			let activeTabClass = this.type == 'time' ? 'active-tab-clock' : 'active-tab-callendar';
			modalElement.classList.add(activeTabClass);


			inputFieldElement.value ? inputFieldElement.classList.add("is-not-empty") : inputFieldElement.classList.remove("is-not-empty");
			dummyInputFieldValueElement.innerHTML = inputFieldElement.value;

			inputFieldElement.addEventListener("keydown", function(e) {
				e.preventDefault();
				return false;
			});

			dummyInputFieldElement.onclick = function(){
				modalElement.classList.add("active");
			};


			if (modalElementIsDefined){

				if (this.type == 'datetime' && !this.clockOptions.required){
					this.initSelectedTime();
				}

				this.updateSubmitButtonState();

				modalElement.addEventListener('click', function (e) {
						let target: any = e.target; // Clicked element
						while (target && target.parentNode !== modalElement) {
							target = target.parentNode; // If the clicked element isn't a direct child
							if(!target) { return; } // If element doesn't exist
						}
						if (target.className === 'SPAN'){
							var optionValue = target.getAttribute("data-value");
							inputFieldElement.value = optionValue;
							dummyInputFieldValueElement.innerHTML = inputFieldElement.value;
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

				if (this.type == 'date' || this.type == 'datetime'){
					this.addDateSelectorListener();
				}
				if (this.type == 'time' || this.type == 'datetime'){
					this.addTimeSelectorListener();
				}

				let submitValueButtonElement = document.getElementById(this.id + '-datepicker-submit');
				submitValueButtonElement.addEventListener('click', function (e) {
					let dateValue = '';
					if (this.type == 'date'){
						dateValue = this.setDateValue();
					}
					else if (this.type == 'time'){
						dateValue = this.setTimeValue();
					}
					else if (this.type == 'datetime'){
						dateValue = this.setDateTimeValue();
					}
					inputFieldElement.value = dateValue;
					dummyInputFieldValueElement.innerHTML = inputFieldElement.value;
					modalElement.classList.remove("active");
					if (dateValue !== null && dateValue !== ''){
						inputFieldElement.classList.add("is-not-empty")
					}else{
						inputFieldElement.classList.remove("is-not-empty");
					}
				}.bind(this));
			}
		}

		private addListener(){
			let self = this;
			document.addEventListener('DOMContentLoaded', function(){
				self.initFunction();
			}, false);
		}

		private addDisabledOrReadOnlyListener(inputField){
			let datePicker = this;
			document.addEventListener('DOMContentLoaded', function(e) {
				let inputFieldElementIsDefined: boolean = datePicker.elementIsNotNullOrUndefinedById(inputField.id);
				let dummyInputFieldValueElementIsDefined: boolean = datePicker.elementIsNotNullOrUndefinedById(datePicker.id + '-dummyInputValue');
				if (inputFieldElementIsDefined && dummyInputFieldValueElementIsDefined){
					let inputFieldElement:HTMLInputElement = <HTMLInputElement> document.getElementById(inputField.id);
					let dummyInputFieldValueElement:HTMLInputElement = <HTMLInputElement> document.getElementById(datePicker.id + '-dummyInputValue');

					inputFieldElement.value ? inputFieldElement.classList.add("is-not-empty") : inputFieldElement.classList.remove("is-not-empty");
					dummyInputFieldValueElement.innerHTML = inputFieldElement.value;
				}
			});
		}


		private addDateSelectorListener(){
			/* Callendar listener */
			let callendarElement:HTMLElement = document.getElementById(this.id + '-datepicker-modal-callendar');
			callendarElement.addEventListener('click', function (e) {
				let target:any = e.target;
				if (target.classList.contains(Style.day)){
					this.selectedDate = {
						day: target.dataset.day,
						weekDay: target.dataset.weekDay,
						month: target.dataset.month,
						year: target.dataset.year
					};

					let previewElement:HTMLElement = document.getElementById(this.id + '-preview');
					let callendarMonthElement:HTMLElement = document.getElementById(this.id + '-callendar-month');
					previewElement.innerHTML = this.createPreviewElement();
					callendarMonthElement.innerHTML = this.createMonthElement();
				}
			}.bind(this));


			let callendarMonthPrevElement:HTMLElement = document.getElementById(this.id + '-callendar-month-prev');
			let callendarMonthNextElement:HTMLElement = document.getElementById(this.id + '-callendar-month-next');
			let callendarYearPrevElement:HTMLElement = document.getElementById(this.id + '-callendar-year-prev');
			let callendarYearNextElement:HTMLElement = document.getElementById(this.id + '-callendar-year-next');

			let callendarMonthElement:HTMLElement = document.getElementById(this.id + '-callendar-month');
			let callendarDateSelectorElement:HTMLElement = document.getElementById(this.id + '-callendar-date-selector');

			callendarMonthPrevElement.addEventListener('click', function (e) {
				if (this.visibleDate.month > 1){
					this.visibleDate.month--;
				}else{
					this.visibleDate.month = 12;
					this.visibleDate.year--;
				}
				callendarMonthElement.innerHTML = this.createMonthElement();
				callendarDateSelectorElement.innerHTML = this.createDateSelectorElement();
				this.addDateSelectorListener();
			}.bind(this));
			callendarMonthNextElement.addEventListener('click', function (e) {
				if (this.visibleDate.month < 12){
					this.visibleDate.month++;
				}else{
					this.visibleDate.month = 1;
					this.visibleDate.year++;
				}
				callendarMonthElement.innerHTML = this.createMonthElement();
				this.innerHTML = this.createDateSelectorElement();
				this.addDateSelectorListener();
			}.bind(this));
			callendarYearPrevElement.addEventListener('click', function (e) {
				this.visibleDate.year--;
				callendarMonthElement.innerHTML = this.createMonthElement();
				callendarDateSelectorElement.innerHTML = this.createDateSelectorElement();
				this.addDateSelectorListener();
			}.bind(this));
			callendarYearNextElement.addEventListener('click', function (e) {
				this.visibleDate.year++;
				callendarMonthElement.innerHTML = this.createMonthElement();
				callendarDateSelectorElement.innerHTML = this.createDateSelectorElement();
				this.addDateSelectorListener();
			}.bind(this));
		}

		private initSelectedTime(){
			if (this.selectedTime == null){
				this.selectedTime = {
					hours: 0, 
					minutes: 0, 
					seconds: 0 
				}
			}
		}

		private addTimeSelectorListener(){
			let clockTimeSelectorElement:HTMLElement = document.getElementById(this.id + '-clock-time-selector');
			let previewElement:HTMLElement = document.getElementById(this.id + '-preview');

			if (this.clockOptions.showHours){
				let clockHoursInputElement:HTMLInputElement = <HTMLInputElement> document.getElementById(this.id + '-clock-hours-input');
				let clockHoursUpElement:HTMLElement = document.getElementById(this.id + '-clock-hours-up');
				let clockHoursDownElement:HTMLElement = document.getElementById(this.id + '-clock-hours-down');

				clockHoursInputElement.value ? clockHoursInputElement.classList.add("is-not-empty") : clockHoursInputElement.classList.remove("is-not-empty");

		// Selector for hours
		clockHoursInputElement.addEventListener('blur', function () {
			this.initSelectedTime();
			let value:number;
			if (Number(this.value) < 0){
				value = 0;
			}else if (Number(this.value) > 23){
				value = 23;
			}else{
				value = Number(this.value);
			}
			this.selectedTime.hours = value;
			clockTimeSelectorElement.innerHTML = this.createTimeSelectorElement();
			previewElement.innerHTML = this.createPreviewElement();
			this.addTimeSelectorListener();
		}.bind(this));
		clockHoursUpElement.addEventListener('click', function () {
			this.initSelectedTime();
			if (this.selectedTime.hours < 23){
				this.selectedTime.hours++;
			}else{
				this.selectedTime.hours = 0;
			}
			clockTimeSelectorElement.innerHTML = this.createTimeSelectorElement();
			previewElement.innerHTML = this.createPreviewElement();
			this.addTimeSelectorListener();
		}.bind(this));
		clockHoursDownElement.addEventListener('click', function () {
			this.initSelectedTime();
			if (this.selectedTime.hours > 0){
				this.selectedTime.hours--;
			}else{
				this.selectedTime.hours = 23;
			}
			clockTimeSelectorElement.innerHTML = this.createTimeSelectorElement();
			previewElement.innerHTML = this.createPreviewElement();
			this.addTimeSelectorListener();
		}.bind(this));
	}

	if (this.clockOptions.showMinutes){
		let clockMinutesInputElement:HTMLInputElement = <HTMLInputElement> document.getElementById(this.id + '-clock-minutes-input');
		let clockMinutesUpElement:HTMLElement = document.getElementById(this.id + '-clock-minutes-up');
		let clockMinutesDownElement:HTMLElement = document.getElementById(this.id + '-clock-minutes-down');

		clockMinutesInputElement.value ? clockMinutesInputElement.classList.add("is-not-empty") : clockMinutesInputElement.classList.remove("is-not-empty");

		// Selector for minutes
		clockMinutesInputElement.addEventListener('blur', function () {
			this.initSelectedTime();
			let value:number;
			if (Number(this.value) < 0){
				value = 0;
			}else if (Number(this.value) > 59){
				value = 59;
			}else{
				value = Number(this.value);
			}
			this.selectedTime.minutes = value;
			clockTimeSelectorElement.innerHTML = this.createTimeSelectorElement();
			previewElement.innerHTML = this.createPreviewElement();
			this.addTimeSelectorListener();
		}.bind(this));
		clockMinutesUpElement.addEventListener('click', function () {
			this.initSelectedTime();
			if (this.selectedTime.minutes < 59){
				this.selectedTime.minutes++;
			}else{
				this.selectedTime.minutes = 0;
				if (this.clockOptions.interactive){
					if (this.selectedTime.hours < 23){
						this.selectedTime.hours++;
					}else{
						this.selectedTime.hours = 0;
					}
				}
			}
			clockTimeSelectorElement.innerHTML = this.createTimeSelectorElement();
			previewElement.innerHTML = this.createPreviewElement();
			this.addTimeSelectorListener();
		}.bind(this));
		clockMinutesDownElement.addEventListener('click', function () {
			this.initSelectedTime();
			if (this.selectedTime.minutes > 0){
				this.selectedTime.minutes--;
			}else{
				this.selectedTime.minutes = 59;
				if (this.clockOptions.interactive){
					if (this.selectedTime.hours > 0){
						this.selectedTime.hours--;
					}else{
						this.selectedTime.hours = 23;
					}
				}
			}
			clockTimeSelectorElement.innerHTML = this.createTimeSelectorElement();
			previewElement.innerHTML = this.createPreviewElement();
			this.addTimeSelectorListener();
		}.bind(this));
	}


	if (this.clockOptions.showSeconds){
		let clockSecondsInputElement:HTMLInputElement = <HTMLInputElement> document.getElementById(this.id + '-clock-seconds-input');
		let clockSecondsUpElement:HTMLElement = document.getElementById(this.id + '-clock-seconds-up');
		let clockSecondsDownElement:HTMLElement = document.getElementById(this.id + '-clock-seconds-down');

		clockSecondsInputElement.value ? clockSecondsInputElement.classList.add("is-not-empty") : clockSecondsInputElement.classList.remove("is-not-empty");

		// Selector for seconds
		clockSecondsInputElement.addEventListener('blur', function () {
			this.initSelectedTime();
			let value:number;
			if (Number(this.value) < 0){
				value = 0;
			}else if (Number(this.value) > 59){
				value = 59;
			}else{
				value = Number(this.value);
			}
			this.selectedTime.seconds = value;
			clockTimeSelectorElement.innerHTML = this.createTimeSelectorElement();
			previewElement.innerHTML = this.createPreviewElement();
			this.addTimeSelectorListener();
		}.bind(this));
		clockSecondsUpElement.addEventListener('click', function () {
			this.initSelectedTime();
			if (this.selectedTime.seconds < 59){
				this.selectedTime.seconds++;
			}else{
				this.selectedTime.seconds = 0;
				if (this.clockOptions.interactive){
					if (this.selectedTime.minutes < 59){
						this.selectedTime.minutes++;
					}else{
						this.selectedTime.minutes = 0;
						if (this.selectedTime.hours < 23){
							this.selectedTime.hours++;
						}else{
							this.selectedTime.hours = 0;
						}
					}
				}
			}
			clockTimeSelectorElement.innerHTML = this.createTimeSelectorElement();
			previewElement.innerHTML = this.createPreviewElement();
			this.addTimeSelectorListener();
		}.bind(this));
		clockSecondsDownElement.addEventListener('click', function () {
			this.initSelectedTime();
			if (this.selectedTime.seconds > 0){
				this.selectedTime.seconds--;
			}else{
				this.selectedTime.seconds = 59;
				if (this.clockOptions.interactive){
					if (this.selectedTime.minutes > 0){
						this.selectedTime.minutes--;
					}else{
						this.selectedTime.minutes = 59;
						if (this.selectedTime.hours > 0){
							this.selectedTime.hours--;
						}else{
							this.selectedTime.hours = 23;
						}
					}
				}
			}
			clockTimeSelectorElement.innerHTML = this.createTimeSelectorElement();
			previewElement.innerHTML = this.createPreviewElement();
			this.addTimeSelectorListener();
		}.bind(this));
	}
}

private createDateSelectorElement(){
	let monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	let monthSelectorElement: string = `${Button.getModule({id: this.id + '-callendar-month-prev', type: "minimal", iconClass: "fa fa-chevron-left"})}<span>${monthNames[this.visibleDate.month - 1]}</span>${Button.getModule({id: this.id + '-callendar-month-next', type: "minimal", iconClass: "fa fa-chevron-right"})}`;
	let yearSelectorElement: string = `${Button.getModule({id: this.id + '-callendar-year-prev', type: "minimal", iconClass: "fa fa-chevron-left"})}<span>${this.visibleDate.year}</span>${Button.getModule({id: this.id + '-callendar-year-next', type: "minimal", iconClass: "fa fa-chevron-right"})}`;
	let dateSelectorElement: string = `<div class='${Style.monthSelector}'>${monthSelectorElement}</div><div class='${Style.yearSelector}'>${yearSelectorElement}</div>`;
	return dateSelectorElement;
}

private datePickerValueIsValid(){
	let datePickerValueIsValid: boolean = false;
	if (this.type == 'date'){
		datePickerValueIsValid = this.selectedDate !== null;
	}else if (this.type == 'time'){
		datePickerValueIsValid = this.selectedTime !== null;
	} else if (this.type == 'datetime'){
		datePickerValueIsValid = this.selectedDate !== null && this.selectedTime !== null;
	}
	return datePickerValueIsValid;
}

private getDatePreviewElementInfoMessage(){
	let datePreviewElementInfoMessage: string = '';
	if (this.type == 'date'){
		datePreviewElementInfoMessage = 'Select a date';
	}else if (this.type == 'time'){
		datePreviewElementInfoMessage = 'Select a time';
	} else if (this.type == 'datetime'){
		if (this.selectedDate !== null){
			datePreviewElementInfoMessage = 'Select a time';
		}else if (this.selectedTime !== null){
			datePreviewElementInfoMessage = 'Select a date';
		}else {
			datePreviewElementInfoMessage = 'Select a date and time';
		}
	}
	return `<div class="${Style.previewInfoMessage}">${datePreviewElementInfoMessage}</div>`;	
}

private createPreviewElement(){
	let dateElement = '';
	if (this.selectedDate !== null){
		if (this.type == 'date' || this.type == 'datetime'){
			let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
			let dayNumbers = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th', '11th', '12th', '13th', '14th', '15th', '16th', '17th', '18th', '19th', '20th', '21st', '22nd', '23rd', '24th', '25th', '26th', '27th', '28th', '29th', '30th', '31st'];
			let dayNames: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
			let dateString: string = `${monthNames[this.selectedDate.month - 1]} - ${this.selectedDate.year}`;
			let dayNumberString: string = dayNumbers[this.selectedDate.day - 1];
			let dayNameString: string = dayNames[this.selectedDate.weekDay];

			dateElement = `<div class='${Style.previewDate}'>${dateString}</div><div class='${Style.previewDayNumber}'>${dayNumberString}</div><div class='${Style.previewDayName}'>${dayNameString}</div>`;
		}
	}


	let clockElement = '';
	if (this.selectedTime !== null){
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
	}

	let datePreviewElement: string = '';

	if (this.datePickerValueIsValid()){
		datePreviewElement = `${dateElement}${clockElement}`;
	}else {
		datePreviewElement = this.getDatePreviewElementInfoMessage();
	}

	this.updateSubmitButtonState();

	return datePreviewElement;
}

private getTimeSelectorSizeClass(){
	let timeSelectorsCount:number = 0;
	if (this.clockOptions.showHours) timeSelectorsCount++;
	if (this.clockOptions.showMinutes) timeSelectorsCount++;
	if (this.clockOptions.showSeconds) timeSelectorsCount++;
	let sizeClass = 'size-1-' + timeSelectorsCount;
	return Style[sizeClass];
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
			value: this.selectedTime !== null ? '' + this.selectedTime.hours : '',
			type: 'number',
			attributes: ['min="0"', 'max="23"'],
			label: 'Hours'
		});

		hoursSelectorElement = `<div class='${Style.hoursSelector} ${this.getTimeSelectorSizeClass()}'>${toggleButtonUp}${inputFieldElement}${toggleButtonDown}</div>`;
	}

	if (this.clockOptions.showMinutes){
		let toggleButtonUp = `<div class='${Style.toggleButton}'>${Button.getModule({id: this.id + '-clock-minutes-up', type: "minimal", iconClass: "fa fa-chevron-up"})}</div>`;
		let toggleButtonDown = `<div class='${Style.toggleButton}'>${Button.getModule({id: this.id + '-clock-minutes-down', type: "minimal", iconClass: "fa fa-chevron-down"})}</div>`;
		let inputFieldElement = InputField.getModule({
			id: this.id + '-clock-minutes-input',
			name: this.id + '-clock-minutes-input',
			value: this.selectedTime !== null ? '' + this.selectedTime.minutes : '',
			type: 'number',
			attributes: ['min="0"', 'max="59"'],
			label: 'Minutes'
		});
		minutesSelectorElement = `<div class='${Style.minutesSelector} ${this.getTimeSelectorSizeClass()}'>${toggleButtonUp}${inputFieldElement}${toggleButtonDown}</div>`;
	}

	if (this.clockOptions.showSeconds){
		let toggleButtonUp = `<div class='${Style.toggleButton}'>${Button.getModule({id: this.id + '-clock-seconds-up', type: "minimal", iconClass: "fa fa-chevron-up"})}</div>`;
		let toggleButtonDown = `<div class='${Style.toggleButton}'>${Button.getModule({id: this.id + '-clock-seconds-down', type: "minimal", iconClass: "fa fa-chevron-down"})}</div>`;
		let inputFieldElement = InputField.getModule({
			id: this.id + '-clock-seconds-input',
			name: this.id + '-clock-seconds-input',
			value: this.selectedTime !== null ? '' + this.selectedTime.seconds : '',
			type: 'number',
			attributes: ['min="0"', 'max="59"'],
			label: 'Seconds'
		});
		secondsSelectorElement = `<div class='${Style.secondsSelector} ${this.getTimeSelectorSizeClass()}'>${toggleButtonUp}${inputFieldElement}${toggleButtonDown}</div>`;
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

	if (this.selectedDate !== null && this.selectedDate.year == this.visibleDate.year && this.selectedDate.month == this.visibleDate.month){
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
	if (!this.clockOptions.showHours) this.selectedTime.hours = 0;
	if (!this.clockOptions.showMinutes) this.selectedTime.minutes = 0;
	if (!this.clockOptions.showSeconds) this.selectedTime.seconds = 0;

	let hours = this.selectedTime.hours > 9 ? this.selectedTime.hours : '0' + this.selectedTime.hours;
	let minutes = this.selectedTime.minutes > 9 ? this.selectedTime.minutes : '0' + this.selectedTime.minutes;
	let seconds = this.selectedTime.seconds > 9 ? this.selectedTime.seconds : '0' + this.selectedTime.seconds;

	return `${hours}:${minutes}:${seconds}`;
}

private setDateTimeValue() {
	return `${this.setDateValue()} ${this.setTimeValue()}`;
}

private updateSubmitButtonState() {
	let submitButtonElement:HTMLElement = document.getElementById(this.id + '-datepicker-submit');
	let disabledSubmitButtonElement:HTMLElement = document.getElementById(this.id + '-datepicker-submit-disabled');
	let submitButtonsIsNotNull:boolean = submitButtonElement !== null && disabledSubmitButtonElement !== null;

	if (submitButtonsIsNotNull){
		if (this.datePickerValueIsValid()){
			submitButtonElement.style.display = 'inline-block';
			disabledSubmitButtonElement.style.display = 'none';
		}else{
			submitButtonElement.style.display = 'none';
			disabledSubmitButtonElement.style.display = 'inline-block';
		}
	}
}

public createModuleElement() {

	let datePickerIsReadOnly:boolean = this.attributes !== undefined && this.attributes.indexOf('readonly') > -1;
	let datePickerIsDisabled:boolean = this.attributes !== undefined && this.attributes.indexOf('disabled') > -1;

	let datePickerElement: string = '';


	this.inputField = {
		id: this.id + '-input',
		name: this.name,
		type: 'hidden',
		value: this.value,
		placeholder: this.placeholder,
		attributes: this.attributes,
		label: this.label
	};

	let inputFieldElement = InputField.getModule(this.inputField);

	this.dummyInputField.id = this.id + '-dummyInput';
	this.dummyInputFieldValue.id = this.id + '-dummyInputValue';
	
	let dummyInputFieldElement = `<div id='${this.dummyInputField.id}' class='${Style.dummyInputField}'><span id='${this.dummyInputFieldValue.id}' class='${Style.dummyInputFieldValue}'></span></div>`;

	if (datePickerIsReadOnly || datePickerIsDisabled){
		let readOnlyClass:string = datePickerIsReadOnly ? Style.readOnly : '';
		let disabledClass:string = datePickerIsDisabled ? Style.disabled : '';
		datePickerElement = `<div class='${Style.datePicker} ${readOnlyClass} ${disabledClass}'><div class='${Style.inputField}'>${dummyInputFieldElement}${inputFieldElement}</div></div>`;
		this.addDisabledOrReadOnlyListener(this.inputField);
	}else{
		let buttonElement = Button.getModule({
			id: 'datepicker-trigger1',
			iconClass: 'fa fa-calendar',
			type: 'minimal'
		})

		let modalId = this.id + '-datepicker-modal';

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

		this.modal = {
			id: modalId,
			triggerElement: buttonElement,
			modalElement: {
				content: modalContentElement,
				maxWidth: '326px',
				closeButtontext: 'cancel',
				footerButtons: {
					buttonRow: {
						buttons: [
						{id: this.id + '-datepicker-submit', type: 'minimal', theme: 'primary', content: 'ok'},
						{id: this.id + '-datepicker-submit-disabled', type: 'minimal', theme: 'primary', content: 'ok', attributes: ['disabled']}
						]
					}
				}
			}
		};

		let modalElement = Modal.getModule(this.modal);

		this.addListener();
		datePickerElement = `<div class='${Style.datePicker}'><div class='${Style.inputField}'>${dummyInputFieldElement}${inputFieldElement}</div><div class='${Style.modal}'>${modalElement}</div></div>`;
	}

	return datePickerElement;
}
}

export interface IClockOptions{
	showHours?: boolean,
	showMinutes?: boolean,
	showSeconds?: boolean,
	interactive?: boolean,
	required?: boolean
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
	attributes?: string[];
	clockOptions?: IClockOptions;
}

export function getModule(datePicker: IDatePicker){
	return new DatePicker(datePicker).createModuleElement();
}