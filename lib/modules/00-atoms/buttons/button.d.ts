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
    constructor(button: IButton);
    private getThemeClass(theme);
    private getTypeClass(type);
    private getHtmlAttributes(attributes);
    createModuleElement(): string;
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
}
export declare function getModule(button: IButton): string;
