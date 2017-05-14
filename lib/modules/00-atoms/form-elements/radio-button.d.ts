export declare class RadioButton {
    id: string;
    name: string;
    value: string;
    attributes: string[];
    constructor(radioButton: IRadioButton);
    private addListener(id);
    private getHtmlAttributes(attributes);
    createModuleElement(): string;
}
export interface IRadioButton {
    id: string;
    name: string;
    value: string;
    attributes?: string[];
}
export declare function getModule(radioButton: IRadioButton): string;
