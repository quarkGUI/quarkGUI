export declare class Checkbox {
    id: string;
    name: string;
    value: string;
    attributes: string[];
    vueBindings: IVueBindings;
    constructor(checkbox: ICheckbox);
    private getVueBinding(attributeName);
    private addListener(id);
    private getHtmlAttributes(attributes);
    createModuleElement(): string;
}
export interface IVueBindings {
    id?: string;
    name?: string;
    value?: string;
}
export interface ICheckbox {
    id: string;
    name: string;
    value: string;
    attributes?: string[];
    vueBindings?: IVueBindings;
}
export declare function getModule(checkbox: ICheckbox): string;
