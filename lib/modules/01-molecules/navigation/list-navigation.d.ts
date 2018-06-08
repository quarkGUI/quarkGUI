export declare class ListNavigation {
    listItems: IListItem[];
    constructor(listNavigation: IListNavigation);
    createModuleElement(): string;
}
export interface IListItem {
    name: string;
    link?: string;
    iconClass?: string;
    iconElement?: string;
    vueRouterLink?: boolean;
}
export interface IListNavigation {
    listItems: IListItem[];
}
export declare function getModule(listNavigation: IListNavigation): string;
