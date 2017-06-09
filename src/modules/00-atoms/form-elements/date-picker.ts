import * as InputField from './input-field'
import * as Modal from '../../01-molecules/messaging/modal'
import * as Button from '../buttons/button'
const Style = require<any>("../../../../src/modules/00-atoms/form-elements/date-picker.scss");

export class DatePicker {
	id: string;
	name: string;
	type: string = "date";
	value: any = "";
	placeholder: string = "";
	labelElement: string = "";
	activeDate: any;
	selectedDate: any;


	constructor(datePicker: IDatePicker) {
		this.id = datePicker.id;
		this.name = datePicker.name;
		if (datePicker.type !== undefined) this.type = datePicker.type;
		if (datePicker.value !== undefined) this.value = datePicker.value;
		if (datePicker.placeholder !== undefined) this.placeholder = datePicker.placeholder;
		if (datePicker.labelElement !== undefined) this.labelElement = datePicker.labelElement;
		let activeDate = new Date();
		this.activeDate = {
			year: activeDate.getFullYear(),
			month: activeDate.getMonth() + 1,
			day: activeDate.getDate(),
			weekDay: activeDate.getDay()
		}
		this.selectedDate = {
			year: activeDate.getFullYear(),
			month: activeDate.getMonth() + 1,
			day: activeDate.getDate(),
			weekDay: activeDate.getDay()
		}
	}

