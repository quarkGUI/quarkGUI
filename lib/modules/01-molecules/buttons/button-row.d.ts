import * as Button from '../../00-atoms/buttons/button';
export declare class ButtonRow {
    id: string;
    buttons: Button.IButton[];
    buttonElements: any[];
    buttonElementsFirst: boolean;
    constructor(buttonRow: IButtonRow);
    createModuleElement(): string;
}
export interface IButtonRow {
    buttons?: Button.IButton[];
    buttonElements?: string[];
    buttonElementsFirst?: boolean;
    id?: string;
}
export declare function getModule(buttonRow: IButtonRow): string;
