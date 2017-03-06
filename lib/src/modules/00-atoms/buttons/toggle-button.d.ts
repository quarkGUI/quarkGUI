export declare class ToggleButton {
    id: string;
    targetClass: string;
    toggleType: string;
    title: string;
    themeClass: string;
    icon: string;
    constructor(toggleButton: IToggleButton);
    private getThemeClass(theme);
    private addListener(id, targetClass);
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
export declare function getModule(toggleButton: IToggleButton): string;
