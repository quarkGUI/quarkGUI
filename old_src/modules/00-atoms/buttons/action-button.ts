const Style = require<any>("../../../../src/modules/00-atoms/buttons/action-button.scss");

export class ActionButton {
	id: string;
	icon: string;
	themeClass: string = Style.buttonThemeDefault;

	constructor(actionButton: IActionButton) {
		this.id = actionButton.id;
		if (actionButton.iconClass !== undefined) this.icon = `<span class='${Style.icon} ${actionButton.iconClass}'></span>`;
		if (actionButton.theme !== undefined) this.themeClass = this.getThemeClass(actionButton.theme);

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

	private addListener(id: string){
		document.addEventListener('DOMContentLoaded', function(e) {
			let elementIsDefined: boolean = document.getElementById(id) !== undefined;
			let elementIsNotNull: boolean = document.getElementById(id) !== null;
			if (elementIsDefined && elementIsNotNull){
				let element = document.getElementById(id);
				element.onclick = function(){
					if (element.classList.contains('active')){
						element.classList.remove("active");
						document.body.classList.remove('action-menu-active');
					}else{
						element.classList.add("active");
						document.body.classList.add('action-menu-active');
					}
				};
			}
		}, false);
	}

	public createModuleElement() {
		this.addListener(this.id);
		return `<div id='${this.id}' class='${Style.button} ${this.themeClass} ${this.themeClass}'>${this.icon}</div>`;
	}

}

export interface IActionButton {
	id: string; 
	theme?: string;
	iconClass?: string; 
}

export function getModule(actionButton: IActionButton){
	return new ActionButton(actionButton).createModuleElement();
}
