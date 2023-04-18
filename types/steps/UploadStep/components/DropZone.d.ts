import * as XLSX from "xlsx";
declare type DropZoneProps = {
    onContinue: (data: XLSX.WorkBook) => void;
    isLoading: boolean;
};
export declare const DropZone: ({ onContinue, isLoading }: DropZoneProps) => JSX.Element;
export {};
