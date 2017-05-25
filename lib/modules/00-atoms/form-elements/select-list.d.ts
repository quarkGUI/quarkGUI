export declare class SelectList {
    id: string;
    name: string;
    searchable: boolean;
    type: string;
    value: any;
    placeholder: string;
    labelElement: string;
    optionElements: string;
    attributes: string[];
    constructor(selectList: ISelectList);
    private updateDropdownListHeight(dropdownListElement);
    private elementIsNotNullOrUndefinedById(id);
    private elementIsNotNullOrUndefinedByTagName(containerElement, tagName);
    private addListener(selectList, inputField, dropdownList);
    private createOptionElements(options);
    createModuleElement(): string;
}
export interface IOptions {
    name: string;
    value: any;
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
}
export declare function getModule(selectList: ISelectList): string;
