import * as ToggleButton from '../../00-atoms/buttons/toggle-button';
export declare class ActionBarMenu {
    id: string;
    theme: string;
    toggleButtons: ToggleButton.IToggleButton[];
    constructor(actionBarMenu: IActionBarMenu);
    private getThemeClass(theme);
    createModuleElement(): string;
}
export interface IActionBarMenu {
    id: string;
    theme?: string;
    toggleButtons?: ToggleButton.IToggleButton[];
}
export declare function getModule(actionBarMenu: IActionBarMenu): string;
