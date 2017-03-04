export declare class RadioButton {
    id: string;
    name: string;
    value: string;
    constructor(radioButton: IRadioButton);
    private addListener(id);
    createModuleElement(): string;
}
export interface IRadioButton {
    id: string;
    name: string;
    value: string;
}
export declare function getModule(radioButton: IRadioButton): string;
