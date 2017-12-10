import * as InputField from './input-field';
export declare let eventListeners: string[];
export declare class SelectList {
    id: string;
    name: string;
    searchable?: boolean;
    type?: string;
    value?: any;
    placeholder?: string;
    labelElement?: string;
    options?: IOptions[];
    attributes?: string[];
    vueBindings?: IVueBindings;
    inputField: InputField.IInputField;
    searchInputField: InputField.IInputField;
    dropdownList: {
        id: string;
    };
    constructor(selectList: ISelectList);
    private elementIsNotNullOrUndefinedById(id);
    private elementIsNotNullOrUndefinedByTagName(containerElement, tagName);
    private getVueBinding(attributeName);
    private initFunction(id?);
    private addListener();
    private createOptionElements(options);
    createModuleElement(): string;
}
export interface IOptions {
    name: string;
    value: any;
}
export interface IVueBindings {
    options?: string;
    value?: any;
    id?: string;
}
export interface ISelectList {
    id?: string;
    name: string;
    searchable?: boolean;
    type?: string;
    value?: any;
    placeholder?: string;
    labelElement?: string;
    options?: IOptions[];
    attributes?: string[];
    vueBindings?: IVueBindings;
}
export declare function getModule(selectList: ISelectList): string;
