import * as PrimaryNavigation from '../../01-molecules/navigation/primary-navigation';
import * as Image from '../../00-atoms/media/image';
import * as Sidebar from './sidebar';

const Style = require<any>('./header.scss');

class Header {
	id: string;
	theme: string = "default";
	logo: ILogo;
	primaryNavigation: IPrimaryNavigation;
	sidebar: ISidebar;
	constructor(header: IHeader) {
		if (header.theme !== undefined) this.theme = header.theme;
		if (header.logo !== undefined) this.logo = header.logo;
		if (header.primaryNavigation !== undefined) this.primaryNavigation = header.primaryNavigation;
		if (header.sidebar !== undefined) this.sidebar = header.sidebar;
	}

	private AddListener(){
		document.addEventListener('DOMContentLoaded', function() {
			let sidebarToggleElement = document.getElementById('sidebarToggle') !== undefined ? document.getElementById('sidebarToggle') : false;
			
		}, false);
	}

	private getThemeClass(theme: string){
		let themeClass = Style.headerThemeDefault;
		if (theme == 'primary') themeClass = Style.headerThemePrimary;
		if (theme == 'dark') themeClass = Style.headerThemeDark;
		return themeClass;
	}

	public createModuleElement() {
		let themeClass: string = this.getThemeClass(this.theme);
		let logoImage = "";
		let logoUrl = "#";
		let sidebarElement = "";
		let primaryNavigationElement = "";
		if (this.logo !== undefined){
			if (this.logo.image !== undefined) logoImage = Image.getModule(this.logo.image);
			if (this.logo.url !== undefined) logoUrl = this.logo.url;
		}
		if (this.sidebar !== undefined){
			sidebarElement = `
				<div id="sidebarToggle" class="overlay-element ${Style.sidenavToggle}">
					${Sidebar.getModule(this.sidebar)}
				</div>
			`;
		}
		if (this.primaryNavigation !== undefined) {
			if (this.primaryNavigation.theme == undefined) {
				this.primaryNavigation.theme = this.theme;
			}
			this.primaryNavigation.id = this.id + '-primary-navigation';
			primaryNavigationElement = PrimaryNavigation.getModule(this.primaryNavigation);
		}
		return `
			<header class="${Style.navbar} ${themeClass}">
				${sidebarElement}
				<a href="${logoUrl}" class="${Style.logo}">
					${logoImage}
				</a>
				<span class="${Style.menuDivider}"></span>
				${primaryNavigationElement}
			</header>
		`
	}
}

interface IImage {
	src: any;
	alt?: string; 
}

interface ILogo {
	image: IImage;
	url?: string;
}

interface ISidebarListItem {
	name: string;
	link: string;
	id?: string;
	moduleLink?: string;
}

interface ISidebarNavigation {
	listItems: ISidebarListItem[];
}

interface ISidebar{
	sidebarNavigation?: ISidebarNavigation;
	logo?: ILogo;
}

interface IDropdownContent {
	listItems: IListItem[];
}

interface IListItem {
	name: string;
	link: string;
	dropdownContent?: IDropdownContent;
}

interface IPrimaryNavigation {
	id?: string;
	theme?: string;
	listItems?: IListItem[];
}

interface IHeader {
	id: string;
	theme?: string;
	logo?: ILogo;
	primaryNavigation?: IPrimaryNavigation;
	sidebar?: ISidebar;
}

export function getModule(header: IHeader){
	return new Header(header).createModuleElement();
}