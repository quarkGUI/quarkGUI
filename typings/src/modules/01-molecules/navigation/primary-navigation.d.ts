export declare class PrimaryNavigation {
    id: string;
    theme: string;
    listItems: IListItem[];
    constructor(primaryNavigation: IPrimaryNavigation);
    private getThemeClass(theme);
    private createListElements(listItems);
    private addListener();
    createModuleElement(): string;
}
export interface IDropdownContent {
    listItems: IListItem[];
}
export interface IListItem {
    name: string;
    link: string;
    dropdownContent?: IDropdownContent;
}
export interface IPrimaryNavigation {
    id?: string;
    theme?: string;
    listItems?: IListItem[];
}
export declare function getModule(primaryNavigation: IPrimaryNavigation): string;
