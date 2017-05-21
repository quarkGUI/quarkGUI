import * as Button from '../../00-atoms/buttons/button';
export declare class ButtonRow {
    id: string;
    buttons: Button.IButton[];
    constructor(buttonRow: IButtonRow);
    createModuleElement(): string;
}
export interface IButtonRow {
    buttons: Button.IButton[];
    id?: string;
}
export declare function getModule(buttonRow: IButtonRow): string;
