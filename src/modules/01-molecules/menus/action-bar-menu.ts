import * as ToggleButton from '../../00-atoms/buttons/toggle-button';

const Style = require<any>("./action-bar-menu.scss");

export class ActionBarMenu {
	id: string;
	theme: string = "";
	toggleButtons: ToggleButton.IToggleButton[] = [];
	constructor(actionBarMenu: IActionBarMenu) {
		this.id = actionBarMenu.id;
		if (actionBarMenu.theme !== undefined) this.theme = actionBarMenu.theme;
		if (actionBarMenu.toggleButtons !== undefined) this.toggleButtons = actionBarMenu.toggleButtons;
	}

	private getThemeClass(theme: string){
		let themeClass = Style.actionBarThemeDefault;
		if (theme == 'primary')	themeClass = Style.actionBarThemePrimary;
		if (theme == 'info') 	themeClass = Style.actionBarThemeInfo;
		if (theme == 'success')	themeClass = Style.actionBarThemeSuccess;
		if (theme == 'warning')	themeClass = Style.actionBarThemeWarning;
		if (theme == 'danger') 	themeClass = Style.actionBarThemeDanger;
		return themeClass;
	}

	public createModuleElement(){
		let themeClass: string = this.getThemeClass(this.theme);
		let toggleButtonElements: string = "";
		if (this.toggleButtons.length){
			for (let toggleButton of this.toggleButtons){ 
				toggleButtonElements += ToggleButton.getModule(toggleButton)
			};
		}
		return `<ul id="${this.id}" class="${Style.actionBar} ${themeClass}">${toggleButtonElements}</ul>`
	}
}

export interface IActionBarMenu {
	id: string;
	theme?: string;
	toggleButtons?: ToggleButton.IToggleButton[];
}

export function getModule(actionBarMenu: IActionBarMenu){
	return new ActionBarMenu(actionBarMenu).createModuleElement();
}
