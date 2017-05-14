export declare class Button {
    id: string;
    link: string;
    icon: string;
    content: string;
    type?: string;
    theme?: string;
    submit?: boolean;
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
    submit?: boolean;
}
export declare function getModule(button: IButton): string;
