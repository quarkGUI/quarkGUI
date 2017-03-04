export declare class Grid {
    gridItems: IGridItem[];
    constructor(grid: IGrid);
    createModuleElement(): string;
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
export interface IGrid {
    gridItems: IGridItem[];
}
export declare function getModule(grid: IGrid): string;
