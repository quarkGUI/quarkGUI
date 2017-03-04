export declare class Button {
    id: string;
    link: string;
    icon: string;
    content: string;
    type?: string;
    theme?: string;
    constructor(button: IButton);
    private getThemeClass(theme);
    private getTypeClass(type);
    createModuleElement(): string;
}
export interface IButton {
    id?: string;
    type?: string;
    theme?: string;
    link?: string;
    iconClass?: string;
    content?: string;
}
export declare function getModule(button: IButton): string;
