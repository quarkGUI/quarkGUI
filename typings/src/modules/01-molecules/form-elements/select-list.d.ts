export declare class SelectList {
    id: string;
    name: string;
    searchable?: boolean;
    type?: string;
    value?: any;
    placeholder?: string;
    label?: string;
    options?: IOptions[];
    constructor(selectList: ISelectList);
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
    label?: string;
    options?: IOptions[];
}
export declare function getModule(selectList: ISelectList): string;
