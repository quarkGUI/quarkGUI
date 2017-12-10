export declare class InputField {
    id: string;
    name: string;
    type: string;
    value: any;
    placeholder: string;
    attributes: string[];
    vueBindings: IVueBindings;
    constructor(inputField: IInputField);
    private getVueBinding(attributeName);
    private addListener(id);
    private getHtmlAttributes(attributes);
    createModuleElement(): string;
}
export interface IVueBindings {
    id?: string;
    name?: string;
    value?: string;
    placeholder?: string;
}
export interface IInputField {
    id?: string;
    name: string;
    type?: string;
    value?: any;
    placeholder?: string;
    attributes?: string[];
    vueBindings?: IVueBindings;
}
export declare function getModule(inputField: IInputField): string;
