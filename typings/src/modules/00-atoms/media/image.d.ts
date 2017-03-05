export declare class Image {
    src: string;
    alt: string;
    constructor(image: IImage);
    createModuleElement(): string;
}
export interface IImage {
    src: any;
    alt?: string;
}
export declare function getModule(image: IImage): string;
