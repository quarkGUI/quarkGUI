import * as Image from '../../00-atoms/media/image';

const Style = require<any>('../../../../src/modules/02-organisms/global/footer.scss');

export class Footer {
	theme: string = "default";
	content: string = "";
	logo: ILogo;
	constructor(footer: IFooter) {
		if (footer.theme !== undefined) this.theme = footer.theme;
		if (footer.content !== undefined) this.content = footer.content;
		if (footer.logo !== undefined) this.logo = footer.logo;
	}

	private getThemeClass(theme: string){
		let themeClass = Style.footerThemeDefault;
		if (theme == 'primary') themeClass = Style.footerThemePrimary;
		if (theme == 'dark') themeClass = Style.footerThemeDark;
		return themeClass;
	}

	public createModuleElement() {
		let themeClass: string = this.getThemeClass(this.theme);
		let logoImage = "";
		let logoUrl = "";
		if (this.logo !== undefined){
			if (this.logo.image !== undefined) logoImage = Image.getModule(this.logo.image);
			if (this.logo.url !== undefined) logoUrl = this.logo.url;
		} 

		return `<footer class='${Style.footer} ${themeClass}'><a href='${logoUrl}' class='${Style.logo}'>${logoImage}</a>${this.content}</footer>`;
	}
}

export interface ILogo {
	image: Image.IImage;
	url?: string;
}

export interface IFooter {
	theme?: string;
	content?: string;
	logo?: ILogo;
}

export function getModule(footer: IFooter){
	return new Footer(footer).createModuleElement();
}
