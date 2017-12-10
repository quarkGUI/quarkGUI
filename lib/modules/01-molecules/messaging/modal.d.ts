import * as ButtonRow from '../../01-molecules/buttons/button-row';
export declare let counter: number;
export declare let eventListeners: string[];
export declare class Modal {
    id: string;
    triggerElement: string;
    modalElement: IModalElement;
    vueBindings: IVueBindings;
    constructor(modal: IModal);
    private getVueBinding(attributeName);
    private initFunction(id?);
    private addListener();
    private createTriggerElement(triggerIdAttribute);
    private createFooterButtonsElement();
    private setMaxWidth();
    createModuleElement(): string;
}
export interface IVueBindings {
    id?: string;
}
export interface IFooterButtons {
    buttonRow: ButtonRow.IButtonRow;
    beforeCloseButton?: boolean;
}
export interface IModalElement {
    content: string;
    closeButtontext?: string;
    title?: string;
    scrollable?: boolean;
    fullscreen?: boolean;
    maxWidth?: string;
    footerButtons?: IFooterButtons;
}
export interface IModal {
    id: string;
    triggerElement: string;
    modalElement: IModalElement;
    vueBindings?: IVueBindings;
}
export declare function getModule(modal: IModal): string;
