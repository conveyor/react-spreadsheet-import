import type { Meta } from "./steps/ValidationStep/types";
import type { DeepReadonly } from "ts-essentials";
import type { TranslationsRSIProps } from "./translationsRSIProps";
import type { Columns } from "./steps/MatchColumnsStep/MatchColumnsStep";
import type { StepState } from "./steps/UploadFlow";
export declare type RsiProps<T extends string> = {
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
    onSubmit: (data: Result<T>) => void;
    allowInvalidSubmit?: boolean;
    translations?: TranslationsRSIProps;
    customTheme?: object;
    maxRecords?: number;
    maxFileSize?: number;
    autoMapHeaders?: boolean;
    autoMapDistance?: number;
    initialStepState?: StepState;
    dateFormat?: string;
    parseRaw?: boolean;
    rtl?: boolean;
};
export declare type RawData = Array<string | undefined>;
export declare type Data<T extends string> = {
    [key in T]: string | boolean | undefined;
};
export declare type Fields<T extends string> = DeepReadonly<Field<T>[]>;
export declare type Field<T extends string> = {
    label: string;
    key: T;
    description?: string;
    alternateMatches?: string[];
    validations?: Validation[];
    fieldType: Checkbox | Select | Input;
    example?: string;
};
export declare type Checkbox = {
    type: "checkbox";
    booleanMatches?: {
        [key: string]: boolean;
    };
};
export declare type Select = {
    type: "select";
    options: SelectOption[];
};
export declare type SelectOption = {
    label: string;
    value: string;
};
export declare type Input = {
    type: "input";
};
export declare type Validation = RequiredValidation | UniqueValidation | RegexValidation | MaxLengthValidation;
export declare type RequiredValidation = {
    rule: "required";
    errorMessage?: string;
    level?: ErrorLevel;
};
export declare type UniqueValidation = {
    rule: "unique";
    allowEmpty?: boolean;
    errorMessage?: string;
    level?: ErrorLevel;
};
export declare type RegexValidation = {
    rule: "regex";
    value: string;
    flags?: string;
    errorMessage: string;
    level?: ErrorLevel;
};
export declare type MaxLengthValidation = {
    rule: "maxLength";
    value: number;
    errorMessage: string;
    level?: ErrorLevel;
};
export declare type RowHook<T extends string> = (row: Data<T>, addError: (fieldKey: T, error: Info) => void, table: Data<T>[]) => Data<T>;
export declare type TableHook<T extends string> = (table: Data<T>[], addError: (rowIndex: number, fieldKey: T, error: Info) => void) => Data<T>[];
export declare type ErrorLevel = "info" | "warning" | "error";
export declare type Info = {
    message: string;
    level: ErrorLevel;
};
export declare type Result<T extends string> = {
    validData: Data<T>[];
    invalidData: Data<T>[];
    all: (Data<T> & Meta)[];
};
