export declare class GridItem {
    content: string;
    sizes: ISizeClasses;
    constructor(gridItem: IGridItem);
    createModuleElement(): string;
}
export interface ISizeClasses {
    phone?: string;
    tablet?: string;
    tabletLandscape?: string;
    screen?: string;
}
export interface ISizes {
    phone?: number;
    tablet?: number;
    tabletLandscape?: number;
    screen?: number;
}
export interface IGridItem {
    content: string;
    sizes: ISizes;
}
export declare function getModule(gridItem: IGridItem): string;
