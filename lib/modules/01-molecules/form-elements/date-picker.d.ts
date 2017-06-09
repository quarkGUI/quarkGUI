export declare class DatePicker {
    id: string;
    name: string;
    type: string;
    value: any;
    placeholder: string;
    label: string;
    activeDate: any;
    selectedDate: any;
    constructor(datePicker: IDatePicker);
    private updateDropdownListHeight(dropdownListElement);
    private elementIsNotNullOrUndefinedById(id);
    private elementIsNotNullOrUndefinedByTagName(containerElement, tagName);
    private addListener(inputField, modalId);
    private createDateSelectorElement(activeDate);
    private createPreviewElement(selectedDate);
    private createTimeSelectorElement(activeDate);
    private createDayNameElements();
    private createMonthElement(selectedDate, activeDate);
    createModuleElement(): string;
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
