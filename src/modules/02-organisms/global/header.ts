import * as PrimaryNavigation from '../../01-molecules/navigation/primary-navigation';
import * as Image from '../../00-atoms/media/image';
import * as Sidebar from './sidebar';

const Style = require<any>('../../../../src/modules/02-organisms/global/header.scss');

export class Header {
	id: string;
	theme: string = "default";
	logo: ILogo;
	primaryNavigation: PrimaryNavigation.IPrimaryNavigation;
	sidebar: Sidebar.ISidebar;
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


export interface ILogo {
	image: Image.IImage;
	url?: string;
}

export interface IHeader {
	id: string;
	theme?: string;
	logo?: ILogo;
	primaryNavigation?: PrimaryNavigation.IPrimaryNavigation;
	sidebar?: Sidebar.ISidebar;
}

export function getModule(header: IHeader){
	return new Header(header).createModuleElement();
}
