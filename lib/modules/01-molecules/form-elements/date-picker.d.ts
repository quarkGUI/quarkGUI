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
    constructor(datePicker: IDatePicker);
    private elementIsNotNullOrUndefinedById(id);
    private elementIsNotNullOrUndefinedByTagName(containerElement, tagName);
    private addListener(inputField, modalId);
    private addDateSelectorListener();
    private createDateSelectorElement(visibleDate);
    private createPreviewElement(selectedDate);
    private createTimeSelectorElement(activeDate);
    private createDayNameElements();
    private createMonthElement(selectedDate, activeDate, visibleDate);
    private getDateValue();
    private setDateValue();
    createModuleElement(): string;
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
}
export declare function getModule(datePicker: IDatePicker): string;
