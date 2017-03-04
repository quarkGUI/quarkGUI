export declare class RadioButton {
    id: string;
    name: string;
    value: string;
    label: string;
    constructor(radioButton: IRadioButton);
    createModuleElement(): string;
}
export interface IRadioButton {
    id: string;
    name: string;
    value: string;
    label?: string;
}
export declare function getModule(radioButton: IRadioButton): string;
