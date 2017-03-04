export declare class SidebarNavigation {
    listItems: IListItem[];
    constructor(sidebarNavigation: ISidebarNavigation);
    private createListItemElements(listItems);
    createModuleElement(): string;
}
export interface IListItem {
    name: string;
    link: string;
    id?: string;
    moduleLink?: string;
}
export interface ISidebarNavigation {
    listItems: IListItem[];
}
export declare function getModule(sidebarNavigation: ISidebarNavigation): string;
