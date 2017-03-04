import * as ListNavigation from './list-navigation';

const Style = require<any>('./primary-navigation.scss');

export class PrimaryNavigation {
	id: string = "";
	theme: string = "default";
	listItems: IListItem[] = [];
	constructor(primaryNavigation: IPrimaryNavigation) {
		if (primaryNavigation.id !== undefined) this.id = primaryNavigation.id;
		if (primaryNavigation.theme !== undefined) this.theme = primaryNavigation.theme;
		if (primaryNavigation.listItems !== undefined) this.listItems = primaryNavigation.listItems;
	}

	private getThemeClass(theme: string){
		let themeClass = Style.listThemeDefault;
		if (theme == 'primary')	themeClass = Style.listThemePrimary;
		if (theme == 'dark') 	themeClass = Style.listThemeDark;
		return themeClass;
	}

	private createListElements(listItems){
		let listElements = "";
		if (this.listItems.length){
			for (let listItem of this.listItems){
				let dropdownContent = '';
				let dropdownClass = '';
				let listElement = '';
				let hasDropdown: boolean = listItem.dropdownContent !== undefined;
				if (hasDropdown){
					dropdownContent = `<div class="${Style.dropdownContent}">${ListNavigation.getModule(listItem.dropdownContent)}<div>`;
					dropdownClass = `${Style.hasDropdown}`;
					listElement = ` <li class="overlay-element ${dropdownClass}">
										<span class="${Style.dropdownTitle}">${listItem.name}</span>
										${dropdownContent}
									</li>`;
				}else{
					listElement = `<li><a href="${listItem.link}">${listItem.name}</a></li>`;
				}
				listElements += listElement;
			}
		}
		return listElements;
	}

	private addListener(){
		document.addEventListener('DOMContentLoaded', function() {
			let navigationElements: any = document.getElementsByClassName(Style.hasDropdown) !== undefined ? document.getElementsByClassName(Style.hasDropdown) : false;
			if (navigationElements){
				for (var i = 0; i < navigationElements.length; i++) {
					let navigationElement: any = navigationElements[i];
					let dropdownElements: any = navigationElement.getElementsByClassName(Style.dropdownContent);
					let dropdownElement: any = dropdownElements[0];

					let navigationElementWidth = navigationElements[i].offsetWidth;
					let dropdownElementWidth = dropdownElements[0].offsetWidth;
					let dropdownElementHeight = dropdownElements[0].offsetHeight;
					let widthDif = navigationElementWidth - dropdownElementWidth;

					dropdownElement.style.marginLeft = widthDif/2 + 'px';
				}
			}
		}, false);
	}

	public createModuleElement(){
		let listItemElements: string = this.createListElements(this.listItems);
		let themeClass: string = this.getThemeClass(this.theme);
		return `<ul id="${this.id}"" class="${Style.list} ${themeClass}">${listItemElements}</ul>`
	}


}

export interface IDropdownContent {
	listItems: IListItem[];
}

export interface IListItem {
	name: string;
	link: string;
	dropdownContent?: IDropdownContent;
}

export interface IPrimaryNavigation {
	id?: string;
	theme?: string;
	listItems?: IListItem[];
}

export function getModule(primaryNavigation: IPrimaryNavigation){
	return new PrimaryNavigation(primaryNavigation).createModuleElement();
}

