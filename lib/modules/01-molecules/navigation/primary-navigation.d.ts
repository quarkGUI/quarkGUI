import * as ListNavigation from './list-navigation';
export declare class PrimaryNavigation {
    id: string;
    theme: string;
    listItems: IListItem[];
    constructor(primaryNavigation: IPrimaryNavigation);
    private getThemeClass(theme);
    private getResponsiveClass(listItem);
    private createIconElement(listItem);
    private createNameElement(listItem);
    private createListElements(listItems);
    private addListener();
    createModuleElement(): string;
}
export interface IDropdownContent {
    listItems: IListItem[];
}
export interface IListItem extends ListNavigation.IListItem {
    dropdownContent?: IDropdownContent;
    responsive?: {
        showIcon?: boolean;
        showText?: boolean;
    };
}
export interface IPrimaryNavigation {
    id?: string;
    theme?: string;
    listItems?: IListItem[];
}
export declare function getModule(primaryNavigation: IPrimaryNavigation): string;
