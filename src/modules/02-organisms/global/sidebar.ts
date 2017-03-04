import * as SidebarNavigation from '../../01-molecules/navigation/sidebar-navigation';
import * as Image from '../../00-atoms/media/image';

const Style = require<any>('./sidebar.scss');

export class Sidebar {
	sidebarNavigation: ISidebarNavigation;
	logo: ILogo;
	constructor(sidebar: ISidebar) {
		if (sidebar.sidebarNavigation !== undefined) this.sidebarNavigation = sidebar.sidebarNavigation;
		if (sidebar.logo !== undefined) this.logo = sidebar.logo;
	}

	public createModuleElement() {
		let logoImage = "";
		let logoUrl = "#";
		let SidebarNavigationElement = SidebarNavigation.getModule(this.sidebarNavigation);
		
		if (this.logo !== undefined){
			if (this.logo.image !== undefined) logoImage = Image.getModule(this.logo.image);
			if (this.logo.url !== undefined) logoUrl = this.logo.url;
		} 

		return `
			<aside class="${Style.sidebar}">
				<div class="${Style.sidebarOverlay}"></div>
				<div class="${Style.sidebarContent}">
					<a href="${logoUrl}" class="${Style.logo}">
						${logoImage}
					</a>
					${SidebarNavigationElement}
				</div>
			</aside>
		`
	}
}

export interface IImage {
	src: any;
	alt?: string; 
}

export interface ILogo {
	image: IImage;
	url?: string;
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

export interface ISidebar{
	sidebarNavigation?: ISidebarNavigation;
	logo?: ILogo;
}

export function getModule(sidebar: ISidebar){
	return new Sidebar(sidebar).createModuleElement();
}
