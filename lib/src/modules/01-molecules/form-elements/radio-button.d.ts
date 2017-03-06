import * as AtomRadioButton from '../../00-atoms/form-elements/radio-button';
export declare class RadioButton extends AtomRadioButton.RadioButton {
    label: string;
    constructor(radioButton: IRadioButton);
    createModuleElement(): string;
}
export interface IRadioButton extends AtomRadioButton.IRadioButton {
    label?: string;
}
export declare function getModule(radioButton: IRadioButton): string;
