import * as InputField from './input-field'
import * as Button from '../buttons/button'
const Style = require<any>("./date-picker.scss");

class DatePicker {
	id: string;
	name: string;
	type: string = "text";
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

	private addListener(datePicker: DatePicker, inputField, dropdownList){
		document.addEventListener("module-lazy-loaded", function(e) {
			let datePickerElementIsDefined: boolean = datePicker.elementIsNotNullOrUndefinedById(datePicker.id);
			let inputFieldElementIsDefined: boolean = datePicker.elementIsNotNullOrUndefinedById(inputField.id);
			let dropdownListElementIsDefined: boolean = datePicker.elementIsNotNullOrUndefinedById(dropdownList.id);

			
			if (datePickerElementIsDefined && inputFieldElementIsDefined && dropdownListElementIsDefined){
				let selectListElement:HTMLElement = document.getElementById(datePicker.id);
				let inputFieldElement:HTMLInputElement = <HTMLInputElement> document.getElementById(inputField.id);
				let dropdownListElement:HTMLElement = document.getElementById(dropdownList.id);

				let labelElementIsDefined: boolean = datePicker.elementIsNotNullOrUndefinedByTagName(selectListElement, "LABEL");

				if (labelElementIsDefined){
					let labelElementList: NodeListOf<Element> = selectListElement.getElementsByTagName("LABEL");
					let labelElement: HTMLElement = <HTMLElement>labelElementList.item(0);
					labelElement.onclick = function(){
						if (inputFieldElementIsDefined){
							inputFieldElement.focus();
						}
					}
				}

				inputFieldElement.value ? inputFieldElement.classList.add("is-not-empty") : inputFieldElement.classList.remove("is-not-empty");

				inputFieldElement.readOnly = true;
				inputFieldElement.addEventListener("keydown", function(e) {
					e.preventDefault();
					return false;
				});
				

				inputFieldElement.onfocus = function(){
					selectListElement.classList.add("active");
					dropdownListElement.classList.add("active");
					dropdownListElement.classList.remove("transparent")
					datePicker.updateDropdownListHeight(dropdownListElement);
				};

				inputFieldElement.onblur = function(event){
					selectListElement.classList.remove("active");
					dropdownListElement.classList.add("transparent")
					setTimeout(function(){ 
						if (inputFieldElement !== document.activeElement){
							dropdownListElement.classList.remove("active")
							dropdownListElement.classList.remove("transparent")
						}
					}, 1000);

				}
				if (dropdownListElementIsDefined){
					dropdownListElement.addEventListener('click', function (e) {
						let target: any = e.target; // Clicked element
						while (target && target.parentNode !== dropdownListElement) {
							target = target.parentNode; // If the clicked element isn't a direct child
							if(!target) { return; } // If element doesn't exist
						}
						if (target.tagName === 'LI'){
							var optionValue = target.getAttribute("data-value");
							inputFieldElement.value = optionValue;
							inputFieldElement.classList.add("is-not-empty");
						}
					});
				}
			}
		}, false);
	}

	private createDateSelectorElement(activeDate){
		let monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
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
		let dateSelectorElement: string = `<div class="${Style.monthSelector}">${monthSelectorElement}</div><div class="${Style.yearSelector}">${yearSelectorElement}</div>`;
		return dateSelectorElement;
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
		let firstDay: number = new Date(selectedDate.year, selectedDate.month, 1).getDay();
		
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
			type: this.type,
			value: this.value,
			placeholder: this.placeholder
		}
		let dropdownList = {
			id: this.id + '-dropdownList'
		}
		let dateSelectorElement = this.createDateSelectorElement(this.activeDate);
		let timeSelectorElement = this.createTimeSelectorElement(this.activeDate);
		let dayNameElements = this.createDayNameElements();
		let callendarElement = this.createMonthElement(this.activeDate, this.selectedDate);

		this.addListener(this, inputField, dropdownList);



		return `
		<div id="${this.id}" class="${Style.dropdownContainer}">
		${InputField.getModule(inputField)} ${this.labelElement}
		<div id="${dropdownList.id}" class="${Style.modalOverlay}">
			<div class="${Style.modalContainer}">
				<span class="${Style.toggleTab} ${Style.toggleTabCallendar}"></span>
				<span class="${Style.toggleTab} ${Style.toggleTabClock}"></span>
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
		`
	}
}


interface IOptions{
	name: string;
	value: any;
}

interface IDatePicker{
	id: string;
	name: string;
	searchable?: boolean;
	type?: string;
	value?: any;
	placeholder?: string;
	labelElement?: string;
	options?: IOptions[];
}

export function getModule(datePicker: IDatePicker){
	return new DatePicker(datePicker).createModuleElement();
}