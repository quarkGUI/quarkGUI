export declare class Footer {
    theme: string;
    content: string;
    logo: ILogo;
    constructor(footer: IFooter);
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
export interface IFooter {
    theme?: string;
    content?: string;
    logo?: ILogo;
}
export declare function getModule(footer: IFooter): string;
