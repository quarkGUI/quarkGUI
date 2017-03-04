"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Image = require("../../00-atoms/media/image");
const Style = require('./footer.scss');
class Footer {
    constructor(footer) {
        this.theme = "default";
        this.content = "";
        if (footer.theme !== undefined)
            this.theme = footer.theme;
        if (footer.content !== undefined)
            this.content = footer.content;
        if (footer.logo !== undefined)
            this.logo = footer.logo;
    }
    getThemeClass(theme) {
        let themeClass = Style.footerThemeDefault;
        if (theme == 'primary')
            themeClass = Style.footerThemePrimary;
        if (theme == 'dark')
            themeClass = Style.footerThemeDark;
        return themeClass;
    }
    createModuleElement() {
        let themeClass = this.getThemeClass(this.theme);
        let logoImage = "";
        let logoUrl = "";
        if (this.logo !== undefined) {
            if (this.logo.image !== undefined)
                logoImage = Image.getModule(this.logo.image);
            if (this.logo.url !== undefined)
                logoUrl = this.logo.url;
        }
        return `
			<footer class="${Style.footer} ${themeClass}">
				<a href="${logoUrl}" class="${Style.logo}">
					${logoImage}
				</a>
				${this.content}
			</footer>
		`;
    }
}
exports.Footer = Footer;
function getModule(footer) {
    return new Footer(footer).createModuleElement();
}
exports.getModule = getModule;
