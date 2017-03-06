export declare class InputField {
    id: string;
    name: string;
    type: string;
    value: any;
    placeholder: string;
    constructor(inputField: IInputField);
    private addListener(id);
    createModuleElement(): string;
}
export interface IInputField {
    id: string;
    name: string;
    type?: string;
    value?: any;
    placeholder?: string;
}
export declare function getModule(inputField: IInputField): string;
