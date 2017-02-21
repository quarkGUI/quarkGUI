const Style = require<any>("./list-navigation.scss");

class ListNavigation {
	listItems: IListItem[];
	constructor(listNavigation: IListNavigation) {
		this.listItems = listNavigation.listItems;
	}

	public createModuleElement(){
		let listItemElements: string = "";
		if (this.listItems.length){
			for (let listItem of this.listItems){ 
				listItemElements += `<li><a href="${listItem.link}">${listItem.name}</a></li>`
			};
		}
		return `<ul class="${Style.listNavigation}">${listItemElements}</ul>`
	}
}

interface IListItem {
	name: string;
	link: string;
}

interface IListNavigation{
	listItems: IListItem[];
}

export function getModule(listNavigation: IListNavigation){
	return new ListNavigation(listNavigation).createModuleElement();
}
