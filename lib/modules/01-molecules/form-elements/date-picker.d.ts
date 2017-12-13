import * as InputField from './input-field';
import * as Modal from '../messaging/modal';
export declare class DatePicker {
    id: string;
    name: string;
    type: string;
    value: any;
    placeholder: string;
    label: string;
    activeDate: IDatePickerDate;
    selectedDate: IDatePickerDate;
    visibleDate: IDatePickerDate;
    selectedTime: IDatePickerTime;
    visibleTime: IDatePickerTime;
    attributes: string[];
    clockOptions: IClockOptions;
    inputField: InputField.IInputField;
    modal: Modal.IModal;
    dummyInputField: {
        id: string;
    };
    dummyInputFieldValue: {
        id: string;
    };
    constructor(datePicker: IDatePicker);
    private elementIsNotNullOrUndefinedById(id);
    private initFunction(id?);
    private addListener();
    private addDisabledOrReadOnlyListener(inputField);
    private addDateSelectorListener();
    private initSelectedTime();
    private addTimeSelectorListener();
    private createDateSelectorElement();
    private datePickerValueIsValid();
    private getDatePreviewElementInfoMessage();
    private createPreviewElement();
    private getTimeSelectorSizeClass();
    private createTimeSelectorElement();
    private createDayNameElements();
    private createMonthElement();
    private getDateValue();
    private setDateValue();
    private getTimeValue();
    private setTimeValue();
    private setDateTimeValue();
    private updateSubmitButtonState();
    createModuleElement(): string;
}
export interface IClockOptions {
    showHours?: boolean;
    showMinutes?: boolean;
    showSeconds?: boolean;
    interactive?: boolean;
    required?: boolean;
}
export interface IDatePickerTime {
    hours?: number;
    minutes?: number;
    seconds?: number;
}
export interface IDatePickerDate {
    year: number;
    month: number;
    day: number;
    weekDay?: number;
}
export interface IDatePicker {
    id: string;
    name: string;
    type?: string;
    value?: any;
    placeholder?: string;
    label?: string;
    attributes?: string[];
    clockOptions?: IClockOptions;
}
export declare function getModule(datePicker: IDatePicker): string;
