export declare class ColorPalette {
    color: string;
    constructor(colorPalette: IColorPalette);
    private getColorClass(color);
    createModuleElement(): string;
}
export interface IColorPalette {
    color: string;
}
export declare function getModule(colorPalette: IColorPalette): string;
