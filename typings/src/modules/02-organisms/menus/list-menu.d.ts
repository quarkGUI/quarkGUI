import * as ButtonRow from '../../01-molecules/buttons/button-row';
export declare class ListMenu {
    id: string;
    listItems: IListItem[];
    hover: boolean;
    constructor(listMenu: IListMenu);
    private createTitleElement(listItem);
    private createButtonRowElement(listItem);
    createModuleElement(): string;
}
export interface IListItem {
    title?: string;
    subTitle?: string;
    link?: string;
    moduleLink?: string;
    buttonRow?: ButtonRow.IButtonRow;
}
export interface IListMenu {
    id?: string;
    listItems?: IListItem[];
    hover?: boolean;
}
export declare function getModule(listMenu: IListMenu): string;
