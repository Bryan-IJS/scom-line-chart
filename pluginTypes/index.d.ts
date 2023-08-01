/// <amd-module name="@scom/scom-line-chart/global/interfaces.ts" />
declare module "@scom/scom-line-chart/global/interfaces.ts" {
    import { ModeType } from "@scom/scom-chart-data-source-setup";
    export interface ILineChartOptions {
        xColumn?: {
            key: string;
            type: 'time' | 'category';
        };
        yColumns?: string[];
        groupBy?: string;
        seriesOptions?: {
            key: string;
            title?: string;
            color?: string;
        }[];
        stacking?: boolean;
        xAxis?: {
            title?: string;
            tickFormat?: string;
            reverseValues?: boolean;
        };
        yAxis?: {
            title?: string;
            tickFormat?: string;
            labelFormat?: string;
            position?: 'left' | 'right';
        };
        smooth?: boolean;
        legend?: {
            show?: boolean;
            scroll?: boolean;
            position?: 'top' | 'bottom' | 'left' | 'right';
        };
        showSymbol?: boolean;
        showDataLabels?: boolean;
        percentage?: boolean;
    }
    export interface ILineChartConfig {
        apiEndpoint?: string;
        title: string;
        description?: string;
        options: ILineChartOptions;
        file?: {
            cid?: string;
            name?: string;
        };
        mode: ModeType;
    }
}
/// <amd-module name="@scom/scom-line-chart/global/utils.ts" />
declare module "@scom/scom-line-chart/global/utils.ts" {
    export const formatNumber: (num: number, options?: {
        format?: string;
        decimals?: number;
        percentValues?: boolean;
    }) => any;
    export const formatNumberByFormat: (num: number, format: string, separators?: boolean) => any;
    export const formatNumberWithSeparators: (value: number, precision?: number) => string;
    export const groupArrayByKey: (arr: [Date | string, string | number][]) => (string | number | Date)[][];
    export const groupByCategory: (data: {
        [key: string]: any;
    }[], category: string, xAxis: string, yAxis: string) => {
        [key: string]: any;
    };
    export const extractUniqueTimes: (data: {
        [key: string]: any;
    }[], keyValue: string) => {
        [key: string]: any;
    };
    export const concatUnique: (obj1: {
        [key: string]: any;
    }, obj2: {
        [key: string]: any;
    }) => {};
    export const callAPI: (apiEndpoint: string) => Promise<any>;
}
/// <amd-module name="@scom/scom-line-chart/global/index.ts" />
declare module "@scom/scom-line-chart/global/index.ts" {
    export interface PageBlock {
        getData: () => any;
        setData: (data: any) => Promise<void>;
        getTag: () => any;
        setTag: (tag: any) => Promise<void>;
        validate?: () => boolean;
        defaultEdit?: boolean;
        tag?: any;
        readonly onEdit: () => Promise<void>;
        readonly onConfirm: () => Promise<void>;
        readonly onDiscard: () => Promise<void>;
        edit: () => Promise<void>;
        confirm: () => Promise<void>;
        discard: () => Promise<void>;
        config: () => Promise<void>;
    }
    export * from "@scom/scom-line-chart/global/interfaces.ts";
    export * from "@scom/scom-line-chart/global/utils.ts";
}
/// <amd-module name="@scom/scom-line-chart/index.css.ts" />
declare module "@scom/scom-line-chart/index.css.ts" {
    export const containerStyle: string;
    export const chartStyle: string;
}
/// <amd-module name="@scom/scom-line-chart/assets.ts" />
declare module "@scom/scom-line-chart/assets.ts" {
    function fullPath(path: string): string;
    const _default: {
        fullPath: typeof fullPath;
    };
    export default _default;
}
/// <amd-module name="@scom/scom-line-chart/data.json.ts" />
declare module "@scom/scom-line-chart/data.json.ts" {
    const _default_1: {
        defaultBuilderData: {
            apiEndpoint: string;
            title: string;
            options: {
                xColumn: {
                    key: string;
                    type: string;
                };
                yColumns: string[];
                seriesOptions: {
                    key: string;
                    title: string;
                    color: string;
                }[];
                xAxis: {
                    title: string;
                    tickFormat: string;
                };
                yAxis: {
                    labelFormat: string;
                    position: string;
                };
            };
        };
    };
    export default _default_1;
}
/// <amd-module name="@scom/scom-line-chart" />
declare module "@scom/scom-line-chart" {
    import { Module, ControlElement, Container, IDataSchema, VStack } from '@ijstech/components';
    import { ILineChartConfig } from "@scom/scom-line-chart/global/index.ts";
    interface ScomLineChartElement extends ControlElement {
        lazyLoad?: boolean;
        data: ILineChartConfig;
    }
    global {
        namespace JSX {
            interface IntrinsicElements {
                ['i-scom-line-chart']: ScomLineChartElement;
            }
        }
    }
    export default class ScomLineChart extends Module {
        private chartContainer;
        private vStackInfo;
        private pnlChart;
        private loadingElm;
        private lbTitle;
        private lbDescription;
        private chartData;
        private apiEndpoint;
        private _data;
        tag: any;
        defaultEdit: boolean;
        readonly onConfirm: () => Promise<void>;
        readonly onDiscard: () => Promise<void>;
        readonly onEdit: () => Promise<void>;
        static create(options?: ScomLineChartElement, parent?: Container): Promise<ScomLineChart>;
        constructor(parent?: Container, options?: ScomLineChartElement);
        private getData;
        private setData;
        private getTag;
        private setTag;
        private getPropertiesSchema;
        private getGeneralSchema;
        private getAdvanceSchema;
        private getThemeSchema;
        private _getActions;
        getConfigurators(): ({
            name: string;
            target: string;
            getActions: () => ({
                name: string;
                icon: string;
                command: (builder: any, userInputData: any) => {
                    execute: () => Promise<void>;
                    undo: () => void;
                    redo: () => void;
                };
                customUI: {
                    render: (data?: any, onConfirm?: (result: boolean, data: any) => void) => VStack;
                };
                userInputDataSchema?: undefined;
                userInputUISchema?: undefined;
            } | {
                name: string;
                icon: string;
                command: (builder: any, userInputData: any) => {
                    execute: () => Promise<void>;
                    undo: () => void;
                    redo: () => void;
                };
                userInputDataSchema: IDataSchema;
                userInputUISchema: {
                    type: string;
                    elements: ({
                        type: string;
                        scope: string;
                        title: string;
                        options?: undefined;
                    } | {
                        type: string;
                        scope: string;
                        title?: undefined;
                        options?: undefined;
                    } | {
                        type: string;
                        scope: string;
                        options: {
                            detail: {
                                type: string;
                            };
                        };
                        title?: undefined;
                    })[];
                };
                customUI?: undefined;
            } | {
                name: string;
                icon: string;
                command: (builder: any, userInputData: any) => {
                    execute: () => Promise<void>;
                    undo: () => void;
                    redo: () => void;
                };
                userInputDataSchema: IDataSchema;
                customUI?: undefined;
                userInputUISchema?: undefined;
            })[];
            getData: any;
            setData: (data: ILineChartConfig) => Promise<void>;
            getTag: any;
            setTag: any;
            getLinkParams?: undefined;
            setLinkParams?: undefined;
        } | {
            name: string;
            target: string;
            getActions: () => ({
                name: string;
                icon: string;
                command: (builder: any, userInputData: any) => {
                    execute: () => Promise<void>;
                    undo: () => void;
                    redo: () => void;
                };
                customUI: {
                    render: (data?: any, onConfirm?: (result: boolean, data: any) => void) => VStack;
                };
                userInputDataSchema?: undefined;
                userInputUISchema?: undefined;
            } | {
                name: string;
                icon: string;
                command: (builder: any, userInputData: any) => {
                    execute: () => Promise<void>;
                    undo: () => void;
                    redo: () => void;
                };
                userInputDataSchema: IDataSchema;
                userInputUISchema: {
                    type: string;
                    elements: ({
                        type: string;
                        scope: string;
                        title: string;
                        options?: undefined;
                    } | {
                        type: string;
                        scope: string;
                        title?: undefined;
                        options?: undefined;
                    } | {
                        type: string;
                        scope: string;
                        options: {
                            detail: {
                                type: string;
                            };
                        };
                        title?: undefined;
                    })[];
                };
                customUI?: undefined;
            } | {
                name: string;
                icon: string;
                command: (builder: any, userInputData: any) => {
                    execute: () => Promise<void>;
                    undo: () => void;
                    redo: () => void;
                };
                userInputDataSchema: IDataSchema;
                customUI?: undefined;
                userInputUISchema?: undefined;
            })[];
            getLinkParams: () => {
                data: string;
            };
            setLinkParams: (params: any) => Promise<void>;
            getData: any;
            setData: any;
            getTag: any;
            setTag: any;
        })[];
        private updateStyle;
        private updateTheme;
        private onUpdateBlock;
        private updateChartData;
        private renderSnapshotData;
        private renderLiveData;
        private renderChart;
        private resizeChart;
        init(): Promise<void>;
        render(): any;
    }
}
