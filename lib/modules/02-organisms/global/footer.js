"use strict";
exports.__esModule = true;
var Image = require("../../00-atoms/media/image");
var Style = require('../../../../src/modules/02-organisms/global/footer.scss');
var Footer = /** @class */ (function () {
    function Footer(footer) {
        this.theme = "default";
        this.content = "";
        if (footer.theme !== undefined)
            this.theme = footer.theme;
        if (footer.content !== undefined)
            this.content = footer.content;
        if (footer.logo !== undefined)
            this.logo = footer.logo;
    }
    Footer.prototype.getThemeClass = function (theme) {
        var themeClass = Style.footerThemeDefault;
        if (theme == 'primary')
            themeClass = Style.footerThemePrimary;
        if (theme == 'dark')
            themeClass = Style.footerThemeDark;
        return themeClass;
    };
    Footer.prototype.createModuleElement = function () {
        var themeClass = this.getThemeClass(this.theme);
        var logoImage = "";
        var logoUrl = "";
        if (this.logo !== undefined) {
            if (this.logo.image !== undefined)
                logoImage = Image.getModule(this.logo.image);
            if (this.logo.url !== undefined)
                logoUrl = this.logo.url;
        }
        return "<footer class='" + Style.footer + " " + themeClass + "'><div class='" + Style.logo + "'><a href='" + logoUrl + "'>" + logoImage + "</a></div>" + this.content + "</footer>";
    };
    return Footer;
}());
exports.Footer = Footer;
function getModule(footer) {
    return new Footer(footer).createModuleElement();
}
exports.getModule = getModule;
