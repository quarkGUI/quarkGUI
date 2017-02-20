const Style = require<any>("./radio-button.scss");

class RadioButton {
	id: string;
	name: string;
	value: string;
	constructor(radioButton: IRadioButton) {
		this.id = radioButton.id;
		this.name = radioButton.name;
		this.value = radioButton.value;
	}

	private addListener(id: string){
		document.addEventListener("module-lazy-loaded", function(e) {
			let iconElementIsDefined: boolean = document.getElementById('radio-toggle-' + id) !== undefined;
			let iconElementIsNotNull: boolean = document.getElementById('radio-toggle-' + id) !== null;
			let radioButtonElement: HTMLInputElement = <HTMLInputElement> document.getElementById(id);
			if (iconElementIsDefined && iconElementIsNotNull){
				let iconElement: HTMLElement =  document.getElementById('radio-toggle-' + id);
				iconElement.onclick = () => {
					radioButtonElement.checked = radioButtonElement.checked ? false : true;
				};
			}
		}, false);
	}

	public createModuleElement() {
		this.addListener(this.id);
		return `
			<input id="${this.id}" name="${this.name}" type="radio" value="${this.value}" class="${Style.input}" />
			<span id="radio-toggle-${this.id}" class="${Style.radioIcon}"></span>
		`
	}
}


interface IRadioButton{
	id: string;
	name: string;
	value: string;
}


export function getModule(radioButton: IRadioButton){
	return new RadioButton(radioButton).createModuleElement();
}
