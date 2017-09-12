export declare class Button {
    id: string;
    link: string;
    iconClass: string;
    content: string;
    title: string;
    type?: string;
    theme?: string;
    submit?: boolean;
    attributes: string[];
    formWrapper: IFormWrapper;
    ajaxOptions?: IAjaxOptions;
    vueBindings: IVueBindings;
    constructor(button: IButton);
    private getVueBinding(attributeName);
    private getFormWrapperVueBinding(attributeName);
    private getFormWrapperHiddenFieldVueBinding(attributeName, hiddenField);
    private getThemeClass(theme);
    private getTypeClass(type);
    private getHtmlAttributes(attributes);
    private addHiddenFields();
    private addFormWrapper(moduleElement);
    private addAjaxListener();
    createModuleElement(): string;
}
export interface IHiddenFieldVueBindings {
    name: string;
    value: string;
}
export interface IHiddenField {
    name?: string;
    value?: string;
    vueBindings?: IHiddenFieldVueBindings;
}
export interface IFormWrapperVueBindings {
    formAction?: string;
    formMethod?: string;
}
export interface IFormWrapper {
    formAction?: string;
    formMethod?: string;
    hiddenFields?: IHiddenField[];
    vueBindings?: IFormWrapperVueBindings;
}
export interface IDataFromElement {
    name: string;
    elementId: string;
}
export interface IAjaxOptions {
    method: string;
    url: string;
    data?: object;
    csrfToken?: string;
    getDataFromElements?: boolean;
    dataFromElements?: IDataFromElement[];
}
export interface IVueBindings {
    title?: string;
    content?: string;
    link?: string;
    iconClass?: string;
}
export interface IButton {
    id?: string;
    type?: string;
    theme?: string;
    link?: string;
    iconClass?: string;
    content?: string;
    title?: string;
    submit?: boolean;
    attributes?: string[];
    formWrapper?: IFormWrapper;
    ajaxOptions?: IAjaxOptions;
    vueBindings?: IVueBindings;
}
export declare function getModule(button: IButton): string;
