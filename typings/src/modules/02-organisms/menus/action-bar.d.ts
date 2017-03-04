export declare class ActionBar {
    theme: string;
    actionButton: IActionButton;
    actionBarMenu: IActionBarMenu;
    constructor(actionBar: IActionBar);
    createModuleElement(): string;
}
export interface IActionButton {
    id: string;
    theme?: string;
    iconClass?: string;
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
export interface IActionBar {
    theme?: string;
    actionButton: IActionButton;
    actionBarMenu: IActionBarMenu;
}
export declare function getModule(actionBar: IActionBar): string;
