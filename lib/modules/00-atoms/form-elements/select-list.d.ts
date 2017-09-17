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
    constructor(selectList: ISelectList);
    private elementIsNotNullOrUndefinedById(id);
    private elementIsNotNullOrUndefinedByTagName(containerElement, tagName);
    private getVueBinding(attributeName);
    private addListener(selectList, inputField, dropdownList);
    private createOptionElements(options);
    createModuleElement(): string;
}
export interface IOptions {
    name: string;
    value: any;
}
export interface IVueBindings {
    options?: string;
}
export interface ISelectList {
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
}
export declare function getModule(selectList: ISelectList): string;
