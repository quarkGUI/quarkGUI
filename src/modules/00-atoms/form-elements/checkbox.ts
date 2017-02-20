const Style = require<any>("./checkbox.scss");

class Checkbox {
	id: string;
	name: string;
	value: string;
	constructor(checkbox: ICheckbox) {
		this.id = checkbox.id;
		this.name = checkbox.name;
		this.value = checkbox.value;
	}

	private addListener(id: string){
		document.addEventListener("module-lazy-loaded", function(e) {
			let iconElementIsDefined: boolean = document.getElementById('checkbox-toggle-' + id) !== undefined;
			let iconElementIsNotNull: boolean = document.getElementById('checkbox-toggle-' + id) !== null;
			let checkboxElement: HTMLInputElement = <HTMLInputElement> document.getElementById(id);
			if (iconElementIsDefined && iconElementIsNotNull){
				let iconElement: HTMLElement =  document.getElementById('checkbox-toggle-' + id);
				iconElement.onclick = () => {
					checkboxElement.checked = checkboxElement.checked ? false : true;
				};
			}
		}, false);
	}

	public createModuleElement() {
		this.addListener(this.id);
		return `
			<input id="${this.id}" name="${this.name}" type="checkbox" value="${this.value}" class="${Style.input}" />
			<span id="checkbox-toggle-${this.id}" class="${Style.checkboxIcon}"></span>
		`
	}
}

interface ICheckbox{
	id: string;
	name: string;
	value: string;
}


export function getModule(checkbox: ICheckbox){
	return new Checkbox(checkbox).createModuleElement();
}
