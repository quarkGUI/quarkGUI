export declare class Checkbox {
    id: string;
    name: string;
    value: string;
    attributes: string[];
    constructor(checkbox: ICheckbox);
    private addListener(id);
    private getHtmlAttributes(attributes);
    createModuleElement(): string;
}
export interface ICheckbox {
    id: string;
    name: string;
    value: string;
    attributes?: string[];
}
export declare function getModule(checkbox: ICheckbox): string;
