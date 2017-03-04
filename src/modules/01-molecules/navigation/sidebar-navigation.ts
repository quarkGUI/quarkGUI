const Style = require<any>('./sidebar-navigation.scss');

export class SidebarNavigation {
	listItems: IListItem[];
	constructor(sidebarNavigation: ISidebarNavigation) {
		this.listItems = sidebarNavigation.listItems;
	}

	private createListItemElements(listItems){
		let listItemElements = "";
		for (let listItem of this.listItems){
			let id         = listItem.id         !== undefined ? `id="${listItem.id}"` : '';
			let moduleLink = listItem.moduleLink !== undefined ? `data-module-target="${listItem.moduleLink}"` : '';

			listItemElements += `<li><a class="loadPage" ${id} ${listItem.link} ${moduleLink}>${listItem.name}</a></li>`;
		}
		return listItemElements;
	}

	public createModuleElement(){
		let listItemElements: string = this.createListItemElements(this.listItems);
		
		return `<ul class="${Style.list}">${listItemElements}</ul>`
	}
}

export interface IListItem {
	name: string;
	link: string;
	id?: string;
	moduleLink?: string;
}

export interface ISidebarNavigation {
	listItems: IListItem[];
}

export function getModule(sidebarNavigation: ISidebarNavigation){
	return new SidebarNavigation(sidebarNavigation).createModuleElement();
}