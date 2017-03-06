export declare class Modal {
    id: string;
    title: string;
    content: string;
    constructor(modal: IModal);
    createModuleElement(): string;
}
export interface IModal {
    id: string;
    title?: string;
    content: string;
}
export declare function getModule(modal: IModal): string;
