declare type SelectSheetProps = {
    sheetNames: string[];
    onContinue: (sheetName: string) => Promise<void>;
};
export declare const SelectSheetStep: ({ sheetNames, onContinue }: SelectSheetProps) => JSX.Element;
export {};
