import type { Meta } from "./steps/ValidationStep/types";
import type { DeepReadonly } from "ts-essentials";
import type { TranslationsRSIProps } from "./translationsRSIProps";
import type { Columns } from "./steps/MatchColumnsStep/MatchColumnsStep";
import type { StepState } from "./steps/UploadFlow";
export type RsiProps<T extends string> = {
    isOpen: boolean;
    onClose: () => void;
    fields: Fields<T>;
    uploadStepHook?: (data: RawData[]) => Promise<RawData[]>;
    selectHeaderStepHook?: (headerValues: RawData, data: RawData[]) => Promise<{
        headerValues: RawData;
        data: RawData[];
    }>;
    matchColumnsStepHook?: (table: Data<T>[], rawData: RawData[], columns: Columns<T>) => Promise<Data<T>[]>;
    rowHook?: RowHook<T>;
    tableHook?: TableHook<T>;
    onSubmit: (data: Result<T>, file: File) => void | Promise<any>;
    allowInvalidSubmit?: boolean;
    isNavigationEnabled?: boolean;
    translations?: TranslationsRSIProps;
    customTheme?: object;
    maxRecords?: number;
    maxFileSize?: number;
    autoMapHeaders?: boolean;
    autoMapSelectValues?: boolean;
    autoMapDistance?: number;
    initialStepState?: StepState;
    dateFormat?: string;
    parseRaw?: boolean;
    rtl?: boolean;
};
export type RawData = Array<string | undefined>;
export type Data<T extends string> = {
    [key in T]: string | boolean | undefined;
};
export type Fields<T extends string> = DeepReadonly<Field<T>[]>;
export type Field<T extends string> = {
    label: string;
    key: T;
    description?: string;
    alternateMatches?: string[];
    validations?: Validation[];
    fieldType: Checkbox | Select | Input;
    example?: string;
};
export type Checkbox = {
    type: "checkbox";
    booleanMatches?: {
        [key: string]: boolean;
    };
};
export type Select = {
    type: "select";
    options: SelectOption[];
};
export type SelectOption = {
    label: string;
    value: string;
};
export type Input = {
    type: "input";
};
export type Validation = RequiredValidation | UniqueValidation | RegexValidation;
export type RequiredValidation = {
    rule: "required";
    errorMessage?: string;
    level?: ErrorLevel;
};
export type UniqueValidation = {
    rule: "unique";
    allowEmpty?: boolean;
    errorMessage?: string;
    level?: ErrorLevel;
};
export type RegexValidation = {
    rule: "regex";
    value: string;
    flags?: string;
    errorMessage: string;
    level?: ErrorLevel;
};
export type RowHook<T extends string> = (row: Data<T>, addError: (fieldKey: T, error: Info) => void, table: Data<T>[]) => Data<T> | Promise<Data<T>>;
export type TableHook<T extends string> = (table: Data<T>[], addError: (rowIndex: number, fieldKey: T, error: Info) => void) => Data<T>[] | Promise<Data<T>[]>;
export type ErrorLevel = "info" | "warning" | "error";
export type Info = {
    message: string;
    level: ErrorLevel;
};
export declare enum ErrorSources {
    Table = "table",
    Row = "row"
}
export type InfoWithSource = Info & {
    source: ErrorSources;
};
export type Result<T extends string> = {
    validData: Data<T>[];
    invalidData: Data<T>[];
    all: (Data<T> & Meta)[];
};
