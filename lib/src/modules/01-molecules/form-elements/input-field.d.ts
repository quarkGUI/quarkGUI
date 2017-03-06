import * as AtomInputField from '../../00-atoms/form-elements/input-field';
export declare class InputField extends AtomInputField.InputField {
    label: string;
    constructor(inputField: IInputField);
    createModuleElement(): string;
}
export interface IInputField extends AtomInputField.IInputField {
    label?: string;
}
export declare function getModule(inputField: IInputField): string;
