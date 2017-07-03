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
    constructor(datePicker: IDatePicker);
    private elementIsNotNullOrUndefinedById(id);
    private addListener(inputField, modalId);
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