	private updateDropdownListHeight(dropdownListElement){
		var dropdownElementHeight = dropdownListElement.offsetHeight;
		dropdownListElement.style.marginBottom = 0-dropdownElementHeight + 'px';
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

				//inputFieldElement.readOnly = true;
				inputFieldElement.addEventListener("keydown", function(e) {
					e.preventDefault();
					return false;
				});
				

				inputFieldElement.onfocus = function(){
					modalElement.classList.add("active");
					modalElement.classList.remove("transparent")
				};

			
				if (modalElementIsDefined){
					modalElement.addEventListener('click', function (e) {
						let target: any = e.target; // Clicked element
						while (target && target.parentNode !== modalElement) {
							target = target.parentNode; // If the clicked element isn't a direct child
							if(!target) { return; } // If element doesn't exist
						}
						if (target.tagName === 'LI'){
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
						})
					}
					let toggleTabClockElementIsNotNull: boolean = document.getElementById(modalId + '-toggleTabClock') !== null;
					if (toggleTabClockElementIsNotNull){
						let toggleTabClockElement: HTMLElement = document.getElementById(modalId + '-toggleTabClock');
						toggleTabClockElement.addEventListener('click', function (e){
							modalElement.classList.remove("active-tab-callendar");
							modalElement.classList.add("active-tab-clock");
						})
					}
					
				}
			}
		}, false);
	}

	private createDateSelectorElement(activeDate){
		let monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		let monthSelectorElement: string = `
		${Button.getModule({type: "minimal", iconClass: "fa fa-chevron-left"})}
		<span>${monthNames[activeDate.month - 1]}</span>
		${Button.getModule({type: "minimal", iconClass: "fa fa-chevron-right"})}
		`;
		let yearSelectorElement: string = `
		${Button.getModule({type: "minimal", iconClass: "fa fa-chevron-left"})}
		<span>${activeDate.year}</span>
		${Button.getModule({type: "minimal", iconClass: "fa fa-chevron-right"})}
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
											<div class="${Style.preview}">
												<div class="${Style.previewDate}">${dateString}</div>
												<div class="${Style.previewDayNumber}">${dayNumberString}</div>
												<div class="${Style.previewDayName}">${dayNameString}</div>
												<div>12:04</div>
											</div>`;
		
		return datePreviewElement;
	}

	private createTimeSelectorElement(activeDate){
		let hourSelectorElement: string = `
		<div style="width: 50%">
			${Button.getModule({type: "minimal", iconClass: "fa fa-chevron-up"})}
			${InputField.getModule({
				id: "dsjkl",
				name: "dsdf",
				type: "number"
			})}
			${Button.getModule({type: "minimal", iconClass: "fa fa-chevron-down"})}
		</div>
		`;
		let minuteSelectorElement: string = `
		<div style="width: 50%">
			${Button.getModule({type: "minimal", iconClass: "fa fa-chevron-up"})}
			${InputField.getModule({
				id: "dsddjkl",
				name: "ddddsdf",
				type: "number"
			})}
			${Button.getModule({type: "minimal", iconClass: "fa fa-chevron-down"})}
		</div>
		`;
		let timeSelectorElement: string = `<div>${hourSelectorElement}${minuteSelectorElement}</div>`;
		return timeSelectorElement;
	}

	private createDayNameElements(){
		let dayNames: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
		let dayNameElements: string = "";
		for (var dayNameIndex = 0; dayNameIndex < dayNames.length; dayNameIndex++){
			dayNameElements += `<span class="${Style.dayName}">${dayNames[dayNameIndex]}</span>`;
		}
		return dayNameElements;
	}

	private createMonthElement(selectedDate, activeDate){
		let daysInMonth: number = new Date(selectedDate.year, selectedDate.month, 0).getDate();
		let firstDay: number = new Date(selectedDate.year, selectedDate.month - 1, 1).getDay();
		
		let dayElements: string = "";
		let days: any[] = [];

		for (var dayIndex = 1; dayIndex <= daysInMonth; dayIndex++){
			days.push({
				number: dayIndex,
				selected: false,
				active: false
			});
		}

		if (selectedDate.year == activeDate.year && selectedDate.month == activeDate.month){
			days[activeDate.day - 1].active = true;
		}

		for (var dummyDayIndex = 0; dummyDayIndex < firstDay; dummyDayIndex++){
			dayElements += `<span class="${Style.day}"></span>`;
		}

		for (let day of days){
			let activeClass: string = day.active ? "active" : "";
			let selectedClass: string = day.selected ? "selected" : "";
			dayElements += `<span class="${Style.day} ${activeClass} ${selectedClass}" data-value="${day.number}">${day.number}</span>`;
		}

		return dayElements;
	}

	public createModuleElement() {
		let inputField = {
			id: this.id + '-input',
			name: this.name,
			type: 'text',
			value: this.value,
			placeholder: this.placeholder
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

		

		let previewElement = this.createPreviewElement(this.selectedDate);
		let dateSelectorElement = this.createDateSelectorElement(this.activeDate);
		let timeSelectorElement = this.createTimeSelectorElement(this.activeDate);
		let dayNameElements = this.createDayNameElements();
		let callendarElement = this.createMonthElement(this.activeDate, this.selectedDate);

		let modalId = this.id + '-datepicker-modal';

		let toggleTabElements = this.type == 'datetime' ? `<span id="${modalId}-toggleTabCallendar" class="${Style.toggleTab} ${Style.toggleTabCallendar}"></span><span id="${modalId}-toggleTabClock" class="${Style.toggleTab} ${Style.toggleTabClock}"></span><div class="clearfix"></div>` : '';


		let modalContentElement = `
				${toggleTabElements}
				
				${previewElement}
				<div class="${Style.callendar}">
					${dateSelectorElement}
					${dayNameElements}
					${callendarElement}
				</div>
				<div class="${Style.clock}">
					${timeSelectorElement}
				</div>
		`;

		let modalObject = {
			id: modalId,
			triggerElement: buttonElement,
			modalElement: {
				content: modalContentElement,
				maxWidth: '430px'
			}
		};

		let modalElement = Modal.getModule(modalObject);

		this.addListener(inputField, modalObject.id);



		return `<div class="${Style.datePicker}"><div class="${Style.inputField}">${inputFieldElement}</div><div class="${Style.modal}">${modalElement}</div></div>`
	}
}

export interface IDatePicker{
	id: string;
	name: string;
	type?: string;
	value?: any;
	placeholder?: string;
	labelElement?: string;
}

export function getModule(datePicker: IDatePicker){
	return new DatePicker(datePicker).createModuleElement();
}