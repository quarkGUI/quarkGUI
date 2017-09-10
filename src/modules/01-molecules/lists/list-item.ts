import * as ButtonRow from '../../01-molecules/buttons/button-row';

const Style = require<any>('../../../../src/modules/01-molecules/lists/list-item.scss');


export class ListItem implements IListItem{
	id: string;
	title: string;
	subTitle: string;
	link: string;
	iconClass: string;
	hover: boolean = false;
	dragable: boolean = false;
	expandable: boolean = false;
	expandableContent: string;
	buttonRow: ButtonRow.IButtonRow;
	hiddenButtonRow: boolean = false;
	
	constructor(listItem: IListItem) {
		if (listItem.id !== undefined) this.id = listItem.id;
		if (listItem.title !== undefined) this.title = listItem.title;
		if (listItem.subTitle !== undefined) this.subTitle = listItem.subTitle;
		if (listItem.iconClass !== undefined) this.iconClass = listItem.iconClass;
		if (listItem.hover !== undefined) this.hover = listItem.hover;
		if (listItem.dragable !== undefined) this.dragable = listItem.dragable;
		if (listItem.expandable !== undefined) this.expandable = listItem.expandable;
		if (listItem.expandableContent !== undefined) this.expandableContent = listItem.expandableContent;
		if (listItem.buttonRow !== undefined) this.buttonRow = listItem.buttonRow;
		if (listItem.hiddenButtonRow !== undefined) this.hiddenButtonRow = listItem.hiddenButtonRow;
	}

	private addExpandableListener(){
		document.addEventListener('DOMContentLoaded', function() {
			let hasExpandButtonElement: boolean = document.getElementById(this.id + '-expand-button') !== null;
			let hasExpandableContentElement: boolean = document.getElementById(this.id + '-expandable-content') !== null;

			let expandButtonElement:HTMLElement = document.getElementById(this.id + '-expand-button'); 
			let expandableContentElement:HTMLElement = document.getElementById(this.id + '-expandable-content'); 

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
		}.bind(this));
	}

	private addButtonRowListener(){
		document.addEventListener('DOMContentLoaded', function() {
			let titleId = this.id + '-' + 'title';
			let buttonRowId = this.id + '-' + 'buttonrow';
			let buttonRowElement:HTMLElement = document.getElementById(buttonRowId);
			let titleElement:HTMLElement = document.getElementById(titleId);
			if (buttonRowElement !== null && titleElement !== null){
				let buttonRowElementWidth = buttonRowElement.offsetWidth;
				titleElement.style.maxWidth = 'calc(100% - ' + buttonRowElementWidth + 'px)';
			}
		}.bind(this));
	}

	private createTitleElement(){
		let singleLineClass = (this.title !== undefined && this.subTitle == undefined) ? Style.singleLine : '';
		let subTitleElement = (this.subTitle !== undefined) ? `<small>${this.subTitle}</small>` : '';
		let iconElement = (this.iconClass !== undefined) ? `<span class='${Style.listItemIcon} ${this.iconClass}'></span>` : '';

		let titleElement = "";
		if (this.title !== undefined && this.link !== undefined) {
			titleElement = `<a id='${this.id}-title' href='${this.link}' class='${Style.listItemTitle} ${singleLineClass}'>${iconElement}${this.title} ${subTitleElement}</a>`;
		}
		else if (this.title !== undefined) {
			titleElement = `<span id='${this.id}-title' class='${Style.listItemTitle} ${singleLineClass}'>${iconElement}${this.title} ${subTitleElement}</span>`;
		}
		return titleElement;
	}

	private createExpandButtonElement(){
		let expandButtonElement = "";
		if (this.expandable !== undefined && this.expandable === true) {
			expandButtonElement = `<span class='${Style.listItemDivider}'></span><span id='${this.id}-expand-button' class='${Style.listItemExpandButton}'></span>`;
		}
		return expandButtonElement;
	}

	private createButtonRowElement(){
		let buttonRowElement = ""
		let expandButton = this.createExpandButtonElement();

		if (this.buttonRow !== undefined) {
			buttonRowElement = `<span id='${this.id}-buttonrow' class='${Style.listItemButtonRow}'>${ButtonRow.getModule(this.buttonRow)}${expandButton}</span>`;
		}else if (this.expandable !== undefined && this.expandable == true){
			buttonRowElement = `<span id='${this.id}-buttonrow' class='${Style.listItemButtonRow}'>${expandButton}</span>`;
		}

		return buttonRowElement;
	}

	private createExpandableContentElement(){
		let expandableContentElement = "";
		if (this.expandableContent !== undefined) {
			expandableContentElement = `<div id='${this.id}-expandable-content' class='${Style.listItemExpandableContent}'>${this.expandableContent}</div>`;
		}
		return expandableContentElement;
	}

	public createModuleElement() {

		let listItemElements = "";
		let title             = this.createTitleElement();
		let buttonRow         = this.createButtonRowElement();
		let expandableContent = this.createExpandableContentElement();
		if (this.expandable){
			this.addExpandableListener();
		}
		if (this.buttonRow !== undefined){
			this.addButtonRowListener();
		}
		let hiddenButtonRowClass = this.hiddenButtonRow !== undefined && this.hiddenButtonRow ? Style.hiddenButtonRow : '';
		let hoverClass: string = this.hover ? Style.hover : "";

		return `<div class='${Style.listItem} ${hoverClass} ${hiddenButtonRowClass}'>${title}${buttonRow}${expandableContent}</div>`;
	}
}

export interface IListItem {
	id?: string;
	title?: string;
	subTitle?: string;
	link?: string;
	iconClass?: string;
	hover?: boolean;
	dragable?: boolean;
	expandable?: boolean;
	expandableContent?: string;
	buttonRow?: ButtonRow.IButtonRow;
	hiddenButtonRow?: boolean;
}

export function getModule(listItem: IListItem){
	return new ListItem(listItem).createModuleElement();
}
