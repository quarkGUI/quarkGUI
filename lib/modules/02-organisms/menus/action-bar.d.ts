import * as ActionButton from '../../00-atoms/buttons/action-button';
import * as ActionBarMenu from '../../01-molecules/menus/action-bar-menu';
export declare class ActionBar {
    theme: string;
    actionButton: ActionButton.IActionButton;
    actionBarMenu: ActionBarMenu.IActionBarMenu;
    constructor(actionBar: IActionBar);
    createModuleElement(): string;
}
export interface IActionBar {
    theme?: string;
    actionButton: ActionButton.IActionButton;
    actionBarMenu: ActionBarMenu.IActionBarMenu;
}
export declare function getModule(actionBar: IActionBar): string;
