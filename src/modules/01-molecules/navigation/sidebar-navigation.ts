import * as ListNavigation from './list-navigation';

const Style = require<any>('../../../../src/modules/01-molecules/navigation/sidebar-navigation.scss');

export class SidebarNavigation {
	listItems: ListNavigation.IListItem[];
	constructor(sidebarNavigation: ISidebarNavigation) {
		this.listItems = sidebarNavigation.listItems;
	}

	private createListItemElements(listItems){
		let listItemElements = "";
		listItemElements = ListNavigation.getModule({listItems: listItems});
		return listItemElements;
	}

	public createModuleElement(){
		let listItemElements: string = this.createListItemElements(this.listItems);
		
		return `<ul class='${Style.list}'>${listItemElements}</ul>`;
	}
}

export interface ISidebarNavigation {
	listItems: ListNavigation.IListItem[];
}

export function getModule(sidebarNavigation: ISidebarNavigation){
	return new SidebarNavigation(sidebarNavigation).createModuleElement();
}