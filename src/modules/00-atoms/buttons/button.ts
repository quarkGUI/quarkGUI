const Style = require<any>("../../../../src/modules/00-atoms/buttons/button.scss");

export class Button {
	id: string = "";
	link: string = "#";
	icon: string = "";
	content: string = "";
	type?: string = "flat";
	theme?: string = "default";

	constructor(button: IButton) {
		this.id = button.id;
		if (button.id !== undefined) this.id = button.id;
		if (button.link !== undefined) this.link = button.link;
		if (button.iconClass !== undefined) this.icon = `<span class="${Style.icon} ${button.iconClass}"></span>`;
		if (button.content !== undefined ) this.content = button.content;
		if (button.type !== undefined) this.type = button.type;
		if (button.theme !== undefined) this.theme = button.theme;
	}

	private getThemeClass(theme: string){
		let themeClass = Style.buttonThemeDefault;
		if (theme == "primary")	themeClass = Style.buttonThemePrimary;
		if (theme == "info") 	themeClass = Style.buttonThemeInfo;
		if (theme == "success")	themeClass = Style.buttonThemeSuccess;
		if (theme == "warning")	themeClass = Style.buttonThemeWarning;
		if (theme == "danger") 	themeClass = Style.buttonThemeDanger;
		return themeClass;
	}

	private getTypeClass(type: string){
		let typeClass = Style.buttonTypeFlat;
		if (type == "raised") typeClass = Style.buttonTypeRaised;
		if (type == "minimal") typeClass = Style.buttonTypeMinimal;
		return typeClass;
	}

	public createModuleElement() {
		let themeClass = this.getThemeClass(this.theme)
		let typeClass = (this.type !== undefined) ? this.getTypeClass(this.type) : Style.buttonTypeFlat;
		return `
			<a id="${this.id}" href="${this.link}" class="${Style.button} ${typeClass} ${themeClass}">${this.icon} ${this.content}</a>
		`
	}
}

export interface IButton {
	id?: string; 
	type?: string; 
	theme?: string;
	link ?: string; 
	iconClass?: string; 
	content?: string;
}

export function getModule(button: IButton){
	return new Button(button).createModuleElement();
}
