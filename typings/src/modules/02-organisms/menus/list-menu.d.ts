export declare class ListMenu {
    id: string;
    listItems: IListItem[];
    hover: boolean;
    constructor(listMenu: IListMenu);
    private createTitleElement(listItem);
    private createButtonRowElement(listItem);
    createModuleElement(): string;
}
export interface IButton {
    id: string;
    type?: string;
    theme?: string;
    link?: string;
    iconClass?: string;
    content?: string;
}
export interface IButtonRow {
    id: string;
    buttons: IButton[];
}
export interface IListItem {
    title?: string;
    subTitle?: string;
    link?: string;
    moduleLink?: string;
    buttonRow?: IButtonRow;
}
export interface IListMenu {
    id?: string;
    listItems?: IListItem[];
    hover?: boolean;
}
export declare function getModule(listMenu: IListMenu): string;
