import * as PrimaryNavigation from '../../01-molecules/navigation/primary-navigation';
import * as Image from '../../00-atoms/media/image';
import * as Sidebar from './sidebar';
export declare class Header {
    id: string;
    theme: string;
    logo: ILogo;
    primaryNavigation: PrimaryNavigation.IPrimaryNavigation;
    sidebar: Sidebar.ISidebar;
    constructor(header: IHeader);
    private addListener();
    private getThemeClass(theme);
    createModuleElement(): string;
}
export interface ILogo {
    image: Image.IImage;
    url?: string;
}
export interface IHeader {
    id: string;
    theme?: string;
    logo?: ILogo;
    primaryNavigation?: PrimaryNavigation.IPrimaryNavigation;
    sidebar?: Sidebar.ISidebar;
}
export declare function getModule(header: IHeader): string;
