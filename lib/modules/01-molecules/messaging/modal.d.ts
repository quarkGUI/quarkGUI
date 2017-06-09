export declare class Modal {
    id: string;
    triggerElement: string;
    modalElement: IModalElement;
    constructor(modal: IModal);
    private addListener(triggerId, targetId, closeId);
    private createTriggerElement();
    private createCloseElement();
    private setMaxWidth();
    createModuleElement(): string;
}
export interface IModalElement {
    content: string;
    closeButtontext?: string;
    title?: string;
    scrollable?: boolean;
    fullscreen?: boolean;
    maxWidth?: string;
}
export interface IModal {
    id: string;
    triggerElement: string;
    modalElement: IModalElement;
}
export declare function getModule(modal: IModal): string;
