export declare class Breadcrumbs {
    breadcrumbItems: IBreadcrumbItem[];
    constructor(breadcrumbs: IBreadcrumbs);
    createModuleElement(): string;
}
export interface IBreadcrumbItem {
    name: string;
    link: string;
}
export interface IBreadcrumbs {
    breadcrumbItems: IBreadcrumbItem[];
}
export declare function getModule(breadcrumbs: IBreadcrumbs): string;
