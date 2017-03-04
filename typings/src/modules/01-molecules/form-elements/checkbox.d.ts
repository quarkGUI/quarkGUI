export declare class Checkbox {
    id: string;
    name: string;
    value: string;
    label: string;
    constructor(checkbox: ICheckbox);
    createModuleElement(): string;
}
export interface ICheckbox {
    id: string;
    name: string;
    value: string;
    label?: string;
}
export declare function getModule(checkbox: ICheckbox): string;
