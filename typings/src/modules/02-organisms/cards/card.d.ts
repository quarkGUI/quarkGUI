export declare class Card {
    theme: string;
    title: string;
    content: string;
    constructor(card: ICard);
    private getThemeClass(theme);
    createModuleElement(): string;
}
export interface ICard {
    theme?: string;
    title?: string;
    content?: string;
}
export declare function getModule(card: ICard): string;
