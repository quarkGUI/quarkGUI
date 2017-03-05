import * as AtomCheckbox from '../../00-atoms/form-elements/checkbox';
export declare class Checkbox extends AtomCheckbox.Checkbox {
    label: string;
    constructor(checkbox: ICheckbox);
    createModuleElement(): string;
}
export interface ICheckbox extends AtomCheckbox.ICheckbox {
    label?: string;
}
export declare function getModule(checkbox: ICheckbox): string;
