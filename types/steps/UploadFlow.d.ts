import type XLSX from "xlsx";
import type { RawData } from "../types";
export declare enum StepType {
    upload = "upload",
    selectSheet = "selectSheet",
    selectHeader = "selectHeader",
    matchColumns = "matchColumns",
    validateData = "validateData"
}
export declare type StepState = {
    type: StepType.upload;
} | {
    type: StepType.selectSheet;
    workbook: XLSX.WorkBook;
} | {
    type: StepType.selectHeader;
    data: RawData[];
} | {
    type: StepType.matchColumns;
    data: RawData[];
    headerValues: RawData;
} | {
    type: StepType.validateData;
    data: any[];
};
interface Props {
    nextStep: () => void;
}
export declare const UploadFlow: ({ nextStep }: Props) => JSX.Element;
export {};
