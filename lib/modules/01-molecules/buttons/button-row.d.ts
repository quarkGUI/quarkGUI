import * as Button from '../../00-atoms/buttons/button';
export declare class ButtonRow {
    id: string;
    buttons: Button.IButton[];
    constructor(buttonRow: IButtonRow);
    createModuleElement(): string;
}
export interface IButtonRow {
    id: string;
    buttons: Button.IButton[];
}
export declare function getModule(buttonRow: IButtonRow): string;
