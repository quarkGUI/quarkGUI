export declare class ActionButton {
    id: string;
    icon: string;
    themeClass: string;
    constructor(actionButton: IActionButton);
    private getThemeClass(theme);
    private addListener(id);
    createModuleElement(): string;
}
export interface IActionButton {
    id: string;
    theme?: string;
    iconClass?: string;
}
export declare function getModule(actionButton: IActionButton): string;
