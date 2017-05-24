import * as ListNavigation from './list-navigation';

const Style = require<any>('../../../../src/modules/01-molecules/navigation/sidebar-navigation.scss');

export class SidebarNavigation {
	listItems: IListItem[];
	constructor(sidebarNavigation: ISidebarNavigation) {
		this.listItems = sidebarNavigation.listItems;
	}

	private createListItemElements(listItems){
		let listItemElements = "";
		for (let listItem of this.listItems){
			let id = listItem.id !== undefined ? `id='${listItem.id}'` : '';
			let hasModuleLink: boolean = listItem.moduleLink !== undefined;
			let hasLink: boolean = listItem.link !== undefined;
			let hasIcon: boolean = listItem.iconClass !== undefined;

			let linkAttribute: string = '';
			let iconElement: string = '';
			if (hasModuleLink){
				linkAttribute = `data-module-target='${listItem.moduleLink}'`;
			}else if(hasLink){
				linkAttribute = `href='${listItem.link}'`;
			}

			if (hasIcon){
				iconElement = `<span class='${listItem.iconClass} ${Style.listItemIcon}'></span>`;
			}
			listItemElements += `<li><a class='loadPage' ${id} ${linkAttribute}>${iconElement}${listItem.name}</a></li>`;
		}
		return listItemElements;
	}

	public createModuleElement(){
		let listItemElements: string = this.createListItemElements(this.listItems);
		
		return `<ul class='${Style.list}'>${listItemElements}</ul>`;
	}
}

export interface IListItem extends ListNavigation.IListItem{
	id?: string;
	moduleLink?: string;
}

export interface ISidebarNavigation {
	listItems: IListItem[];
}

export function getModule(sidebarNavigation: ISidebarNavigation){
	return new SidebarNavigation(sidebarNavigation).createModuleElement();
}