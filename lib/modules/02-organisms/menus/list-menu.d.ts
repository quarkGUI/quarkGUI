import * as ButtonRow from '../../01-molecules/buttons/button-row';
export declare class ListMenu {
    id: string;
    listItems: IListItem[];
    hover: boolean;
    constructor(listMenu: IListMenu);
    private addListener(listItem);
    private createTitleElement(listItem);
    private createDragHandleElement(listItem);
    private createExpandButtonElement(listItem);
    private createButtonRowElement(listItem);
    private createExpandableContentElement(listItem);
    createModuleElement(): string;
}
export interface IListItem {
    id?: string;
    title?: string;
    subTitle?: string;
    link?: string;
    iconClass?: string;
    moduleLink?: string;
    expandable?: boolean;
    expandableContent?: string;
    dragable?: boolean;
    buttonRow?: ButtonRow.IButtonRow;
}
export interface IListMenu {
    id?: string;
    listItems?: IListItem[];
    hover?: boolean;
}
export declare function getModule(listMenu: IListMenu): string;
