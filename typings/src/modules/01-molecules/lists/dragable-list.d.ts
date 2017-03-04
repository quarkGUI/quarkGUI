export declare class DragableList {
    id: string;
    listItems: IListItems[];
    constructor(dragableList: IDragableList);
    private initDragula(containers);
    private addListener(thisInstance);
    private createListElements(listItems);
    createModuleElement(): string;
}
export interface IListItems {
    content: string;
}
export interface IDragableList {
    id: string;
    listItems: IListItems[];
}
export declare function getModule(dragableList: IDragableList): string;
