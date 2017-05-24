import * as ListNavigation from '../../01-molecules/navigation/list-navigation';
export declare class Sidebar {
    sidebarNavigation: ISidebarNavigation;
    logo: ILogo;
    constructor(sidebar: ISidebar);
    createModuleElement(): string;
}
export interface IImage {
    src: any;
    alt?: string;
}
export interface ILogo {
    image: IImage;
    url?: string;
}
export interface IListItem extends ListNavigation.IListItem {
    id?: string;
    moduleLink?: string;
}
export interface ISidebarNavigation {
    listItems: IListItem[];
}
export interface ISidebar {
    sidebarNavigation?: ISidebarNavigation;
    logo?: ILogo;
}
export declare function getModule(sidebar: ISidebar): string;
