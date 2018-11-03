import * as Dragula from 'dragula';
import * as ListItem from '../../01-molecules/lists/list-item';

const Style = require<any>('../../../../src/modules/02-organisms/lists/list.scss');

export class List {
	id: string = "";
	listItems: ListItem.IListItem[];
	raised: boolean = false;
	hover: boolean = false;
	dragable: boolean = false;
	constructor(list: IList) {
		this.id = list.id;
		if (list.listItems !== undefined) this.listItems = list.listItems;
		if (list.raised !== undefined) this.raised = list.raised;
		if (list.hover !== undefined) this.hover = list.hover;
		if (list.dragable !== undefined) this.dragable = list.dragable;
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

	private getTypeClass(raised: boolean){
		let typeClass = '';
		if (raised) typeClass = Style.listMenuTypeRaised;
		return typeClass;
	}

	public createModuleElement() {
		let dragableClass = '';
		if (this.dragable){
			this.addDragulaListener(this);
			dragableClass = Style.dragable
		}
		let listItemElements = "";
		if (this.listItems !== undefined) {
			let listItemIndex = 0;
			for (let listItem of this.listItems){
				listItem.id = this.id + '-' + listItemIndex;
				listItem.hover = this.hover !== undefined ? this.hover : false;
				listItem.dragable = this.dragable !== undefined ? this.dragable : false;

				let listItemElement = ListItem.getModule(listItem);
				listItemElements += listItemElement;
				listItemIndex++;
			}
		}

		let typeClass = (this.raised !== undefined) ? this.getTypeClass(this.raised) : '';
		let hoverClass: string = this.hover ? Style.hover : "";

		return `<div id='${this.id}' class='${Style.listMenu} ${typeClass} ${hoverClass}'>${listItemElements}</div>`;
	}
}

export interface IList {
	id: string;
	listItems?: ListItem.IListItem[];
	raised?: boolean;
	hover?: boolean;
	dragable?: boolean;
}


export function getModule(list: IList){
	return new List(list).createModuleElement();
}
