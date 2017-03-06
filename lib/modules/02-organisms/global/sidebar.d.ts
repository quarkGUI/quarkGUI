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
export interface IListItem {
    name: string;
    link: string;
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
