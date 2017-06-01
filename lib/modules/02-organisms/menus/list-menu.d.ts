import * as ButtonRow from '../../01-molecules/buttons/button-row';
export declare class ListMenu {
    id: string;
    listItems: IListItem[];
    raised: boolean;
    hover: boolean;
    dragable: boolean;
    constructor(listMenu: IListMenu);
    private initDragula(containers);
    private addDragulaListener(thisInstance);
    private addListener(listItem);
    private getTypeClass(raised);
    private createTitleElement(listItem);
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
    buttonRow?: ButtonRow.IButtonRow;
    hiddenButtonRow?: boolean;
}
export interface IListMenu {
    id: string;
    listItems?: IListItem[];
    raised?: boolean;
    hover?: boolean;
    dragable?: boolean;
}
export declare function getModule(listMenu: IListMenu): string;
