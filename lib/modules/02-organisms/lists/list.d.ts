import * as ListItem from '../../01-molecules/lists/list-item';
export declare class List {
    id: string;
    listItems: ListItem.IListItem[];
    raised: boolean;
    hover: boolean;
    dragable: boolean;
    constructor(list: IList);
    private initDragula(containers);
    private addDragulaListener(thisInstance);
    private getTypeClass(raised);
    createModuleElement(): string;
}
export interface IList {
    id: string;
    listItems?: ListItem.IListItem[];
    raised?: boolean;
    hover?: boolean;
    dragable?: boolean;
}
export declare function getModule(list: IList): string;
