export declare class ActionBarMenu {
    id: string;
    theme: string;
    toggleButtons: IToggleButton[];
    constructor(actionBarMenu: IActionBarMenu);
    private getThemeClass(theme);
    createModuleElement(): string;
}
export interface IToggleButton {
    id: string;
    targetClass: string;
    toggleType?: string;
    title?: string;
    theme?: string;
    iconClass?: string;
}
export interface IActionBarMenu {
    id: string;
    theme?: string;
    toggleButtons?: IToggleButton[];
}
export declare function getModule(actionBarMenu: IActionBarMenu): string;
