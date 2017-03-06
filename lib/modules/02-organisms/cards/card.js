"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Style = require('../../../../src/modules/02-organisms/cards/card.scss');
class Card {
    constructor(card) {
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
    getThemeClass(theme) {
        let themeClass = Style.cardThemeDefault;
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
    }
    createModuleElement() {
        let themeClass = this.getThemeClass(this.theme);
        return `
			<div class="card ${Style.card} ${themeClass}">
				<div class="${Style.cardHeader}">
					<span class="${Style.cardHeaderTitle}">${this.title}</span>
				</div>
				<div class="${Style.cardBody}">
					${this.content}
				</div>
			</div>
		`;
    }
}
exports.Card = Card;
function getModule(card) {
    return new Card(card).createModuleElement();
}
exports.getModule = getModule;
