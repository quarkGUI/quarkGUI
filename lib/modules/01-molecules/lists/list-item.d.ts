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
    vueBindings: IVueBindings;
    constructor(listItem: IListItem);
    private addExpandableListener();
    private addButtonRowListener();
    private getVueBinding(attributeName);
    private createTitleElement();
    private createExpandButtonElement();
    private createButtonRowElement();
    private createExpandableContentElement();
    createModuleElement(): string;
}
export interface IVueBindings {
    title?: string;
    subTitle?: string;
    link?: string;
    iconClass?: string;
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
    vueBindings?: IVueBindings;
}
export declare function getModule(listItem: IListItem): string;
