export declare class Header {
    id: string;
    theme: string;
    logo: ILogo;
    primaryNavigation: IPrimaryNavigation;
    sidebar: ISidebar;
    constructor(header: IHeader);
    private AddListener();
    private getThemeClass(theme);
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
export interface ISidebarListItem {
    name: string;
    link: string;
    id?: string;
    moduleLink?: string;
}
export interface ISidebarNavigation {
    listItems: ISidebarListItem[];
}
export interface ISidebar {
    sidebarNavigation?: ISidebarNavigation;
    logo?: ILogo;
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
export interface IHeader {
    id: string;
    theme?: string;
    logo?: ILogo;
    primaryNavigation?: IPrimaryNavigation;
    sidebar?: ISidebar;
}
export declare function getModule(header: IHeader): string;
