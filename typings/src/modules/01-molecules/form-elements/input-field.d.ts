export declare class InputField {
    id: string;
    name: string;
    type: string;
    value: any;
    placeholder: string;
    label: string;
    constructor(inputField: IInputField);
    createModuleElement(): string;
}
export interface IInputField {
    id: string;
    name: string;
    type?: string;
    value?: any;
    placeholder?: string;
    label?: string;
}
export declare function getModule(inputField: IInputField): string;
