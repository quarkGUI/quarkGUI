import * as Dragula from 'dragula';
import * as ButtonRow from '../../01-molecules/buttons/button-row';

const Style = require<any>('../../../../src/modules/02-organisms/menus/list-menu.scss');

export class ListMenu {
	id: string = "";
	listItems: IListItem[];
	raised: boolean = false;
	hover: boolean = false;
	dragable: boolean = false;
	constructor(listMenu: IListMenu) {
		if (listMenu.id !== undefined) this.id = listMenu.id;
		if (listMenu.listItems !== undefined) this.listItems = listMenu.listItems;
		if (listMenu.raised !== undefined) this.raised = listMenu.raised;
		if (listMenu.hover !== undefined) this.hover = listMenu.hover;
		if (listMenu.dragable !== undefined) this.dragable = listMenu.dragable;
	}

	private initDragula(containers){
		let dragula = Dragula(containers, {});
		dragula.on('drop', function(element, container) {

		});
	}

	private addDragulaListener(thisInstance: any){
		document.addEventListener('DOMContentLoaded', function() {
			let containers = [document.getElementById(thisInstance.id)];
			thisInstance.initDragula(containers);
		}, false);
	}

	private addListener(listItem: IListItem){
		document.addEventListener('DOMContentLoaded', function() {
			let hasExpandButtonElement: boolean = document.getElementById(listItem.id + '-expand-button') !== null;
			let hasExpandableContentElement: boolean = document.getElementById(listItem.id + '-expandable-content') !== null;

			let expandButtonElement:HTMLElement = document.getElementById(listItem.id + '-expand-button'); 
			let expandableContentElement:HTMLElement = document.getElementById(listItem.id + '-expandable-content'); 

			if (hasExpandButtonElement && hasExpandableContentElement){
				expandButtonElement.onclick = function(){
					let isExpanded:boolean = expandButtonElement.classList.contains('active');
					
					if (isExpanded){
						expandButtonElement.classList.remove("active");
						expandableContentElement.classList.remove("active");
					}else{
						expandButtonElement.classList.add("active");
						expandableContentElement.classList.add("active");
					}
				};
			}
		});
	}

	private getTypeClass(raised: boolean){
		let typeClass = '';
		if (raised) typeClass = Style.listMenuTypeRaised;
		return typeClass;
	}


	private createTitleElement(listItem: IListItem){
		let moduleLinkAttribute = (listItem.moduleLink !== undefined) ? `data-module-target='${listItem.moduleLink}'` : '';
		let singleLineClass = (listItem.title !== undefined && listItem.subTitle == undefined) ? Style.singleLine : '';
		let subTitleElement = (listItem.subTitle !== undefined) ? `<small>${listItem.subTitle}</small>` : '';
		let iconElement = (listItem.iconClass !== undefined) ? `<span class='${Style.listItemIcon} ${listItem.iconClass}'></span>` : '';

		let titleElement = "";
		if (listItem.title !== undefined && listItem.link !== undefined) {
			titleElement = `<a href='${listItem.link}' class='${Style.listItemTitle} ${singleLineClass}'>${iconElement}${listItem.title} ${subTitleElement}</a>`;
		}
		else if (listItem.title !== undefined && listItem.moduleLink !== undefined){
			titleElement = `<a ${moduleLinkAttribute} class='loadPage ${Style.listItemTitle} ${singleLineClass}'>${iconElement}${listItem.title} ${subTitleElement}</a>`;
		}
		else if (listItem.title !== undefined) {
			titleElement = `<span class='${Style.listItemTitle} ${singleLineClass}' ${moduleLinkAttribute}>${iconElement}${listItem.title} ${subTitleElement}</span>`;
		}
		return titleElement;
	}

	private createExpandButtonElement(listItem: IListItem){
		let expandButtonElement = "";
		if (listItem.expandable !== undefined && listItem.expandable === true) {
			expandButtonElement = `<span class='${Style.listItemDivider}'></span><span id='${listItem.id}-expand-button' class='${Style.listItemExpandButton}'></span>`;
		}
		return expandButtonElement;
	}

	private createButtonRowElement(listItem: IListItem){
		let buttonRowElement = ""
		let expandButton = this.createExpandButtonElement(listItem);

		if (listItem.buttonRow !== undefined) {
			buttonRowElement = `<span class='${Style.listItemButtonRow}'>${ButtonRow.getModule(listItem.buttonRow)}${expandButton}</span>`;
		}else if (listItem.expandable !== undefined && listItem.expandable == true){
			buttonRowElement = `<span class='${Style.listItemButtonRow}'>${expandButton}</span>`;
		}

		return buttonRowElement;
	}

	private createExpandableContentElement(listItem: IListItem){
		let expandableContentElement = "";
		if (listItem.expandableContent !== undefined) {
			expandableContentElement = `<div id='${listItem.id}-expandable-content' class='${Style.listItemExpandableContent}'>${listItem.expandableContent}</div>`;
		}
		return expandableContentElement;
	}

	public createModuleElement() {
		let dragableClass = '';
		if (this.dragable){
			this.addDragulaListener(this);
			dragableClass = Style.dragable
		}
		let listItemElements = "";
		if (this.listItems !== undefined) {
			for (let listItem of this.listItems){
				let title             = this.createTitleElement(listItem);
				let buttonRow         = this.createButtonRowElement(listItem);
				let expandableContent = this.createExpandableContentElement(listItem);
				if (listItem.expandable){
					this.addListener(listItem);
				}
				let hiddenButtonRowClass = listItem.hiddenButtonRow !== undefined && listItem.hiddenButtonRow ? Style.hiddenButtonRow : '';

				listItemElements += `<div class='${Style.listItem} ${dragableClass} ${hiddenButtonRowClass}'>${title}${buttonRow}${expandableContent}</div>`;
			}
		}

		let typeClass = (this.raised !== undefined) ? this.getTypeClass(this.raised) : '';
		let hoverClass: string = this.hover ? Style.hover : "";

		return `<div id='${this.id}' class='${Style.listMenu} ${typeClass} ${hoverClass}'>${listItemElements}</div>`;
	}
}

export interface IListItem {
	id?: string;
	title?: string;
	subTitle?: string;
	link?: string;
	iconClass?: string;
	moduleLink?: string;
	expandable?: boolean;
	expandableContent?: string;
	buttonRow?: ButtonRow.IButtonRow;
	hiddenButtonRow?: boolean;
}

export interface IListMenu {
	id?: string;
	listItems?: IListItem[];
	raised?: boolean;
	hover?: boolean;
	dragable?: boolean;
}


export function getModule(listMenu: IListMenu){
	return new ListMenu(listMenu).createModuleElement();
}
