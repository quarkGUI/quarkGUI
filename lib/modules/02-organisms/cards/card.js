"use strict";
exports.__esModule = true;
var Style = require('../../../../src/modules/02-organisms/cards/card.scss');
var Card = (function () {
    function Card(card) {
        this.theme = "default";
        this.title = "";
        this.content = "";
        if (card.theme !== undefined)
            this.theme = card.theme;
        if (card.title !== undefined)
            this.title = card.title;
        if (card.content !== undefined)
            this.content = card.content;
    }
    Card.prototype.getThemeClass = function (theme) {
        var themeClass = Style.cardThemeDefault;
        if (theme == 'primary')
            themeClass = Style.cardThemePrimary;
        if (theme == 'info')
            themeClass = Style.cardThemeInfo;
        if (theme == 'success')
            themeClass = Style.cardThemeSuccess;
        if (theme == 'warning')
            themeClass = Style.cardThemeWarning;
        if (theme == 'danger')
            themeClass = Style.cardThemeDanger;
        return themeClass;
    };
    Card.prototype.createModuleElement = function () {
        var themeClass = this.getThemeClass(this.theme);
        return "<div class='card " + Style.card + " " + themeClass + "'><div class='" + Style.cardHeader + "'><span class='" + Style.cardHeaderTitle + "'>" + this.title + "</span></div><div class='" + Style.cardBody + "'>" + this.content + "</div></div>";
    };
    return Card;
}());
exports.Card = Card;
function getModule(card) {
    return new Card(card).createModuleElement();
}
exports.getModule = getModule;
