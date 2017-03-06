export declare class Checkbox {
    id: string;
    name: string;
    value: string;
    constructor(checkbox: ICheckbox);
    private addListener(id);
    createModuleElement(): string;
}
export interface ICheckbox {
    id: string;
    name: string;
    value: string;
}
export declare function getModule(checkbox: ICheckbox): string;
