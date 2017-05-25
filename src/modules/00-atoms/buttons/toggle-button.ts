const Style = require<any>("../../../../src/modules/00-atoms/buttons/toggle-button.scss");

export class ToggleButton {
	id: string;
	targetClass: string;
	toggleType: string = "";
	title: string = "";
	themeClass: string = Style.buttonThemeDefault;
	icon: string;
	constructor(toggleButton: IToggleButton) {
		this.id = toggleButton.id;
		this.targetClass = toggleButton.targetClass;
		if (toggleButton.toggleType !== undefined) this.toggleType = toggleButton.toggleType;
		if (toggleButton.title !== undefined) this.title = toggleButton.title;
		if (toggleButton.theme !== undefined) this.themeClass = this.getThemeClass(toggleButton.theme);
		if (toggleButton.iconClass !== undefined) this.icon = `<span class='${Style.icon} ${toggleButton.iconClass}'></span>`;

	}

	private getThemeClass(theme: string){
		let themeClass = '';
		if (theme == 'primary')	themeClass = Style.buttonThemePrimary;
		if (theme == 'info') 	themeClass = Style.buttonThemeInfo;
		if (theme == 'success')	themeClass = Style.buttonThemeSuccess;
		if (theme == 'warning')	themeClass = Style.buttonThemeWarning;
		if (theme == 'danger') 	themeClass = Style.buttonThemeDanger;
		return themeClass;
	}

	private addListener(id:string, targetClass: string){
		document.addEventListener('DOMContentLoaded', function(e) {
			let elementIsDefined: boolean = document.getElementById(id) !== undefined;
			let elementIsNotNull: boolean = document.getElementById(id) !== null;
			if (elementIsDefined && elementIsNotNull){
				let element = document.getElementById(id);
				element.onclick = function(){
					let targetElements:HTMLCollection = document.getElementsByClassName(targetClass);
					if (targetElements.length > 0){
						let targetElementsArray = [].slice.call(targetElements);
						if (element.classList.contains('active')){
							element.classList.remove('active');
							for (let targetElement of targetElementsArray) {
								targetElement.classList.remove('active');
							}
						}else{
							element.classList.add('active');
							for (let targetElement of targetElementsArray) {
								targetElement.classList.add('active');
							}
						}
					}
				};
			}
		}, false);
	}

	public createModuleElement(){
		this.addListener(this.id, this.targetClass);
		return `<button id='${this.id}' data-toggle-type='${this.toggleType}' title='${this.title}' value='${this.targetClass}' class='${Style.button} ${this.themeClass}'>${this.icon}</button>`;
	}
}

export interface IToggleButton {
	id: string;
	targetClass: string;
	toggleType?: string;
	title?: string;
	theme?: string;
	iconClass?: string; 
}

export function getModule(toggleButton: IToggleButton){
	return new ToggleButton(toggleButton).createModuleElement();
}
