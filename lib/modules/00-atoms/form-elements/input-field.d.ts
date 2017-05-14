export declare class InputField {
    id: string;
    name: string;
    type: string;
    value: any;
    placeholder: string;
    attributes: string[];
    constructor(inputField: IInputField);
    private addListener(id);
    private getHtmlAttributes(attributes);
    createModuleElement(): string;
}
export interface IInputField {
    id: string;
    name: string;
    type?: string;
    value?: any;
    placeholder?: string;
    attributes?: string[];
}
export declare function getModule(inputField: IInputField): string;
