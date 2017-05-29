export declare class Button {
    id: string;
    link: string;
    icon: string;
    content: string;
    title: string;
    type?: string;
    theme?: string;
    submit?: boolean;
    attributes: string[];
    formWrapper: IFormWrapper;
    constructor(button: IButton);
    private getThemeClass(theme);
    private getTypeClass(type);
    private getHtmlAttributes(attributes);
    private addFormWrapper(moduleElement);
    createModuleElement(): string;
}
export interface IFormWrapper {
    formAction?: string;
    formMethod?: string;
}
export interface IButton {
    id?: string;
    type?: string;
    theme?: string;
    link?: string;
    iconClass?: string;
    content?: string;
    title?: string;
    submit?: boolean;
    attributes?: string[];
    formWrapper?: IFormWrapper;
}
export declare function getModule(button: IButton): string;
