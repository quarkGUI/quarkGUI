import * as ButtonRow from '../../01-molecules/buttons/button-row';
export declare class ListItem implements IListItem {
    id: string;
    title: string;
    subTitle: string;
    link: string;
    iconClass: string;
    hover: boolean;
    dragable: boolean;
    expandable: boolean;
    expandableContent: string;
    buttonRow: ButtonRow.IButtonRow;
    hiddenButtonRow: boolean;
    constructor(listItem: IListItem);
    private addExpandableListener();
    private addButtonRowListener();
    private createTitleElement();
    private createExpandButtonElement();
    private createButtonRowElement();
    private createExpandableContentElement();
    createModuleElement(): string;
}
export interface IListItem {
    id?: string;
    title?: string;
    subTitle?: string;
    link?: string;
    iconClass?: string;
    hover?: boolean;
    dragable?: boolean;
    expandable?: boolean;
    expandableContent?: string;
    buttonRow?: ButtonRow.IButtonRow;
    hiddenButtonRow?: boolean;
}
export declare function getModule(listItem: IListItem): string;
