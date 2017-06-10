import * as ButtonRow from '../../01-molecules/buttons/button-row';
export declare class Modal {
    id: string;
    triggerElement: string;
    modalElement: IModalElement;
    constructor(modal: IModal);
    private addListener(triggerId, targetId, closeId);
    private createTriggerElement();
    private createFooterButtonsElement();
    private setMaxWidth();
    createModuleElement(): string;
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
}
export declare function getModule(modal: IModal): string;
