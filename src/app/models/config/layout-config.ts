export interface ILayoutConfig {
    toolBar?: boolean;
    adminSideNav?: boolean;
    customerSideNav?: boolean;
    footer?: boolean;
}
export class LayoutConfig implements ILayoutConfig {
    constructor(
        public toolBar?: boolean,
        public adminSideNav?: boolean,
        public customerSideNav?: boolean,
        public footer?: boolean
    ) {

    }
}