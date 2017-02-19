const Style = require<any>("./button.scss");

class Button {
	id: string;
	link: string = "#";
	icon: string = '';
	content: string;
	typeClass: string = Style.buttonTypeFlat;
	themeClass: string = Style.buttonThemeDefault;
	constructor(button: IButton) {
		this.id = button.id;
		if (button.link !== undefined) this.link = button.link;
		if (button.iconClass !== undefined) this.icon = `<span class="${Style.icon} ${button.iconClass}"></span>`;
		if (button.content !== undefined ) this.content = button.content;
		if (button.type !== undefined && button.type == 'raised') this.typeClass = Style.buttonTypeRaised;
		if (button.theme !== undefined) this.themeClass = this.getThemeClass(button.theme);
	}

	private getThemeClass(theme: string){
		let themeClass = '';
		if (theme == 'primary')	themeClass = Style.buttonThemePrimary;
		if (theme == 'info') 	themeClass = Style.buttonThemeInfo;
		if (theme == 'success')	themeClass = Style.buttonThemeSuccess;
		if (theme == 'warning')	themeClass = Style.buttonThemeWarning;
		if (theme == 'danger') 	themeClass = Style.buttonThemeDanger;
		return themeClass;
	}

	public createModuleElement() {
		return `
			<a id="${this.id}" href="${this.link}" class="${Style.button} ${this.typeClass} ${this.themeClass}">${this.icon} ${this.content}</a>
		`
	}
}

interface IButton {
    id: string; 
    type?: string; 
    theme?: string;
    link ?: string; 
    iconClass?: string; 
    content?: string;
}

export function getModule(button: IButton){
	return new Button(button).createModuleElement();
}
