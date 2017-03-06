import * as AtomSelectList from '../../00-atoms/form-elements/select-list';
export declare class SelectList extends AtomSelectList.SelectList {
    label?: string;
    options?: AtomSelectList.IOptions[];
    constructor(selectList: ISelectList);
    createModuleElement(): string;
}
export interface ISelectList extends AtomSelectList.ISelectList {
    label?: string;
}
export declare function getModule(selectList: ISelectList): string;
