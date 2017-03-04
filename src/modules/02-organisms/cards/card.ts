const Style = require<any>('./card.scss');

export class Card {
	theme: string = "default";
	title: string = "";
	content: string = "";
	constructor(card: ICard) {
		if (card.theme !== undefined) this.theme = card.theme;
		if (card.title !== undefined) this.title = card.title;
		if (card.content !== undefined) this.content = card.content;
	}

	private getThemeClass(theme: string){
		let themeClass = Style.cardThemeDefault;
		if (theme == 'primary')	themeClass = Style.cardThemePrimary;
		if (theme == 'info') 	themeClass = Style.cardThemeInfo;
		if (theme == 'success')	themeClass = Style.cardThemeSuccess;
		if (theme == 'warning')	themeClass = Style.cardThemeWarning;
		if (theme == 'danger') 	themeClass = Style.cardThemeDanger;
		return themeClass;
	}

	public createModuleElement() {
		let themeClass: string = this.getThemeClass(this.theme);
		return `
			<div class="card ${Style.card} ${themeClass}">
				<div class="${Style.cardHeader}">
					<span class="${Style.cardHeaderTitle}">${this.title}</span>
				</div>
				<div class="${Style.cardBody}">
					${this.content}
				</div>
			</div>
		`
	}
}

export interface ICard {
	theme?: string;
	title?: string;
	content?: string;
}

export function getModule(card: ICard){
	return new Card(card).createModuleElement();
}
