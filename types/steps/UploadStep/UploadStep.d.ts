import type XLSX from "xlsx";
declare type UploadProps = {
    onContinue: (data: XLSX.WorkBook) => Promise<void>;
};
export declare const UploadStep: ({ onContinue }: UploadProps) => JSX.Element;
export {};
