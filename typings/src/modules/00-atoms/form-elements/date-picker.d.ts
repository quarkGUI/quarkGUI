export declare class DatePicker {
    id: string;
    name: string;
    type: string;
    value: any;
    placeholder: string;
    labelElement: string;
    activeDate: any;
    selectedDate: any;
    constructor(datePicker: IDatePicker);
    private updateDropdownListHeight(dropdownListElement);
    private elementIsNotNullOrUndefinedById(id);
    private elementIsNotNullOrUndefinedByTagName(containerElement, tagName);
    private addListener(datePicker, inputField, dropdownList);
    private createDateSelectorElement(activeDate);
    private createPreviewElement(selectedDate);
    private createTimeSelectorElement(activeDate);
    private createDayNameElements();
    private createMonthElement(selectedDate, activeDate);
    createModuleElement(): string;
}
export interface IOptions {
    name: string;
    value: any;
}
export interface IDatePicker {
    id: string;
    name: string;
    searchable?: boolean;
    type?: string;
    value?: any;
    placeholder?: string;
    labelElement?: string;
    options?: IOptions[];
}
export declare function getModule(datePicker: IDatePicker): string;
