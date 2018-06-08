const Style = require<any>("../../../../src/modules/01-molecules/navigation/list-navigation.scss");

export class ListNavigation {
	listItems: IListItem[];
	constructor(listNavigation: IListNavigation) {
		this.listItems = listNavigation.listItems;
	}

	public createModuleElement(){
		let listItemElements: string = '';
		if (this.listItems.length){
			for (let listItem of this.listItems){ 
				let hasIconElement:boolean = listItem.iconElement !== undefined;
				let hasIconClass:boolean = listItem.iconClass !== undefined;
				let isVueRouterLink:boolean = listItem.vueRouterLink !== undefined ? listItem.vueRouterLink : false;
				let icon:string = '';
				let link:string = listItem.link !== undefined ? listItem.link : '';
				
				if (hasIconElement){
					icon = listItem.iconElement;
				}else if (hasIconClass){
					icon = `<span class='${listItem.iconClass} ${Style.listItemIcon}'></span>`;
				}

				if (isVueRouterLink){
					listItemElements += `<li><router-link v-bind:to='${link}'>${icon}${listItem.name}</router-link></li>`;
				}else{
					listItemElements += `<li><a href='${link}'>${icon}${listItem.name}</a></li>`;
				}
			}
		}
		return `<ul class='${Style.listNavigation}'>${listItemElements}</ul>`;
	}
}

export interface IListItem {
	name: string;
	link?: string;
	iconClass?: string;
	iconElement?: string;
	vueRouterLink?: boolean;
}

export interface IListNavigation{
	listItems: IListItem[];
}

export function getModule(listNavigation: IListNavigation){
	return new ListNavigation(listNavigation).createModuleElement();
}
