export declare class Modal {
    id: string;
    triggerElement: string;
    modalElement: IModalElement;
    constructor(modal: IModal);
    private addListener(triggerId, targetId);
    private createTriggerElement();
    createModuleElement(): string;
}
export interface IModalElement {
    content: string;
    title?: string;
}
export interface IModal {
    id: string;
    triggerElement: string;
    modalElement: IModalElement;
}
export declare function getModule(modal: IModal): string;
