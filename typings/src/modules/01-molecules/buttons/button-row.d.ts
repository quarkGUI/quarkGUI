export declare class ButtonRow {
    id: string;
    buttons: IButton[];
    constructor(buttonRow: IButtonRow);
    createModuleElement(): string;
}
export interface IButton {
    id: string;
    type?: string;
    theme?: string;
    link?: string;
    iconClass?: string;
    content?: string;
}
export interface IButtonRow {
    id: string;
    buttons: IButton[];
}
export declare function getModule(buttonRow: IButtonRow): string;
