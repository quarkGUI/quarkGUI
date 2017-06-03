const Style = require<any>("../../../../src/modules/01-molecules/navigation/breadcrumbs.scss");

export class Breadcrumbs {
	breadcrumbItems: IBreadcrumbItem[];
	constructor(breadcrumbs: IBreadcrumbs) {
		this.breadcrumbItems = breadcrumbs.breadcrumbItems;
	}

	public createModuleElement(){
		let breadcrumbItemElements: string = "";
		if (this.breadcrumbItems.length){
			let position = 1;
			for (let breadcrumbItem of this.breadcrumbItems){ 
				breadcrumbItemElements += `<li itemprop='itemListElement' itemscope itemtype='http://schema.org/ListItem'><a itemprop='item' href='${breadcrumbItem.link}''><span itemprop='name'>${breadcrumbItem.name}</span></a><meta itemprop='position' content='${position}'/></li>`;
				position++;
			}
		}
		return `<ol itemscope itemtype='http://schema.org/BreadcrumbList' class='${Style.breadcrumbs}'>${breadcrumbItemElements}</ol>`;
	}
}

export interface IBreadcrumbItem {
	name: string;
	link: string;
}

export interface IBreadcrumbs{
	breadcrumbItems: IBreadcrumbItem[];
}

export function getModule(breadcrumbs: IBreadcrumbs){
	return new Breadcrumbs(breadcrumbs).createModuleElement();
}
