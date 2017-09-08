import * as ListNavigation from './list-navigation';

const Style = require<any>('../../../../src/modules/01-molecules/navigation/primary-navigation.scss');

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

	private getResponsiveClass(listItem: IListItem){
		let responsiveClass = "";
		if (listItem.responsive !== undefined){
			let showIcon:boolean = listItem.responsive.showIcon !== undefined && listItem.responsive.showIcon;
			let responsiveIconClass:string = showIcon ? Style.showIconOnPhone : "";

			let showText:boolean = listItem.responsive.showText !== undefined && listItem.responsive.showText;
			let responsiveTextClass:string = showText ? Style.showTextOnPhone : "";

			responsiveClass = `${responsiveIconClass} ${responsiveTextClass}`;
		}
		return `${responsiveClass}`;
	}

	private createIconElement(listItem:IListItem){
		let iconElement = '';
		if (listItem.iconClass !== undefined){
			iconElement = `<span class='${Style.listItemIcon} ${listItem.iconClass}'></span>`;
		}
		return iconElement;
	}

	private createNameElement(listItem:IListItem){
		let nameElement = '';
		if (listItem.name !== undefined){
			nameElement = `${listItem.name}`;
		}
		return nameElement;
	}

	private createListElements(listItems){
		let listElements = "";
		if (this.listItems.length){
			for (let listItem of this.listItems){
				let dropdownContent:string = '';
				let dropdownClass:string = '';
				let iconElement:string = this.createIconElement(listItem);
				let nameElement:string = this.createNameElement(listItem);
				let listElement:string = '';
				let responsiveClass = this.getResponsiveClass(listItem);
				let hasDropdown: boolean = listItem.dropdownContent !== undefined;
				if (hasDropdown){
					dropdownContent = `<div class='${Style.dropdownContent}'><span class='${Style.arrow}'></span>${ListNavigation.getModule(listItem.dropdownContent)}</div>`;
					dropdownClass = `${Style.hasDropdown}`;
					listElement = `<li class='overlay-element ${responsiveClass} ${dropdownClass}'>${iconElement}<span class='${Style.dropdownTitle}'>${nameElement}</span>${dropdownContent}</li>`;
				}else{
					listElement = `<li class='${responsiveClass}'><a href='${listItem.link}'>${iconElement}<span class='${Style.linkTitle}'>${nameElement}</span></a></li>`;
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

					let allreadyCalculated:boolean = dropdownElement.classList.contains("calculated");

					if (!allreadyCalculated){

						let navigationElementWidth = navigationElements[i].offsetWidth;
						let dropdownElementWidth = dropdownElements[0].offsetWidth;
						let dropdownElementHeight = dropdownElements[0].offsetHeight;
						let widthDif:number = dropdownElementWidth - navigationElementWidth;

						let dropdownElementCenterOffset:number = widthDif/2;

						let windowWidth:number = window.innerWidth;
						let dropdownElementOffsetLeft:number = dropdownElements[0].offsetLeft;
						let dropdownElementOffsetRigth:number = dropdownElementWidth + dropdownElementOffsetLeft;
						let dropdownElementHorizontalOverflow:number = dropdownElementOffsetRigth - windowWidth - dropdownElementCenterOffset;
						if (dropdownElementHorizontalOverflow > 0){
							dropdownElementCenterOffset = dropdownElementCenterOffset + dropdownElementHorizontalOverflow;
							
							// Get arrow element
							let dropdownArrowElements: any = dropdownElement.getElementsByClassName(Style.arrow);
							let dropdownArrowElement: HTMLSpanElement = dropdownArrowElements[0];

							// Compensate for margin left on container element and add 5px (half of arrow width)
							let arrowMarginLeft: number = dropdownElementHorizontalOverflow - 5;
							dropdownArrowElement.style.marginLeft = arrowMarginLeft + "px";

						}
						dropdownElement.style.marginLeft = dropdownElementCenterOffset*-1 + 'px';
						dropdownElement.classList.add("calculated");
					}

				}
			}
		}, false);
	}

	public createModuleElement(){
		this.addListener();
		let listItemElements: string = this.createListElements(this.listItems);
		let themeClass: string = this.getThemeClass(this.theme);
		return `<ul id='${this.id}' class='${Style.list} ${themeClass}'>${listItemElements}</ul>`;
	}
}

export interface IDropdownContent {
	listItems: IListItem[];
}

export interface IListItem extends ListNavigation.IListItem{
	dropdownContent?: IDropdownContent;
	responsive?: {
		showIcon?: boolean;
		showText?: boolean;
	}
}

export interface IPrimaryNavigation {
	id?: string;
	theme?: string;
	listItems?: IListItem[];
}

export function getModule(primaryNavigation: IPrimaryNavigation){
	return new PrimaryNavigation(primaryNavigation).createModuleElement();
}

