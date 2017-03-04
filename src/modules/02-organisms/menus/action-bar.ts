import * as ActionButton from '../../00-atoms/buttons/action-button';
import * as ActionBarMenu from '../../01-molecules/menus/action-bar-menu';

export class ActionBar {
	theme: string = "default";
	actionButton: IActionButton;
	actionBarMenu: IActionBarMenu;
	constructor(actionBar: IActionBar) {
		if (actionBar.theme !== undefined) this.theme = actionBar.theme;
		this.actionButton = actionBar.actionButton;
		this.actionBarMenu = actionBar.actionBarMenu;

		if (actionBar.actionButton.theme == undefined) actionBar.actionButton.theme = this.theme;
		if (actionBar.actionBarMenu.theme == undefined) actionBar.actionBarMenu.theme = this.theme;
	}

	public createModuleElement() {
		let actionButtonElement = ActionButton.getModule(this.actionButton);
		let actionBarMenuElement =  ActionBarMenu.getModule(this.actionBarMenu);
		return `${actionButtonElement} ${actionBarMenuElement}`
	}

}

export interface IActionButton {
	id: string; 
	theme?: string;
	iconClass?: string; 
}


export interface IToggleButton {
	id: string;
	targetClass: string;
	toggleType?: string;
	title?: string;
	theme?: string;
	iconClass?: string; 
}

export interface IActionBarMenu {
	id: string;
	theme?: string;
	toggleButtons?: IToggleButton[];
}

export interface IActionBar{
	theme?: string;
	actionButton: IActionButton;
	actionBarMenu: IActionBarMenu;
}

export function getModule(actionBar: IActionBar){
	return new ActionBar(actionBar).createModuleElement();
}
