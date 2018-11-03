import * as PrimaryNavigation from '../../01-molecules/navigation/primary-navigation';
import * as Image from '../../00-atoms/media/image';
import * as Sidebar from './sidebar';

const Style = require<any>('../../../../src/modules/02-organisms/global/header.scss');

export class Header {
	id: string;
	theme: string = "default";
	logo: ILogo;
	primaryNavigationLeft: PrimaryNavigation.IPrimaryNavigation;
	primaryNavigationRight: PrimaryNavigation.IPrimaryNavigation;
	htmlContent: string;
	sidebar: Sidebar.ISidebar;
	constructor(header: IHeader) {
		if (header.theme !== undefined) this.theme = header.theme;
		if (header.logo !== undefined) this.logo = header.logo;
		if (header.primaryNavigationLeft !== undefined) this.primaryNavigationLeft = header.primaryNavigationLeft;
		if (header.primaryNavigationRight !== undefined) this.primaryNavigationRight = header.primaryNavigationRight;
		if (header.htmlContent !== undefined) this.htmlContent = header.htmlContent;
		if (header.sidebar !== undefined) this.sidebar = header.sidebar;
	}

	private addListener(){
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
		this.addListener();
		let themeClass: string = this.getThemeClass(this.theme);
		let logoImage = "";
		let logoUrl = "#";
		let sidebarElement = "";
		if (this.logo !== undefined){
			if (this.logo.image !== undefined) logoImage = Image.getModule(this.logo.image);
			if (this.logo.url !== undefined) logoUrl = this.logo.url;
		}
		if (this.sidebar !== undefined){
			sidebarElement = `<div id='sidebarToggle' class='overlay-element ${Style.sidenavToggle}'>${Sidebar.getModule(this.sidebar)}</div>`;
		}

		let primaryNavigationLeftElement = "";
		if (this.primaryNavigationLeft !== undefined) {
			if (this.primaryNavigationLeft.theme == undefined) {
				this.primaryNavigationLeft.theme = this.theme;
			}
			this.primaryNavigationLeft.id = this.id + '-primary-navigation-left';
			primaryNavigationLeftElement = PrimaryNavigation.getModule(this.primaryNavigationLeft);
		}
		
		let primaryNavigationRightElement = "";
		if (this.primaryNavigationRight !== undefined) {
			if (this.primaryNavigationRight.theme == undefined) {
				this.primaryNavigationRight.theme = this.theme;
			}
			this.primaryNavigationRight.id = this.id + '-primary-navigation-right';
			primaryNavigationRightElement = PrimaryNavigation.getModule(this.primaryNavigationRight);
		}
		let htmlContent = (this.htmlContent !== undefined && this.htmlContent !== null) ? this.htmlContent : "";
		
		return `<header class='${Style.navbar} ${themeClass}'>${sidebarElement}<a href='${logoUrl}' class='${Style.logo}'>${logoImage}</a><span class='${Style.menuDivider}'></span><div class='${Style.primaryNavigationLeft}'>${primaryNavigationLeftElement}</div>${htmlContent}<div class='${Style.primaryNavigationRight}'>${primaryNavigationRightElement}</div></header>`;
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
	primaryNavigationLeft?: PrimaryNavigation.IPrimaryNavigation;
	primaryNavigationRight?: PrimaryNavigation.IPrimaryNavigation;
	htmlContent?: string;
	sidebar?: Sidebar.ISidebar;
}

export function getModule(header: IHeader){
	return new Header(header).createModuleElement();
}
