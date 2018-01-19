import * as ListNavigation from './list-navigation';
export declare class SidebarNavigation {
    listItems: ListNavigation.IListItem[];
    constructor(sidebarNavigation: ISidebarNavigation);
    private createListItemElements(listItems);
    createModuleElement(): string;
}
export interface ISidebarNavigation {
    listItems: ListNavigation.IListItem[];
}
export declare function getModule(sidebarNavigation: ISidebarNavigation): string;
